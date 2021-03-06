---
layout: tech-note
title: OpenSSH server on Windows with Cygwin
permalink: /openssh-server-cygwin-windows/
comments: true
first_published: 2016-05-12
last_updated: 2019-05-19
tags: [windows, unix, cygwin, ssh, openssh, security]
---

* TOC
{:toc}

OpenSSH server with public key authentication. Tested on Windows 10 only.

## Install

Make sure your user has administrative privileges.

Install Cygwin package `openssh`. Open a Cygwin terminal with administrative
rights.

### Configure host

Run the interactive program `ssh-host-config` and answer as follows:

- *Should StrictModes be used*: yes
- *Do you want to install sshd as a service?*: yes
- *Enter the value of CYGWIN for the daemon*: (leave empty, just press enter)

Edit/uncomment `/etc/sshd_config` as below. Your needs may vary here, read `man
sshd_config`:

    Port <A port other than 22!>
    HostKey /etc/ssh_host_ed25519_key
    PermitRootLogin no
    PubkeyAuthentication yes
    AuthorizedKeysFile  .ssh/authorized_keys
    PasswordAuthentication no
    PermitEmptyPasswords no
    StrictMode yes
    #UsePrivilegeSeparation yes # deprecated in recent versions of OpenSSH

### Firewall

Your security needs may vary.

Open *Windows Firewall with Advanced Security*. Click on menu *Action* and then
*New Rule...* to open the *New Inbound Rule Wizard*.

Select type *Program* and click *Next*.

Select *This program path:* and enter the location of the `sshd` executable,
usually is `%SystemDrive%\<name of cygwin root dir>\usr\sbin\sshd.exe`. Click
*Next*.

Select *Allow the connection* and click *Next*.

Select the domains applicable to your network connection (at least one). Click
*Next*. Make sure that your network connection actually has the proper network
location category.

Enter a name and description of the inbound rule. Click *Next*.

Double click on the newly created rule. Go to tab *Advanced* and click on
*Customize*. Make sure the relevant network interfaces are selected. Click
*OK*.

Go to tab *Protocols and ports*. Select *TCP* as *Protocol type* and *Specific
Ports* on *Local port*. Enter the port configured in `/etc/sshd_config`. Select
*All Ports* on *Remote port*.

(Optional) Go to tab *Scope* and in section *Remote IP address* select *These
IP addresses* and click on button *Add*. Enter IP addresses, subnets or ranges
as needed.

(Optional) Go to tab *Local Principals* and in section *Authorized users* check
the box *Only allow connections from these users*. Add the account that starts
the `sshd` service configured in the previous section.

### Verify

Start the service `sshd` or restart the computer. Set up your public key
authentication and login from the remote computer.

### Troubleshooot

#### Logging

By default, `sshd` logs to the windows event system at _Windows
Logs_/_Application_ with source = `sshd`.

#### Public key authentication in Windows 10 

Using public key authentication in Windows requires having a separate user account. It appears that some Windows systems can disable this feature completely.

I've seen an instance of a system where the server won't allow public key authentication failing with error `sshd: PID XXXX: fatal: seteuid YYYYYYY: No such device or address`.

## Uninstall

To uninstall open *Services* and stop the `sshd` service. Then open a `cmd`
command prompt with administrator privileges and run below command to delete
the service.

{% highlight winbatch %}
C:\Windows\system32> sc delete sshd
{% endhighlight %}

Refresh the list back at *Services* by pressing `F5` and verify that the
service is not there anymore.

Remove the account `cyg_server` inluding its files, by opening *Control
Panel\All Control Panel Items\User Accounts\Manage Accounts*.

Remove the inbound rule in *Windows Firewall with Advanced Security*.

Delete the SSH server configuration files from directory `/etc`.
