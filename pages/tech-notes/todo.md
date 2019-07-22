---
layout: tech-note
title: "tech notes TODO"
tags: [tech-notes]
comments: true
first_published: 2019-07-15
last_updated: 2019-07-15
permalink: /tech-notes/todo/
redirect_from: /todo/
---

* TOC
{:toc}


## vnc root permissions

```
xhost +si:localuser:root
```

## anki randomize new cards.

search = `is:new -is:suspended -tag:<excluded_tag>`.

select cards, _Cards_ > _Reposition_.

- start position: 0
- step: 1
- randomize order: check
- shift position of existing cards: check

## instagram ffmpeg

```
INFILE="./input.gif"
loops=4
OUTFILE=output.mp4
ffmpeg -i "${INFILE}" \
       -filter_complex "loop=${loops}:32767:0,scale=trunc(iw/2)*2:trunc(ih/2)*2" \
       -f mp4 \
       -y \
       -preset slow \
       -pix_fmt yuv420p \
  "${OUTFILE}" >/dev/null 2>&1
```

## windows 10 command line notifications and event

Message is posted to Windows logs _System_, source _Application Popup_, level
_Information_.

{% highlight batch %}
C:\Users\pedro.lopez>msg * /TIME:1 /V "my dudeeee"
Sending message to session Console, display time 1
Async message sent to session Console
{% endhighlight %}

<br/>

---
