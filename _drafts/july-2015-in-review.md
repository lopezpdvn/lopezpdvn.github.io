---
layout: post
title:  "July 2015 in review"
date:   2015-08-02 14:49:23
lang: en
categories: en
tags: [en, month-in-review]
---

Following [Vipul Naik](http://vipulnaik.com)'s, [Peter
Hurford](http://peterhurford.com)'s[^1] and others' example, I will be
publishing reviews of my activities as blog posts on a monthly basis.  This
will help me track progress, compare against goals set in the past and try to
measure overall impact.

For the most part, July was kind of a slow month because of the house
remodelling being done at home, which probably will be finished in the next
couple of weeks.

Contents:

* TOC
{:toc}

## Android development and debugging ###################################

I did some Android development and debugging in order to troubleshoot an
application a friend is developing. Because of the way his application is
designed, it needs root/admin permissions to access some features of the
device.

I don't normally use a custom ROM neither do I root my device[^3], but on this
ocassion I temporarily installed Cyanogenmod on my Nexus 4 and obtained root
permissions on the phone. The result of this is a [guide to set up a debugging and development environment for Android on Linux](https://gist.github.com/{{ site.github_username }}/dd2eb3512ac225d0ad0e).

## Folding@Home Client as a systemd service unit #######################

I [fold][fah-statistics] on a regular basis on my desktop computer and my home
server, both of which are running Fedora.  [Systemd][] keeps gaining popularity
among the major Linux distributions including Fedora, Ubuntu, Debian and
ArchLinux, but Folding@Home packages still haven't shipped with systemd
support.

I created a [systemd service unit file][] that allows to control the
Folding@Home client as a regular systemd service unit, as well as a [short
guide to install it and use it][fahclient-systemd].

[fah-statistics]: http://fah-web2.stanford.edu/cgi-bin/main.py?qtype=userpage&username=dreilopz
[Systemd]: http://freedesktop.org/wiki/Software/systemd/
[systemd service unit file]: https://gist.github.com/{{ site.github_username }}/81c8bb867c51292045c6
[fahclient-systemd]: https://gist.github.com/{{ site.github_username }}/81397197ffead57c2e98

## Dotfiles repository #################################################

I started a [dotfiles repository](https://github.com/{{ site.github_username }}/dotfiles) at Github. I think most one of the main reasons people maintain a personal dotfiles repository is to be able to easily synchronize their configuration files and directories across different hosts/machines. I haven't had this need since I synchronize my files with [Unison](http://www.cis.upenn.edu/~bcpierce/unison/) and [rsync](https://rsync.samba.org/) without using third-party services and also because I keep individual configurations as [gists](https://gist.github.com/{{ site.github_username }}).

However it seems that it would be easier to maitain all configurations in a
single Github repository as opposed to keeping each configuration as a separate
Gist repository. Moreover, having all configuration files and directories
together makes sharing and browsing easier.

## ASP.NET 5 & ASPNET5CO

[ASPNET5CO]({{ site.url }}/aspnet5co) is a project that comprises my efforts to
socially and technicaly advocate the ASP.NET 5 framework. This month I worked on the following:

- Created a [Dockerfile](https://github.com/{{ site.github_username }}/aspnet5co/blob/master/Dockerfile) for development on Linux with [Yeoman](http://yeoman.io/).
- Improved the organization and presentation of the website.
- Wrote new sections including: 
  - [The .NET Framework and its future][]
  - [Cross-platform development with .NET][]
  - [Introduction to ASP.NET 5][]
  - [ASP.NET 5 community][]
  - [DNX, DNVM and DNU][]
  - [Installation guide][]
  - [Development guide][]
  - [Documentation guide][]

[The .NET Framework and its future]: {{ site.url }}/aspnet5co/dotnet-framework-and-future/
[Cross-platform development with .NET]: {{ site.url }}/aspnet5co/dotnet-cross-platform-development/
[Introduction to ASP.NET 5]: {{ site.url }}/aspnet5co/aspnet5-introduction/
[ASP.NET 5 community]: {{ site.url }}/aspnet5co/aspnet5-community
[DNX, DNVM and DNU]: {{ site.url }}/aspnet5co/dnx-dnvm-dnu
[Installation guide]: {{ site.url }}/aspnet5co/installation
[Development guide]: {{ site.url }}/aspnet5co/development
[Documentation guide]: {{ site.url }}/aspnet5co/documentation

## Philanthropy/EA #####################################################

As suggested by [Tom Ash](http://tog22.tumblr.com/) of [Charity
Science](http://www.charityscience.com), I'm gonna be helping with the local
*Effective Altruism* presence here at Monterrey. The point of this is to have
at least one person other people interested in EA could talk to. Be sure to
contact me if you want to know more about effective altruism related ideas.[^2]

A mailing list and a [Facebook
group](https://www.facebook.com/groups/739984722775452/) were set up, although
for the time being we may organize all Spanish-speaking EAs in a single group
instead, probably *[Altruismo
Eficaz](https://www.facebook.com/groups/1605543996325148/)*.

Finally, I made [GiveWell](http://www.givewell.org/) my chosen charity at
[Amazon Smile](https://smile.amazon.com/).

## Other ###############################################################

I watched the first 3 seasons of the TV series Mad Men.

---

[^1]: Peter Hurford posts his reviews on a quarterly basis instead.
[^2]: This didn't really happened in July but in March, but I figured it's the kind of activity I should include in my personal reviews. :)
[^3]: I don't usually require admin permissions and I don't currently root because I feel it might inadvertently introduce security vulnerabilities to the system.
