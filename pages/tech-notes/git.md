---
layout: tech-note
title: Git
permalink: /git/
comments: true
tags: [git, software_engineering]
---

* TOC
{:toc}

## Cheatsheet

List the file names only that changed between two commits

{% highlight bash %}
$ git diff --name-status SHA1 SHA2
$ git diff --name-status HEAD HEAD~1
{% endhighlight %}

## References

- <http://stackoverflow.com/questions/1552340/how-to-list-the-file-names-only-that-changed-between-two-commits>
