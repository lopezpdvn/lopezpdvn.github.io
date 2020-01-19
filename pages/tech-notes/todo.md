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

## images to gif

keywords: png, jpg, image

If they're just a handful, manually screen record to GIF with ShareX.

<br/>

## OneDrive file upload max size

OneDrive = 100 GB, OneDrive for Business = 15 GB (will be 100 GB sometime in 2020),
[source](https://support.office.com/en-us/article/invalid-file-names-and-file-types-in-onedrive-onedrive-for-business-and-sharepoint-64883a5d-228e-48f5-b3d2-eb39e07630fa?ui=en-US&rs=en-US&ad=US#individualfilesize).

## Unicode most used characters

1. not an element of, ∉, ∉∉∉∉
1. element of, ∈, ∈∈∈∈

---
