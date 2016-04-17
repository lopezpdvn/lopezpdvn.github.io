---
layout: page
title: Digitizing Hi8 tapes
permalink: /digitizing-hi8/
comments: true
tags: [video, audio, ffmpeg]
---

* TOC
{:toc}

Using a [Diamond
VC500](http://www.amazon.com/Diamond-VC500-Touch-Capture-Device/dp/B000VM60I8)

{% highlight bash %}
ffmpeg -i "$src" -c:v libx264 -preset slow -crf 17 -c:a pcm_s16le -map_channel 0.0.0 "$dst"
{% endhighlight %}

## Misc

- Use H.264 because of its good quality, size and compatibility.

- Use MP4 if using audio compression, otherwise use Matroska.

## References

- <https://trac.ffmpeg.org/wiki/AudioChannelManipulation>
