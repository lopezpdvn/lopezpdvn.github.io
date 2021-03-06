---
layout: tech-note
title: "Windows 10 set up"
lang: en
categories: en
tags: [en, windows, operating_system, tech]
comments: true
first_published: 2016-05-07
last_updated: 2019-03-09
permalink: /windows-10-set-up/
---

* TOC
{:toc}

My Windows 10 set up for a laptop.

## Reset system

This is a factory reset, all files will go.

*Settings* -> *Update & security* -> *Recovery*. Under *Reset this PC*, choose
*Get started*, then *Remove everything*.

If the computer originally came with other version of Windows, for example if
you bought it with Windows 8 then upgraded to Windows 10, you may see an
additional option *Restore factory settings*. Don't choose cause it will
restore the version of Windows that came on the computer originally.

Choose either *Just remove my files* or *Remove files and clean the drive*. The
latter will wipe the hard disk contents for increased security. This will take
between 40 and 60 minutes if you let the installer check your disk.

Set user, password and other settings. You will login automatically.

## Create restore point

Create a restore point with the clean installation. Right click on Start menu
-> *System*. Click on *System Protection* on left column. Select system drive
and click on button *Configure*.

A new windows is displayed. Select *Turn on system protection*. If needed set
the max usage. Click *OK*.

Back on *System Protection* tab of *System Properties*, the system drive shows
*Protection* enabled/on. Select it, and click on button *Create*.  Describe
appropiately, for example "Clean reinstallation". Then click *OK*.

After a few seconds *System Protection* will confirm that the restore point was
created succesfully.

You may restart Windows.

## Lock screen on timeout

*Settings* -> *Personalization* -> *Lock screen*. Click on *Screen saver
settings* at the bottom of page. In the displayed window, check the box *On
resume, display logon screen* and enter how many minutes to wait to
automatically lock the screen. You don't have to select a screen saver.

## Set system power settings

A few recommended power settings.

Press `Meta`+`E` to open *File Explorer*, and go to *Control Panel\All Control
Panel Items*. Click on *Power Options*, then on *Require a password on wakeup*
and then on *Change settings that are currently unavailable*

Do nothing when the power button is pressed, when the sleep button is pressed
and when the lid is closed.

Select *Require a password (recommended)* in section *Password protection on
wakeup*.

In section *Shutdown settings* uncheck *Turn on fast startup* and check
*Sleep*, *Hibernate* and *Lock*.

Customize the default power plans or create a new one if needed. Make sure that
the power plan you use has the following options selected (click on
corresponding *Change plan settings* and then *Change advanced power
settings*):

- Require a password on wakeup: yes on both battery and plugged in.

## Network connection

When connecting to a network for the first time, select *No* when asked *Do you
want to allow your PC to be discoverable by other PCs and devices on this
network?*

In *Control Panel\All Control Panel Items\Network and Sharing Center\Advanced
sharing settings*. Display profile *Guest or Public* and select *Turn off
network discovery* and *Turn off file and printer sharing*.

Display *All Networks* and select *Turn off Public folder sharing*, *Use
128-bit encryption* and *Turn on password protected sharing*.

## Disable remote assistance

Go to *Control Panel\All Control Panel Items\System* and click on *Advanced
system settings*. Go to tab *Remote* and uncheck *Allow Remote Assistance
connections to this computer*.

## Configure Windows Update

*Settings* -> *Update and Security*. Click on *Advanced Options*. Select
*Notify to schedule restart*.

Then click on *Choose how updates are delivered* and turn off *Updates from
more than one place*.

Connect to the internet to let Windows update itself.

## Update & Security

### Windows Defender

*Settings* -> *Windows Defender*

- *Cloud-based Protetion. Get better, faster protection by sending Microsoft
  info about potential security problems Windows Defender finds*: off.

- *Automatic sample submission. Help us make Windows Defender better by sending
  Microsoft samples so we can improve our anti-virus and malware measures...*:
  off.

Add exclusions as necessary.

### For developers

Select *Windows Store app. Only install apps from the Windows Store*.

## Security and Maintenance

*Control Panel\All Control Panel Items\Security and Maintenance*. Click on
*Change Security and Maintenance settings* and check all the boxes in section
*Turn messages on or off*. Then click OK to return to previous window.

In section *Security* -> *User Account Control*, click on *Change settings* to
show the window *User Account Control Settings*. Select *Always notify*,
maximum notification level. Click OK.

Then in section *Windows SmartScreen*, click on *Change settings* to show
window *Windows SmartScreen*. Select option *Get administrator approval before
running an unrecognized app from the Internet*.

## Windows Firewall

Go to *Control Panel\All Control Panel Items\Windows Firewall* and then click
on *Change notification settings*. For both private and public network
settings, select *Turn on Windows Firewall* and check *Notify me when Windows
Firewall blocks a new app*.

## Analyze and optimize local partitions

Go to *Control Panel\All Control Panel Items\Administrative Tools* in *File
Explorer*. Double click on *Defragment and optimize drives*. For each main
partition, select it and click on *Analyze* and *Optimize*. This can take a
while.

## Rename PC

*System* -> *About* -> *Rename PC*.

## Privacy

*Settings* -> *Privacy*.

### General

- *Let apps user my advertising ID for experiences across app*: off.
- *Turn on SmartScreen Filter...*: on.
- *Send Microsoft info about how I write to help us improve typing and writing
  in the future* = off.
- *Let website provide locally relevant content by accessing my language list*: off.

### Activity History

_Keywords: timeline, task view, multiple desktops, virtual desktops._

Uncheck everything, switch off activity for every account and clear activity history.

### Location

Off.

### Account info

*Let apps access my name, picture and other account info*: off.

### Contacts

No app allowed to access contacts.

### Calendar

*Let apps access my calendar*: off.

### Call History

*Let apps access my call history*: off.

### Email

*Let apps access and send email*: off.

### Messaging

*Let apps read or send messages (text or MMS)*: off.

### Radios

*Let apps control radios*: off.

### Other devices

*Let your apps automatically share and sync info with wireless devices that
don't explicitly pair with your PC, tablet, or phone*: off.

### Feedback & diagnostics

- *Windows should ask for my feedback*: never
- *Send your device data to Microsoft*: Basic.

## Language

*Control Panel\All Control Panel Items\Language\Advanced Settings*.

In *Personalization data* select *Don't use automatic learning and delete all
previously collected data*

In *Language for web content* check *Don't let websites access my language
list...*.

## Enable ping

Open *Windows Firewall with Advanced Security*. In left column click on
*Inbound Rules*. Order the rules by name and look for a set of rules whose name
start with the string *File and Printer Sharing (Echo Request -*. Select the
rule(s) applicable to your need case and enabled them without modification.

## Adjust visual effects for best performance

Go to _Control Panel\All Control Panel Items\System_. Click on _Advanced system
settinsg_. In tab _Advanced_ click on _Performance_ _Settings_. Select _Adjust
for best performance_ and click OK.

Then, go to _Control Panel\All Control Panel Items\Ease of Access Center_.
Click on _make the computer easier to see_. Check _Turn off all unnecessary
animations_ and click OK.

## Misc

- Add desktop with `Meta`+`Ctrl`+`D`.
- Move to next desktop with `Meta`+`Ctrl`+`Right-Arrow`.
- *System* -> *Notifications & actions* -> *Hide notifications while
  presenting* = on.
- *System* -> *Devices* -> *AutoPlay*. Set it off and choose *Take no action*
  for all AutoPlay defaults.
- *System* -> *Devices* -> *USB*. *Notify me if there are issues connecting to
  USB devices* = on.

## After initial configuration

After the initial configuration is a good to create a restore point.

## References

- *Windows 10: The Missing Manual*. David Pogue. O'Reilly Media, Inc. September
  2015

<br/>

---
