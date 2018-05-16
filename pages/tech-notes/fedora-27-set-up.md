---
layout: tech-note
title: "Fedora 27 set up"
lang: en
categories: en
tags: [en, linux, tech, operating_system, firewall, security, fedora]
comments: true
first_published: 2018-05-12
last_updated: 2018-05-16
permalink: /fedora-27-set-up/
redirect_from: /fedora/
---

* TOC
{:toc}

## Upgrade

See [Notes on Fedora DNF system upgrade][dnf-upgrade].

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

## Configure shell history

*You may not need this. Check your shell's documentation*

In your user shell configuration files, set the environment variables related
to shell history: `HISTFILE`, `HISTSIZE`

As fallback, add to `/etc/profile` too

{% highlight bash %}
# File path may be different
export HISTFILE=~/.bash_history
{% endhighlight %}

## Install RPM Fusion

Install [RPM Fusion](http://rpmfusion.org).

{% highlight bash %}
sudo dnf install http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
{% endhighlight %}

## GUI apps with elevated permissions

Some of the configuration can be done with GUI apps. See
[X Windows authorization]({{ site.baseurl }}/x/#x-windows-authorization).

## Firewall configuration

I configure services with `firewall-config` but keep them globally disabled,
and then selectively enable them with *rich rules*. When editing the rich
rules, using a MAC address as *source* doesn't work when the source has its MAC
address spoofed. I haven't tested with the source with real hardware MAC
address. Using a IP in *source* works OK.

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

[This table](https://wiki.archlinux.org/index.php/systemd#Mapping_between_SysV_runlevels_and_systemd_targets)
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
$ sudo dnf -y install quodlibet gstreamer1-plugins-ugly mplayer vlc qjackctl jack-rack pavucontrol pulseaudio-module-jack
{% endhighlight %}

### Audio/video processing

{% highlight bash %}
$ sudo dnf -y install ffmpeg
{% endhighlight %}

## Jekyll

{% highlight bash %}
$ sudo dnf -y install ruby-devel redhat-rpm-config
$ sudo dnf -y groupinstall "C Development Tools and Libraries"
$ gem install jekyll 'jekyll-gist' 'jekyll-sitemap' 'jekyll-seo-tag' 'jekyll-redirect-from'
{% endhighlight %}

## Other software

{% highlight bash %}
$ sudo dnf -y install libreoffice-calc libreoffice-writer libreoffice-impress redshift-gtk
{% endhighlight %}

## Configure SSH server

If you have specified an IP address on wich sshd has to listen to
(`sshd_config`), add `network-online.target` to its systemd unit.

{% highlight bash %}
$ sudo vi /etc/systemd/system/multi-user.target.wants/sshd.service
{% endhighlight %}

Add `network-online.target` to `Wants` and `After`

{% highlight bash %}
$ sudo systemctl daemon-reload
{% endhighlight %}

## References

- <https://ask.fedoraproject.org/en/question/81052/local-user-mail/>
- <https://wiki.archlinux.org/index.php/systemd>
- <https://ask.fedoraproject.org/en/question/102727/f25-sshd-not-starting-on-boot-after-recent-updates/>

[dnf-upgrade]: {{ site.baseurl }}/fedora-dnf-system-upgrade "Notes on Fedora DNF system upgrade"

<br/>

---
