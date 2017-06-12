---
layout: tech-note
title: ZIP
permalink: /zip/
first_published: 2017-06-11
last_updated: 2017-06-11
keywords: [zip, compression]
---

* TOC
{:toc}

Using *Info-ZIP*

## Zip list of files

For example in a Makefile

{% highlight make %}
mkzip:
    zip -vj out/path/out.zip $(shell cat files.txt)
{% endhighlight %}

Where `files.txt` looks like

```
a/b/c.txt
d/e.txt
f/g/h/i/j.txt
```

The contents of the zip will be

```
c.txt
e.txt
j.txt
```
