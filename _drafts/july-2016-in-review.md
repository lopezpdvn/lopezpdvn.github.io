---
layout: post
title: "July 2016 in review"
date: 2016-07-31
lang: en
categories: en
tags: [en, month-in-review, tech_notes]
comments: true
permalink: /july-2016-in-review/
excerpt: July 2016 personal review, summary of activities, misc notes...
---

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}

This is the *July 2016 in review* post. The previous monthly review post is
[here][june-review].  The contents are:

* TOC
{:toc}

[june-review]: {% post_url 2016/2016-07-03-june-2016-in-review %}

## timeman #############################################################

I started the [timeman][] project, a Python 3 package that provides simple
types for time management. It is actually a refactored port of an personal old
Python 2 project I worked on a few years ago.

[timeman]: {{ github_prefix }}/timeman "timeman: Simple time management types"

## Public code repositories activity ###################################

Progress on projects:

- [Personal website][]. [*35 commits*]:
  - General maintenance and miscellaneous content
  - Updated/added [tech notes][] on
    - [ffmpeg][]: screencast on Linux w/ PulseAudio + microphone with format
      H.264+Vorbis+Matroska, video 2 GIF
    - [S.M.A.R.T.][]: lifetime/age, short and long tests
    - [ExifTool][]: read/remove all tags, use date/time shift feature, simple
      script to write metadata
    - [Kdenlive][]: Installation on Fedora systems and
      [video](https://www.youtube.com/watch?v=o8QxlBQBEz0) about simple POSIX
      shell cut/trim
    - [digiKam][]: Non-simultaneous multiple instances & DB cleanup 
    - [GIMP][]: Adding backgrounds to images without it, converting images to
      black and white or grayscale
- [timeman][]. [*10 commits*]. See section [timeman](#timeman).
  - Simple usage via scripts
- [dotfiles][]. [*1 commit*]. Added alias for datetime in
  [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

**46 commits total**.

[Personal website]: {{ github_prefix }}/lopezpdvn.github.io "Pedro Ivan Lopez's website"
[dotfiles]: {{ github_prefix }}/dotfiles "Misc configuration files and directories"
[tech notes]: {{ site.baseurl }}/tech-notes
[ffmpeg]: {{ site.baseurl }}/ffmpeg "ffmpeg"
[S.M.A.R.T.]: {{ site.baseurl }}/smart "S.M.A.R.T."
[Kdenlive]: {{ site.baseurl }}/kdenlive "Kdenlive"
[ExifTool]: {{ site.baseurl }}/exiftool "ExifTool"
[digiKam]: {{ site.baseurl }}/digikam "digiKam"
[GIMP]: {{ site.baseurl }}/gimp "GIMP"

## Philanthropy #######################################################

I made a donation to the [SENS Research Foundation][] through the
[Lifespan.io / Life Extension Advocacy Foundation][] to help with
their crowdfunding campaign for the [OncoSENS Control ALT Delete Cancer][]
project.  At the time of this writing, the total amount pledged is TODO USD
backed by TODO donors. The campaign ends on August 18, 2016.

[Folding@Home during July][fah-stats] I scored TODO points, completed TODO work
units and ranked TODO out of all the members of [The Longevity Meme team][],
overtaking fellow folder TODO. My total score is TODO at the time of this
writing.  A graph of total daily production history during July can be found
[here][fah-jun-graph].

[SENS Research Foundation]: http://sens.org "SENS Research Foundation"
[Lifespan.io / Life Extension Advocacy Foundation]:https://www.lifespan.io  "Lifespan.io | Crowdfunding the Cure for Aging"
[OncoSENS Control ALT Delete Cancer]: https://www.lifespan.io/campaigns/sens-control-alt-delete-cancer/ "OncoSENS Control ALT Delete Cancer"
[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-jun-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2016/folding_at_home_stats_july_2016.png

## Other ###############################################################

- My personal website got TODO views.

- Published a screencast [video](https://www.youtube.com/watch?v=o8QxlBQBEz0)
  about Kdenlive

<br/>

---
