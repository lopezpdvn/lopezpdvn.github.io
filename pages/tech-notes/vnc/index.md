---
layout: tech-note
title: VNC
permalink: /vnc/
comments: true
tags: [sysadmin, system_administration, vnc, ssh]
first_published: 2016-05-20
last_updated: 2019-07-12
---

* TOC
{:toc}

## Setup

Follow instructions at
[Fedora documentation](https://docs.fedoraproject.org/en-US/fedora/f30/system-administrators-guide/infrastructure-services/TigerVNC/).

Password length on server should be maximum 8 characters. Further characters
are ignored.

Use display numbers starting from 1 without skipping (1, 2, 3, ...).

{% highlight bash %}
$ sudo systemctl start vncserver-<userA>@:1.service
$ # sudo systemctl start vncserver-<userA>@:3.service <--- This would fail
$ sudo systemctl start vncserver-<userB>@:2.service
$ sudo systemctl start vncserver-<userC>@:3.service
...
{% endhighlight %}

To prevent unencrypted connections, add the arguments `-localhost` and
`-nolisten tcp` to the *ExecStart* line in `systemd` unit

	ExecStart=/sbin/runuser -l <USER> -c "/usr/bin/vncserver -localhost -nolisten tcp %i"

## Connection

Create encrypted connection to server

{% highlight bash %}
$ ssh -L <localport>:localhost:<remoteport> -N -f -l <loginname> <hostname>
{% endhighlight %}

Open VNC client

{% highlight bash %}
$ vncviewer &
{% endhighlight %}

And enter `localhost:<localport>` and password.

## See also

- [X Windows authorization]({{ site.baseurl }}/x/#x-windows-authorization).

## References

- <https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-vnc-on-ubuntu-14-04>
