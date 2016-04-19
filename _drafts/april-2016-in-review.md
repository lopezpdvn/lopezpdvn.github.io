---
layout: post
title: "April 2016 in review"
date: Wed Apr 13 00:19:51 CDT 2016
lang: en
categories: en
tags: [en, month-in-review]
comments: true
permalink: /april-2016-in-review/
excerpt: April 2016 personal review, summary of activities, misc notes...
---

This is the *April 2016 in review* post. The previous monthly review post is
[here][mar-review].  The contents are:

* TOC
{:toc}

[mar-review]: {% post_url 2016/2016-04-02-march-2016-in-review %}

## Public code repositories activity ###################################

Progress on projects:

{% capture syspoljs %}https://github.com/{{ site.github_username }}/syspol-js/blob/9723c1cc0a723d87bc3a2c2e3aaaeab73561be48{% endcapture %}

- [pysweng: Software engineering problems in Python][]. [*X commit*]:
  - Added unit tests using `unittest` standard module
- [dotfiles][]. [*X commit*]: mksh RC file sources user commands
- [Personal website][]. [*X commits*]:
  - Added page [Tech notes]({{ site.baseurl }}/tech-notes), including notes on
    [Python]({{ site.baseurl }}/python),
    [rsync]({{ site.baseurl }}/rsync),
    [rsnapshot]({{ site.baseurl }}/rsnapshot),
    [dd]({{ site.baseurl }}/dd),
    [S.M.A.R.T.]({{ site.baseurl }}/smart),
    [sudo]({{ site.baseurl }}/sudo),
    [Windows OS]({{ site.baseurl }}/windows),
    [digiKam]({{ site.baseurl }}/digikam) &
    [Digitizing Hi8 cassettes]({{ site.baseurl }}/digitizing-hi8).
  - Added page [Contact]({{ site.baseurl }}/contact)
  - Updated [OpenPGP info]({{ site.baseurl }}/contact)
  - General maintenance and miscellaneous content

**TODO commits total**.

## Other ###############################################################

- I spent some time converting and compressing some family videos from
  VHS/analog format to digital formats.

- My personal website got TODO views.

## Folding@Home #######################################################

[Folding@Home during April][fah-stats] I scored TODO points, completed XX work
units and ranked TODO out of all the members of [The Longevity Meme team][].
My total score is TODO at the time of this writing.  A graph of total daily
production history during April can be found [here][fah-apr-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-apr-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2016/TODO.png

---

- [Software engineering problems in JavaScript][]. [*19 commits*]:
  - Writing source in ECMAScript 6 and transpiling to ES5 with Babel
  - Updated project structure
  - Using npm scripts
  - Exploring OOP techniques: instantiation, cloning & inheritance
- [syspol-js][]. [*16 commits*]:
  - New types:
    - [`fs.fileLines2Array`]({{ syspoljs }}/src/lib/fs.js#L81)
    - [`util.callThrows`]({{ syspoljs }}/src/lib/util.js#L126)
    - [`fs.isReadable`]({{ syspoljs }}/src/lib/fs.js#L90)
  - Writing source in ECMAScript 6 and using Babel to transpile to ES5
  - Using npm scripts
- [Data structures and algorithms in JavaScript][]. [*10 commits*]:
  - Reorganized code to use 1 Visual Studio project and 1 solution (see [npm
    issue 2974][]).
  - Using npm scripts
  - Using generators and other ECMAScript 6 features.

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}

[Personal website]: {{ github_prefix }}/lopezpdvn.github.io "Pedro Ivan Lopez's website"
[syspol-js]: {{ github_prefix }}/syspol-js "syspol-js"
[Software engineering problems in JavaScript]: {{ github_prefix }}/software-engineering-problems-javascript "Software engineering problems in JavaScript"
[npm issue 2974]: https://github.com/npm/npm/issues/2974 "Allow subdirectories within git repos in npm install #2974"
[dotfiles]: {{ github_prefix }}/dotfiles "dotfiles"
[Data structures and algorithms in JavaScript]: {{ github_prefix }}/data-structures-algorithms-javascript "Data structures and algorithms in JavaScript"
[pysweng: Software engineering problems in Python]: {{ github_prefix }}/pysweng "pysweng: Software engineering problems in Python"


<br/>

---
