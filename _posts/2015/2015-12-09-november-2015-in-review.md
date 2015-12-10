---
layout: post
title:  "November 2015 in review"
date:   Wed Dec  9 22:51:15 CST 2015
lang: en
categories: en
tags: [en, month-in-review]
comments: true
permalink: /november-2015-in-review/
excerpt: November 2015 personal review, summary of activities, misc notes...
---

This is the *November 2015 in review* post. The previous monthly review post is
[here][oct-review].  The contents are:

* TOC
{:toc}

## Fun with JavaScript

([^1])In order to practice software engineering skills and Node.js application
design, and also just because it's fun, I created the [Data Structures and
Algorithms in JavaScript][] project. Its purpose is to implement common and
custom versions of data structures and algorithms in JavaScript and other
related languages like TypeScript.  It is a Visual Studio solution that uses
the plugin [Node.js Tools for Visual Studio][], and it consists of 2 projects:
one for developing the main types and the other for (unit-)testing them with
[Mocha][].

The project is complementary to [Data Structures and Algorithms in C#][],
depending on the problem at hand I will decide whether to leverage the dynamic
nature of JavaScript or the more static features of C#.

[^1]: The post [October 2015 in review][oct-review] mistakenly reported the creation of the [Data structures and algorithms in JavaScript][] project when in fact at that time such project had not been published yet. It was the [Software engineering problems in JavaScript][] project the one that was published during October.

[Node.js Tools for Visual Studio]: https://www.visualstudio.com/features/node-js-vs "Node.js Tools for Visual Studio"
[Mocha]: https://mochajs.org/ "Mocha"
[oct-review]: {% post_url 2015/2015-11-08-october-2015-in-review %} "October 2015 in review"

## Public code repositories activity ###################################

Progress on projects:

- [Data structures and algorithms in C#][]: [*14 commits*]
  - Leveraged [xUnit][] API to share context between test methods and classes
  - Tested graph traversal and queue & stack implementations
- [Software engineering problems in JavaScript][]: [*9 commits*] Simple tests
  of JavaScript object oriented features, see [above](#fun-with-javascript)
- [Data structures and algorithms in JavaScript][]: [*4 commits*] Extended the
  standard Array object with insertion sort for [Numbers][], see
  [above](#fun-with-javascript)
- [nodejsplay][] [*9 commits*] Worked on [mirror-winsys][], a small script to
  mirror file systems on Windows using [Robocopy][]
- [Personal website][]: [*10 commits*] General maintenance and miscellaneous
  content
- [Syspol][]: [*3 commits*] Logging and application locking policies
- [poshutil][] [*2 commits*] Super simple function to create "random" integers,
  10 digits maximum

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}

[Syspol]: {{ github_prefix }}/syspol "Syspol"
[nodejsplay]: {{ github_prefix }}/nodejsplay "Node.js Play"
[mirror-winsys]:  {{ github_prefix }}/nodejsplay/blob/master/scripts/scripts/mirror-winsys.js "mirror-winsys"
[Robocopy]: https://en.wikipedia.org/wiki/Robocopy "Robocopy"
[poshutil]: {{ github_prefix }}/poshutil "Poshutil"
[Personal website]: {{ github_prefix }}/lopezpdvn.github.io "Pedro Ivan Lopez's website"
[Software engineering problems in JavaScript]: {{ github_prefix }}/software-engineering-problems-javascript "Software engineering problems in JavaScript"
[Data structures and algorithms in JavaScript]: {{ github_prefix }}/data-structures-algorithms-javascript "Data structures and algorithms in JavaScript"
[Data structures and algorithms in C#]: {{ github_prefix }}/DataStructuresAlgorithmsCSharp "Data structures algorithms in C#"
[xUnit]: https://xunit.github.io "xUnit.net"
[Numbers]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "JavaScript Number type"

## Philanthropy #######################################################

[Folding@Home during November][fah-stats] I scored 28,114 points, completed 53
work units and ranked 47th of all the members of [The Longevity Meme team][],
overtaking fellow folder [BrentErskine][].  A graph of total daily production
history during November can be found [here][fah-nov-graph]. Also, during this
month I reached 1 million points total.

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-nov-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2015/folding_at_home_stats_november_2015.png
[BrentErskine]: http://folding.extremeoverclocking.com/user_overtake.php?s=&u=153003 "BrentErskine Overtakes and Conquests"

I made a small donation to the [SENS Research Foundation][] to help with their
[end of year fundraiser][fundraiser]. Currently, the numbers look good and it
seems likely they will reach the goal. **Please [donate][]**!

[donate]: http://sens.org/donate "Donate | SENS Research Foundation"
[SENS Research Foundation]: http://sens.org "SENS Research Foundation"
[fundraiser]: https://www.fightaging.org/archives/2015/09/the-2015-fight-aging-matching-fundraiser-for-sens-rejuvenation-research-starts-on-october-1st.php "The 2015 Fight Aging! Matching Fundraiser for SENS Rejuvenation Research Starts on October 1st"

<br/>

---
