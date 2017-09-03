---
layout: tech-note
title: Edit PDFs files on Linux
permalink: /pdf-edit-linux/
comments: true
first_published: 2016-09-03
last_updated: 2017-09-03
tags: [unix, linux, pdf]
---

* TOC
{:toc}

## Remove password protection

Open with *evince* providing password. Then print to PDF. New printed file is
not password protected.

## Edit pages

Open with *pdfmod*, remove all other pages and export single page PDF file.

Open this single page PDF file with *inkspace* and edit as needed. After
edition, export to another single page PDF file.

Then use *pdfmod* to substitute the edited page from the file export with
*inkscape* into the original multi page PDF file.
