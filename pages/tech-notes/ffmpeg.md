---
layout: tech-note
title: Notes on ffmpeg
permalink: /ffmpeg/
comments: true
tags: [video, audio, ffmpeg]
first_published: 2016-04-17
last_updated: 2016-12-22
---

* TOC
{:toc}

## Transcode audio with metadata

`ffmpeg` and `quodlibet`/`operon`

{% gist lopezpdvn/f83112e070e3c9e791e170059a41cd7c ffmpeg_quodlibet_operon.sh %}

## Encode/compress raw video and audio

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

### With microphone

Close `pavucontrol` and run below to load loopback module

{% highlight bash %}
$ pactl load-module module-loopback latency_msec=1
{% endhighlight %}

Open `pavucontrol` again, and configure using below pictures as guide

{% capture imgtext %}Playback tab{% endcapture %}
![{{ imgtext }}]({{ site.baseurl }}/{{ site.images_dir }}/2016/screencast_pulseaudio_loopback_00.png "{{ imgtext }}")

Substitute below level to 70%

{% capture imgtext %}Recording tab{% endcapture %}
![{{ imgtext }}]({{ site.baseurl }}/{{ site.images_dir }}/2016/screencast_pulseaudio_loopback_01.png "{{ imgtext }}")

Substitute below level *Built-in Audio Analog Stereo* to 70%

{% capture imgtext %}Input Devices tab{% endcapture %}
![{{ imgtext }}]({{ site.baseurl }}/{{ site.images_dir }}/2016/screencast_pulseaudio_loopback_02.png "{{ imgtext }}")

Then repeat steps [above](#screencast-on-linux-with-pulseaudio).

## Video to GIF

Manually extract portion of video into a video file adding extra stuff like
effects, subtitles, merges with images, etc.

Resize video to desired size of GIF, using only one coordinate

{% highlight bash %}
$ ffmpeg -i video_source.mp4 -vf scale=-1:720 video_source_resized.mp4
{% endhighlight %}

If you get an error about audio encoding, just copy/reencode the same audio

{% highlight bash %}
$ ffmpeg -i video_source.mp4 -vf scale=-1:720 -c:a copy video_source_resized.mp4
{% endhighlight %}

File extension `mp4` refers only to container, is not that relevant. Use
whatever the original video extension is.

Finally, convert to GIF

{% highlight bash %}
$ ffmpeg -i video_source_resized.mp4 -b 2048k video.gif
{% endhighlight %}

### Online

- <https://imgur.com/vidgif>. Video must be hosted elsewhere. Creates both
  video and GIF; to get GIF add `.gif` to the URL.
- <https://giphy.com/>
- <http://www.video2gif.org/about.html>
- <https://imgflip.com/>

## Trim/cut video to video

{% highlight bash %}
$ in=/path/to/input/file
$ out=/path/to/output/file
{% endhighlight %}

Trim/cut from minute 18:20 to 18:30. Try following commands in descending order
of preference/priority.

Fast without re-encoding

{% highlight bash %}
$ ffmpeg -i $in -ss 00:18:20 -c:v copy -c:a copy -to 00:18:30 $out
{% endhighlight %}

About as fast as previous, no re-encoding

{% highlight bash %}
$ ffmpeg -ss 00:18:20 -i $in -c:v copy -c:a copy -t 10 $out
{% endhighlight %}

Slower, more accurate, with re-encoding

{% highlight bash %}
$ ffmpeg -ss 00:18:20 -i $in -t 10 $out
{% endhighlight %}

Slower, CPU-intensive, more accurate, with re-encoding

{% highlight bash %}
$ ffmpeg -i $in -ss 00:18:20 -to 00:18:30 $out
{% endhighlight %}

Short Python script

{% gist lopezpdvn/dea4a3301a58335525a9aea7aa1cdb4e ffmpeg_trim_cut_video2video.py %}

## Misc

- Use H.264 because of its good quality, size and compatibility.

- Use MP4 if using audio compression, otherwise use Matroska.

- When dealing with raw audio (PCM) specify the format with the `-f` option
  ([for example]({{ site.baseurl }}/digitizing-hi8-cassettes/#audio)).

- Don't try to map audio channels without re-encoding
  ([info](http://comments.gmane.org/gmane.comp.video.ffmpeg.user/53517)).

## Videos with wrong orientation in metadata

Sometimes when recording from a device like a cellphone or a tablet, the
resulting video will play as if it was recorded in portrait mode

{% highlight bash %}
$ ffprobe VID_20160924_012917.mp4
ffprobe version 2.8.7 Copyright (c) 2007-2016 the FFmpeg developers
  built with gcc 5.3.1 (GCC) 20160406 (Red Hat 5.3.1-6)
  libavutil      54. 31.100 / 54. 31.100
  libavcodec     56. 60.100 / 56. 60.100
  libavformat    56. 40.101 / 56. 40.101
  libavdevice    56.  4.100 / 56.  4.100
  libavfilter     5. 40.101 /  5. 40.101
  libavresample   2.  1.  0 /  2.  1.  0
  libswscale      3.  1.101 /  3.  1.101
  libswresample   1.  2.101 /  1.  2.101
  libpostproc    53.  3.100 / 53.  3.100
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'VID_20160924_012917.mp4':
  Metadata:
    major_brand     : mp42
    minor_version   : 0
    compatible_brands: isommp42
    creation_time   : 2016-09-24 06:33:43
  Duration: 00:04:24.47, start: 0.000000, bitrate: 12234 kb/s
    Stream #0:0(eng): Video: h264 (Constrained Baseline) (avc1 / 0x31637661), yuv420p, 1920x1080, 12130 kb/s, SAR 1:1 DAR 16:9, 30.33 fps, 30 tbr, 90k tbn, 180k tbc (default)
    Metadata:
      rotate          : 90
      creation_time   : 2016-09-24 06:33:43
      handler_name    : VideoHandle
    Side data:
      displaymatrix: rotation of -90.00 degrees
    Stream #0:1(eng): Audio: aac (LC) (mp4a / 0x6134706D), 48000 Hz, mono, fltp, 96 kb/s (default)
    Metadata:
      creation_time   : 2016-09-24 06:33:43
      handler_name    : SoundHandle
{% endhighlight %}

Below command fixes it without re-encoding.

{% highlight bash %}
$ ffmpeg -i VID_20160924_012917.mp4  -c copy -metadata:s:v:0 rotate=0 output.mp4
{% endhighlight %}

## Map video and audio streams into single output

Merge the video stream of `normal_export.mkv` and audio stream of
`normal_export_Audio_1.mkv` into a single container MKV
`normal_export_final.mkv`.

{% highlight bash %}
$ ffmpeg -i normal_export.mkv  -i normal_export_Audio_1.mkv -map 0:0 -map 1:1 -c:v copy -c:a copy normal_export_final.mkv
{% endhighlight %}

## References

- <https://trac.ffmpeg.org/wiki/AudioChannelManipulation>
- <https://trac.ffmpeg.org/wiki/audio%20types>
- <https://wiki.archlinux.org/index.php/FFmpeg>
- <https://trac.ffmpeg.org/wiki/Encode/H.264>
- <https://trac.ffmpeg.org/wiki/Capture/Desktop>
- <https://ffmpeg.org/ffmpeg-devices.html>
- <http://wiki.oz9aec.net/index.php/High_quality_screen_capture_with_Ffmpeg>
- <https://askubuntu.com/questions/123798/how-to-hear-my-voice-in-speakers-with-a-mic>
- <http://blog.superuser.com/2012/02/24/ffmpeg-the-ultimate-video-and-audio-manipulation-tool/>
- <https://trac.ffmpeg.org/wiki>

<!---
Example of video of hamster jumping to Low Rider song (crop, black/white square,
text on screen, instagram size...): https://1drv.ms/u/s!AlNxrGhEcYyqvTIhoD6HJUyBaUaD?e=tksCO3
--->
