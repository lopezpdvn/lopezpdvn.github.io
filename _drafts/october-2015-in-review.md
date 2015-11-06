---
layout: post
title:  "September 2015 in review"
date:   Wed Oct  7 20:54:18 CDT 2015
lang: en
categories: en
tags: [en, month-in-review]
comments: true
permalink: /september-2015-in-review/
excerpt: September 2015 personal review, summary of activities, misc notes...
---

This is the September 2015 in review post. The previous monthly review post is
[here]({% post_url 2015/2015-09-06-august-2015-in-review %}). The contents are:

* TOC
{:toc}

## Blog post: Notes on restoring a Nexus device to Android factory image

I wrote a short [post][] to group some notes on restoring Nexus devices to
factory images (AKA stock ROMs), referring to [one of my previous
guides][devenv-android] and to Google's official documentation. In addition, I
show how to flash the image on a RAM constrained development host.

[devenv-android]: https://gist.github.com/{{ site.github_username }}/dd2eb3512ac225d0ad0e

[post]: {% post_url 2015/2015-09-25-notes-restoring-nexus-device-android-factory-image %}

## Update on Syspol ####################################################

[Last month][syspol-aug] I started the [Syspol][] project with the goal of
defining a cross-platform system policy for applications and environments to
implement partially or completely, therefore reducing design efforts in such
programs and environments.

[syspol-aug]: {% post_url 2015/2015-09-06-august-2015-in-review %}/#project-syspol

After a few days I started to wonder about the security implications of
publishing my main system policies, which of course would end up being deployed
to my current environments.  I haven't thought much about it, instead I just
created a private repository to hold the same policies that Syspol is supposed
to group.

The security risks of publishing system policies are to be evaluated on a case
by case basis, and the risky stuff can always be privately maintained instead.
This can be defined as a Syspol policy itself: define/maintain a private Syspol
project that extends the public one; if publishing a policy doesn't create
serious security risks, consider sharing it by integrating it into (the public)
Syspol.

In other words, some policies I originally expected to add to Syspol will
instead go to my private-syspol first. Note that this doesn't apply for all
kinds of policies, for example programming patterns will most likely be
directly added to the public version of the project.

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}

[Syspol]: {{ github_prefix }}/syspol

## Public code repositories activity ###################################

Progress on projects:

- [nodejsplay][]: [*4 commits*] Script to restart instance of [Synergy][]
  server on Unix/Linux machines.
- [Data structures and algorithms in C#][DataStructuresAlgorithmsCSharp] [*24
  commits*] Binary tree and graph implementations and traversals.
- [Personal website][]: [*32 commits*] Blog posts and
  general maintenance.
- [ASP.NET5-Co][aspnet5co-repo]: [*3 commits*] Minor rewriting.
- [ASP.NET 5 Demo][]: [*7 commits*] Short demo using examples from [ASP.NET 5
  documentation][].

[nodejsplay]: {{ github_prefix }}/nodejsplay
[aspnet5co-repo]: {{ github_prefix }}/aspnet5co
[DataStructuresAlgorithmsCSharp]: {{ github_prefix }}/DataStructuresAlgorithmsCSharp
[ASP.NET 5 Demo]: {{ github_prefix }}/ASPNET5Demo
[Personal website]: {{ github_prefix }}/lopezpdvn.github.io
[Synergy]: http://synergy-project.org
[ASP.NET 5 documentation]: http://docs.asp.net

## Philanthropy ########################################################

I spent some hours getting together with friends to talk about effective
altruism and other philanthropy topics on two occasions.

[Folding@Home during September][fah-stats] I scored 25,382 points completing 48
work units and ranked 48th of all the members of the [The Longevity Meme
team][].  A graph of total daily production history for September can be found
[here][fah-sep-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461
[fah-sep-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2015/09/folding_at_home_stats_september_2015.png

## Other ###############################################################

Miscellaneous activities:

- Gave a presentation about my project [ASP.NET5-Co][aspnet5co] to a small
  group of professors at UANL. Slides [here][slides].

[aspnet5co]: {{ site.url }}/aspnet5co
[slides]: https://onedrive.live.com/redir?resid=AA8C714468AC7153!115&authkey=!AM_D2AQdCx-IvY4&ithint=file%2cpptx

- Switched from plain Node.js/ShellJS scripts to [Gulp](http://gulpjs.com) for
  tasks automation on the client and in general.

- Switched from manual management of web client dependencies to automatic
  management with [Bower](http://bower.io).

- My [personal website]({{ site.url }}) got 1,273 views.

- Made some time for playing bass and guitar after a few months months without
  playing.

<!--

 dreilopz
	Last updated: Mon Nov 2 17:00:10 PST 2015
Tue Nov 3 01:00:10 UTC 2015

Date of last work unit 	2015-11-02 05:07:35
Total score 	1036619
Overall rank (if points are combined) 	46913 of 1803939
Active clients (within 50 days) 	2
Active clients (within 7 days) 	2

dreilopz has contributed work units with more than one different team number. The contributions are listed below.


Contributions by team and project:

Donor 	dreilopz
Team 	The Longevity Meme (32461)
Score 	935066 (certificate)
Donor Rank 	50026 of 1803939
WU 	726 (certificate)
Date of last
work unit 	2015-11-02 05:07:35
Active clients
(within 50 days) 	2
Active clients
(within 7 days) 	2

Donor 	dreilopz
Team 	Default (includes all those WU returned without valid team number) (0)
Score 	101553 (certificate)
Donor Rank 	171382 of 1803939
WU 	82 (certificate)
Date of last
work unit 	2013-07-28 18:06:18
Active clients
(within 50 days) 	0
Active clients
(within 7 days) 	0 

-->

---
