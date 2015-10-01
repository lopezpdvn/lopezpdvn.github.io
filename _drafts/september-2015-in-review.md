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
guides][devenv-android] as well as Google official documentation.

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

Progress on projects.

<!-- TODO
Enumerate over active repos and show total number of commits and link to a
graphical description of actity.
-->

[aspnet5co]: {{ site.url }}/aspnet5co

## Other

Gave a presentation about my project [ASP.NET5-Co][aspnet5co] to a small group
of professors at UANL. You can find the slides [here][slides].

[slides]: https://onedrive.live.com/redir?resid=AA8C714468AC7153!115&authkey=!AM_D2AQdCx-IvY4&ithint=file%2cpptx

- Made some time to play bass after a long time without playing.

## Philanthropy

Spent some hours getting together with friends to talk about effective altruism
and other philanthropy topics on two ocassions.

- Folding@Home activity.

---
<br/>

<!--
 dreilopz
    Last updated: Wed Sep 2 15:00:13 PDT 2015
    Wed Sep 2 22:00:13 UTC 2015

    Date of last work unit  2015-09-02 05:16:10
    Total score     979225
    Overall rank (if points are combined)   47500 of 1796277
    Active clients (within 50 days)     2
    Active clients (within 7 days)  2

 dreilopz
	Last updated: Thu Oct 1 11:00:14 PDT 2015
Thu Oct 1 18:00:14 UTC 2015

Date of last work unit 	2015-10-01 04:08:23
Total score 	1004014
Overall rank (if points are combined) 	47292 of 1799444
Active clients (within 50 days) 	2
Active clients (within 7 days) 	2

dreilopz has contributed work units with more than one different team number. The contributions are listed below. 

 Contributions by team and project:

Donor 	dreilopz
Team 	The Longevity Meme (32461)
Score 	902461 (certificate)
Donor Rank 	50291 of 1799444
WU 	665 (certificate)
Date of last
work unit 	2015-10-01 04:08:23
Active clients
(within 50 days) 	2
Active clients
(within 7 days) 	2 

-->
