---
layout: page
title: Notes on digiKam
permalink: /digikam/
comments: true
tags: [media, images]
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

---
<br/>

[^1]: Package `sqlitebrowser` on Fedora 23.
