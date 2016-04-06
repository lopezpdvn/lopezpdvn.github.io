---
layout: page
title: Notes on rsnapshot
permalink: /rsnapshot/
comments: true
tags: [rsnapshot, file_system, synchronization, backup]
---

Test configuration file

{% highlight bash %}
$ sudo rsnapshot -t <hourly/daily/etc...>
<....>
{% endhighlight %}

## On removing backup points and archived files

In short, remove backup points from configuration file and manually remove
files from the smallest backup level's ".0" directory (it's usually
`hourly.0`).

From rsnapshot man page

> If you remove backup points in the config file, the previously archived files
> under those points will permanently stay in the snapshots directory unless
> you remove the files yourself. If you want to conserve disk space, you will
> need to go into the <snapshot_root> directory and manually remove the files
> from the smallest backup level's ".0" directory.
>
> ...
>
> Please note that the other snapshots previously made of /home/ will still be
> using that disk space, but since the files are flushed out of hourly.0/, they
> will no longer be copied to the subsequent directories, and will thus be
> removed in due time as the rotations happen.
