---
layout: tech-note
title: Notes on Audacity
permalink: /audacity/
comments: true
first_published: 2016-08-11
last_updated: 2016-10-12
keywords: [media, audio, music, audioeng]
---

* TOC
{:toc}

## Display while playing

When finding specific points in time with a large zoom one usually loops the
selected region. The default behaviour is for the display to follow the section
being played. To prevent this go to *Edit* -> *Preferences* -> *Tracks* and
uncheck *Update display while playing*.

## Guide tracks

To optionally add initial silence and/or mute 1 channel, open a new project and
import your guide track file. Set the cursor at the beginning of the timeline
and go to *Generate* -> *Silence*. Enter the desired length and click *OK*. The
silence will be inserted before the sound of the imported file.

Then click on the black downward arrow beside the track name, and click *Split
Stereo to Mono*. A new track will appear. Then pan both tracks to a single
channel all the way to the maximum level. Reduce the gain and export.

## References

- <http://www.audacityteam.org/help/>
