---
layout: tech-note
title: Notes on Android
permalink: /android/
comments: true
first_published: 2016-09-19
last_updated: 2016-10-12
keywords: [android, mobile, linux, whatsapp, facebook, messenger]
---

* TOC
{:toc}

## Applications

- Urecord: [Google Play][urecord-play], [F-Droid][urecord-fdroid]
- Easy Sound Recorder: [Google Play][esrecorder-play], [F-Droid][esrecorder-fdroid]

[urecord-play]: https://play.google.com/store/apps/details?id=cc.co.eurdev.urecorder
[urecord-fdroid]: https://f-droid.org/repository/browse/?fdfilter=urecord&fdid=cc.co.eurdev.urecorder
[esrecorder-play]: https://play.google.com/store/apps/details?id=com.danielkim.soundrecorder
[esrecorder-fdroid]: https://f-droid.org/repository/browse/?fdfilter=sound+recorder&fdid=com.danielkim.soundrecorder

## Storage issues

On a system with small internal storage and optional external storage (microSD
card), storage issues may occur because a lot of applications and their data
can't be stored in the external storage.

It's not possible to store WhatsApp app or data in the external storage. It
requires manual deletion of data. To delete all data go to Settings -> Storage.
Open Misc, check WhatsApp and click on delete icon. To backup the data (most
importantly, the `Media` directory), access the internal storage file system by
connecting to a PC, Windows is easier. Then copy the required directories. This
way one can also delete selectively and/or move this data to the microSD card.

Facebook messenger app tends to accumulate a lot of data too. To delete, go to
Settings -> Storage. Open Misc, check `com.facebook.orca` and click on delete
icon.

Periodically: Go to Settings -> Storage and click on Move data to microSD card,
until it's not possible to move any further data.

When accessing the internal storage by connecting the cellphone to a Windows
computer via USB, the file operations are prone to failure without warning.
Check the sizes of the source and destination directories, and try to test a
few of the copied files to ensure they were succesfully copied.

For this reason, when backing up the WhatsApp media directory to other
location, it's better to just copy to a new directory instead of trying to
update a previously backed up directory.

## Blog posts

- [Notes on restoring a Nexus device to Android factory image]({% post_url 2015/2015-09-25-notes-restoring-nexus-device-android-factory-image %}) (25 Sep 2015)
- [How to set up a debugging and development environment for Android on Linux]({% post_url 2015/2015-07-17-set-up-debugging-development-environment-for-android-on-linux %}) (July 24, 2015).
