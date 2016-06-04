---
layout: tech-note
title: Install Folding@home FAHClient on Linux as a systemd service unit
permalink: /install-fahclient-linux-systemd-service-unit/
comments: true
tags: [linux, fedora, volunteer_computing, folding@home, systemd]
---

* TOC
{:toc}

Download the `FAHClient` RPM package from the [official
site](https://folding.stanford.edu/home "Folding@home"). Install the package
with *dnf*

{% highlight bash %}
$ sudo dnf -y install <path to fachlient rpm>
{% endhighlight %}

Stop the traditional *init script* service that was created and automatically
started.

{% highlight bash %}
$ sudo /etc/init.d/FAHClient stop
{% endhighlight %}

(*Optional*) Backup the default configuration file and edit with your user data

{% highlight bash %}
$ sudo cp -av /etc/fahclient/config.xml /etc/fahclient/config.xml_bak
$ sudo vi /etc/fahclient/config.xml # (your user data)
{% endhighlight %}

Move the init script to another location. Path `/usr/local/bin` can be changed,
but be sure to use the correct path in the service unit file of the next step.

{% highlight bash %}
$ sudo mv /etc/init.d/FAHClient /usr/local/bin
{% endhighlight %}

Copy the contents of the gist [Systemd service unit for Folding@Home
Client](https://gist.github.com/{{ site.github_username}}/81c8bb867c51292045c6#file-fahclient-service) into (a
new) file `/etc/systemd/system/fahclient.service`. File contents included here:

{% gist lopezpdvn/81c8bb867c51292045c6 fahclient.service %}

Then update its ownership and permissions as below

{% highlight bash %}
$ sudo chown root:root /etc/systemd/system/fahclient.service
$ sudo chmod u=rw,go=r /etc/systemd/system/fahclient.service
{% endhighlight %}

The systemd service unit for FAHClient is installed. Reload systemd manager
configuration

{% highlight bash %}
$ sudo systemctl daemon-reload
{% endhighlight %}

Query the status of service unit.

{% highlight bash %}
$ sudo systemctl status --full fahclient.service
{% endhighlight %}

Start and stop as a regular systemd service

{% highlight bash %}
$ sudo systemctl stop fahclient.service
$ sudo systemctl start fahclient.service
{% endhighlight %}

[Folding@home](http://folding.stanford.edu/home) is a distributed computing
project for disease research that simulates protein folding, computational drug
design, and other types of molecular dynamics. See also the [Volunteer
Computing]({{ site.baseurl }}/volunteer-computing) page.
