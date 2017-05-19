---
layout: tech-note
title: POSIX shell
permalink: /posix-shell/
comments: true
first_published: 2017-05-19
last_updated: 2017-05-19
keywords: [posix, posix_shell]
---

* TOC
{:toc}

List files sorted by modified time

{% highlight bash %}
$ find /some/path/ -printf "%T@\t%Tc\t%p\n" | sort -n | cut -f 2-
{% endhighlight %}

<br/>

---
