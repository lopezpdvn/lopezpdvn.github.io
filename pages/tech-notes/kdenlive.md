---
layout: tech-note
title: Notes on Kdenlive
permalink: /kdenlive/
comments: true
keywords: [video, audio, ffmpeg, kdenlive]
first_published: 2016-07-11
last_updated: 2016-07-11
---

* TOC
{:toc}

## Fedora missing dependency

Although the package `kdenlive` does not formally depend on `kf5-kinit`
according to DNF, the application won't work if it isn't installed.

{% highlight bash %}
$ sudo dnf install kdenlive kf5-kinit
{% endhighlight %}

This may be the case for other KDE applications too, not just Kdenlive.