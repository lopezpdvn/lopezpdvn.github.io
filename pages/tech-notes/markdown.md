---
layout: page
title: Markdown
permalink: /markdown/
comments: true
tags: [markdown, documentation, jekyll]
first_published: 2016-05-21
last_updated: 2016-05-21
---

*First published: {{ page.first_published }}. Last updated: {{ page.last_updated }}*

* TOC
{:toc}

## Cheatsheet

Shell commands to ease the manual creation of table of contents

{% highlight bash %}
$ grep -E '^\#+{2}' $fpath | sed -e 's/#* //' -e 's/ /-/g' -e 's/\(.*\)/\L\1/' -e 's+/+-+g' -e 's/^/#/'
$ grep -E '^\#+{2}' $fpath | sed -e 's/#* //' -e 's/^/\[/' -e 's/$/\]\(/'
{% endhighlight %}
