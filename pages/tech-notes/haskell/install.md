---
layout: tech-note
title: Haskell installation
permalink: /haskell/install/
comments: true
first_published: 2019-05-10
last_updated: 2019-05-10
keywords: [haskell, programming_language, functional_programming]
---

* TOC
{:toc}

## Installation

### Fedora/Linux

- <https://docs.haskellstack.org/en/stable/install_and_upgrade/#fedora>
- <https://docs.haskellstack.org/en/stable/install_and_upgrade/#linux>

Installation script will try to run with sudo, so stack is installed system
wide.

Then on your project folders, install packages with stack run as a normal
non-priviledged user.

{% highlight bash %}
user00@host00$ cd /path/to/project/dir
user00@host00$ stack install <package_name>
<package install to HOME/.stack/...>
{% endhighlight %}
