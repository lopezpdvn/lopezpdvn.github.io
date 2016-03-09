---
layout: post
title: "February 2016 in review"
date: Mon Mar  7 21:33:06 CST 2016
lang: en
categories: en
tags: [en, month-in-review]
comments: true
permalink: /february-2016-in-review/
excerpt: February 2016 personal review, summary of activities, misc notes...
---

This is the *February 2016 in review* post. The previous monthly review post is
[here][jan-review].  The contents are:

* TOC
{:toc}

[jan-review]: {% post_url 2016/2016-02-09-january-2016-in-review %}

## Public code repositories activity ###################################

Progress on projects:

{% capture syspoljs %}https://github.com/{{ site.github_username }}/syspol-js/blob/b1e7bb398827ef204288d07c6c6dcbc39ea26448{% endcapture %}

- [syspol-js][]. [*47 commits*]:
  - New types:
    - [`app.App`]({{ syspoljs }}/src/app.js#L13)
    - [`util.Logger`]({{ syspoljs }}/src/util.js#L17)
    - [`fs.robocopy`]({{ syspoljs }}/src/fs.js#L10)
  - Reorganized code to use 1 Visual Studio project and 1 solution (see [npm
    issue 2974][]).
  - Added gulp support.
- [Personal website][]. [*21 commits*]
  - Using gulp instead of GNU Make.
  - General maintenance and miscellaneous content
- [dotfiles][]. [*3 commits*]: Updated git and added Pulseaudio config.
- [Data structures and algorithms in C#][]. [*2 commits*] Minor edits.
- [syspol][]. [*1 commits*] Updated terminology for application logging and
  locking.
- [Software engineering problems in JavaScript][]. [*1 commit*] Reorganized
  code to use 1 Visual Studio project and 1 solution (see [npm issue 2974][]).

**75 commits total**.

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}

[Personal website]: {{ github_prefix }}/lopezpdvn.github.io "Pedro Ivan Lopez's website"
[Data structures and algorithms in C#]: {{ github_prefix }}/DataStructuresAlgorithmsCSharp "Data structures algorithms in C#"
[syspol-js]: {{ github_prefix }}/syspol-js "syspol-js"
[syspol]: {{ github_prefix }}/syspol "syspol - System Policy"
[Software engineering problems in JavaScript]: {{ github_prefix }}/software-engineering-problems-javascript "Software engineering problems in JavaScript"
[npm issue 2974]: https://github.com/npm/npm/issues/2974 "Allow subdirectories within git repos in npm install #2974"
[dotfiles]: {{ github_prefix }}/dotfiles "dotfiles"

## Folding@Home #######################################################

[Folding@Home during february][fah-stats] I scored 18,807 points, completed 36
work units and ranked 47th out of all the members of [The Longevity Meme
team][].  My total score is 1,115,324 at the time of this writing.  A graph of
total daily production history during february can be found
[here][fah-jan-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-jan-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2016/folding_at_home_stats_february_2016.png

## Other ###############################################################

- I spent some time converting and compressing some family videos from
  VHS/analog format to digital formats.

- My personal website got 175 views.

<br/>

---
