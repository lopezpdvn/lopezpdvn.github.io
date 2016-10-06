---
layout: post
title: "September 2016 in review"
date: 2016-10-06
lang: en
categories: en
tags: [en, month-in-review, tech_notes]
comments: true
permalink: /september-2016-in-review/
excerpt: September 2016 personal review, summary of activities, misc notes...
---

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}
{% capture gist_prefix %}https://gist.github.com/{{ site.github_username }}{% endcapture %}

This is the *September 2016 in review* post. The previous monthly review post is
[here][august-review].  The contents are:

* TOC
{:toc}

[august-review]: {% post_url 2016/2016-09-04-august-2016-in-review %}

## Public code repositories activity ###################################

Progress on projects:

- [Personal website][]. [*9 commits*]:
  - General maintenance and miscellaneous content
  - Added [tech notes][]:
    - [Android][]
    - [Ubuntu Studio][]
    - [Audio engineering][]
- [pysyspol][]: [*9 commits*]
  - Created module `medasys`, a general purpose metadata system
  - Added `pysyspol.util.get_script_name`,
  - Added functions to `pysyspol.medasys`:
  `get_core_resources`, `logging_config`, `get_tagged_resources`,
  `validate_paths`, `get_valid_tags`, `validate_tags`, `get_tags`,
  `get_all_resources`
- [dotfiles][]: [*1 commit*] QjackCtl configuration file
- [Data Structures Algorithms in C#][]: [*5 commits*]
  - Created types
    - `DataStructuresAlgorithms.DataStructures.Tree.BinaryTree.BinarySearchTree.NodeInt`
    - `DataStructuresAlgorithms.DataStructures.Tree.BinaryTree.BinarySearchTree.BinarySearchTreeInt`
    - Implemented and tested Binary Search Tree Find and Insert
- [resources-viewer][]: [*7 commits*] Browser based static app for viewing
  resources
  - Completed first functional version
  - Fixed bugs
  - Started using `pysyspol.medasys`

**31 commits total**.

[Personal website]: {{ github_prefix }}/lopezpdvn.github.io "Pedro Ivan Lopez's website"
[tech notes]: {{ site.baseurl }}/tech-notes
[resources-viewer]: {{ github_prefix }}/resources-viewer "Browser based static app to view resources"
[pysyspol]: {{ github_prefix }}/pysyspol "syspol on CPython"
[Data Structures Algorithms in C#]: {{ github_prefix }}/DataStructuresAlgorithmsCSharp "Data structures and algorithms in C#"
[Android]: {{ site.baseurl }}/tech-notes/android
[Ubuntu Studio]: {{ site.baseurl }}/ubuntu-studio "Ubuntu Studio"
[Audio engineering]: {{ site.baseurl }}/audio-engineering "Audio engineering"
[dotfiles]: {{ github_prefix }}/dotfiles "Misc configuration files and directories"

## Philanthropy #######################################################

[Folding@Home during September][fah-stats] I scored 37,438 points, completed 51
work units and ranked 44th out of all the members of
[The Longevity Meme team][], overtaking fellow folder [dglen][]. My total score
is 1,341,704 at the time of this writing.  A graph of total daily production
history during September can be found [here][fah-sep-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-sep-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2016/folding_at_home_stats_september_2016.png
[dglen]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=325122 "dglen - User Summary - EXTREME Overclocking Folding @ Home Stats"

## Other ###############################################################

- My personal website got 497 views.

<br/>

---
