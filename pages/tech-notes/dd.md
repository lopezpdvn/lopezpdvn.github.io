---
layout: page
title: Notes on dd
permalink: /dd/
comments: true
tags: [dd, file_system]
---

## Monitoring/logging progress

While converting/copying big files, log progress by sending `USR1` signal to
the process. For example to log to a file

{% highlight bash %}
$ progressFile=/path/to/progress/file.txt
$ dd if=/source/path of=/destination/path >> $progressFile 2>&1
{% endhighlight %}

Then in another terminal get the PID of the dd process

{% highlight bash %}
$ ps aux | grep dd # get PID
<...>
$ pid=<PID_of_dd_process>
{% endhighlight %}

And send signal every *n* seconds

{% highlight bash %}
$ n=60
$ watch --chgexit --interval $n kill -USR1 $pid
{% endhighlight %}

## Resuming

If the dd process prematurely exits, you can resume by using the option `seek`
and/or `skip`. Check the logs of the process and calculate how many blocks or
bytes remain to be copied.
