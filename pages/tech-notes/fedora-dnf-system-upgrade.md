---
layout: tech-note
title: Fedora DNF system upgrade
permalink: /fedora-dnf-system-upgrade/
comments: true
first_published: 2016-11-14
last_updated: 2018-01-17
keywords: [linux, os, fedora, dnf]
---

* TOC
{:toc}

Complementary/personal steps to [main guide][dnf-sys-upgrade].

## Backup

Download latest Live USB Fedora, even if you're not upgrading to the latest
version.

Verify

{% highlight bash %}
$ cd Fedora-Xfce-Live-i386-24
$ gpg2 --verify Fedora-Spins-24-1.2-i386-CHECKSUM
gpg: Signature made Thu 16 Jun 2016 08:13:51 PM CDT using RSA key ID 73BDE98381B46521
gpg: Can't check signature: No public key

$ gpg2 --keyserver pgp.mit.edu --search-keys 73BDE98381B46521
gpg: data source: http://pgp.mit.edu:11371
(1)     Fedora (24) <fedora-24-primary@fedoraproject.org>
          4096 bit RSA key 73BDE98381B46521, created: 2015-07-25
Keys 1-1 of 1 for "73BDE98381B46521".  Enter number(s), N)ext, or Q)uit > 1
gpg: /home/de7ju4ze/.gnupg/trustdb.gpg: trustdb created
gpg: key 73BDE98381B46521: public key "Fedora (24) <fedora-24-primary@fedoraproject.org>" imported
gpg: no ultimately trusted keys found
gpg: Total number processed: 1
gpg:               imported: 1

$ gpg2 --verify Fedora-Spins-24-1.2-i386-CHECKSUM
gpg: Signature made Thu 16 Jun 2016 08:13:51 PM CDT using RSA key ID 73BDE98381B46521
gpg: Good signature from "Fedora (24) <fedora-24-primary@fedoraproject.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 5048 BDBB A5E7 76E5 47B0  9CCC 73BD E983 81B4 6521

$ grep -i $(sha256sum Fedora-Xfce-Live-i386-24-1.2.iso) Fedora-Spins-24-1.2-i386-CHECKSUM
<match output>
{% endhighlight %}

Create boot media

{% highlight bash %}
$ bootdevice=/dev/sdf
$ sudo fdisk -l $bootdevice
<verify output of correct device!!!!!!!!!!!!>
$ sudo dd if=Fedora-Xfce-Live-i386-24-1.2.iso of=$bootdevice status=progress
1247646208 bytes (1.2 GB) copied, 340.964426 s, 3.7 MB/s
2437120+0 records in
2437120+0 records out
1247805440 bytes (1.2 GB) copied, 357.731 s, 3.5 MB/s
$ sudo sync
{% endhighlight %}

Update system

{% highlight bash %}
$ sudo dnf clean all ; sudo dnf upgrade --refresh
{% endhighlight %}

Poweroff

{% highlight bash %}
$ sudo systemctl poweroff
{% endhighlight %}

Boot live media and use GParted to create 2 partitions on a spare hard drive,
one small and the other large enough to contain backups of the file systems.
Mount the small system `backup_head` and create a random key file on it.

{% highlight bash %}
$ sudo dd if=/dev/urandom of=/mnt/backup_head/key status=progress count=2000
{% endhighlight %}

On GParted, format the large partition `backup_body` to *cleared*. Then create
a encrypted LUKS device in it.

{% highlight bash %}
$ sudo cryptsetup --key-file /mnt/backup_head/key luksFormat $device
{% endhighlight %}

Create and mount file system

{% highlight bash %}
$ sudo cryptsetup open $device backup_body
$ sudo mkfs.ext4 /dev/mapper/backup_body
$ sudo mount /dev/mapper/backup_body /mnt/backup_body
{% endhighlight %}

If some of the partitions that are to be backed up are LVM, deactivate them
with GParted.

Create partition images, for each partition to backup

{% highlight bash %}
$ sudo dd if=/dev/sdx1 of=/mnt/backup_body/partition1 bs=64K conv=noerror,sync status=progress
{% endhighlight %}

Save extra information about drive geometry

{% highlight bash %}
# fdisk -l /dev/sdX > /mnt/backup_body/geometry.txt
{% endhighlight %}

Backup the MBR

{% highlight bash %}
$ sudo dd if=/dev/sdX of=/mnt/backup_body/mbr.img bs=512 count=1
{% endhighlight %}

## Upgrade

After running `sudo dnf system-upgrade reboot`, the system reboots and starts
upgrading while displaying status information on the screen. At some point the
text displayed doesn't seem to make any sense, for example I saw a lot of `[`
characters separated by newlines. This is OK, let the upgrade continue and
eventually the machine will reboot to the new kernel/system.

## Post-upgrade

Be sure to follow the [Optional post-upgrade tasks][] in the main official
guide.

### Old packages

Regarding the output of

{% highlight bash %}
$ sudo dnf list extras
{% endhighlight %}

Don't remove the kernel packages. It's probably better not to remove any of
these packages.

#### Manually remove kernel packages

After upgrading, sometimes DNF stops removing old kernel packages automatically
when it installs a new version of the kernel. To remove old versions, look them
up with

{% highlight bash %}
$ sudo dnf list extras
{% endhighlight %}

And remove with

{% highlight bash %}
$ sudo dnf remove kernel-core-<version>
{% endhighlight %}

Where `<version>` is the *long package version*, for example `4.9.10-100.fc24`.

### Troubleshooting software installed in user directories

If an application installed in a user directory is not working correctly, try
re-installing it.

### Troubleshooting sshd

After upgrade, trying to connect to sshd port displays *connection refused*, while other ports may show *no route to host*.

Run below command

{% highlight bash %}
$ sudo tcpdump -n host <host_ip_address> and port <port_number>
{% endhighlight %}

Then try to ssh again. If tpcdump dumps flags S and R, it means that although
the server's firewall is not blocking port `<port_number>`, there is no service
listening to it.

In my case, my sshd server configuration file had
[this issue](https://ask.fedoraproject.org/en/question/102726/f25-sshd-not-starting-on-boot-after-recent-updates/ "F25 SSHD not starting on boot after recent updates?").
To fix it, [run bash from GRUB](https://wiki.archlinux.org/index.php/reset_root_password#Using_GRUB_to_invoke_bash)
and do [this]({{ site.baseurl }}/fedora-26-set-up/#configure-ssh-server).

## References

- [DNF system upgrade][dnf-sys-upgrade]
- [Fedora 24 installation guide][f24-install]
- [Fedora 25 installation guide][f25-install]
- [Disk cloning][diskclone]
- [Fedora 24 End of Life](https://fedoramagazine.org/fedora-24-eol/ "Fedora 24 End of Life")
- [Upgrading Fedora 24 to Fedora 25](https://fedoramagazine.org/upgrading-fedora-24-fedora-25/ "Upgrading Fedora 24 to Fedora 25")

[dnf-sys-upgrade]: https://fedoraproject.org/wiki/DNF_system_upgrade
[f24-install]: https://docs.fedoraproject.org/en-US/Fedora/24/html/Installation_Guide/index.html
[f25-install]: https://docs.fedoraproject.org/en-US/Fedora/25/html/Installation_Guide/index.html "Fedora 25 Installation Guide"
[diskclone]: https://wiki.archlinux.org/index.php/disk_cloning
[Optional post-upgrade tasks]: https://fedoraproject.org/wiki/DNF_system_upgrade#Optional_post-upgrade_tasks

<br/>

---
