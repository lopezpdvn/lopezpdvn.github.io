---
layout: tech-note
title: Notes on X Window System
permalink: /x/
comments: true
last_updated: 2018-01-09
tags: [sysadmin, x]
---

* TOC
{:toc}

## X Windows authorization

*Keywords: vnc, remote desktop.*

Suppose you are user *foo*. Do this to execute a graphical application as
another user *bar*.

Make *foo*'s magic cookie readable by *bar*. Environment variable `XAUTHORITY`
holds the location of such cookie. So for example

{% highlight bash %}
foo$ sudo cp -av "$XAUTHORITY" /home/bar/.Xauthority
foo$ sudo chgrp bar /home/bar/.Xauthority
foo$ sudo chmod g+r  /home/bar/.Xauthority
{% endhighlight %}

The magic cookie is usually `$HOME/.Xauthority` or `/var/run/<name of display
manager>/foo`.

Then get the value of *foo*'s display, in variable `DISPLAY`.

Login as *bar* and

{% highlight bash %}
bar$ export XAUTHORITY=<path to copy of foo's cookie>
bar$ export DISPLAY=<value of foo's DISPLAY environment variable>
{% endhighlight %}

Then just launch the application from the same terminal.

## References

- <https://en.wikipedia.org/wiki/X_Window_authorization>
