---
layout: tech-note
title: Robocopy
permalink: /robocopy/
first_published: 2017-09-21
last_updated: 2017-09-22
keywords: [windows, robocopy, file system, fs]
---

* TOC
{:toc}

## Examples

Remove `/L`.

{% highlight batch %}
robocopy Z:\ "E:\dest dir\with spaces" big_file /Z /L
{% endhighlight %}
