---
layout: page
title: Favorite quotes
permalink: /quotes/
---

* TOC
{:toc}

{% for entry in site.data.quotes %}
- {{ entry.quote }}

  {% if entry.attribution or entry.source %}
  -- {% if entry.attribution %}{{ entry.attribution }}{% endif %}. {% if entry.source %}{{ entry.source }}{% endif %}
  {% endif %}

{% endfor %}
