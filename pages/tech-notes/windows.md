---
layout: tech-note
title: Notes on Windows
permalink: /windows/
comments: true
last_updated: 2017-12-30
tags: [windows, sysadmin]
---

* TOC
{:toc}

## Backups and mirrors

Usually is not essential to backup the folder `%USERPROFILE%\AppData`.
Exceptions are

- Your email client, such as Outlook and Thunderbird, stores its main data file
  there. *If you only use email via a web browser, don’t worry about this*.

- You wish to backup not only user data but system state too. However, in this
  case, you should consider using [system
  images](http://windows.microsoft.com/en-us/windows7/what-is-a-system-image).

## Remote Desktop Protocol Certificates Changes

keywords: rdp.

- [Verify thumbprints](https://superuser.com/questions/643139/where-is-my-rdp-server-certificate-stored)
