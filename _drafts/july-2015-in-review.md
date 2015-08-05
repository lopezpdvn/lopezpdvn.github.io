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
will help me track progress, compare against goals set in the past and measure
overall impact.

Overall, July was kind of a slow month because of the house remodelling being
done at home, which probably will be finished in the next couple of weeks.

## Android development and debugging ###################################

I did some Android development and debugging in order to troubleshoot an
application a friend is developing. Because of the way his application is
designed, it needs root/admin permissions to access some features of the
device. I don't use a custom ROM, neither do I root my device since I don't
require admin permissions and also because I feel it might inadvertently
introduce security vulnerabilities to the system.

On this ocassion I temporarily installed Cyanogenmod on my Nexus 4 and obtained
root permissions on the phone. The result of this is a [guide to set up a
debugging and development environment for Android on
Linux](https://gist.github.com/{{ site.github_username }}/dd2eb3512ac225d0ad0e).

## Folding@Home Client as a systemd service unit #######################

I [fold](http://folding.stanford.edu/home/) on a regular basis on my desktop
computer and my home server, both of which are running Fedora.
[Systemd](http://freedesktop.org/wiki/Software/systemd/) keeps gaining
popularity among the major Linux distributions including Fedora, Ubuntu, Debian
and ArchLinux but Folding@Home packages still haven't shipped with systemd
support. I created a [systemd service unit file](https://gist.github.com/
{{ site.github_username }}/81c8bb867c51292045c6) that allows to control the
Folding@Home client as a regular systemd service unit, as well as a [short
guide to install it and use it](https://gist.github.com/
{{ site.github_username }}/81397197ffead57c2e98).

I started a [dotfiles repository](https://github.com/{{ site.github_username }}/dotfiles) at Github. I think most one of the main reasons people maintain a personal dotfiles repository is to be able to easily synchronize their configuration files and directories across different hosts/machines. I haven't had this need since I synchronize my files with [Unison](http://www.cis.upenn.edu/~bcpierce/unison/) and [rsync](https://rsync.samba.org/) without using the cloud and also because I keep individual configurations as [gists](https://gist.github.com/{{ site.github_username }}).

However it seems that it would be easier to maitain all configurations in a
single github repository as opposed to keeping each configuration as a separate
gist repository. Moreover, having all configuration files and directories
together makes sharing and browsing easier.

## ASP.NET 5 & ASPNET5CO

[ASPNET5CO]({{ site.url }}/aspnet5co) is a project that comprises my efforts to
socially and technicaly advocate the ASP.NET 5 framework. This month I worked on the following:

- Created a [Dockerfile](https://github.com/{{ site.github_username }}/aspnet5co/blob/master/Dockerfile) for development on Linux with [Yeoman](http://yeoman.io/).
- Improved the organization and presentation of the documentation.
- Wrote new sections including [Tooling][dnx dnvm and dnu], [Community][aspnet5-community], 

[dnx dnvm and dnu]: {{ site.url }}/aspnet5co/dnx-dnvm-dnu
[aspnet5-community]: {{ site.url }}/aspnet5co/aspnet5-community

## Other

- *I made [GiveWell](http://www.givewell.org/) my chosen charity at
  [Amazon Smile](https://smile.amazon.com/)*.

[^1]: Peter Hurford posts his reviews on a quarterly basis instead.
