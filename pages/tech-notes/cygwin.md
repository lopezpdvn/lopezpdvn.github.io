---
layout: tech-note
title: Cygwin
permalink: /cygwin/
comments: true
tags: [windows, linux, unix, cygwin]
---

* TOC
{:toc}

## User default shell

Edit `/etc/nsswitch.conf`

    db_shell: <path to installed shell>

The default is `db_shell: /bin/bash`.

## `gpg` depends on `libusb`

When installing `gpg`, its dependency `libusb` will ask you to install a
package not provided by Cygwin. Accept, but it's not required to install such
third-party package to use `gpg`.
