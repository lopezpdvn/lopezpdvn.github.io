---
layout: page
title: Frequently Asked Questions
permalink: /faq/
---

* TOC
{:toc}

{% for faq in site.data.faq %}
# {{ forloop.index }}. {{ faq.q }}

{{ faq.a }}
{% endfor %}
