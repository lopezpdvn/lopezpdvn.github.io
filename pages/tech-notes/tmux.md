---
layout: tech-note
title: Notes on tmux
permalink: /tmux/
comments: true
keywords: [unix, terminal, command_line, tmux]
first_published: 2016-07-24
last_updated: 2016-07-24
---

* TOC
{:toc}

Update right status bar in existing session, the one that by default displays
`"<hostname>" <datetime>`:

{% highlight bash %}
:set status-right "some other string"
{% endhighlight %}
