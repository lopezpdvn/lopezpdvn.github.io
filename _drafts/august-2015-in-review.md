---
layout: post
title:  "August 2015 in review"
lang: en
categories: en
tags: [en, month-in-review]
comments: false
permalink: /august-2015-in-review/
excerpt: August 2015 personal review, summary of activities, misc notes...
effort: [20, 35]
---

Now that most of the house remodelling at home is done, I have been moving back
all my stuff to my bedroom. The work being done has made some of my things very
dusty so before moving them back to the bedroom I had to thoroughly clean them.
Starting the last week of August I'm again working full-time on my workstation
and it really feels great to be back with full productivity.

- I started to process paperwork at UANL in order to get my Master of
  Engineering Degree, in Information Engineering. The administrative process
  will continue through September.

- I finally got around playing with [Node.js][]. I'm currently using the
  synchronous version of the API[^1] for system administration scripts. One of
  my goals with Node.js is to replace all of my UNIX shell and (some of my)
  Python scripts for sysadmin work with Node.js scripts. I'm currently keeping
  the (public versions of the) scripts in the public repo [nodejsplay][].

[^1]: I know, I know... where Node.js really excels is at asynchronous programming. But for the moment I don't need to program server stuff with Javascript.  And really, very few of my sysadmin needs would benefit from concurrency.

[Node.js]: https://nodejs.org/
[nodejsplay]: https://github.com/{{ site.github_username }}/nodejsplay

- Inspired by the [Rule of Separation][] in Eric S. Raymond's book [The Art of
  Unix Programming][], I created the project [Syspol][] (*Sys*tem *Pol*icy).

[Syspol]: https://github.com/{{ site.github_username }}/syspol
[Rule of Separation]: http://www.catb.org/esr/writings/taoup/html/ch01s06.html#id2877777
[The Art of Unix Programming]: http://www.catb.org/esr/writings/taoup/

- DataStructuresAlgorithmsCSharp repo

- SoftwareEngineeringProblemsCSharp repo

## ASPNET5CO

*Problems* repo, with multiproject solution on VS2015, main project targetting
`dotnet` framework and test project as a DNX project.

## Philanthropy

I made a small donation to the [Machine Intelligence Research Institute][] to
help with their [Summer Fundraiser][]. At the time of this writing the
fundraiser had already ended.

[Machine Intelligence Research Institute]: https://intelligence.org
[Summer Fundraiser]: https://intelligence.org/2015/07/17/miris-2015-summer-fundraiser/

Folding@Home during August I scored X points, folded Y work-units and ranked
48th of all the members of the [The Longevity Meme team][].  A graph of total
daily production history for August can be found [here][fah-august-graph].

[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461
[fah-august-graph]: {{ site.url }}/{{ site.images_dir }}/2015/08/folding_at_home_stats_august_2015.png

    dreilopz
      Fri Aug 7 20:00:13 UTC 2015
      Date of last work unit  2015-08-07 13:19:16
      Total score     964129
      Overall rank (if points are combined)   47429 of 1792946
      Active clients (within 50 days)     2
      Active clients (within 7 days)  1 

---

<!--
- cleaning room and moving all stuff inside again, moving from my brother's
  room to my own
-->
