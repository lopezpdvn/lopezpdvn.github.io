---
layout: page
title: Digitizing VHS cassettes
permalink: /digitizing-vhs-cassettes/
comments: true
tags: [video, audio, ffmpeg]
---

* TOC
{:toc}

Using

- For playback, a SAMSUNG SV-J160UM
- For A/D conversion
  - [Diamond VC500](http://www.amazon.com/Diamond-VC500-Touch-Capture-Device/dp/B000VM60I8)
  - EZ Grabber software on Windows 7
- For compression, ffmpeg on Linux

## A/D conversion

To optimize quality, convert to raw video using the following EZ Grabber settings

- Video:
  - Video format: NTSC\_M
  - Video source = Composite
  - Picture adjustment: All 127
- Record:
  - Record format: AVI

The older the cassettes, the shorter the conversion interval needed to avoid
synchronization problems. Intervals between 10 and 30 minutes worked OK.

Result is raw video:

{% highlight bash %}
$ file raw-video.avi
raw-video.avi: RIFF (little-endian) data, AVI, 720 x 480, ~30 fps,
$ ffmpeg -i raw-video.avi
Guessed Channel Layout for  Input Stream #0.0 : stereo
Input #0, avi, from 'raw-video.avi':
  Duration: 00:15:47.85, start: 0.000000, bitrate: 167435 kb/s
    Stream #0:0: Audio: pcm_s16le ([1][0][0][0] / 0x0001), 48000 Hz, 2 channels, s16, 1536 kb/s
    Stream #0:1: Video: rawvideo (UYVY / 0x59565955), uyvy422, 720x480, 165669 kb/s, 29.96 fps, 29.96 tbr, 29.96 tbn, 29.96 tbc
At least one output file must be specified
{% endhighlight %}

Both audio channels contain sound.

## Compression

Compress video and pack in a Matroska container with uncompressed/raw audio.
Use H.264 because of its good quality, size and compatibility.

{% highlight bash %}
$ ffmpeg -i raw-video.avi -c:v libx264 -preset slow -crf 17 -c:a pcm_s16le video.mkv
{% endhighlight %}

Result:

{% highlight bash %}
$ file video.mkv
video.mkv: Matroska data
$ ffmpeg -i video.mkv
Guessed Channel Layout for  Input Stream #0.1 : stereo
Input #0, matroska,webm, from 'video.mkv':
  Metadata:
    ENCODER         : Lavf56.40.101
  Duration: 00:15:47.89, start: 0.000000, bitrate: 12574 kb/s
    Stream #0:0: Video: h264 (High 4:2:2), yuv422p, 720x480, SAR 1:1 DAR 3:2, 29.96 fps, 29.96 tbr, 1k tbn, 59.92 tbc (default)
    Metadata:
      ENCODER         : Lavc56.60.100 libx264
      DURATION        : 00:15:47.846000000
    Stream #0:1: Audio: pcm_s16le, 48000 Hz, 2 channels, s16, 1536 kb/s (default)
    Metadata:
      ENCODER         : Lavc56.60.100 pcm_s16le
      DURATION        : 00:15:47.890000000
At least one output file must be specified
{% endhighlight %}

## Audio

To extract the raw audio from the Matroska container without encoding

{% highlight bash %}
$ ffmpeg -i video.mkv -f s16le -acodec pcm_s16le video_audio.raw
{% endhighlight %}

Note that the arguments to `f` and `acodec` options match the description of
the audio stream (#0.0) in the output of `ffmpeg -i video.mkv`. The extracted
audio is literally raw data:

{% highlight bash %}
$ file video_audio.raw
video_audio.raw: data
{% endhighlight %}

Neither *ffmpeg* nor *vlc* know how to deal with such file without the user
providing some help. *ffmpeg* thinks it's video data

{% highlight bash %}
$ ffmpeg -i video_audio.raw
[image2 @ 0x9c1fe60] Format image2 detected only with low score of 5, misdetection possible!
[rawvideo @ 0x9c20e40] Invalid pixel format.
[image2 @ 0x9c1fe60] Failed to open codec in av_find_stream_info
[rawvideo @ 0x9c20e40] Invalid pixel format.
[image2 @ 0x9c1fe60] Could not find codec parameters for stream 0 (Video: rawvideo, none): unspecified size
Consider increasing the value for the 'analyzeduration' and 'probesize' options
video_audio.raw: could not find codec parameters
Input #0, image2, from 'video_audio.raw':
  Duration: 00:00:00.04, start: 0.000000, bitrate: N/A
    Stream #0:0: Video: rawvideo, none, 25 tbr, 25 tbn, 25 tbc
At least one output file must be specified
{% endhighlight %}

*vlc* will just show you an error. Providing a little guidance works, for
example below options will result in *vlc* correctly playing the file

{% highlight bash %}
$ vlc --demux=rawaud --rawaud-samplerate 48000 --rawaud-channels 2 video_audio.raw &
{% endhighlight %}

Specify the input format to *ffmpeg* like this

{% highlight bash %}
$ ffmpeg -f s16le -ar 48k -ac 2 -i video_audio.raw
[s16le @ 0x9bd7e80] Estimating duration from bitrate, this may be inaccurate
Guessed Channel Layout for  Input Stream #0.0 : stereo
Input #0, s16le, from 'video_audio.raw':
  Duration: 00:15:47.89, bitrate: 1536 kb/s
    Stream #0:0: Audio: pcm_s16le, 48000 Hz, 2 channels, s16, 1536 kb/s
At least one output file must be specified
{% endhighlight %}

Note that you have to be pretty explicit about the nature of the audio data to
both *vlc* and *ffmpeg* and that the description of the stream matches the
output of `ffmpeg -i video.mkv` in the previous section.

## References

- <https://trac.ffmpeg.org/wiki/AudioChannelManipulation>
- [Digitizing Hi8 cassettes]({{ site.baseurl }}/digitizing-hi8-cassettes)
