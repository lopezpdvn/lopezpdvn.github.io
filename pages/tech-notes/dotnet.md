---
layout: tech-note
title: Notes on .NET
permalink: /dotnet/
comments: true
first_published: 2016-08-18
last_updated: 2016-08-18
keywords: [csharp, dotnet, dotnetcore]
---

* TOC
{:toc}

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
