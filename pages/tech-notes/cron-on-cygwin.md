---
layout: tech-note
title: Cron on Cygwin
permalink: /cron-on-cygwin/
first_published: 2017-06-23
last_updated: 2019-08-05
keywords: [windows, cron, cygwin]
---

* TOC
{:toc}

Install cron.

Open a shell with administrator privileges

Remove existing cron services.

{% highlight bash %}
$ cygrunsrv --query cron
Service             : cron
Display name        : Cron daemon
Current State       : Running
Controls Accepted   : Stop
Command             : /usr/sbin/cron -n

$ cygrunsrv --remove cron
{% endhighlight %}

Run `cron-config` and answer:

- *Do you want to install the cron daemon as a service?* yes
- *Enter the value of CYGWIN for the daemon:*
- *Do you want the cron daemon to run as yourself?* yes
- *Please enter the password for user <your_username>*: <your_password>
- *Do you want to start the cron daemon as a service now?*: yes

If you get the error:

```
cygrunsrv: Error starting a service: StartService:  Win32 error 1069:
The service did not start due to a logon failure.
```

Then open Windows *Services*, open the properties window of the service that
was just created,  re-enter the password twice in tab *Log On*, click *OK*, and
start service

{% highlight bash %}
$ cygrunsrv --start cron
{% endhighlight %}
