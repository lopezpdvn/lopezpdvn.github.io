---
layout: post
title: "January 2017 in review"
date: 2017-02-20
lang: en
categories: en
tags: [en, month-in-review, tech_notes]
comments: true
permalink: /january-2017-in-review/
excerpt: January 2017 personal review, summary of activities, misc notes...
---

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}
{% capture gist_prefix %}https://gist.github.com/{{ site.github_username }}{% endcapture %}

This is the *January 2017 in review* post. The previous monthly review post is
[here][december-review].  The contents are:

* TOC
{:toc}

[december-review]: {% post_url 2017/2017-01-05-december-2016-in-review %}

## Public code repositories activity ###################################

Progress on projects:

- [Personal website][]. [*16 commits*]:
  - General maintenance and miscellaneous content
  - Ported resume to [JSON Resume][]
  - Added/updated [tech notes][]:
    - [Fedora 24 set up][]
    - [gpg][]
    - [Kdenlive][]
- [Software engineering problems in C#][]: [*1 commit*]
- [Software engineering problems in Java][]: [*2 commits*]
- [Software engineering problems in JavaScript][]: [*2 commits*]
  - Depend on ES6-supported Node.js, dropped Babel dependency
- [pytaskcoach][]: [*3 commits*] Added validation functionality
- [Data structures and algorithms in C#][]: [*1 commit*]
- [pysyspol][]: [*3 commits*] Application lock, variant of `subprocess.call`
  logs via `logger.debug` and `logger.error`
- [Data structures and algorithms in Java][]: [*3 commits*] Created repository

**31 commits total**.

[Personal website]: {{ github_prefix }}/lopezpdvn.github.io "Pedro Ivan Lopez's website"
[tech notes]: {{ site.baseurl }}/tech-notes
[Software engineering problems in C#]: {{ github_prefix}}/SoftwareEngineeringProblemsCSharp "Software engineering problems in C#"
[Fedora 24 set up]: {{ site.baseurl }}/fedora-24-set-up "Fedora 24 set up"
[Software engineering problems in Java]: {{ github_prefix}}/SoftwareEngineeringProblemsJava "Software engineering problems in Java"
[gpg]: {{ site.baseurl }}/gpg  "gpg"
[pytaskcoach]: {{ github_prefix }}/pytaskcoach "pytaskcoach: Taskcoach tools"
[Software engineering problems in JavaScript]: {{ github_prefix}}/software-engineering-problems-javascript "Software engineering problems in JavaScript"
[Data structures and algorithms in C#]: {{ github_prefix}}/DataStructuresAlgorithmsCSharp "Data structures and algorithms in C#"
[Data structures and algorithms in Java]: {{ github_prefix}}/DataStructuresAlgorithmsJava "Data structures and algorithms in Java"
[JSON Resume]: https://jsonresume.org/ "JSON Resume"
[pysyspol]: {{ github_prefix }}/pysyspol "pysyspol"
[Kdenlive]: {{ site.baseurl }}/kdenlive "Kdenlive"

## Philanthropy #######################################################

[Folding@Home during January][fah-stats] I scored 35,646 points, completed 51
work units and ranked 41st out of all the members of
[The Longevity Meme team][], overtaking fellow folder [chrono][]. My total
score is 1,572,888 at the time of this writing.  A graph of total daily
production history during January can be found [here][fah-jan-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-jan-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2017/folding_at_home_stats_january_2017.png
[chrono]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=519748 "chrono - User Summary - EXTREME Overclocking Folding @ Home Stats"

## Other ###############################################################

- My personal website got 718 views.

<br/>

---
