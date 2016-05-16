---
layout: page
title: OpenSSH server on Windows 10 with Cygwin
permalink: /openssh-server-cygwin-windows-10/
comments: true
tags: [windows, unix, cygwin, ssh, openssh, security]
---

* TOC
{:toc}

OpenSSH server with privilege separation and public key authentication. Make
sure your user has administrative privileges.

Install Cygwin package `openssh`. Open a Cygwin terminal with administrative
rights.

## Uninstall

To uninstall open *Services* and stop the `sshd` service. Then open a `cmd`
terminal with administrator privileges and run below command to delete the
service.

{% highlight winbatch %}
C:\Windows\system32> sc delete sshd
{% endhighlight %}

Refresh the list back at *Services* by pressing `F5` and verify that the
service is not there anymore.

Then remove the account `cyg_server` inluding its files, by opening *Control
Panel\All Control Panel Items\User Accounts\Manage Accounts*.

Then remove the inbound rule in *Windows Firewall with Advanced Security*.
