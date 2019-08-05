---
layout: tech-note
title: Recurrent sound alarm on Windows
permalink: /recurrent-sound-alarm-windows/
first_published: 2019-08-05
last_updated: 2019-08-05
keywords: [windows, cron, cygwin, time]
---

* TOC
{:toc}

Example, `vim alarm_00.bat`

{% highlight batch %}
"%ProgramFiles%\Anki\mplayer.exe" -really-quiet C:\Windows\Media\Ring10.wav
{% endhighlight %}

Add to cygwin's crontab.

{% highlight cron %}
*  0  *  *  *   /home/username/alarm_00.bat
{% endhighlight %}
