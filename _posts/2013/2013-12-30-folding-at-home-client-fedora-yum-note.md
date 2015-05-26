---
layout: post
title:  "Note on using Folding@Home FAHControl on Fedora systems, problem with yum transactions"
date:   2013-12-30 02:50:54
lang: en
categories: en
tags: [en, volunteer computing]
---

The [Folding@Home](http://folding.stanford.edu "Folding@Home website")
FAHControl RPM package currently available _fahcontrol-7.3.6-1.noarch.rpm_
([get here](http://folding.stanford.edu/home/the-software "The Software -
Folding@Home")) formally depends on a Python 2.6.x interpreter but Fedora
repositories distribute Python 2.7 only. You can use your system’s Python 2.7
interpreter by just following the [Terminal installation for RedHat / CentOS /
Fedora](http://folding.stanford.edu/home/guide/linux-install-guide/#ntoc9
"Terminal installation for RedHat / CentOS / Fedora").

During subsequent yum transactions you _might_ get the following error  
 `[... yum trying to do its thing]  
 Running transaction check  
 ERROR with transaction check vs depsolve:  
 python(abi) = 2.6 is needed by (installed) fahcontrol-7.3.6-1.noarch  
 ** Found 1 pre-existing rpmdb problem(s), 'yum check' output follows:  
 fahcontrol-7.3.6-1.noarch has missing requires of python(abi) = ('0', '2.6', None)  
 Your transaction was saved, rerun it with:  
 yum load-transaction /tmp/yum_save_tx.2013-11-11.03-12.mbks89.yumtx  
`

The solution is to temporally uninstall the FAHControl package:  
 `$ sudo yum -y remove fahcontrol`

Running the original yum transaction command, for example:  
 `$ sudo yum update`

Then reinstalling again with rpm program:  
 `$ sudo rpm -i --nodeps <path to fahcontrol-7.3.6-1.noarch.rpm>`

There’s no need to reinstall FAHClient since the problem is with FAHControl only.
