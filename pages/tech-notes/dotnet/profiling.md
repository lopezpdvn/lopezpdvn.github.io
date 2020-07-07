---
layout: tech-note
title: Profiling .NET programs
permalink: /dotnet/profiling
comments: true
first_published: 2020-07-06
last_updated: 2020-07-06
keywords: [csharp, dotnet, profiling]
---

* TOC
{:toc}

## Performance measurement

For quick performance measurements, use good old
[System.Diagnostics.Stopwatch][sw].

Writing to a text file/log is best.

On Windows, a simple option for logging the sampling of elapsed time is to
write to the Event Log via [System.Diagnostics.EventLog][evtlog] class.

At the top of the source code files define symbol `PROFILE` with directive
`#define`. Then conditionally compile logging lines

{% highlight csharp %}
#if (PROFILE)
private System.Diagnostics.Stopwatch Stopwatch =
    new System.Diagnostics.Stopwatch();
#endif
...
#if (PROFILE)
Stopwatch.Restart();
SampleTime(() =>
  $"{Stopwatch.ElapsedMilliseconds}: {nameof(methodName)}");
#endif
...
#if (PROFILE)
Stopwatch.Restart();
SampleTime(() =>
  $"{Stopwatch.ElapsedMilliseconds}: {nameof(otherMethodName)}");
#endif
#endif
{% endhighlight %}

Where `SampleTime` writes to a log.

Compile in release mode, close applications and stop services that are not
needed. Don't attach debuggers to the processes that you are measuring.

Run the test and retrieve the log files and export to spreadsheet, where you
will substract the current sample from the next to calculate the deltas. Then,
calculate the percentages of the deltas with respect to the total execution
time.

You can do any other kind of aggregation and analysis with the data once it is
in the spreadsheet.

[sw]: https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.stopwatch
[evtlog]: https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.eventlog
