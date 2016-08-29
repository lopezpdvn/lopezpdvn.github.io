---
layout: post
title: "August 2016 in review"
date: 2016-08-29
lang: en
categories: en
tags: [en, month-in-review, tech_notes]
comments: true
permalink: /august-2016-in-review/
excerpt: August 2016 personal review, summary of activities, misc notes...
---

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}
{% capture gist_prefix %}https://gist.github.com/{{ site.github_username }}{% endcapture %}

This is the *August 2016 in review* post. The previous monthly review post is
[here][july-review].  The contents are:

* TOC
{:toc}

[july-review]: {% post_url 2016/2016-08-01-july-2016-in-review %}

## Public code repositories activity ###################################

Progress on projects:

- [Personal website][]. [*TODO commits*]:
  - General maintenance and miscellaneous content
  - Implemented automatic generation of text/image links to social network
    profiles
  - Added [tech notes][]:
    - [ImageMagick][]:
      - Short [Python script][] to recursively convert images in a directory
      - Create thumbnails in PNG format
    - [.NET][]: Avoid segmentation faults on kernel 4.6.x
- [syspol][]: [*TODO commits*] Environment variables for sound alarm files
- [timeman][]: [*TODO commits*]:
  - Script implements syspol sound alarms environment variables
  - Added functions for interactive use
- [pysyspol][]: [*TODO commits*] Added script to randomize units of a paragraph
- [dotfiles][]: [*TODO commits*] .NET Core and Visual Studio Code configuration
- [Data Structures Algorithms in C#][]: [*TODO commits*] Ported to .NET core
- [resources-viewer][]: [*TODO commits*] Browser based static app to view
  resources

**TODO commits total**.

[Personal website]: {{ github_prefix }}/lopezpdvn.github.io "Pedro Ivan Lopez's website"
[syspol]: {{ github_prefix }}/syspol "syspol - System Policy"
[timeman]: {{ github_prefix }}/timeman "timeman: Simple time management types"
[pysyspol]: {{ github_prefix }}/pysyspol "syspol on CPython"
[tech notes]: {{ site.baseurl }}/tech-notes
[ImageMagick]: {{ site.baseurl }}/imagemagick "ImageMagick"
[Python script]: {{ gist_prefix }}/37c50a64aec0cbd8b538fc38a786db2a#file-mogrify-recursive-py
[.NET]: {{ site.baseurl }}/dotnet ".NET"
[dotfiles]: {{ github_prefix }}/dotfiles "Misc configuration files and directories"
[Data Structures Algorithms in C#]: {{ github_prefix }}/DataStructuresAlgorithmsCSharp "Data structures and algorithms in C#"
[resources-viewer]: {{ github_prefix }}/resources-viewer "Browser based static app to view resources"

## Philanthropy #######################################################

[Folding@Home during August][fah-stats] I scored TODO points, completed TODO
work units and ranked TODO out of all the members of
[The Longevity Meme team][]. My total score is TODO at the time of this
writing.  A graph of total daily production history during August can be found
[here][fah-jun-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-jun-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2016/folding_at_home_stats_august_2016.png

## Other ###############################################################

- My personal website got TODO views.

<br/>

---
