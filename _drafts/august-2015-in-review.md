---
layout: post
title:  "August 2015 in review"
lang: en
categories: en
tags: [en, month-in-review]
comments: false
permalink: /august-2015-in-review/
excerpt: August 2015 personal review, summary of activities, misc notes...
effort: [20, 35, 20, 15, 60, 45, 25, 20]
---

This is the August 2015 in review post. The previous monthly review post is
[here]({% post_url 2015/2015-08-09-july-2015-in-review %}). The contents are:

* TOC
{:toc}

## Sysadmin scripts with Node.js/JavaScript ############################

I've been playing with [Node.js][], mostly using the synchronous version of the
API[^1] to write system administration scripts in JavaScript with the package
[shelljs][].  One of my goals is to replace most of my sysadmin and short
scripts written in UNIX shell and Python with Node.js programs.  I currently
keep the (public versions of the) scripts in [this repo][nodejsplay].

[^1]: I know, I know... where Node.js really excels is asynchronous programming. But for the moment I don't need to program network server stuff with JavaScript. And really, very few of my sysadmin needs would benefit from concurrency.

[Node.js]: https://nodejs.org/
[nodejsplay]: https://github.com/{{ site.github_username }}/nodejsplay
[shelljs]: http://shelljs.org

## Project Syspol ######################################################

Inspired by the [Rule of Separation][] in Eric S. Raymond's book [The Art of
Unix Programming][], I created the project [Syspol][] (*Sys*tem *Pol*icy).  The
purpose of Syspol is to define a cross-platform system policy for applications
and environments to implement partially or completely, therefore reducing
design efforts in such programs and environments.
  
Syspol will describe resources that an environment or program module should
provide in order to be Syspol-compliant, including environments variables and
scripts/commands. Patterns for common services will also be defined, for
example logging, program configuration, input and output, etc.  A program or
system can seek to implement certain features of Syspol instead of having to
implement it completely.

I think of Syspol as a way to standardize my own thinking so I spend less time
making design decisions when I'm automating things on my different
environments. I won't be trying to reinvent the wheel, instead I'll be adopting
common and proven practices specially from the Unix culture.

During the initial phase of project Syspol I expect that most policies will be
about operating system environments, mainly environment variables and
functions/scripts.

[Syspol]: https://github.com/{{ site.github_username }}/syspol
[Rule of Separation]: http://www.catb.org/esr/writings/taoup/html/ch01s06.html#id2877777
[The Art of Unix Programming]: http://www.catb.org/esr/writings/taoup/

## Fun with DNX and C# #################################################

In order to practice software engineering skills and [ASP.NET 5][] application
design, and also just because it's fun, I created two new .NET projects.
  
[Data Structures and Algorithms in C#][dsalgcsharp] is a project to implement
common and custom data structures and algorithms in C#; while [Software
Engineering Problems in C#][swprobscsharp] is a project to publish solutions to
software engineering problems and puzzles. Each of them is a Visual Studio
solution with multiple [DNX projects][], including unit tests with [xUnit][].

[ASP.NET 5]: http://www.asp.net/vnext
[dsalgcsharp]: https://github.com/{{ site.github_username }}/DataStructuresAlgorithmsCSharp
[swprobscsharp]: https://github.com/{{ site.github_username }}/SoftwareEngineeringProblemsCSharp
[DNX projects]: http://docs.asp.net/en/latest/dnx/index.html
[xUnit]: https://xunit.github.io/

## Philanthropy ########################################################

I made a small donation to the [Machine Intelligence Research Institute][] to
help with their [Summer Fundraiser][]. At the time of this writing [the
fundraiser had already
ended](https://intelligence.org/2015/09/01/our-summer-fundraising-drive-is-complete/).

[Machine Intelligence Research Institute]: https://intelligence.org
[Summer Fundraiser]: https://intelligence.org/2015/07/17/miris-2015-summer-fundraiser/

[Folding@Home during August][fah-stats] I scored approximately 15,000 points
and ranked 48th of all the members of the [The Longevity Meme team][].  A graph
of total daily production history for August can be found
[here][fah-august-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461
[fah-august-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2015/08/folding_at_home_stats_august_2015.png

## Other ###############################################################

Now that most of the house remodeling at home is done, I have been moving back
all my stuff to the study and bedroom. The remodeling has made some of my
things very dusty so before moving them back I had to thoroughly clean them.
Starting the last week of August I'm again working full-time on my workstation
and it really feels great to be back with full productivity.

Finally, I started to process paperwork at UANL in order to get my Master of
Engineering Degree, in Information Engineering. According to the university's
authorities the administrative process will continue through September.

---
<br/>

<!--
    dreilopz
      Fri Aug 7 20:00:13 UTC 2015
      Date of last work unit  2015-08-07 13:19:16
      Total score     964129
      Overall rank (if points are combined)   47429 of 1792946
      Active clients (within 50 days)     2
      Active clients (within 7 days)  1 

 dreilopz
    Last updated: Wed Sep 2 15:00:13 PDT 2015
    Wed Sep 2 22:00:13 UTC 2015

    Date of last work unit  2015-09-02 05:16:10
    Total score     979225
    Overall rank (if points are combined)   47500 of 1796277
    Active clients (within 50 days)     2
    Active clients (within 7 days)  2 

dreilopz
Rank Team    Rank Project     Points Last 24hr   Points 24hr Avg    Points Today   Points Week    Points Total   WUs Total   First Record
48  39,170  612     1,101   612     3,879   877,672     618     11.06.13

-->
