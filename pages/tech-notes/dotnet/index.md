---
layout: tech-note
title: Notes on .NET
permalink: /dotnet/
comments: true
first_published: 2016-08-18
last_updated: 2020-07-06
keywords: [csharp, dotnet, dotnetcore]
---

* TOC
{:toc}

- [NET Core on Fedora](./dotnet-core-on-fedora).
- [Profiling](./profiling)

## .NET Core on Linux

{% highlight bash %}
$ dotnet --version
1.0.0-preview2-003121
{% endhighlight %}

Opt out of the telemetry feature

{% highlight bash %}
$ export DOTNET_CLI_TELEMETRY_OPTOUT=1
{% endhighlight %}

Avoid segmentation faults on kernel 4.6.x (see issue
[6016](https://github.com/dotnet/coreclr/issues/6016))

{% highlight bash %}
$ export COMPlus_INTERNAL_ThreadSuspendInjection=0
{% endhighlight %}

## Performance measurement

For quick performance measurements, use good old
[System.Diagnostics.Stopwatch][sw]. On Windows, a simple option for logging the
sampling of elapsed time is to write to the Event Log via
[System.Diagnostics.EventLog][evtlog] class.

Compile in release mode, close applications and stop services that are not
needed. Don't attach debuggers to the processes that you are measuring.

[sw]: https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.stopwatch
[evtlog]: https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.eventlog
