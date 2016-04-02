---
layout: post
title: "Fedora 23 set up"
date: Thu Mar 31 13:38:29 CST 2016
lang: en
categories: en
tags: [en, linux, tech]
comments: false
permalink: /fedora-23-post-installation/
---

* TOC
{:toc}

## Local email with postfix

Install postfix

{% highlight bash %}
$ sudo dnf -y install postfix
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

## Audio playback

{% highlight bash %}
$ sudo dnf -y install quodlibet gstreamer1-plugins-ugly
{% endhighlight %}

## References

- <https://ask.fedoraproject.org/en/question/81052/local-user-mail/>


<br/>

---
