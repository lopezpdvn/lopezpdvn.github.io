---
layout: page
title: Notes on sudo
permalink: /sudo/
comments: true
tags: [security]
---

* TOC
{:toc}

## Selectively preserve environment variables

Instead of using option `-E`, configure specific environment variables that
should be preserved.

{% highlight bash %}
$ sudo visudo
{% endhighlight %}

    Defaults env_keep += "MY_ENVIRONMENT_VARIABLE"

## References

- <https://wiki.archlinux.org/index.php/Sudo>
