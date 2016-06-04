---
layout: tech-note
title: Notes on ffmpeg
permalink: /ffmpeg/
comments: true
tags: [video, audio, ffmpeg]
---

* TOC
{:toc}

`ffmpeg` and `quodlibet`/`operon`

{% gist lopezpdvn/f83112e070e3c9e791e170059a41cd7c ffmpeg_quodlibet_operon.sh %}

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
