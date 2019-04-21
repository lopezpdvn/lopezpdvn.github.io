---
layout: tech-note
title: Instagram
permalink: /instagram/
comments: true
first_published: 2019-01-05
last_updated: 2019-04-21
keywords: [instagram, social]
---

* TOC
{:toc}

## Personal account

I'm on Instagram as
[lopezpdvn](https://www.instagram.com/lopezpdvn "lopezpdvn@Instagram").

## Edit video to post

Use
[this command](https://github.com/cspeterson/dotfiles/blob/332efc4a9151ce26f4de786250a809aa7af1077b/.bin/instagif#L73)
found at [cspeterson](https://github.com/cspeterson)'s
[dotfiles](https://github.com/cspeterson/dotfiles).

Copied here for convenience

{% highlight bash %}
$ ffmpeg -i "${INFILE}" \
       -filter_complex "loop=${loops}:32767:0,scale=trunc(iw/2)*2:trunc(ih/2)*2" \
       -f mp4 \
       -y \
       -preset slow \
       -pix_fmt yuv420p \
  "${OUTFILE}" >/dev/null 2>&1
{% endhighlight %}
