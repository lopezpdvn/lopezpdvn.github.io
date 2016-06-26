---
layout: post
title: "June 2016 in review"
date: Thu Jun 23 00:12:54 CDT 2016
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
only.

Other Python packages that help to implement and enforce private policies can
depend on pysyspol. Just as with the policies themselves, if publishing code
related to a particular policy doesn't create serious security risks, consider
sharing it by integrating it into pysyspol.

[syspol]: {{ github_prefix }}/syspol "syspol"
[pysyspol]: {{ github_prefix }}/pysyspol "pysyspol"

## Public code repositories activity ###################################

Progress on projects:

- [Personal website][]. [*TODO commits*]:
  - General maintenance and miscellaneous content
  - Updated/added [tech notes][] on
    - [Fedora 23 set up][] (previously was a blog post draft)
    - [GitHub][]
    - [Markdown][]
    - [Chrome][]
    - [Firefox][]
- [pysyspol][]. [*TODO commits*]. See section [pysyspol](#pysyspol). Modules
  `fs`, `process` and `util`.
- [dotfiles][].[*TODO commits*]. Configuration for VIM, xbindkeys, unison, mksh
  and Python.
- [pysweng][].[*TODO commits*].

**TODO commits total**.

[Fedora 23 set up]: {{ github_prefix }}/lopezpdvn.github.io/blob/master/_drafts/fedora-23-set-up.md
[Windows 10 set up]: {{ github_prefix }}/lopezpdvn.github.io/blob/master/_drafts/windows-10-set-up.md
[Personal website]: {{ github_prefix }}/lopezpdvn.github.io "Pedro Ivan Lopez's website"
[Data structures and algorithms in C#]: {{ github_prefix }}/DataStructuresAlgorithmsCSharp "Data structures and algorithms in C#"
[tech notes]: {{ site.baseurl }}/tech-notes
[gpg]: {{ site.baseurl }}/gpg
[cygwin]: {{ site.baseurl }}/cygwin
[OpenSSH server on Windows with Cygwin]: {{ site.baseurl }}/openssh-server-cygwin-windows
[Install Folding@home FAHClient on Linux as a systemd service unit]: {{ site.baseurl }}/install-fahclient-linux-systemd-service-unit
[VNC]: {{ site.baseurl }}/vnc "VNC"
[Xfce]: {{ site.baseurl }}/xfce "Xfce"
[Markdown]: {{ site.baseurl }}/markdown "Markdown"
[Python]: {{ site.baseurl }}/python "Python"
[dotfiles]: {{ github_prefix }}/dotfiles "dotfiles"
[wkhtmltopdf]: {{ site.baseurl }}/wkhtmltopdf "wkhtmltopdf"
[HTML]: {{ site.baseurl }}/html "HTML"
[Fedora 23 set up]: {{ site.baseurl }}/fedora-23-set-up "Fedora 23 set up"
[Windows 10 set up]: {{ site.baseurl }}/windows-10-set-up "Windows 10 set up"
[ffmpeg]: {{ site.baseurl }}/ffmpeg "ffmpeg"
[rsync]: {{ site.baseurl }}/rsync "rsync"
[digiKam]: {{ site.baseurl }}/digikam "digiKam"
[sudo]: {{ site.baseurl }}/sudo "sudo"
[GitHub]: {{ site.baseurl }}/github-tech-notes "GitHub"
[Chrome]: {{ site.baseurl }}/chrome "Google Chrome"
[Firefox]: {{ site.baseurl }}/firefox "Mozilla Firefox"
[pysweng]: {{ github_prefix }}/pysweng "Software engineering problems in Python"

## Philanthropy #######################################################

I made a small donation to the [International Longevity Alliance][] to help
with their crowdfunding campaign for the [Major Mouse Testing Program][]. TODO.

[Folding@Home during June][fah-stats] I scored TODO points, completed TODO work
units and ranked TODO out of all the members of [The Longevity Meme team][].
My total score is TODO at the time of this writing.  A graph of total
daily production history during June can be found [here][fah-jun-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-jun-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2016/folding_at_home_stats_june_2016.png
[International Longevity Alliance]: http://www.longevityalliance.org "International Longevity Alliance"
[Major Mouse Testing Program]: http://majormouse.org "Major Mouse Testing Program"

## Other ###############################################################

- My personal website got TODO views.

<br/>

---
