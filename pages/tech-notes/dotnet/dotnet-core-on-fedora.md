---
layout: tech-note
title: Notes on .NET Core on Fedora
permalink: /dotnet/dotnet-core-on-fedora/
comments: true
first_published: 2017-07-19
last_updated: 2019-07-19
keywords: [csharp, dotnet, dotnetcore, linux, fedora]
---

* TOC
{:toc}

Use packages provided by
[@dotnet-sig Group](https://copr.fedorainfracloud.org/groups/g/dotnet-sig/coprs/).

{% highlight bash %}
dnf copr enable @dotnet-sig/dotnet
dnf install dotnet-sdk-2.2
{% endhighlight %}
