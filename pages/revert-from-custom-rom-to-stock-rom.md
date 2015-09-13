---
layout: post
title:  "Revert a Nexus device to stock ROM"
lang: en
date: Fri Sep 11 23:21:42 CDT 2015
categories: en
tags: [en, tech]
comments: false
permalink: /android-how-to-revert-from-custom-rom-to-stock-rom/
excerpt: ""
---

This post describes how to revert an Android operating system from a custom ROM
like Cyanogenmod to the stock ROM. I tested this guide with a Nexus 5 running
Cyanogenmod 12.1-20150704. The guide [Factory Images for Nexus Devices]a

The Nexus family of devices is developer-friendly and the [instructions
published by Google](https://developers.google.com/android/nexus/images) are
clear and easy to follow. Please see my guide [How to set up a debugging and
development environment for Android on Linux][] and follow as necessary.
Always remember to verify the integrity of the downloaded files by comparing
the checksums.

{% capture android_debug_develop %}https://gist.github.com/{{ site.github_username }}/dd2eb3512ac225d0ad0e{% endcapture %}
[How to set up a debugging and development environment for Android on Linux]: {{ android_debug_develop }}

{% highlight bash %}
$ curl -O https://dl.google.com/dl/android/aosp/occam-lmy47v-factory-b0c4eb3d.tgz
$ md5sum occam-lmy47v-factory-b0c4eb3d.tgz
be10a86e3b70ec271670f008cc51aa58  occam-lmy47v-factory-b0c4eb3d.tgz
$ sha1sum occam-lmy47v-factory-b0c4eb3d.tgz
b0c4eb3d2289bbb7dbc47ec77ca4be6b657cd9fc  occam-lmy47v-factory-b0c4eb3d.tgz
$ tar xzf occam-lmy47v-factory-b0c4eb3d.tgz

$ adb devices -l
* daemon not running. starting it now on port <portnumber> *
* daemon started successfully *
List of devices attached
XXXXXXXXXXXXXXXX       device usb:1-1 product:occam model:Nexus_4 device:mako
$ adb reboot bootloader
$ fastboot oem unlock # Accept disclaimer
...
OKAY [ 13.613s]
finished. total time: 13.613s

{% endhighlight %}

In my case running the `flash-all.sh` script showed some errors:

{% highlight bash %}
./flash-all.sh
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

So I had to execute the install steps manually as shown in this [blog
post](https://wolfpaulus.com/jounal/android-journal/android-5-1-nexus-6/):


{% highlight bash %}
$ unzip image-occam-lmy47v.zip
Archive:  image-occam-lmy47v.zip
inflating: android-info.txt
inflating: cache.img
inflating: boot.img
inflating: recovery.img
inflating: userdata.img
inflating: system.img

$ ./flash-base.sh # Device will reboot into fastboot mode by itself twice
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

fastboot flash -S 512M system system.img
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

fastboot flash cache cache.img # ---- not this one?
fastboot flash cache cache.img
erasing 'cache'...
OKAY [  0.026s]
sending 'cache' (13424 KB)...
OKAY [  0.666s]
writing 'cache'...
OKAY [  0.530s]
finished. total time: 1.222s

fastboot flash userdata userdata.img
erasing 'userdata'...
OKAY [  0.474s]
sending 'userdata' (98413 KB)...
OKAY [  4.849s]
writing 'userdata'...
OKAY [  3.662s]
finished. total time: 8.986s


fastboot reboot
{% endhighlight %}

Note that the command to flash the `system.img` image uses the option `-S
512M`, making `fastboot` flash the image in chunks. Without the switch I was
getting the error `error: cannot load 'system.img'` because of not enough
available RAM in my system:

{% highlight bash %}
$ cat /proc/meminfo | head -1
MemTotal:        1019096 kB
{% endhighlight %}

????  then go to recovery mode and wipe user data and cache.  if not install
twrp recovery.

If you seem to get the *boot loop* (boot animation never stops for more than 30
minutes), power off device, start in recovery mode and wipe the user and cache
data partitions. Then reboot.

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

<!-- TODO
https://developers.google.com/android/nexus/images#occam
-->
