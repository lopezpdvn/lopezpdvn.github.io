---
layout: post
title: "December 2015 in review"
date: Thu Jan  7 22:44:43 CST 2016
lang: en
categories: en
tags: [en, month-in-review]
comments: true
permalink: /december-2015-in-review/
excerpt: December 2015 personal review, summary of activities, misc notes...
---

This is the *December 2015 in review* post. The previous monthly review post is
[here][nov-review].  This month was kind of slow, which usually is the case
because of the holiday season.  The contents are:

* TOC
{:toc}

[nov-review]: {% post_url 2015/2015-12-09-november-2015-in-review %}

## syspol-js ###########################################################

I started the [syspol-js][] project, a Node.js package that helps system
administrators to enforce and implement [syspol][] policies.  It is a Visual
Studio solution that uses the plugin Node.js Tools for Visual Studio, and it
consists of 2 projects: one for coding the API and the other for (unit-)testing
it with Mocha.

Other Node.js-based packages that help to implement and enforce private
policies can depend on syspol-js. Just as with the policies themselves, if
publishing code related to a particular policy doesn’t create serious security
risks, consider sharing it by integrating it into syspol-js.

## Public code repositories activity ###################################

Progress on projects:

- [Data structures and algorithms in C#][]: [*34 commits*] Queues, stacks,
  priority queues, sorted arrays and linked lists
- [Personal website][]: [*10 commits*] General maintenance and miscellaneous
  content
- [syspol-js][] [*5 commits*] Check directory read and write permissions
- [Software engineering problems in C#][]: [*3 commits*] Simple object oriented
  programming concepts
- [nodejsplay][] [*1 commits*] Project now references syspol-js API

53 commits total.

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}

[nodejsplay]: {{ github_prefix }}/nodejsplay "Node.js Play"
[Personal website]: {{ github_prefix }}/lopezpdvn.github.io "Pedro Ivan Lopez's website"
[Data structures and algorithms in C#]: {{ github_prefix }}/DataStructuresAlgorithmsCSharp "Data structures algorithms in C#"
[Software engineering problems in C#]: {{ github_prefix }}/SoftwareEngineeringProblemsCSharp "Software engineering problems in C#"
[syspol-js]: {{ github_prefix }}/syspol-js "syspol-js"
[syspol]: {{ github_prefix }}/syspol "syspol"

## Philanthropy #######################################################

[Folding@Home during december][fah-stats] I scored 30,021 points, completed 57
work units and ranked 47th out of all the members of [The Longevity Meme
team][].  My total score is 1,100,891 at the time of this writing.  A graph of
total daily production history during december can be found
[here][fah-dec-graph].

While trying to make a donation to the [Brain Preservation Foundation][] I ran
into some problems that apparently prevented the donation from being accepted,
at least temporarily. Donations to the Brain Preservation Foundation are
processed by [JustGive][], a "nonprofit organization whose mission is to
increase charitable giving by connecting people with the charities and causes
they care most about".

Unfortunately, it seems that the JustGive's website doesn't allow international
donors to input their billing addresses to exactly match their bank records. I
will follow up on this situation with the Brain Preservation Foundation and
JustGive.

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-dec-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2016/folding_at_home_stats_december_2015.png
[Brain Preservation Foundation]: http://www.brainpreservation.org "The Brain Preservation Foundation"
[JustGive]: https://www.justgive.org "JustGive.org"

## Other ###############################################################

I spent some time converting and compressing some family videos from VHS/analog
format to digital formats.

<br/>

---
