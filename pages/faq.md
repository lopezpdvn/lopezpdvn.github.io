---
layout: page
title: Frequently Asked Questions
permalink: /faq/
---

* TOC
{:toc}

{% for faq in site.data.faq %}
<span id="{{ faq.id }}"></span>

# {{ forloop.index }}. {{ faq.q }}

{{ faq.a }}
{% endfor %}
