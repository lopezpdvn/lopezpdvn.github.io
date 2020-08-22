---
layout: tech-note
title: Build/add/ship build datetime with Visual Studio
permalink: /visual-studio/build-build-datetime/
first_published: 2020-07-03
last_updated: 2020-08-22
keywords: [.net, visualstudio, c#]
---

* TOC
{:toc}

1. Create folder `Properties` in `ProjectDir`

1. In tab _Resources_ of project properties, add a new text file

1. Add command to pre-build event

   {% highlight batch %}
   echo %date% %time% > "$(ProjectDir)\Resources\BuildDateTime.txt"
   {% endhighlight %}

4. In code retrieve

   {% highlight csharp %}
   string x = Properties.Resources.BuildDateTime;
   {% endhighlight %}
