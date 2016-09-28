---
layout: tech-note
title: Notes on Ubuntu Studio
permalink: /ubuntu-studio/
comments: true
first_published: 2016-09-21
last_updated: 2016-09-21
keywords: [linux, audio, music, ubuntu]
---

* TOC
{:toc}

## Installation

Target `of` is whole device, not partition (`sdXY`, `sdXZ`, ...).

{% highlight bash %}
$ sudo dd if=/path/to/ubuntu-16.04.iso of=/dev/sdX status=progress
{% endhighlight %}

Boot from live USB, to check everything work OK.

Reboot and check media

Boot live USB, and click on icon to install.

Connect to network, select download softare and allow propietary stuff

Erase disk and install Ubuntu studio

Install configuration files.

## Workflow

Authenticate

Mount remote file systems

Open Pavucontrol

Open QJacktl and start JACK

## References
