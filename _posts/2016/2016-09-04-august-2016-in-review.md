---
layout: post
title: "August 2016 in review"
date: 2016-09-04
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

- [Personal website][]. [*31 commits*]:
  - General maintenance and miscellaneous content
  - Implemented automatic generation of text/image links to social network
    profiles
  - Added [tech notes][]:
    - [ImageMagick][]:
      - Short [Python script][] to recursively convert images in a directory
      - Create thumbnails in PNG format
    - [.NET][]: Avoid segmentation faults on kernel 4.6.x
- [timeman][]: [*1 commits*]
- [pysyspol][]: [*3 commits*]
  - Added script to randomize units of a paragraph
  - Implemented `pysyspol.util.getdir`
- [dotfiles][]: [*2 commits*] .NET Core and Visual Studio Code configuration
- [Data Structures Algorithms in C#][]: [*4 commits*]
  - Ported to .NET core,
  - Imported to Visual Studio Code
- [resources-viewer][]: [*6 commits*] Browser based static app to view
  resources

**47 commits total**.

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

Donated to [Nikola Danaylov's crowdfunding campaign][campaign] for
[Singularity 1 on 1][], one of my favorite podcasts.

[Folding@Home during August][fah-stats] I scored 40,602 points, completed 54
work units and ranked 45th out of all the members of
[The Longevity Meme team][]. My total score is 1,302,814 at the time of this
writing.  A graph of total daily production history during August can be found
[here][fah-jun-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-jun-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2016/folding_at_home_stats_august_2016.png
[Singularity 1 on 1]: https://www.singularityweblog.com/category/podcasts/ "Singularity 1 on 1"
[campaign]: https://konoz.io/nikola.danaylov "Singularity1on1: Interview the Future. Find Your Mission. Make a Difference"

## Other ###############################################################

- My personal website got 838 views.

<br/>

---
