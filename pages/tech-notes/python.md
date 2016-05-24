---
layout: page
title: Notes on Python
permalink: /python/
comments: true
tags: [python, programming]
last_updated: 2016-05-21
---

*Last updated: {{ page.last_updated }}*

* TOC
{:toc}

## pip

Install packages per user

{% highlight bash %}
$ pip install --user <package>
{% endhighlight %}

In previous versions of pip you had to use

{% highlight bash %}
$ pip install --install-option="--user" <package>
$ sudo pip-python install --install-option="--prefix=/usr/local" <package>
{% endhighlight %}

Install/upgrade directly from GitHub, example with [pysweng][] ([see
also](https://pip.pypa.io/en/stable/reference/pip_install/#git)):

{% highlight bash %}
$ pip install --user git+https://github.com/lopezpdvn/pysweng@dev#egg=pysweng
$ pip install --user --upgrade git+https://github.com/lopezpdvn/pysweng@dev#egg=pysweng
{% endhighlight %}

[pysweng]: https://github.com/{{ site.github_username }}/pysweng "Software Engineering Problems with Python"

## virtualenv

{% highlight bash %}
$ cd $PROJ_REPO_ROOT
$ virtualenv -p $PYTHON_EXE .
{% endhighlight %}

## JSON

Python interpreter JSON command line tool

{% highlight bash %}
$ python -m json.tool <path to json file>
{% endhighlight %}

## Templates

### Short script

Short script template

{% gist lopezpdvn/9a89dad82db384021c5e python-short-template.py %}
