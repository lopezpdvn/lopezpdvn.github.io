---
layout: tech-note
title: Notes on Kdenlive
permalink: /kdenlive/
comments: true
keywords: [video, audio, ffmpeg, kdenlive]
first_published: 2016-07-11
last_updated: 2016-10-06
---

* TOC
{:toc}

## Fedora missing dependency

Although the package `kdenlive` does not formally depend on `kf5-kinit`
according to DNF, the application won't work if it isn't installed.

{% highlight bash %}
$ sudo dnf install kdenlive kf5-kinit
{% endhighlight %}

This may be the case for other KDE applications too, not just Kdenlive.

## Simple cut/trim

Extract a section of a video, including audio.
[Video source](https://creativecommons.org/about/videos/made-with-cc/ "Made with Creative Commons")

<iframe width="560" height="315" src="https://www.youtube.com/embed/o8QxlBQBEz0" frameborder="0" allowfullscreen></iframe>
<br/>

## General steps for new projects

- Create project directory

- Open kdenlive, save as `project_name` in project directory

- Add clips to automatically set project settings (accept suggestion)

- Open project settings and set the project folder to the project directory of
  the first step.

- Input metadata

- Click OK and save project.

- In window Render, check *More options*. Review all options since not all
  configuration is saved to the rendering profiles.
