---
layout: tech-note
title: Notes on Kdenlive
permalink: /kdenlive/
comments: true
keywords: [video, audio, ffmpeg, kdenlive]
first_published: 2016-07-11
last_updated: 2016-12-23
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

## Project settings

When you add clips that don't match the video project settings, Kdenlive
usually automatically suggests changes to the project settings. If it doesn't,
you will have to manually configure them by editing or creating a new project
profile.

## Dealing with noise in rendered output

Sometimes Kdenlive introduces an unwanted noise in the rendered outputs. The
only way I know to eliminate such noise is to export the video and audio
separately, and then merge with a third-party tool like ffmpeg. This Kdenlive
exports the audio separately without the noise.

For this to work, it is recommended to always better to work with separate video and audio signals. So, if your video clips are container files with audio, *split the audio*.

Let `normal_export.mkv` be the normal rendered output with both audio and
video, the one containing the noise. Click on *Render* and check box *More
options* in render dialog. Check boxes *Export audio* and *Stem audio export*
on the right and click on *Render to File*. Let this output be
`normal_export_Audio_1.mkv`

Then do [this]({{ site.baseurl }}/ffmpeg/#map-video-and-audio-streams-into-single-output)
