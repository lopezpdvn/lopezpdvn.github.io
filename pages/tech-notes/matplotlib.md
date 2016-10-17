---
layout: tech-note
title: Notes on matplotlib
permalink: /matplotlib/
comments: true
first_published: 2016-10-17
last_updated: 2016-10-17
keywords: [python, matplotlib, datavisual]
---

* TOC
{:toc}

## Install matplotlib on Fedora 23 via pip

Installing matplotlib via pip basically means compiling matplotlib from source.

{% highlight bash %}
$ sudo dnf -y install libpng-devel freetype-devel gcc redhat-rpm-config gcc-c++ python3-devel
$ pip3 install --user matplotlib
{% endhighlight %}
