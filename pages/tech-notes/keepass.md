---
layout: tech-note
title: Notes on KeePass
permalink: /keepass/
comments: true
tags: [keepass, security]
---

* TOC
{:toc}

## Manual installation on Fedora

Install dependencies

{% highlight bash %}
sudo dnf install giflib libgdiplus-devel libxdo mono-core mono-data mono-data-sqlite mono-extras mono-mvc mono-wcf mono-web mono-winforms xdotool xsel
{% endhighlight %}

Then download ZIP from website. Use a launcher script:

{% highlight bash %}
#!/bin/sh

exec /path/to/mono /path/to/KeePass.exe
{% endhighlight %}

## KeePass/Mono prepends Unicode BOM to clipboard contents

When copying from KeePass and pasting to terminals, if it suddenly looks like
all data is wrong, KeePass might be prepending the Unicode BOM to all data from
it ([bug #1219](https://sourceforge.net/p/keepass/bugs/1219/)).

To verify, paste to VIM and look for `<feff>` at the start of the pasted data.
To fix, set `LC_CTYPE=C` in the script that launches KeePass:

{% highlight bash %}
#!/bin/sh

export LC_CTYPE=C
exec /path/to/mono /path/to/KeePass.exe
{% endhighlight %}
