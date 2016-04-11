---
layout: page
title: Notes on S.M.A.R.T.
permalink: /smart/
comments: true
tags: [smart, file_system]
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
$ sudo smartctl -a $devPath  | grep -i $status_str -A 1
{% endhighlight %}

Read from disk every *n* seconds to keep it from going to standby

{% highlight bash %}
$ n=15
$ watch --interval $n sudo dd if=$devPath of=/dev/null count=1
{% endhighlight %}

## Misc

- Fedora packages: `smartmontools` & `gsmartcontrol`.

- Systemctl service unit: `smartd.service`

- Not all USB devices supported, see [Smartmontools USB Device
  Support](https://www.smartmontools.org/wiki/Supported_USB-Devices).

## References

- <https://wiki.archlinux.org/index.php/S.M.A.R.T.>
- <https://www.smartmontools.org/wiki/Supported_USB-Devices>
- <http://superuser.com/questions/766943/smart-test-never-finishes>
