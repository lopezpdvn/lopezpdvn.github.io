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

Remove last commit

{% highlight bash %}
$ git rebase -i HEAD~2
$ # In editor, remove the line of the commit you want gone
$ git push origin +master # force push
{% endhighlight %}

## References

- <http://stackoverflow.com/questions/1552340/how-to-list-the-file-names-only-that-changed-between-two-commits>
