---
layout: page
title: Notes on Python
permalink: /python/
comments: true
---

## pip

Install packages per user

{% highlight bash %}
$ pip install --user <username> <package>
{% endhighlight %}

In previous versions of pip you had to use

{% highlight bash %}
$ pip install --install-option="--user" <package>
$ sudo pip-python install --install-option="--prefix=/usr/local" <package>
{% endhighlight %}

## virtualenv

{% highlight bash %}
$ cd $PROJ_REPO_ROOT
$ virtualenv -p $PYTHON_EXE .
{% endhighlight %}
