---
layout: page
title: Notes on Python
permalink: /python/
comments: true
---

## Development HOWTO ##################################################

## Pip

{% highlight bash %}
$ pip install --install-option="--user" {package}
$ sudo pip-python install --install-option="--prefix=/usr/local" {package}
{% endhighlight %}

{% highlight bash %}
cd $PROJ_REPO_ROOT
virtualenv -p $PYTHON_EXE .
{% endhighlight %}
