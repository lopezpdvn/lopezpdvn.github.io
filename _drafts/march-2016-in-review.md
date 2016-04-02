---
layout: post
title: "March 2016 in review"
date: Fri Apr  1 22:24:50 CST 2016
lang: en
categories: en
tags: [en, month-in-review]
comments: false
permalink: /march-2016-in-review/
excerpt: March 2016 personal review, summary of activities, misc notes...
---

This is the *March 2016 in review* post. The previous monthly review post is
[here][feb-review].  The contents are:

* TOC
{:toc}

[feb-review]: {% post_url 2016/2016-03-09-february-2016-in-review %}

## Public code repositories activity ###################################

Progress on projects:

{% capture syspoljs %}https://github.com/{{ site.github_username }}/syspol-js/blob/9723c1cc0a723d87bc3a2c2e3aaaeab73561be48{% endcapture %}

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
- [Personal website][]. [*35 commits*]:
  - Added section [FAQ]({{ site.baseurl }}/faq), [Favorite quotes]({{
    site.baseurl }}/quotes) and [vCard]({{ site.baseurl }}/vcard)
  - General maintenance and miscellaneous content
  - Created npm project/package
- [dotfiles][]. [*1 commit*]: Unison ignores Node.js package dir and Git
  repository dir.
- [pysweng: Software engineering problems in Python][]. [*1 commit*]: Created
  public repository.

**82 commits total**.

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}

[Personal website]: {{ github_prefix }}/lopezpdvn.github.io "Pedro Ivan Lopez's website"
[syspol-js]: {{ github_prefix }}/syspol-js "syspol-js"
[Software engineering problems in JavaScript]: {{ github_prefix }}/software-engineering-problems-javascript "Software engineering problems in JavaScript"
[npm issue 2974]: https://github.com/npm/npm/issues/2974 "Allow subdirectories within git repos in npm install #2974"
[dotfiles]: {{ github_prefix }}/dotfiles "dotfiles"
[Data structures and algorithms in JavaScript]: {{ github_prefix }}/data-structures-algorithms-javascript "Data structures and algorithms in JavaScript"
[pysweng: Software engineering problems in Python]: {{ github_prefix }}/pysweng "pysweng: Software engineering problems in Python"

## Folding@Home #######################################################

[Folding@Home during March][fah-stats] I scored 18,208 points, completed 36
work units and ranked 47th out of all the members of [The Longevity Meme
team][].  My total score is 1,153,827 at the time of this writing.  A graph of
total daily production history during March can be found [here][fah-mar-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-mar-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2016/folding_at_home_stats_march_2016.png

## Other ###############################################################

- I spent some time converting and compressing some family videos from
  VHS/analog format to digital formats.

- My personal website got 197 views.

<br/>

---
