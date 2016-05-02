---
layout: post
title: "April 2016 in review"
date: Sun May  1 22:56:30 CDT 2016
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

## Technical notes ####################################################

Previously I used to keep technical notes as [gists][]. Now I am writing them
on my main website, which makes it easier to manage and find them. Ideally, I
should publish them as blog posts, but I don't have enough time to write them
up properly. Instead, I'm writing them in a somewhat crude way.

The index is [here]({{ site.baseurl }}/tech-notes "Tech notes"), and as of now
there are notes on the following topics:
[Python]({{ site.baseurl }}/python),
[rsync]({{ site.baseurl }}/rsync),
[rsnapshot]({{ site.baseurl }}/rsnapshot),
[dd]({{ site.baseurl }}/dd),
[S.M.A.R.T.]({{ site.baseurl }}/smart),
[sudo]({{ site.baseurl }}/sudo),
[Windows OS]({{ site.baseurl }}/windows),
[digiKam]({{ site.baseurl }}/digikam),
[Digitizing Hi8 cassettes]({{ site.baseurl }}/digitizing-hi8-cassettes),
[Digitizing VHS cassettes]({{ site.baseurl }}/digitizing-vhs-cassettes),
[ffmpeg]({{ site.baseurl }}/ffmpeg),
[KeePass]({{ site.baseurl }}/keepass) and
[Node.js]({{ site.baseurl }}/nodejs).

[gists]: https://gist.github.com/{{ site.github_username }} "{{ site.github_username }}'s gists"

## Public code repositories activity ###################################

Progress on projects:

- [Personal website][]. [*65 commits*]:
  - Added page [Tech notes]({{ site.baseurl }}/tech-notes), see section
    [Technical notes](#technical-notes "Technical notes")
  - Added page [Contact]({{ site.baseurl }}/contact)
  - Updated [OpenPGP info]({{ site.baseurl }}/contact)
  - Worked on a blog post draft [Fedora 23 set up][]
  - General maintenance and miscellaneous content
- [pysweng: Software engineering problems in Python][]. [*6 commit*]:
  - Added unit tests using `unittest` standard module
- [dotfiles][]. [*3 commit*]:
  - mksh RC and profile file sources user defined environment
  - xbindkeys configuration file for controlling quodlibet

{% capture github_prefix %}https://github.com/{{ site.github_username }}{% endcapture %}

[Fedora 23 set up]: {{ github_prefix }}/lopezpdvn.github.io/blob/master/_drafts/fedora-23-set-up.md
[Personal website]: {{ github_prefix }}/lopezpdvn.github.io "Pedro Ivan Lopez's website"
[dotfiles]: {{ github_prefix }}/dotfiles "dotfiles"
[pysweng: Software engineering problems in Python]: {{ github_prefix }}/pysweng "pysweng: Software engineering problems in Python"

**74 commits total**.

## Other ###############################################################

- I spent time digitizing some family videos from VHS and Hi8 formats.

- My personal website got 389 views.

## Folding@Home #######################################################

[Folding@Home during April][fah-stats] I scored 4,306 points, completed 10 work
units and ranked 46th out of all the members of [The Longevity Meme team][],
overtaking fellow folder
*[www.imminst.org](http://folding.extremeoverclocking.com/user_overtake.php?s=&u=444006)*[^1].
My total score is 1,158,133 at the time of this writing.  A graph of total
daily production history during April can be found [here][fah-apr-graph].

[fah-stats]: http://folding.extremeoverclocking.com/user_summary.php?s=&u=648628 "dreilopz - User Summary - EXTREME Overclocking Folding @ Home Stats"
[The Longevity Meme team]: http://folding.extremeoverclocking.com/user_list.php?s=&t=32461 "The Longevity Meme Individual Users List"
[fah-apr-graph]: {{ site.baseurl }}/{{ site.images_dir }}/2016/folding_at_home_stats_april_2016.png

[^1]: www.imminst.org == [LongeCity](http://www.longecity.org "Advocacy & Research for Unlimited Lifespans")

<br/>

---
