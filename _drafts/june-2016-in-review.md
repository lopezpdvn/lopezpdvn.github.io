---
layout: post
title: "June 2016 in review"
date: Sat Jul  2 14:09:51 CDT 2016
lang: en
categories: en
tags: [en, month-in-review, tech_notes]
comments: true
permalink: /june-2016-in-review/
excerpt: June 2016 personal review, summary of activities, misc notes...
---

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}

This is the *June 2016 in review* post. The previous monthly review post is
[here][may-review].  The contents are:

* TOC
{:toc}

[may-review]: {% post_url 2016/2016-06-03-may-2016-in-review %}

## pysyspol ############################################################

I started the [pysyspol][] project, a Python package that helps system
administrators to enforce and implement [syspol][] policies. It runs on CPython
only.[^1]

Other Python packages that help to implement and enforce private policies can
depend on pysyspol. Just as with the policies themselves, if publishing code
related to a particular policy doesn't create serious security risks, consider
sharing it by integrating it into pysyspol.

[syspol]: {{ github_prefix }}/syspol "syspol"
[pysyspol]: {{ github_prefix }}/pysyspol "pysyspol"
[^1]: [syspol-js](https://github.com/lopezpdvn/syspol-js "syspol-js"), written in JavaScript for Node.js, is another project that implements and enforce syspol policies.

## Public code repositories activity ###################################

Progress on projects:

- [Personal website][]. [*24 commits*]:
  - General maintenance and miscellaneous content
  - Updated/added [tech notes][] on
    - [Fedora 23 set up][] (previously was a blog post draft)
    - [GitHub][]
    - [Markdown][]
    - [Chrome][]
    - [Firefox][]
    - [ffmpeg][]
    - [Digitizing Hi8 cassettes][]
    - [Digitizing VHS cassettes][]
    - [KeePass][]
- [pysyspol][]. [*16 commits*]. See section [pysyspol](#pysyspol). Modules
  `fs`, `process` and `util`.
- [dotfiles][].[*4 commits*]. Configuration for VIM, xbindkeys, unison, mksh
  and Python.
- [pysweng][].[*3 commits*]
- [poshutil][].[*1 commits*]. Ignore files for version control
- [syspol-js][].[*1 commits*]. Added function
  `syspol.util.inheritPrototype`, for parasitic combination inheritance.

**49 commits total**.

[Fedora 23 set up]: {{ github_prefix }}/lopezpdvn.github.io/blob/master/_drafts/fedora-23-set-up.md
[Windows 10 set up]: {{ github_prefix }}/lopezpdvn.github.io/blob/master/_drafts/windows-10-set-up.md
[Personal website]: {{ github_prefix }}/lopezpdvn.github.io "Pedro Ivan Lopez's website"
[tech notes]: {{ site.baseurl }}/tech-notes
[Markdown]: {{ site.baseurl }}/markdown "Markdown"
[dotfiles]: {{ github_prefix }}/dotfiles "dotfiles"
[Fedora 23 set up]: {{ site.baseurl }}/fedora-23-set-up "Fedora 23 set up"
[ffmpeg]: {{ site.baseurl }}/ffmpeg "ffmpeg"
[GitHub]: {{ site.baseurl }}/github-tech-notes "GitHub"
[Chrome]: {{ site.baseurl }}/chrome "Google Chrome"
[Firefox]: {{ site.baseurl }}/firefox "Mozilla Firefox"
[pysweng]: {{ github_prefix }}/pysweng "Software engineering problems in Python"
[poshutil]: {{ github_prefix }}/poshutil "POSIX Shell utilities"
[syspol-js]: {{ github_prefix }}/syspol-js "syspol on Node.js."
[Digitizing Hi8 cassettes]: {{ site.baseurl }}/digitizing-hi8-cassettes
[Digitizing VHS cassettes]: {{ site.baseurl }}/digitizing-vhs-cassettes
[KeePass]: {{ site.baseurl }}/keepass

## Philanthropy #######################################################

I made a small donation to the [International Longevity Alliance][] to help
with their crowdfunding campaign for the [Major Mouse Testing Program][].  The
[campaign][] was a success, the project reached its goal before June 25. At the
time of this writing, the total amount pledged is $52,070 USD backed by 538
donors.

[Folding@Home during June][fah-stats] I scored 40,769 points, completed 44 work
units and ranked 45th out of all the members of [The Longevity Meme team][],
overtaking fellow folder [zillion][]. My total score is 1,216,877 at the time
of this writing.  A graph of total daily production history during June can be
found [here][fah-jun-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-jun-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2016/folding_at_home_stats_june_2016.png
[International Longevity Alliance]: http://www.longevityalliance.org "International Longevity Alliance"
[Major Mouse Testing Program]: http://majormouse.org "Major Mouse Testing Program"
[campaign]: https://www.lifespan.io/campaigns/the-major-mouse-testing-program/ "The Major Mouse Testing Program | Lifespan.io"
[zillion]: http://folding.extremeoverclocking.com/user_overtake.php?s=&u=529996 "zillion Overtakes and Conquests - EXTREME Overclocking Folding @ Home Stats"

## Other ###############################################################

- My personal website got 303 views.

<br/>

---
