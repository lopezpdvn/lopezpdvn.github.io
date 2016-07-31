---
layout: tech-note
title: Notes on digiKam
permalink: /digikam/
comments: true
first_published: 2016-04-11
last_updated: 2016-07-31
keywords: [media, images, digikam, img, metadata, tags]
---

* TOC
{:toc}

## Change path to collections on removable media

If you change the path to a collection on removable media digiKam does not tell
you it is missing. It still shows the albums and their thumbnails (because
digiKam stores those locally) but it does not show you the usual options or
actions in the menus. For example, the *Open with* menu shown by right clicking
on an image does not show the viewing applications.

*Settings* -> *Configure digiKam*  -> *Collections* shows all your collections
on removable media but it if you changed their paths, it does not display them.
The paths are easily fixed by manually editing the SQLite database.

There are several ways to do this, including the program [DB Browser for
SQLite](https://github.com/sqlitebrowser/sqlitebrowser)[^1]. All you have to do
is update the columns `identifier` and `specificPath` of the table `AlbumRoots`
to reflect the new path of the root of your collection.  You can get the
UUID of the disk by browsing `/dev/disks/by-uuid`

Then save the changes and start digiKam.

## Importing database to a new digiKam installation

Start *digiKam*, the first-time-run wizard/assistant starts. Click *Next*.

Input the path to the main directory where you store images. In the second text
box, input the path to the directory where the file `digikam.db` lives, not the
path to the file itself. In other words, input the *basename* of the absolute
path to the `digikam.db` file. Click *Next*

Configure the rest of the settings as needed. See
*[Change path to collections on removable media][]* if the paths of the
collections were modified.

[Change path to collections on removable media]: #change-path-to-collections-on-removable-media

## Non-simultaneous multiple instances

Close digiKam and edit digikam configuration file, whose default path is
`$HOME/.kde/share/config/digikamrc`

    Database Name=/path/to/dir/containing/database/file/
    Database Name Thumbnails=/path/to/dir/containing/thumbnaildatabase/file/

Note the trailing slashes and the fact that both paths can be the same.

Then start digiKam.

**Note**: Do not use command line option `--database-directory`, it doesn't
seem to work for this purpose.

## Database cleanup

The program `cleanup_digikamdb` performs cleanup of any/both of the two
digikam's database files. However, it doesn't seem to remove entries of images
of removed collections. Such entries may need to be removed directly from the
database.

---
<br/>

[^1]: Package `sqlitebrowser` on Fedora 23.
