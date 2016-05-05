---
layout: page
title: gpg
permalink: /gpg/
comments: true
tags: [security, gpg]
---

* TOC
{:toc}

## Cheatsheet

Import public key

{% highlight bash %}
$ gpg --import <PGP KEY>
{% endhighlight %}

Verify file signature

{% highlight bash %}
gpg --verify <signature-file> <signed-file>
{% endhighlight %}
