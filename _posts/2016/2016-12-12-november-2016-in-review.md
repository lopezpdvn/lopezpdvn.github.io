---
layout: post
title: "November 2016 in review"
date: 2016-12-12
lang: en
categories: en
tags: [en, month-in-review, tech_notes]
comments: true
permalink: /november-2016-in-review/
excerpt: November 2016 personal review, summary of activities, misc notes...
---

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}
{% capture gist_prefix %}https://gist.github.com/{{ site.github_username }}{% endcapture %}

This is the *November 2016 in review* post. The previous monthly review post is
[here][october-review].  The contents are:

* TOC
{:toc}

[october-review]: {% post_url 2016/2016-11-03-october-2016-in-review %}

## Public code repositories activity ###################################

Progress on projects:

- [Personal website][]. [*14 commits*]:
  - General maintenance and miscellaneous content
  - Added/updated [tech notes][]:
    - [Digital Audio Workstation][]
    - [Anki][]
    - [Fedora DNF system upgrade][]
    - [digiKam][]
- [pysyspol][]: [*3 commits*] Worked on script for managing
  [Taskcoach][taskcoach] files
- [pydsalg][]: [*8 commits*] Hash table, heapsort, dynamic array / circular
  queue / ring buffer, hash set
- [pysweng][]: [*3 commits*] Misc problems
- [pytaskcoach][]: [*1 commit*]. [Taskcoach][taskcoach] tools. Now a separate
  project, it was previously a submodule of [pysyspol][]
- [Data structures and algorithms in C#][]: [*1 commit*] Upgraded to .NET Core
  1.1

**30 commits total**.

[Personal website]: {{ github_prefix }}/lopezpdvn.github.io "Pedro Ivan Lopez's website"
[dotfiles]: {{ github_prefix }}/dotfiles "Misc configuration files and directories"
[tech notes]: {{ site.baseurl }}/tech-notes
[pysyspol]: {{ github_prefix }}/pysyspol "syspol on CPython"
[pysweng]: {{ github_prefix }}/pysweng "Software engineering problems in Python"
[Anki]: {{ site.baseurl }}/anki "Anki"
[pydsalg]: {{ github_prefix }}/pydsalg "pydsalg: Data structures and algorithms in Python"
[Digital Audio Workstation]: {{ site.baseurl }}/daw "Digital Audio Workstation"
[Fedora DNF system upgrade]: {{ site.baseurl }}/fedora-dnf-system-upgrade "Fedora DNF system upgrade"
[digiKam]: {{ site.baseurl }}/digikam "digiKam"
[pytaskcoach]: {{ github_prefix }}/pytaskcoach
[taskcoach]: http://taskcoach.org/ "Taskcoach"
[Data structures and algorithms in C#]: {{ github_prefix}}/DataStructuresAlgorithmsCSharp "Data structures and algorithms in C#"

## Philanthropy #######################################################

[Folding@Home during November][fah-stats] I scored 58,198 points, completed 55
work units and ranked 42th out of all the members of
[The Longevity Meme team][]. My total score is 1,469,445 at the time of this
writing.  A graph of total daily production history during November can be
found [here][fah-nov-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-nov-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2016/folding_at_home_stats_november_2016.png

## Other ###############################################################

- My personal website got 1,456 views.

- Uploaded two live music videos. This was back in October, but I forgot to
  post about it.
  - [Castel Bravo - Contracorriente - Salón Morelos - Monterrey, México - Sep 24, 2016](https://www.youtube.com/watch?v=h25eSOlUCLM)
  - [Castel Bravo - Mártir - Salón Morelos - Monterrey, México - Sep 24, 2016](https://www.youtube.com/watch?v=ngdIxhKXyzU)

<br/>

---
