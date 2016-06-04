---
layout: tech-note
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

Explicitly describing the channel layout of the audio stream removes the
warning line `Guessed Channel Layout for  Input Stream #0.0 : stereo`. We
already know that the audio source is a stereo signal (see description of the
A/D converter device above)

{% highlight bash %}
$ ffmpeg -ac 2 -channel_layout stereo -i raw-video.avi
Input #0, avi, from 'raw-video.avi':
  Duration: 00:15:47.85, start: 0.000000, bitrate: 167435 kb/s
    Stream #0:0: Audio: pcm_s16le ([1][0][0][0] / 0x0001), 48000 Hz, stereo, s16, 1536 kb/s
    Stream #0:1: Video: rawvideo (UYVY / 0x59565955), uyvy422, 720x480, 165669 kb/s, 29.96 fps, 29.96 tbr, 29.96 tbn, 29.96 tbc
At least one output file must be specified
{% endhighlight %}

Both audio channels contain sound.

## Compression

Compress video and pack in a Matroska container with uncompressed/raw audio.
Use H.264 because of its good quality, size and compatibility.

{% highlight bash %}
$ ffmpeg -ac 2 -channel_layout stereo -i raw-video.avi -c:v libx264 -preset slow -crf 17 -pix_fmt yuv422p -c:a pcm_s16le video.mkv
Input #0, avi, from 'raw-video.avi':
  Duration: 00:15:47.85, start: 0.000000, bitrate: 167435 kb/s
    Stream #0:0: Audio: pcm_s16le ([1][0][0][0] / 0x0001), 48000 Hz, stereo, s16, 1536 kb/s
    Stream #0:1: Video: rawvideo (UYVY / 0x59565955), uyvy422, 720x480, 165669 kb/s, 29.96 fps, 29.96 tbr, 29.96 tbn, 29.96 tbc
[libx264 @ 0x19f9f60] using cpu capabilities: MMX2 SSE2Fast SSSE3 SSE4.1 Cache64
[libx264 @ 0x19f9f60] profile High 4:2:2, level 3.0, 4:2:2 8-bit
[libx264 @ 0x19f9f60] 264 - core 148 r2643 5c65704 - H.264/MPEG-4 AVC codec - Copyleft 2003-2015 - http://www.videolan.org/x264.html - options: cabac=1 ref=5 deblock=1:0:0 analyse=0x3:0x113 me=umh subme=8 psy=1 psy_rd=1.00:0.00 mixed_ref=1 me_range=16 chroma_me=1 trellis=1 8x8dct=1 cqm=0 deadzone=21,11 fast_pskip=1 chroma_qp_offset=-2 threads=3 lookahead_threads=1 sliced_threads=0 nr=0 decimate=1 interlaced=0 bluray_compat=0 constrained_intra=0 bframes=3 b_pyramid=2 b_adapt=2 b_bias=0 direct=3 weightb=1 open_gop=0 weightp=2 keyint=250 keyint_min=25 scenecut=40 intra_refresh=0 rc_lookahead=50 rc=crf mbtree=1 crf=17.0 qcomp=0.60 qpmin=0 qpmax=69 qpstep=4 ip_ratio=1.40 aq=1:1.00
Output #0, matroska, to 'video.mkv':
  Metadata:
    encoder         : Lavf56.40.101
    Stream #0:0: Video: h264 (libx264) (H264 / 0x34363248), yuv422p, 720x480, q=-1--1, 29.96 fps, 1k tbn, 29.96 tbc
    Metadata:
      encoder         : Lavc56.60.100 libx264
    Stream #0:1: Audio: pcm_s16le ([1][0][0][0] / 0x0001), 48000 Hz, stereo, s16, 1536 kb/s
    Metadata:
      encoder         : Lavc56.60.100 pcm_s16le
Stream mapping:
  Stream #0:1 -> #0:0 (rawvideo (native) -> h264 (libx264))
  Stream #0:0 -> #0:1 (pcm_s16le (native) -> pcm_s16le (native))
Press [q] to stop, [?] for help
frame=28397 fps=7.8 q=-1.0 Lsize= 1454961kB time=00:15:47.89 bitrate=12574.3kbits/s
video:1276353kB audio:177729kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: 0.060433%
[libx264 @ 0x19f9f60] frame I:118   Avg QP:17.61  size:109566
[libx264 @ 0x19f9f60] frame P:7342  Avg QP:20.55  size: 69551
[libx264 @ 0x19f9f60] frame B:20937 Avg QP:23.17  size: 37418
[libx264 @ 0x19f9f60] consecutive B-frames:  0.6%  0.7%  7.7% 91.0%
[libx264 @ 0x19f9f60] mb I  I16..4:  4.2% 74.8% 21.0%
[libx264 @ 0x19f9f60] mb P  I16..4:  2.2% 31.7%  5.1%  P16..4: 18.3% 26.7% 15.8%  0.0%  0.0%    skip: 0.1%
[libx264 @ 0x19f9f60] mb B  I16..4:  0.5%  5.4%  0.7%  B16..8: 36.0% 22.6%  7.5%  direct:26.5%  skip: 0.8%  L0:36.1% L1:26.6% BI:37.2%
[libx264 @ 0x19f9f60] 8x8 transform intra:81.0% inter:63.3%
[libx264 @ 0x19f9f60] direct mvs  spatial:100.0% temporal:0.0%
[libx264 @ 0x19f9f60] coded y,uvDC,uvAC intra: 89.9% 99.9% 99.7% inter: 76.6% 99.0% 81.4%
[libx264 @ 0x19f9f60] i16 v,h,dc,p: 48% 28% 13% 11%
[libx264 @ 0x19f9f60] i8 v,h,dc,ddl,ddr,vr,hd,vl,hu: 12% 14%  9%  6% 11% 11% 13%  9% 14%
[libx264 @ 0x19f9f60] i4 v,h,dc,ddl,ddr,vr,hd,vl,hu:  9% 24%  8%  6%  9%  8% 12%  8% 16%
[libx264 @ 0x19f9f60] i8c dc,h,v,p: 51% 32%  3% 14%
[libx264 @ 0x19f9f60] Weighted P-Frames: Y:14.0% UV:8.8%
[libx264 @ 0x19f9f60] ref P L0: 32.3% 11.2% 25.6% 14.8% 13.4%  2.4%  0.1%
[libx264 @ 0x19f9f60] ref B L0: 69.3% 21.0%  7.1%  2.5%
[libx264 @ 0x19f9f60] ref B L1: 92.3%  7.7%
[libx264 @ 0x19f9f60] kb/s:11031.20
{% endhighlight %}

If the command didn't include the options `ac`, `channel_layout` and/or
`pix_fmt`, *ffmpeg* would have guessed them while printing warnings. It's best
to be explicit about it since we already know the arguments to such options (we
know that the pixel format is `yuv422p` from the output of `ffmpeg -i
video.mkv`)

The result:

{% highlight bash %}
$ file video.mkv
video.mkv: Matroska data
$ ffmpeg -ac 2 -channel_layout stereo -i video.mkv
Input #0, matroska,webm, from 'video.mkv':
  Metadata:
    ENCODER         : Lavf56.40.101
  Duration: 00:15:47.89, start: 0.000000, bitrate: 12574 kb/s
    Stream #0:0: Video: h264 (High 4:2:2), yuv422p, 720x480, SAR 1:1 DAR 3:2, 29.96 fps, 29.96 tbr, 1k tbn, 59.92 tbc (default)
    Metadata:
      ENCODER         : Lavc56.60.100 libx264
      DURATION        : 00:15:47.846000000
    Stream #0:1: Audio: pcm_s16le, 48000 Hz, stereo, s16, 1536 kb/s (default)
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
- <http://ffmpeg.gusari.org/viewtopic.php?f=11&t=858>
- <http://ffmpeg.gusari.org/viewtopic.php?f=11&t=859>
