---
layout: tech-note
title: gpg
permalink: /gpg/
comments: true
tags: [security, gpg]
first_published: 2016-05-04
last_updated: 2017-01-10
---

* TOC
{:toc}

Replace `gpg` with `gpg2` if/as needed.

## Cheatsheet

List a key, previously imported

{% highlight bash %}
$ gpg --list-keys <keyid>
{% endhighlight %}

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
