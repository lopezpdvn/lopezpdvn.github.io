---
layout: tech-note
title: Notes on Node.js
permalink: /nodejs/
comments: true
tags: [nodejs, visual_studio]
---

* TOC
{:toc}

## Node.js with Visual Studio

### Copy from template

You can either clone from a repo or copy a solution directory

#### Clone from public repo

{% highlight bash %}
$ git clone 'git@github.com:lopezpdvn/software-engineering-problems-javascript.git' new-project-js
{% endhighlight %}

Open solution file (extension `sln`) with Visual Studio 2015. Right click
project -> npm -> Install new npm packages. Install dev local dependency mocha
saving to `package.json`. This lets VS2015 find the tests with test explorer.

Make sure the properties of the test `.js` files have property `TestFramework =
Mocha`.

Test Explorer should now show the tests.

#### Copy solution directory

Just copy solution directory.

### Edit template

Check that VS2015 Test explorer sees and is able to run tests.

Rename solution and project from VS2015.

Edit `README.md` and `package.json` files in projects.

Close solution.

Re-open solution with VS2015.

Check tests run OK.

Remove `.git` directory and initialize a new one.
