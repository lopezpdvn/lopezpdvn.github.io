---
layout: tech-note
title: Digitizing Hi8 cassettes
permalink: /digitizing-hi8-cassettes/
comments: true
tags: [video, audio, ffmpeg]
first_published: 2016-04-16
last_updated: 2016-06-30
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

### Script

Compress raw video into Matroska container, see
[ffmpeg]({{ site.baseurl }}/ffmpeg "ffmpeg") &
[Digitizing VHS cassettes]({{ site.baseurl }}/digitizing-vhs-cassettes).

{% gist lopezpdvn/bbbf72e2ccc33c0e35b130eba0108e59 compress_raw_video.sh %}

## Audio

To extract the raw audio from the Matroska container without encoding

{% highlight bash %}
$ ffmpeg -i video.mkv -f s16le -acodec pcm_s16le video_audio.raw
{% endhighlight %}

Note that the arguments to `f` and `acodec` options match the description of
the audio stream (#0.1) in the output of `ffmpeg -i video.mkv`. The extracted
audio is literally raw:

{% highlight bash %}
$ file video_audio.raw
video_audio.raw: data
{% endhighlight %}

Neither *ffmpeg* nor *vlc* know how to deal with such file without the user
providing some help. *ffmpeg* thinks it's video data

{% highlight bash %}
$ ffmpeg -i video_audio.raw
[image2 @ 0x1de86a0] Format image2 detected only with low score of 5, misdetection possible!
[rawvideo @ 0x1de9ac0] Invalid pixel format.
[image2 @ 0x1de86a0] Failed to open codec in av_find_stream_info
[rawvideo @ 0x1de9ac0] Invalid pixel format.
[image2 @ 0x1de86a0] Could not find codec parameters for stream 0 (Video: rawvideo, none): unspecified size
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
$ vlc --demux=rawaud --rawaud-samplerate 44100 --rawaud-channels 1 video_audio.raw &
{% endhighlight %}

Specify the input format to *ffmpeg* like this

{% highlight bash %}
$ ffmpeg -f s16le -i video_audio.raw
[s16le @ 0x7166a0] Estimating duration from bitrate, this may be inaccurate
Guessed Channel Layout for  Input Stream #0.0 : mono
Input #0, s16le, from 'video_audio.raw':
  Duration: 00:11:37.56, bitrate: 705 kb/s
    Stream #0:0: Audio: pcm_s16le, 44100 Hz, 1 channels, s16, 705 kb/s
At least one output file must be specified
{% endhighlight %}

Note that the description of the stream matches the output of `ffmpeg -i
video.mkv` in the previous section.  The duration is different because it's
actually a different video than the previous section.

## References

- <https://trac.ffmpeg.org/wiki/AudioChannelManipulation>
- <https://trac.ffmpeg.org/wiki/audio%20types>
