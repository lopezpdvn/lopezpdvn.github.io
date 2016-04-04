---
layout: page
title: Notes on rsync
permalink: /rsync/
comments: true
tags: [rsync, file_system, synchronization]
---

All command include dry-run switch `-n`.

{% highlight bash %}
$ src=/some/dir0
$ dst=/other/dir1
{% endhighlight %}

Mirror dirs. Recursively, symlinks as symlinks, preserve permissions and times.

{% highlight bash %}
$ rsync -rlptnv --delete-after $src/ $dst
{% endhighlight %}

Archive mirror.

{% highlight bash %}
$ rsync -aHnvz $src/ $dst
{% endhighlight %}

The option `-H` is specially important when mirroring a directory of
`rsnapshot` snapshots.

When at least of the source or destination is a unrooted Android sytem and the
copying is done over SSH, copy only the file contents. For example:

{% highlight bash %}
$ dst=<hostname>:/path/in/android/filesytem
$ rsync -rnvz $src/ $dst
{% endhighlight %}
