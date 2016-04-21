---
layout: page
title: Notes on S.M.A.R.T.
permalink: /smart/
comments: true
tags: [smart, file_system, ntfs]
---

* TOC
{:toc}

## Get info

{% highlight bash %}
$ devPath=/dev/sdX
$ sudo smartctl -a $devPath
{% endhighlight %}

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
