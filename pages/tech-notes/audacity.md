---
layout: tech-note
title: Notes on Audacity
permalink: /audacity/
comments: true
first_published: 2016-08-11
last_updated: 2016-12-20
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

## Signal level/gain of a recorded track

To improve the level/volume of a signal that may have clipping. Create a new
project and import the audio track. Select the whole track with a left-click on
the corresponding *Track Control Panel*. Then click on menu *Effect* and click
on effect *Limiter*.

Keep the default values *Soft Limit*, *Input Gain mono/Left*/*Input Gain Right*
= 0.00, *Hold* = 10 ms, *Apply Make-up Gain* = No. The parameter to vary is
*Limit to (dB)*, a baseline value is -6.00. Click on *OK* to apply the effect.

Then click on effect *Amplify* on menu *Effect*, selecting a value equal to the
absolute value of the *Limit to (dB)* value of previous step.

The signal should display louder but without clipping.

## References

- <http://www.audacityteam.org/help/>
