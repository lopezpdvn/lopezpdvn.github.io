---
layout: tech-note
title: Notes on GIMP
permalink: /gimp/
comments: true
keywords: [image, media, metadata, photo, gimp]
first_published: 2016-07-26
last_updated: 2016-07-26
---

* TOC
{:toc}

## Image without background

To add a background to an image without it like below

{% capture imgtext %}Wikipedia icon without background{% endcapture %}
![{{ imgtext }}]({{ site.baseurl }}/{{ site.images_dir }}/2016/wikipedia_without_background.png "{{ imgtext }}")

*Layer* -> *New Layer* open menu *Create a New Layer*. Dimensions should match
original image, choose option *White* or one of the previously configured
foreground or background color.

If not open already, *Windows* -> *Dockable Dialogs* -> *Layers* to open the
*Layers* dialog. Select the created layer and send it to the back (lower it in
the stack) by clicking the button with downside arrow.

## Convert image to black & white or grayscale

Import the image. Right click on it, *Image* -> *Mode* -> *Grayscale*. Then
open dialog *Colors* -> *Brightness-Contrast* and adjust the contrast to get
desired effect.
