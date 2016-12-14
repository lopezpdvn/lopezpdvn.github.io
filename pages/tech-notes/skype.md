---
layout: tech-note
title: Notes on Skype
permalink: /skype/
comments: true
first_published: 2016-12-14
last_updated: 2016-12-14
keywords: [skype, linux, fedora, voip]
---

* TOC
{:toc}

## Install on Fedora

Download RPM package from official Skype for Linux. It says it's for Fedora 16
32-bit but it worked for Fedora 24 64-bit. Then install with `dnf`, all
dependencies are installed as well.

{% highlight bash %}
$ sudo dnf -y install </path/to/i586/rpm/package.i586.rpm>
{% endhighlight %}

Then just run with

{% highlight bash %}
$ skype &
{% endhighlight %}

<br/>

---
