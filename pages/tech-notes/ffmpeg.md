---
layout: page
title: Notes on ffmpeg
permalink: /ffmpeg/
comments: true
tags: [video, audio, ffmpeg]
---

* TOC
{:toc}

## Misc

- Use H.264 because of its good quality, size and compatibility.

- Use MP4 if using audio compression, otherwise use Matroska.

- When dealing with raw audio (PCM) specify the format with the `-f` option
  ([for example]({{ site.baseurl }}/digitizing-hi8-cassettes/#audio)).

## References

- <https://trac.ffmpeg.org/wiki/AudioChannelManipulation>
- <https://trac.ffmpeg.org/wiki/audio%20types>
