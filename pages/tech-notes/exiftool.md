---
layout: tech-note
title: Notes on ExifTool
permalink: /exiftool/
comments: true
keywords: [image, media, metadata, photo]
first_published: 2016-07-17
last_updated: 2016-07-17
---

* TOC
{:toc}

## Misc commands

View tags

{% highlight bash %}
$ exiftool -use MWG -a -u $media_file
{% endhighlight %}

Remove all tags

{% highlight bash %}
$ exiftool -a -u -All= $media_file
{% endhighlight %}

## Date/time shift

See [official docs](http://www.sno.phy.queensu.ca/~phil/exiftool/#shift). You
started taking pictures on 2016-07-16T12:05:11 but the camera clock was reset
to 2014-01-01T00:00:00. Calculate the delta, with Python for example

{% highlight python %}
>>> from datetime import datetime
>>> reset = datetime(2014, 1, 1)
>>> start = datetime(2016, 7, 16, 12, 5, 11)
>>> delta = start - reset
>>> print(delta)
927 days, 12:05:11
{% endhighlight %}

Move the image files to directory `dir` and perform date/time shift

{% highlight bash %}
$ deltashift="0:0:927 12:05:11"
$ exiftool -v "-AllDates+=$deltashift" "-FileModifyDate+=$deltashift" dir
{% endhighlight %}

## References

- <http://www.sno.phy.queensu.ca/~phil/exiftool>
