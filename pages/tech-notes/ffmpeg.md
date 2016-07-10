---
layout: tech-note
title: Notes on ffmpeg
permalink: /ffmpeg/
comments: true
tags: [video, audio, ffmpeg]
first_published: 2016-04-17
last_updated: 2016-07-10
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

### With microphone

Close `pavucontrol` and run below to load loopback module

{% highlight bash %}
$ pactl load-module module-loopback latency_msec=1
{% endhighlight %}

Open `pavucontrol` again, and configure using below pictures as guide

{% capture imgtext %}Playback tab{% endcapture %}
![{{ imgtext }}]({{ site.baseurl }}/{{ site.images_dir }}/2016/screencast_pulseaudio_loopback_00.png "{{ imgtext }}")

{% capture imgtext %}Recording tab{% endcapture %}
![{{ imgtext }}]({{ site.baseurl }}/{{ site.images_dir }}/2016/screencast_pulseaudio_loopback_01.png "{{ imgtext }}")

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

- <http://www.video2gif.org/about.html>
- <https://giphy.com/>
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

As fast as previous command, more accurate, with re-encoding

{% highlight bash %}
ffmpeg -ss 00:18:20 -i $in -t 10 $out
{% endhighlight %}

Slower, CPU-intensive, more accurate, with re-encoding

{% highlight bash %}
ffmpeg -i $in -ss 00:18:20 -to 00:18:30 $out
{% endhighlight %}

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
- <https://wiki.archlinux.org/index.php/FFmpeg>
- <https://trac.ffmpeg.org/wiki/Encode/H.264>
- <https://trac.ffmpeg.org/wiki/Capture/Desktop>
- <https://ffmpeg.org/ffmpeg-devices.html>
- <http://wiki.oz9aec.net/index.php/High_quality_screen_capture_with_Ffmpeg>
- <https://askubuntu.com/questions/123798/how-to-hear-my-voice-in-speakers-with-a-mic>
- <http://blog.superuser.com/2012/02/24/ffmpeg-the-ultimate-video-and-audio-manipulation-tool/>
- <https://trac.ffmpeg.org/wiki>
