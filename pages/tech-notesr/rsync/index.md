---
layout: tech-note
title: Notes on rsync
permalink: /rsync/
last_updated: 2021-01-23
comments: true
tags: [rsync, file_system, synchronization]
---

* TOC
{:toc}

All command include dry-run switch `-n`.

{% highlight bash %}
$ src=/some/dir0
$ dst=/other/dir1
{% endhighlight %}

## SSH

Let the user be authenticated and able to login directly to host `hst0`, then use

{% highlight bash %}
$ src=hst0://abs/path/in/remote/host
{% endhighlight %}

## Mirroring

Mirror dirs. Recursively, symlinks as symlinks, preserve permissions and times.

{% highlight bash %}
$ rsync -rlptnv --delete-after $src/ $dst
{% endhighlight %}

Archive mirror.

{% highlight bash %}
$ rsync -aHnvz $src/ $dst
{% endhighlight %}

The option `-H` is specially important when mirroring a directory of
`rsnapshot` snapshots.

## Unrooted Android file system

When at least of the source or destination is a unrooted Android sytem and the
copying is done over SSH, copy only the file contents. For example:

{% highlight bash %}
$ dst=<hostname>:/path/in/android/filesytem
$ rsync -rnvz $src/ $dst
{% endhighlight %}

## Resume transfer

The first time you run rsync to copy/transfer files, be sure to use the option
`--append`. That way rsync won't delete any partial files if the transfer is
interrupted. Later you can resume the transfer running the same command as the
first time, and so on.

If big files are involved, the option `--progress` is handy too.

## Selective mirror

Suppose you want to mirror only the following directories from `$src` to
`$dst`.

- `AAA/BBB`
- `AAA/CCC`
- `AAA/DDD/EEE`
- `FFF/GGG/HHH`

Then write to a file `include_file=<path_to_file>` the following

    AAA/
    AAA/BBB/***
    AAA/CCC/***
    AAA/DDD/
    AAA/DDD/EEE/***
    FFF/
    FFF/GGG/
    FFF/GGG/HHH/***

And execute like this

{% highlight bash %}
$ rsync -anrvz --include-from=$include_file --exclude='*' $src/ $dst
{% endhighlight %}

Add the deletion options as needed.

## Selective mirror with excluded directories

Suppose you want to mirror only the following directories from `$src` to
`$dst`.

- `AAA/BBB`
- `AAA/CCC`
- `AAA/DDD/EEE`
- `FFF/GGG/HHH`

Inside the hierarchy of these directories, there might exist some directory
names that rsync should exclude, for example, you might want to exclude any
directory named *excludestr*

- `AAA/BBB/excludestr`
- `AAA/CCC/AAA/excludestr`
- `AAA/DDD/EEE/DDD/DDD/excludestr`
- `FFF/GGG/HHH/excludestr`

In this case, it is better to execute as many rsync processes as necessary
instead of just once. In this example execute rsync 4 times and exclude
directories named *excludestr*. Write to file `exclude_file=<path to exclude
rules file>` the exclude rules:

    excludestr/

Then execute rsync as many times as needed, for instance

{% highlight bash %}
$ srcdir=$src/AAA/BBB
$ dstdir=$dst/AAA/BBB
$ rsync -anrvz --exclude-from=$exclude_file $srcdir/ $dstdir
{% endhighlight %}

You may add delete options.

See function `pysyspol.fs.rsync_multiple` of
[pysyspol project](https://github.com/lopezpdvn/pysyspol).
