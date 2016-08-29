---
layout: tech-note
title: Notes on ImageMagick
permalink: /imagemagick/
comments: true
first_published: 2016-08-12
last_updated: 2016-08-29
keywords: [media, img, images, imagemagick, convert, mogrify]
---

* TOC
{:toc}

## Mogrify directory recursively

{% gist lopezpdvn/37c50a64aec0cbd8b538fc38a786db2a mogrify-recursive.py %}

## Create thumbnails

{% highlight bash %}
$ convert input_image.jpg -thumbnail '128x128>' input_image_thumbnail.jpg
{% endhighlight %}
