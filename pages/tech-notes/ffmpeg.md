---
layout: tech-note
title: Notes on ffmpeg
permalink: /ffmpeg/
comments: true
tags: [video, audio, ffmpeg]
first_published: 2016-04-17
last_updated: 2016-07-05
---

* TOC
{:toc}

`ffmpeg` and `quodlibet`/`operon`

{% gist lopezpdvn/f83112e070e3c9e791e170059a41cd7c ffmpeg_quodlibet_operon.sh %}

Compress raw video into Matroska container, see
[Digitizing Hi8 cassettes]({{ site.baseurl }}/digitizing-hi8-cassettes) &
[Digitizing VHS cassettes]({{ site.baseurl }}/digitizing-vhs-cassettes).

{% gist lopezpdvn/bbbf72e2ccc33c0e35b130eba0108e59 compress_raw_video.sh %}

## Screencast on Linux with PulseAudio

Choose a PulseAudio source device

{% highlight bash %}
$ pactl list sources
<...>
{% endhighlight %}

To perform capture and lossless compression with x264 and Vorbis in one go,
run:

{% gist lopezpdvn/4521b20f9e91a9975621626749d55418 linux_pulseaudio_x264_lossless_vorbis.sh %}

## Misc

- Use H.264 because of its good quality, size and compatibility.

- Use MP4 if using audio compression, otherwise use Matroska.

- When dealing with raw audio (PCM) specify the format with the `-f` option
  ([for example]({{ site.baseurl }}/digitizing-hi8-cassettes/#audio)).

- Don't try to map audio channels without re-encoding
  ([info](http://comments.gmane.org/gmane.comp.video.ffmpeg.user/53517)).

## References

- <https://trac.ffmpeg.org/wiki/AudioChannelManipulation>
- <https://trac.ffmpeg.org/wiki/audio%20types>
