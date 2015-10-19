---
layout: post
title:  "How to set up a debugging and development environment for Android on Linux"
date:   27 Jul 2015
lang: en
categories: en
tags: [en, tech, engineering, android, linux]
comments: true
permalink: /set-up-debugging-development-environment-for-android-on-linux/
---

This post describes how to set up a debugging and development environment for
Android based systems on an Ubuntu machine, specially for flashing custom
recoveries and ROMs, but not for coding. I'm basically pulling together
information from other sources across the web, be sure to check out the
[References](#references) and other external links for more details.  You only
need admin privileges to configure the permissions of the USB device with
`udev` rules (see [Configure device group ownership and
permissions](#configure-device-group-ownership-and-permissions)).

Although some information is specific to the [LG Nexus
4](https://en.wikipedia.org/wiki/Nexus_4) and
[Cyanogenmod](http://www.cyanogenmod.org) operating system, with a few
modifications those instructions can also be used for other devices, custom
ROMs and development systems; for example, I successfully followed most of the
steps on a Fedora 21 system.

Installing customs ROMs on a Nexus device is easier than on other devices since
by default it is very simple to unlock the bootloader on all Nexus
phones/tablets. In general, the Nexus family of devices are developer friendly.

**Note**: I'm omitting values particular to my system (like ids, serial numbers
and ports) with the notation `<variable>`.

**Warning**: Following this procedure will result in loss of user and system
data. Always backup your data.

Contents:

* TOC
{:toc}

## Install the Android SDK Tools

Host system is Ubuntu 14.04

{% highlight bash %}
$ lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 14.04.2 LTS
Release:        14.04
Codename:       trusty
{% endhighlight %}

I hear that the OpenJDK packages available in the Ubuntu repositories should
work with the Android SDK Tools. However, I prefer to use Oracle's JDK so I'm
able to use the latest Java 8, and also because it's quite simple to install it
without root/admin permissions.

[Download latest Java
SDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
from Oracle's site, which is *JDK 8u45* at the time of this writing. Verify
package integrity with the [MD5 checksums published by
Oracle](https://www.oracle.com/webfolder/s/digest/8u45checksum.html)

{% highlight bash %}
$ md5sum <path to tar package>
<checksum output, should match checksum in webpage above>
{% endhighlight %}

Untar the downloaded file, and add to your PATH the `bin` subdirectoy

{% highlight bash %}
$ tar xfz jdk-8u45-linux-<your_system_arch>.tar.gz
$ export PATH=$PATH:<path to jdk1.8.0_45 dir>/bin
{% endhighlight %}

Confirm the Java SDK you just installed

{% highlight bash %}
$ java -version
java version "1.8.0_45"
Java(TM) SE Runtime Environment (build 1.8.0_45-b14)
Java HotSpot(TM) Client VM (build 25.45-b02, mixed mode)
{% endhighlight %}

Go to [Android SDK Download
page](https://developer.android.com/sdk/index.html#Other), and look for "SDK
Tools Only". Download the package for Linux systems. Latest version is 24.3.3
at the time of this writing. Verify the package integrity with the SHA-1
Checksum shown beside the download link.

{% highlight bash %}
$ sha1sum android-sdk_r24.3.3-linux.tgz
cd4cab76c2e3d926b3495c26ec56c831ba77d0d0  android-sdk_r24.3.3-linux.tgz
{% endhighlight %}

Untar and launch the *Android SDK Manager*:

{% highlight bash %}
$ tar xzf android-sdk_r24.3.3-linux.tgz
$ cd ./android-sdk-linux/tools
$ ./android sdk
{% endhighlight %}

Install the *Android SDK Platform-tools* package. Uncheck other packages that
are automatically selected when the GUI launches. When done, the directory
`android-sdk-linux` will now contain the subdirectory `platforms-tools` with
the executables `adb` and `fastboot`. Add this directory to your PATH:

{% highlight bash %}
$ export PATH=$PATH:<path to android-sdk-linux>/platform-tools
$ adb version
Android Debug Bridge version 1.0.32
{% endhighlight %}

## Configure the Nexus device for development

On the Nexus 4, go to *Settings* -> *About phone*. Tap 7 times on the *Build
number* to enable development. Then enable USB debugging: go to
*Settings* -> *Developer Options* -> *USB Debugging* and tap the USB Debugging
checkbox.

Connect the device and get bus and device numbers:

{% highlight bash %}
$ lsusb | grep -i google
Bus <Bus> Device <Device>: ID XXXX:YYYY Google Inc. Nexus 4 (debug)
{% endhighlight %}

The Nexus 4 is connected to the bus `<Bus>` with device number `<Device>` and
its id is `XXXX:YYYY`.  Check permissions of USB device

{% highlight bash %}
$ ls -l /dev/bus/usb/<Bus>/<Device>
crw-rw-r-- 1 root root 189, 4 jul  5 16:45 /dev/bus/usb/<Bus>/<Device>
{% endhighlight %}

The device owner and group are `root:root`, others can only read it.  In other
words, admin permissions are required to write to the device.

### Configure device group ownership and permissions

What we need to do is to change the device ownership and permissions. By using
the [udev system](https://en.wikipedia.org/wiki/Udev) we can set up an [udev
rule](http://www.reactivated.net/writing_udev_rules.html) that matches the
device and updates its attributes, including the device ownership and
permissions. With the device information we gathered previously we'll match the
device, update its group ownership and make it group-writable.

In Ubuntu systems there is already a group created for device management,
called `plugdev`. My user is already a member of such group. Unplug the device
from the host computer and run below as root:

{% highlight bash %}
# cd /etc/udev/rules.d
# touch 99-android-debug.rules
{% endhighlight %}

Edit the file `99-android-debug.rules`. Note that the values of the [match
keys](http://www.reactivated.net/writing_udev_rules.html#syntax)
`ATTR{idVendor}` and `ATTR{idProduct}` match the id `XXXX:YYYY` previously
obtained:

{% highlight bash %}
SUBSYSTEM=="usb", ATTR{idVendor}=="XXXX", ATTR{idProduct}=="YYYY", GROUP="plugdev", MODE="0664"
SUBSYSTEM=="usb", ATTR{idVendor}=="XXXX", ATTR{idProduct}=="YYYY", GROUP="plugdev", MODE="0664"
{% endhighlight %}

Reload the `udev` rules and restart the system service.

{% highlight bash %}
# udevadm control --reload
# /etc/init.d/udev reload
# /etc/init.d/udev status
* udevd is running
{% endhighlight %}

Plug the device to the host computer. Verify the file group is `plugdev` or
whatever other group you configured in the `udev` rule. The device and/or bus
number may have changed, in which case you have to get them again. Subsequent
steps do not need admin permissions.

### Confirm ownership and allow `adb` to access the device

{% highlight bash %}
$ lsusb | grep -i google
Bus <Bus> Device <Device>: ID XXXX:YYYY Google Inc. Nexus 4 (debug)
$ ls -l /dev/bus/usb/<Bus>/<Device>
crw-rw-r-- 1 root plugdev 189, 4 jul  5 17:05 /dev/bus/usb/<Bus>/<Device>
{% endhighlight %}

Run `adb` to show the device

{% highlight bash %}
$ adb devices -l
* daemon not running. starting it now on port <port number> *
* daemon started successfully *
List of devices attached
<device serial no.>       unauthorized usb:<Bus>-<Device>
{% endhighlight %}

<a name="confirm-adb-key" ></a>
The Nexus 4 will ask you to confirm USB debugging from the host Linux system.
Click OK if the RSA key fingerprint shown by the phone matches the output of
the below command (code snippet copied from [this forum
thread](http://forums.fedoraforum.org/showthread.php?t=298965)).

{% highlight bash %}
$ cut -d' ' -f1 ~/.android/adbkey.pub | base64 -d | md5sum
{% endhighlight %}

Now the device shows as authorized to `adb`.

{% highlight bash %}
$ adb devices -l
List of devices attached
<device serial no.>       <some message not showing the word "unauthorized">
{% endhighlight %}

## Unlock the bootloader

Boot into bootloader:

{% highlight bash %}
$ adb reboot bootloader
{% endhighlight %}

Once in fastboot mode, verify `fastboot` correctly sees the device.

{% highlight bash %}
$ fastboot devices -l
<ok message, not errors>
{% endhighlight %}

Unlock bootloader (accept the disclaimer the device displays when entering
below command, then you will see the output shown below)

{% highlight bash %}
$ fastboot oem unlock
...
OKAY [ 10.344s]
finished. total time: 10.344s
{% endhighlight %}

If the device doesn't reboot by itself, reboot it from the menu.

## Install TWRP recovery

Enable USB debugging on the device,
[again](#configure-the-nexus-device-for-development). Verify again that the RSA
key fingerprint shown on the device matches the output of the command in [a
previous step](#confirm-adb-key).

Then [download TWRP 2.8.7.0 for Nexus 4](https://twrp.me/devices/lgnexus4.html)
and verify file integrity.  With the device connected, reboot into fastboot
mode.

{% highlight bash %}
$ adb reboot bootloader
{% endhighlight %}

In fastboot mode, flash the TWRP recovery image downloaded in the previous step

{% highlight bash %}
$ fastboot flash recovery <path to TWRP image>
sending 'recovery' (9028 KB)...
OKAY [  0.429s]
writing 'recovery'...
OKAY [  0.384s]
finished. total time: 0.814s
{% endhighlight %}

Boot into bootloader

{% highlight bash %}
$ fastboot reboot-bootloader
{% endhighlight %}

Start in recovery mode using the device volume keys to navigate to *Recovery
mode* and the power key to select.  TWRP recovery starts. Swipe to allow
modifications.

## Install custom ROM / Cyanogenmod

Tap *Backup* and select the 4 partitions *Boot*, *System*, *Data* and *Cache*.
Swipe to start backup, and when done reboot into recovery mode again. Then tap
*Wipe* and swipe to start *Factory Reset*.

[Download
Cyanogenmod](http://download.cyanogenmod.org/?type=snapshot&device=mako). At
the time of this writing the most recent nightly build for the Nexus 4 is
Cyanogenmod 12.1-20150704. Verify package integrity.

{% highlight bash %}
$ md5sum cm-12.1-20150704-NIGHTLY-mako.zip
941676945c437311e443fdbcbf1be42a  cm-12.1-20150704-NIGHTLY-mako.zip
{% endhighlight %}

Copy CM distribution zip into device

{% highlight bash %}
$ adb push <path to cm-12.1-20150704-NIGHTLY-mako.zip> /sdcard
2933 KB/s (266022605 bytes in 88.573s)
{% endhighlight %}

Go back to TWRP main menu and tap *Install*. Search in the file system for the
zip just copied and tap it. Tap checkbox *Zip file signature verification* and
swipe to confirm flash. The message *Successfull* should show. Tap *Reboot
System* and the device will now boot into CyanogenMod.

### Relock bootloader

This step is optional.  Enable USB debugging again and reboot into fastboot
mode.

{% highlight bash %}
$ adb reboot bootloader
{% endhighlight %}

Then lock bootloader with `fastboot`.

{% highlight bash %}
$ fastboot oem lock
...
OKAY [  0.010s]
finished. total time: 0.010s
$ fastbook reboot
{% endhighlight %}

In the end you have a Nexus 4 device with Cyanogenmod 12.1, TWRP 12.8.7.0
recovery and locked bootloader.

## Notes

* If something doesn't work as expected when using `adb`, try restarting the
  server.

{% highlight bash %}
$ adb kill-server
$ adb start-server
{% endhighlight %}

* If at any point when booting into either the stock ROM or Cyanogenmod you
  seem to get the *boot loop* (boot animation never stops for more than 30
  minutes), power off device, start in recovery mode and wipe the user and
  cache data partitions. Then reboot.

## References

* [Install CM for Mako](http://wiki.cyanogenmod.org/w/Install_CM_for_mako).

* [Doc: adb intro](http://wiki.cyanogenmod.org/w/Doc:_adb_intro).

* [Adding SDK
  Packages](https://developer.android.com/sdk/installing/adding-packages.html).

* [Nexus 4 - Factory Image
  Restore](http://forums.androidcentral.com/nexus-4-rooting-roms-hacks/223923-guide-nexus-4-factory-image-restore.html).
