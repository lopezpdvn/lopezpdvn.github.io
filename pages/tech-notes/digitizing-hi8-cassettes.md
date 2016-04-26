---
layout: page
title: Digitizing Hi8 cassettes
permalink: /digitizing-hi8-cassettes/
comments: true
tags: [video, audio, ffmpeg]
---

* TOC
{:toc}

Using

- For playback, a CCD-TRV118 (NTSC)
- For A/D conversion
  - [Diamond VC500](http://www.amazon.com/Diamond-VC500-Touch-Capture-Device/dp/B000VM60I8)
  - EZ Grabber software on Windows 7
- For compression, ffmpeg on Linux

## A/D conversion

To optimize quality, convert to raw video using the following EZ Grabber settings

- Video:
  - Video format: NTSC\_M
  - Video source = S-Video
  - Picture adjustment: All 127
- Record:
  - Record format: AVI

The older the cassettes, the shorter the conversion interval needed to avoid
synchronization problems. Intervals between 10 and 30 minutes worked OK.

Result is raw video:

{% highlight bash %}
$ ffmpeg -i raw-video.avi
[avi @ 0x1293960] non-interleaved AVI
Guessed Channel Layout for  Input Stream #0.0 : stereo
Input #0, avi, from 'raw-video.avi':
  Duration: 00:31:06.37, start: 0.000000, bitrate: 167412 kb/s
    Stream #0:0: Audio: pcm_s16le ([1][0][0][0] / 0x0001), 48000 Hz, 2 channels, s16, 1536 kb/s
    Stream #0:1: Video: rawvideo (UYVY / 0x59565955), uyvy422, 720x480, 165644 kb/s, 29.96 fps, 29.96 tbr, 29.96 tbn, 29.96 tbc
At least one output file must be specified
{% endhighlight %}

Only one audio channel actually contains audio, the other channel is empty.

## Compression

Compress video and pack in a Matroska container with uncompressed audio,
mapping the audio left channel to a single mono channel.  Using H.264 because
of its good quality, size and compatibility.

{% highlight bash %}
$ ffmpeg -i raw-video.avi -c:v libx264 -preset slow -crf 17 -c:a pcm_s16le -map_channel 0.0.0 video.mkv
{% endhighlight %}

Result:

{% highlight bash %}
$ ffmpeg -i video.mkv
Guessed Channel Layout for  Input Stream #0.1 : mono
Input #0, matroska,webm, from 'vido.mkv':
  Metadata:
    ENCODER         : Lavf56.4.101
  Duration: 00:31:07.09, start: 0.067000, bitrate: 7049 kb/s
    Stream #0:0: Video: h264 (High 4:2:2), yuv422p, 720x480, SAR 1:1 DAR 3:2, 29.98 fps, 29.98 tbr, 1k tbn, 59.97 tbc (default)
    Metadata:
      ENCODER         : Lavc56.1.100 libx264
    Stream #0:1: Audio: pcm_s16le, 48000 Hz, 1 channels, s16, 768 kb/s (default)
    Metadata:
      ENCODER         : Lavc56.1.100 pcm_s16le
 At least one output file must be specified
{% endhighlight %}

## References

- <https://trac.ffmpeg.org/wiki/AudioChannelManipulation>
