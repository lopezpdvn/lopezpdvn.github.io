---
layout: page
title: Notes on sudo
permalink: /sudo/
comments: true
tags: [security, sudo]
first_published: 2016-04-11
last_updated: 2016-05-29
---

*First published: {{ page.first_published }}. Last updated: {{ page.last_updated }}*

* TOC
{:toc}

## Selectively preserve environment variables

Instead of using option `-E`, configure specific environment variables that
should be preserved.

{% highlight bash %}
$ sudo visudo
{% endhighlight %}

    Defaults env_keep += "MY_ENVIRONMENT_VARIABLE"

## `localhost` in sudoers

Don't use the string `localhost` in sudoers, use either string `ALL` or the
actual name of the host (`/etc/hostname`).

    %admin ALL=(ALL) NOPASSWD: ALL
    %admin <name of host>=(ALL) NOPASSWD: ALL

## References

- <https://wiki.archlinux.org/index.php/Sudo>
- <http://superuser.com/questions/169278/localhost-in-sudoers>
