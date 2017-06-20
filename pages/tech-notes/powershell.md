---
layout: tech-note
title: PowerShell
permalink: /powershell/
first_published: 2017-06-19
last_updated: 2017-06-19
keywords: [windows, powershell]
---

* TOC
{:toc}

## Get process uptime

{% highlight powershell %}
New-TimeSpan -Start (Get-Process NameOfProcess).StartTime
{% endhighlight %}
