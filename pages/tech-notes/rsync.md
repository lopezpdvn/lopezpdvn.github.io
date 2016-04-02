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
$ rsync -rlptn --delete-after $src/ $dst
{% endhighlight %}

Archive mirror.

{% highlight bash %}
$ rsync -aHvnz $src/ $dst
{% endhighlight %}

The option `-H` is specially important when mirroring a directory of
`rsnapshot` snapshots.
