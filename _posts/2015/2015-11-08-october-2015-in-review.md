---
layout: post
title:  "October 2015 in review"
date:   Sun Nov  8 18:04:28 CST 2015
lang: en
categories: en
tags: [en, month-in-review]
comments: true
permalink: /october-2015-in-review/
excerpt: October 2015 personal review, summary of activities, misc notes...
---

This is the October 2015 in review post. The previous monthly review post is
[here]({% post_url 2015/2015-10-07-september-2015-in-review %}).  As you may
notice from the contents of this post, October was kind of a slow month.

* TOC
{:toc}

## Fun with JavaScript

In order to practice software engineering skills and Node.js application
design, and also just because it's fun, I created the [Data Structures and
Algorithms in JavaScript][dsalgjs] project. Its purpose is to implement common
and custom versions of data structures and algorithms in JavaScript and other
related languages like TypeScript.  It is a Visual Studio solution using the
plugin [Node.js Tools for Visual Studio][], and it consists of 2 projects: one
for the main source code and the other for unit testing with [Mocha][]. 

The project is complementary to [Data Structures and Algorithms in
C#][dsalgcsharp], depending on the problem at hand I will decide whether to
leverage the dynamic nature of JavaScript or the more static features of C#.
Following the same rationale, in the near future I expect to create another
JavaScript/TypeScript project analogous to [Software Engineering Problems in
C#][swprobscsharp].

[Node.js Tools for Visual Studio]: https://www.visualstudio.com/features/node-js-vs
[Mocha]: https://mochajs.org/
[dsalgcsharp]: https://github.com/{{ site.github_username }}/DataStructuresAlgorithmsCSharp
[dsalgjs]: https://github.com/{{ site.github_username }}/SoftwareEngineeringProblemsJavaScript
[swprobscsharp]: https://github.com/{{ site.github_username }}/SoftwareEngineeringProblemsCSharp

## Public code repositories activity ###################################

Progress on projects:

- [Syspol][]: [*5 commits*] time based directory structure and private syspol
  as mentioned [here]({% post_url 2015/2015-10-07-september-2015-in-review %}/#update-on-syspol).
- [dotfiles][]: [*7 commits*] Configuration for programs Vim, X Server, POSIX
  shell (MirBSD Korn and Bash) and Devilspie.
- [DataStructuresAlgorithmsCSharp][]: [*27 commits*] Simple array sorting
  algorithms, namespace re-organization, fixed minor bugs, minor changes to ADT
  interfaces, added a few tests for graph/tree traversals.
- [nodejsplay][] [*2 commits*] Added command line interfaces to some scripts.
- [Personal website][]: [*17 commits*] Blog posts and general maintenance.

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}

[Syspol]: {{ github_prefix }}/syspol
[dotfiles]: {{ github_prefix }}/dotfiles
[nodejsplay]: {{ github_prefix }}/nodejsplay
[DataStructuresAlgorithmsCSharp]: {{ github_prefix }}/DataStructuresAlgorithmsCSharp
[Personal website]: {{ github_prefix }}/lopezpdvn.github.io

## Other ###############################################################

[Folding@Home during October][fah-stats] I scored 32,529 points completing 61
work units and ranked 48th of all the members of the [The Longevity Meme
team][].  A graph of total daily production history for October can be found
[here][fah-oct-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461
[fah-oct-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2015/folding_at_home_stats_october_2015.png

---
