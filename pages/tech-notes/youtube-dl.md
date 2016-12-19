---
layout: tech-note
title: "youtube-dl"
lang: en
categories: en
keywords: [media, youtube, youtube-dl, video, podcast, blog]
comments: true
first_published: 2016-12-19
last_updated: 2016-12-19
permalink: /youtube-dl/
---

* TOC
{:toc}

Ways in which I frequently use `youtube-dl`.

## Cheatsheet

List available formats

{% highlight bash %}
$ youtube-dl -F URL [URL...]
{% endhighlight %}

Extract audio. To keep video, add option `-k`.

{% highlight bash %}
$ youtube-dl -x --audio-format mp3 --audio-quality 320k --embed-thumbnail --restrict-filenames URL [URL...]
{% endhighlight %}

Download to different location `another/dir`

{% highlight bash %}
$ youtube-dl -o 'another/dir/%(title)s-%(id)s.%(ext)s'
{% endhighlight %}

To extract audio files to a mounted remote file system without uploading the
video to such remote file system, you need to download and extract locally, and
then move/copy to the remote file system. For example, change current directory
to an empty directory, execute `youtube-dl` storing everything in current
directory, and then do something like `mv -v *mp3 </path/to/remote/dir>`

<!---
{% highlight bash %}
$ youtube-dl --restrict-filenames -f bestaudio -x --audio-format mp3 --audio-quality 320k -k --prefer-ffmpeg -a -
$ youtube-dl -x --audio-format mp3 --audio-quality 320k --embed-thumbnail --restrict-filenames o 'another/dir/%(title)s-%(id)s.%(ext)s' URL [URL...]
{% endhighlight %}
-->
