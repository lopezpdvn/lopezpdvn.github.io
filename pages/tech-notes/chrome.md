---
layout: tech-note
title: "Google Chrome"
lang: en
categories: en
tags: [en, web, chrome]
comments: true
first_published: 2016-06-06
last_updated: 2018-01-07
permalink: /chrome/
---

* TOC
{:toc}

## Profiles

Default dir for configuration dir is `$XDG_CONFIG_HOME/google-chrome`. Default
executable is `google-chrome`. Switch for profile selection is
`--profile-directory=<name of profile>`. Say you need a profile for work called
`work`:

- Create empty directory or symlink to an empty directory, named `work`, in
  `$XDG_CONFIG_HOME/google-chrome`.
- Start Chrome with `google-chrome --profile-directory=work`

## User data directory

Option `--user-data-dir=<path_to_dir>`. Inside `<path_to_dir>` you have the
several [profile directories](#profiles), including the default one.

## Increase security with site isolation

`chrome://flags/#enable-site-per-process`, see
[Google Chrome Help](https://support.google.com/chrome/answer/7623121).
