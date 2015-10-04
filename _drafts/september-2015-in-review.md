---
layout: post
title:  "September 2015 in review"
date:   Tue Sep 29 16:07:18 CDT 2015
lang: en
categories: en
tags: [en, month-in-review]
comments: false
permalink: /september-2015-in-review/
excerpt: September 2015 personal review, summary of activities, misc notes...
---

This is the September 2015 in review post. The previous monthly review post is
[here]({% post_url 2015/2015-09-06-august-2015-in-review %}). The contents are:

* TOC
{:toc}

## Blog post: Notes on restoring a Nexus device to Android factory image

I wrote a short [post][post] to gather some notes on restoring Nexus devices to
factory images (AKA stock ROMs). I'm basically referring to [one of my previous
guides][devenv-android] as well as Google official documentation. In addition,
I'm showing how to flash the image on a RAM constrained host.

[devenv-android]: https://gist.github.com/{{ site.github_username }}/dd2eb3512ac225d0ad0e

[post]: {% post_url 2015/2015-09-25-notes-restoring-nexus-device-android-factory-image %}

## Update on Syspol

Last month I started the Syspol project with the goal of defining a
cross-platform system policy for applications and environments to implement
partially or completely, therefore reducing design efforts in such programs and
environments.

After a few commits I started to wonder about the security implications of
publishing my main system policies, which of course would end up being deployed
to my current environments.  I haven't thought about it much, instead I just
created a private repository to hold the same policies that Syspol is supposed
to group.

The security risks of publishing system policies are to be evaluated on a case
by case basis, and the risky stuff can always be maintained privately. This can
be defined as a Syspol policy itself: define/maintain a private Syspol project
that extends the public Syspol. If publishing a policy doesn't create serious
security risks, consider sharing it and integrating it into (the public) Syspol.

In other words, some policies I originally expected to add to Syspol will
instead go to my private-syspol first. Note that this doesn't apply for all
kinds of syspol policies, for example programming patterns.

## Public code repositories activity

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}

Progress on projects:

- [nodejsplay][]
- [ASP.NET5-Co][aspnet5co-repo]
- [DataStructuresAlgorithmsCSharp][]
- [ASP.NET 5 Demo][]
- [Software Engineering Problems in C#][SoftwareEngineeringProblemsCSharp]
- [My personal website][personal-website]

[nodejsplay]: {{ github_prefix }}/nodejsplay
[aspnet5co-repo]: {{ github_prefix }}/aspnet5co
[DataStructuresAlgorithmsCSharp]: {{ github_prefix }}/DataStructuresAlgorithmsCSharp
[ASP.NET 5 Demo]: {{ github_prefix }}/ASPNET5Demo
[SoftwareEngineeringProblemsCSharp]: {{ github_prefix }}/SoftwareEngineeringProblemsCSharp
[personal-website]: {{ github_prefix }}/lopezpdvn.github.io

<!-- TODO
Enumerate over active repos and show total number of commits and link to a
graphical description of actity.
-->

## Philanthropy

I spent some hours getting together with friends to talk about effective
altruism and other philanthropy topics on two ocassions.

[Folding@Home during September][fah-stats] I scored 25,382 points completing 48
work units and ranked 48th of all the members of the [The Longevity Meme
team][].  A graph of total daily production history for September can be found
[here][fah-sep-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461
[fah-sep-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2015/09/folding_at_home_stats_september_2015.png

## Other

Miscellaneous activities:

- Gave a presentation about my project [ASP.NET5-Co][aspnet5co] to a small
  group of professors at UANL. Slides [here][slides].

[aspnet5co]: {{ site.url }}/aspnet5co
[slides]: https://onedrive.live.com/redir?resid=AA8C714468AC7153!115&authkey=!AM_D2AQdCx-IvY4&ithint=file%2cpptx

- Switched from Node.js/ShellJS scripts to [Gulp](http://gulpjs.com) for task
  automation on the client and in general.

- Switched from manual handling of web client dependencies to
  automatic management with [Bower](http://bower.io).

- Made some time to play bass and guitar after a long time without playing.

---
