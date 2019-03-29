---
layout: tech-note
title: YouTube
permalink: /youtube/
comments: true
first_published: 2019-03-29
last_updated: 2019-03-29
keywords: [youtube, video]
---

* TOC
{:toc}

## Personal account

I'm on YouTube as
[dreilopz](https://www.youtube.com/user/dreilopz).

## Developer console control

{% highlight javascript %}
const playCmd = () => $('.video-stream').play();
let delay = 1000;
let videoTimer = setTimeout(playCmd, delay);
// clearTimeout(videoTimer);
{% endhighlight %}
