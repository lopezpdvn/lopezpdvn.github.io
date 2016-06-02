---
layout: page
title: "Fedora 23 set up"
lang: en
categories: en
tags: [en, linux, tech, operating_system, firewall, security]
comments: true
first_published: 2016-03-31
last_updated: 2016-06-02
permalink: /fedora-23-set-up/
---

*First published: {{ page.first_published }}. Last updated: {{ page.last_updated }}*

* TOC
{:toc}

## Install

## Configure users, groups and sudo

Remember to use `visudo` instead of directly editing the *sudoers* files.

{% highlight bash %}
# visudo
{% endhighlight %}

Verify

{% highlight bash %}
$ sudo -l
{% endhighlight %}

Use `groupadd` to add groups.  Use `useradd` to add users. Use `passwd` to
unlock users by setting their account passwords.

## Update system

Clean *dnf* cache, upgrade system and reboot

{% highlight bash %}
$ sudo dnf -y clean all ; sudo dnf -y upgrade
$ sudo systemctl reboot
{% endhighlight %}

## Install RPM Fusion

Install [RPM Fusion](http://rpmfusion.org).

{% highlight bash %}
sudo dnf install http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
{% endhighlight %}

## Firewall configuration

I configure services but keep them globally disabled, and then selectively
enable them with *rich rules*. When editing the rich rules, using a MAC address
as *source* doesn't work when the source has its MAC address spoofed. I haven't
tested with the source with real hardware MAC address. Using a IP in *source*
works OK.

When editing rich rules, using as source the IP of the default gateway doesn't
work.

## Local email with *postfix* and *mailx*

Install *postfix* and *mailx*

{% highlight bash %}
$ sudo dnf -y install postfix mailx
{% endhighlight %}

Edit `/etc/postfix/main.cf`:

{% highlight bash %}
myhostname = localhost
mydomain = localdomain
myorigin = $myhostname
inet_interfaces = localhost
inet_protocols = all
mynetworks_style = host
{% endhighlight %}

Enable and start service

{% highlight bash %}
$ sudo systemctl enable postfix.service
$ sudo systemctl start postfix.service
{% endhighlight %}

Verify

{% highlight bash %}
$ sudo systemctl status --full postfix.service
<...>
$ netstat -lt | grep smtp
<...>
{% endhighlight %}

Configure postfix mta

{% highlight bash %}
$ sudo alternatives --config mta
<Choose sendmail.postfix in dialog/menu>
{% endhighlight %}

Test, opening with email client after sending it.

{% highlight bash %}
$ echo 'Test email body' | mail -s 'Test email subject' $(whoami)@localhost
{% endhighlight %}

### Send root email to other user

Edit `/etc/aliases`

{% highlight bash %}
root:   <your username>
{% endhighlight %}

Run

{% highlight bash %}
$ sudo newaliases
$ sudo postfix reload
$ sudo systemctl restart postfix.service
{% endhighlight %}

Test, opening with email client after sending it (as root).

{% highlight bash %}
echo 'Test email body' | mail -s 'Test email subject' $(whoami)@localhost
{% endhighlight %}

### Mail from cron jobs

After setting up local email in your system, restart the cron service so jobs
start sending email notifications if they're configured to do so

{% highlight bash %}
$ sudo systemctl restart crond.service
{% endhighlight %}

## systemd targets

*systemd*'s targets serve similar purposes as traditional SysV runlevels.

List targets

{% highlight bash %}
$ systemctl list-units --type=target
{% endhighlight %}

[This table](https://wiki.archlinux.org/index.php/systemd#Targets_table)
roughly maps *systemd* targets to SysV runlevels. SysV runlevel 3 ~=
`multiuser.target` and SysV runlevel 5 ~= `graphical.target`.

The default target is `graphical.target`, so the machine boots into a
multi-user graphical system.

{% highlight bash %}
$ file /etc/systemd/system/default.target
/etc/systemd/system/default.target: symbolic link to /lib/systemd/system/graphical.target
{% endhighlight %}

For example, to make the machine boot into a non-graphical multi-user system,
run below command and reboot

{% highlight bash %}
$ sudo systemctl set-default multi-user.target
Removed symlink /etc/systemd/system/default.target.
Created symlink from /etc/systemd/system/default.target to /usr/lib/systemd/system/multi-user.target.
{% endhighlight %}

## Media

### Image and photos

{% highlight bash %}
$ sudo dnf -y install digikam gimp geeqie ristretto perl-Image-ExifTool
{% endhighlight %}

### Audio/video playback

{% highlight bash %}
$ sudo dnf -y install quodlibet gstreamer1-plugins-ugly mplayer vlc
{% endhighlight %}

### Audio/video processing

{% highlight bash %}
$ sudo dnf -y install ffmpeg
{% endhighlight %}

## Jekyll

{% highlight bash %}
$ sudo dnf -y install ruby-devel redhat-rpm-config
$ sudo dnf -y groupinstall "C Development Tools and Libraries"
$ gem install jekyll 'jekyll-gist'
{% endhighlight %}

## Other software

{% highlight bash %}
$ sudo dnf -y install libreoffice-calc libreoffice-writer libreoffice-impress
{% endhighlight %}

## References

- <https://ask.fedoraproject.org/en/question/81052/local-user-mail/>
- <https://wiki.archlinux.org/index.php/systemd>

<br/>

---
