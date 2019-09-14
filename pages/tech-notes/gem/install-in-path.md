---
layout: tech-note
title: Gem | Install in path
permalink: /gem/install-in-path/
comments: true
first_published: 2019-09-13
last_updated: 2019-09-13
keywords: [ruby, jekyll, bundler, gem]
---

* TOC
{:toc}

Install in path, such as user or system wide directory.

{% highlight bash %}
$ sudo gem update --system
$ ~/.gem/ruby/2.6.0/bin/bundle install --path ~/.gem
{% endhighlight %}
