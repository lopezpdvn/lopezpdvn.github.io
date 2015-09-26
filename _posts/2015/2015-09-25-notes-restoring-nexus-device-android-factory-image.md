---
layout: post
title:  "Notes on restoring a Nexus device to Android factory image"
lang: en
date: Fri Sep 25 13:15:08 CDT 2015
categories: en
tags: [en, tech, engineering, android, linux]
comments: true
permalink: /notes-restoring-nexus-device-android-factory-image/
---

This post lists some notes on restoring a Nexus device to Android factory image
using a Linux machine as the development host.  I tested this guide with a
Nexus 4 running Cyanogenmod 12.1-20150704. Use these notes together with my
guide [How to set up a debugging and development environment for Android on
Linux][android-debug-develop] and Google's [Factory Images for Nexus
Devices][factory-images].

**Note**: I'm omitting values particular to my system (like ids, serial numbers
and ports) with the notation `<variable>`.

**Warning**: Following this procedure will result in loss of user and system
data.  *Always backup your data*.

[android-debug-develop]: https://gist.github.com/{{ site.github_username }}/dd2eb3512ac225d0ad0e
[factory-images]: https://developers.google.com/android/nexus/images

Contents:

* TOC
{:toc}

## Prepare system image and device #####################################

Download latest factory image for your device, in this case for a Nexus 4 *Occam*

{% highlight bash %}
$ curl -O https://dl.google.com/dl/android/aosp/occam-lmy47v-factory-b0c4eb3d.tgz
{% endhighlight %}

Always remember to verify the integrity of the downloaded files by comparing
the checksums to the [ones published by Google][factory-images].

{% highlight bash %}
$ md5sum occam-lmy47v-factory-b0c4eb3d.tgz
be10a86e3b70ec271670f008cc51aa58  occam-lmy47v-factory-b0c4eb3d.tgz
$ sha1sum occam-lmy47v-factory-b0c4eb3d.tgz
b0c4eb3d2289bbb7dbc47ec77ca4be6b657cd9fc  occam-lmy47v-factory-b0c4eb3d.tgz
{% endhighlight %}

Untar compressed file

{% highlight bash %}
$ tar xzf occam-lmy47v-factory-b0c4eb3d.tgz
{% endhighlight %}

If you haven't set up your development and debugging environment, follow the
steps in sections [Install the Android SDK Tools][], [Configure the Nexus
device for development][] and [Unlock the bootloader][] of my guide mentioned
before.

{% capture android_debug_develop %}https://gist.github.com/{{ site.github_username }}/dd2eb3512ac225d0ad0e{% endcapture %}

[Install the Android SDK Tools]: {{ android_debug_develop }}#install-the-android-sdk-tools
[Configure the Nexus device for development]: {{ android_debug_develop }}#configure-the-nexus-device-for-development
[Unlock the bootloader]: {{ android_debug_develop }}#unlock-the-bootloader

Plug your device with the USB cable and detect it with *adb*

{% highlight bash %}
$ adb devices -l
* daemon not running. starting it now on port <portnumber> *
* daemon started successfully *
List of devices attached
<XXXXXXXXXXXXXXXX>       device usb:1-1 product:occam model:Nexus_4 device:mako
{% endhighlight %}

Boot into bootloader

{% highlight bash %}
$ adb reboot bootloader
{% endhighlight %}

Once in fastboot mode, verify fastboot correctly sees the device.

{% highlight bash %}
$ fastboot devices -l
<ok message, not errors>
{% endhighlight %}

*This step will wipe all device data*.  Unlock bootloader with below command.
Accept the disclaimer displayed, then you will see the output shown below.

{% highlight bash %}
$ fastboot oem unlock # Accept disclaimer
...
OKAY [ 13.613s]
finished. total time: 13.613s
{% endhighlight %}

If the device doesn't reboot by itself, reboot it from the menu.

## Flash the image #####################################################

Change current directory into the one containing the script `flash-all.sh` and
just execute it

{% highlight bash %}
$ cd occam-lmy47v
$ ./flash-all.sh
[113/574]
sending 'bootloader' (2264 KB)...
OKAY [  0.076s]
writing 'bootloader'...
OKAY [  0.205s]
finished. total time: 0.282s
rebooting into bootloader...
OKAY [  0.001s]
finished. total time: 0.051s
sending 'radio' (45537 KB)...
OKAY [  1.502s]
writing 'radio'...
OKAY [  1.885s]
finished. total time: 3.388s
rebooting into bootloader...
OKAY [  0.001s]
finished. total time: 0.051s
archive does not contain 'boot.sig'
archive does not contain 'recovery.sig'
archive does not contain 'system.sig'
archive does not contain 'vendor.img'
Creating filesystem with parameters:
Size: 14129561600
Block size: 4096
Blocks per group: 32768
Inodes per group: 8144
Inode size: 256
Journal blocks: 32768
Label:
Blocks: 3449600
Block groups: 106
Reserved block group size: 847
Created filesystem with 11/863264
inodes and 95427/3449600 blocks
Created filesystem with 11/863264 inodes and 95427/3449600 blocks
[81/574]
Creating filesystem with parameters:
Size: 587202560
Block size: 4096
Blocks per group: 32768
Inodes per group: 7168
Inode size: 256
Journal blocks: 2240
Label:
Blocks: 143360
Block groups: 5
Reserved block group size: 39
Created filesystem with 11/35840 inodes
and 4616/143360 blocks
--------------------------------------------
Bootloader Version...: MAKOZ30f
Baseband Version.....:
M9615A-CEFWMAZM-2.0.1701.07
Serial Number........: 02163655dc08e411
--------------------------------------------
checking product...
OKAY [  0.002s]
checking version-bootloader...
OKAY [  0.002s]
checking version-baseband...
OKAY [  0.002s]
sending 'boot' (6398 KB)...
OKAY [  0.205s]
writing 'boot'...
OKAY [  0.280s]
sending 'recovery' (6960 KB)...
OKAY [  0.226s]
writing 'recovery'...
OKAY [  0.288s]
erasing 'system'...
OKAY [  0.829s]
sending 'system' (834754 KB)...
OKAY [ 27.140s]
writing 'system'...
OKAY [ 36.382s]
erasing 'userdata'...
OKAY [  1.502s]
sending 'userdata' (137438 KB)...
OKAY [  4.361s]
writing 'userdata'...
OKAY [  5.842s]
erasing 'cache'...
OKAY [  0.049s]
sending 'cache' (10984 KB)...
OKAY [  0.349s]
writing 'cache'...
OKAY [  0.487s]
rebooting...

finished. total time: 78.004s
{% endhighlight %}

Your Nexus will boot the factory image, remember that the first boot usually
takes more time than usual. If you seem to get the *boot loop* (boot animation
never stops for more than 30 minutes), power off device, start in recovery mode
and wipe the user and cache data partitions. Then reboot.

*This step is optional but recommended*. Re-lock the bootloader by booting into
fastboot mode again and running below command.

{% highlight bash %}
$ fastboot oem lock
{% endhighlight %}

### Flashing the image on a memory constrained host ####################

The script `flash-all.sh` tries to flash the images without sparsing them,
which won't work if you don't have enough RAM on your development computer. For
example, trying to flash the images on my 1 GiB RAM netbook running Ubuntu
failed as shown

{% highlight bash %}
$ # Showing available RAM
$ cat /proc/meminfo | head -1
MemTotal:        1019096 kB

$ ./flash-all.sh
sending 'bootloader' (2264 KB)...
OKAY [  0.108s]
writing 'bootloader'...
OKAY [  0.203s]
finished. total time: 0.312s
rebooting into bootloader...
OKAY [  0.000s]
finished. total time: 0.051s
sending 'radio' (45537 KB)...
OKAY [  2.145s]
writing 'radio'...
OKAY [  1.887s]
finished. total time: 4.032s
rebooting into bootloader...
OKAY [  0.000s]
finished. total time: 0.051s
archive does not contain 'boot.sig'
archive does not contain 'recovery.sig'
failed to allocate 854788148 bytes
error: update package missing system.img
{% endhighlight %}

In this case you'll have to separately flash the images to the Nexus. Start by
unzipping the ZIP file

{% highlight bash %}
$ unzip image-occam-lmy47v.zip
Archive:  image-occam-lmy47v.zip
inflating: android-info.txt
inflating: cache.img
inflating: boot.img
inflating: recovery.img
inflating: userdata.img
inflating: system.img
{% endhighlight %}

Execute the script `flash-base.sh`.  The device will reboot into fastboot mode
twice.

{% highlight bash %}
$ ./flash-base.sh
sending 'bootloader' (2264 KB)...
OKAY [  0.108s]
writing 'bootloader'...
OKAY [  0.202s]
finished. total time: 0.310s
rebooting into bootloader...
OKAY [  0.001s]
finished. total time: 0.077s
sending 'radio' (45537 KB)...
OKAY [  2.146s]
writing 'radio'...
OKAY [  1.882s]
finished. total time: 4.028s
rebooting into bootloader...
OKAY [  0.000s]
finished. total time: 0.051s
{% endhighlight %}

Flash the recovery and boot images

{% highlight bash %}
$ fastboot flash recovery recovery.img
sending 'recovery' (6960 KB)...
OKAY [  0.330s]
writing 'recovery'...
OKAY [  0.299s]
finished. total time: 0.630s

$ fastboot flash boot boot.img
sending 'boot' (6398 KB)...
OKAY [  0.312s]
writing 'boot'...
OKAY [  0.262s]
finished. total time: 0.575s
{% endhighlight %}

Flash the system image.

{% highlight bash %}
$ fastboot flash -S 512M system system.img
erasing 'system'...
OKAY [  0.471s]
sending sparse 'system' (518095 KB)...
OKAY [ 58.201s]
writing 'system'...
OKAY [ 20.726s]
sending sparse 'system' (316658 KB)...
OKAY [ 35.813s]
writing 'system'...
OKAY [ 12.635s]
finished. total time: 127.845s
{% endhighlight %}

Note that the command uses the option `-S 512M`, making fastboot flash the
image in chunks of (maximum) size 512 MB.  Use another argument according to
your system's needs. In principle you can use this option to sparse the other
images too, although you probably won't need to do that since they aren't as
big as the system image.  Fastboot describes this option's usage as follows

{% highlight bash %}
  -S <size>[K|M|G]                         automatically sparse files greater
                                         than size.  0 to disable
{% endhighlight %}

Flash the cache and user data images.

{% highlight bash %}
$ fastboot flash cache cache.img
erasing 'cache'...
OKAY [  0.026s]
sending 'cache' (13424 KB)...
OKAY [  0.666s]
writing 'cache'...
OKAY [  0.530s]
finished. total time: 1.222s

$ fastboot flash userdata userdata.img
erasing 'userdata'...
OKAY [  0.474s]
sending 'userdata' (98413 KB)...
OKAY [  4.849s]
writing 'userdata'...
OKAY [  3.662s]
finished. total time: 8.986s
{% endhighlight %}

*This step is optional but recommended*. Re-lock the bootloader.

{% highlight bash %}
$ fastboot oem lock
{% endhighlight %}

Finally reboot the device

{% highlight bash %}
$ fastboot reboot
{% endhighlight %}

## References ##########################################################

- [How to set up a debugging and development environment for Android on Linux][android-debug-develop]
- [Factory Images for Nexus Devices][factory-images]
- [Installing Android 5.1 on the Nexus 6](https://wolfpaulus.com/jounal/android-journal/android-5-1-nexus-6/)
