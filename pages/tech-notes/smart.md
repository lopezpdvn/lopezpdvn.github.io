---
layout: tech-note
title: Notes on S.M.A.R.T.
permalink: /smart/
comments: true
tags: [smart, file_system, ntfs]
first_published: 2016-04-11
last_updated: 2016-07-06
---

* TOC
{:toc}

## Get info

{% highlight bash %}
$ devPath=/dev/sdX
{% endhighlight %}

S.M.A.R.T only info

{% highlight bash %}
$ sudo smartctl -a $devPath
{% endhighlight %}

All available info

{% highlight bash %}
$ sudo smartctl --xall $devPath
{% endhighlight %}

### Lifetime/age

Useful information to determine lifetime/age in section `SMART Attributes Data
Structure revision number: X`, atribute with id 9 and name `Power_On_Hours`.
Value is stored in field `RAW_VALUE` usually in units hours. Simple way to test
the units is of course to keep the disk rotating (no read/writes needed) and
check for changes in the attribute 9:

{% highlight bash %}
$ sudo smartctl --all $devPath | grep Power_On
{% endhighlight %}

Also, perform a short test with

{% highlight bash %}
$ sudo smartctl -t short $devPath
{% endhighlight %}

When done, output all info again and look for section that report overall test
results, it starts with string `SMART Extended Self-test Log Version:`. The
field `LifeTime(hours)` will report the lifetime of the disk when the test was
performed.

Another way is to output all info again, and look for temperature history info.
Section starts with string `SCT Temperature History Version`. It shows a
timestamped log of temperature of disk.

## Test

Start long test

{% highlight bash %}
$ sudo smartctl -t long $devPath
{% endhighlight %}

Monitor progress

{% highlight bash %}
$ status_str='self-test execution status'
$ sudo smartctl -a $devPath  | grep -i "$status_str" -A 1
{% endhighlight %}

Read from disk every *n* seconds to keep it from going to standby

{% highlight bash %}
$ n=15
$ watch --interval $n sudo dd if=$devPath of=/dev/null count=1
{% endhighlight %}

After test is done view results via either

{% highlight bash %}
$ sudo smartctl -a $devPath
$ sudo smartctl -l selftest $devPath
{% endhighlight %}

## Misc

- Fedora packages: `smartmontools` & `gsmartcontrol`.

- Systemctl service unit: `smartd.service`

- Not all USB devices supported, see [Smartmontools USB Device
  Support](https://www.smartmontools.org/wiki/Supported_USB-Devices).

- If the partition is NTFS the problem might be with partition itself not with
  the disk. Check the disk on Windows with `chkdsk`, see references for links.
  You may see a message like ths on Linux:

      ntfs_attr_pread_i: ntfs_pread failed: Input/output error
      Failed to read NTFS $Bitmap: Input/output error
      NTFS is either inconsistent, or there is a hardware fault, or it's a
      SoftRAID/FakeRAID hardware. In the first case run chkdsk /f on Windows
      then reboot into Windows twice. The usage of the /f parameter is very
      important! If the device is a SoftRAID/FakeRAID then first activate
      it and mount a different device under the /dev/mapper/ directory, (e.g.
      /dev/mapper/nvidia_eahaabcc1). Please see the 'dmraid' documentation
      for more details.

- It looks like S.M.A.R.T. diagnostic data is not as useful as initially
  thought, the following is quoted from [Failure Trends in a Large Disk Drive
  Population](https://www.usenix.org/legacy/events/fast07/tech/full_papers/pinheiro/pinheiro.pdf)

  > ...we find that failure prediction models based on SMART parameters alone
  > are likely to be severely limited in their prediction accuracy, given that
  > a large fraction of our failed drives have shown no SMART error signals
  > whatsoever. This result suggests that SMART models are more useful in
  > predicting trends for large aggregate populations than for individual
  > components. It also suggests that powerful predictive models need to make
  > use of signals beyond those provided by SMART.

## References

- <https://wiki.archlinux.org/index.php/S.M.A.R.T.>
- <https://www.smartmontools.org/wiki/Supported_USB-Devices>
- <http://superuser.com/questions/766943/smart-test-never-finishes>
- <https://technet.microsoft.com/es-mx/library/cc730714%28v=ws.10%29.aspx>
- <http://ss64.com/nt/chkdsk.html>
