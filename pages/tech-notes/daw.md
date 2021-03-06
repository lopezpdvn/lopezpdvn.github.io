---
layout: tech-note
title: Notes on Digital Audio Workstation
permalink: /daw/
comments: true
first_published: 2016-10-27
last_updated: 2016-10-27
keywords: [daw, audio, music, art]
---

* TOC
{:toc}

{% capture dotfiles_prefix %}https://github.com/{{ site.github_username }}/dotfiles{% endcapture %}

## Set up and workflow

### Software used

- Ubuntu Studio 16.04
- Ardour 4.6.0
- QjackCtl 0.4.2
- Calf JACK Host 0.0.60
- Guitarix 0.34.0

### Set up

Look for configuration files at [dotfiles]({{ dotfiles_prefix }}).

[GSR180BK.slap_pop_00]({{ dotfiles_prefix }}/blob/master/GSR180)
-> [BAF-006.main.balanced_out]({{ dotfiles_prefix }}/blob/master/BAF-006)
-> [Scarlett_2i2.bass_guitar_microphone_00]({{ dotfiles_prefix }}/blob/master/scarlett_2i2)
-> PC (USB)

Headphones output of Scarlett 2i2 -> Speakers, to record video with audio.

[ASUS Eee PC 1005HA](https://www.asus.com/Notebooks/Eee_PC_1005HA_Seashell/) running
[Ubuntu Studio]({{ site.baseurl }}/ubuntu-studio) (see section
[Installation]({{ site.baseurl }}/ubuntu-studio#installation)) 16.04.

*Disable network devices*: Left click on network icon on panel, uncheck *Enable
Wi-Fi*. Left click on network icon on panel, uncheck *Enable Networking*.

*Disable Bluetooth*: Left click on bluetooth icon on panel, left click on *Turn
Bluetooth Off*.

Start *PulseAudio Volume Control*

Start *QjackCtl*, load configuration
[in_2i2_out_headphones_01]({{ dotfiles_prefix }}/blob/master/.config/rncbc.org/QjackCtl.conf)
and start JACK server.

Start *Calf JACK Host* and open
[slap_pop_00]({{ dotfiles_prefix }}/blob/master/calf_jack_host/slap_pop_00).

Start *Guitarix* and load preset *slap_pop_00* from bank
[bass]({{ dotfiles_prefix }}/blob/master/.config/guitarix/banks/bass.gx).

Copy *Ardour* session template
[record-single-bass-track](https://github.com/{{ site.github_username }}/ardour-session-templates).
Start Ardour and open such new session.

Connect audio ports in QJackCtl. No connections in *MIDI* and *ALSA* tab.

{% capture imgtext %}QjackCtl connections{% endcapture %}
![{{ imgtext }}]({{ site.baseurl }}/{{ site.images_dir }}/2016/qjackctl_connections_screenshot_setup_00.png "{{ imgtext }}")

### Workflow

On Ardour, for each record track session, arm the track, arm Ardour itself and
start recording by clicking on button *Play*. When done, click *Stop*.

During recording, watch the LED on the 2i2: green is OK, red is clipping. Also
watch for XRUNS on Ardour and QjackCtl.

Record using guide track using player independent/external to the DAW, like a
smartphone with earphones. It's better if the guide track is panned completely
to a single channel so that the person recording can use 1 earphone only while
listening with the other ear.
