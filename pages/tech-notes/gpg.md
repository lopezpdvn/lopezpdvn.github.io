---
layout: page
title: gpg
permalink: /gpg/
comments: true
tags: [security, gpg]
---

* TOC
{:toc}

Replace `gpg` with `gpg2` if/as needed.

## Cheatsheet

Import public key

{% highlight bash %}
$ gpg --import <path to public key file>
{% endhighlight %}

Verify file signature

{% highlight bash %}
$ gpg --verify <signature-file> <signed-file>
{% endhighlight %}

Display public key details without importing

{% highlight bash %}
$ gpg --with-fingerprint <path to public key file>
{% endhighlight %}

You may also search the key in a keyserver for further comparison/verification

{% highlight bash %}
$ gpg --search-keys <key id>
<Press Q to avoid importing key>
{% endhighlight %}
