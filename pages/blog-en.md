---
layout: page
title: Blog posts in english
permalink: /blog/en/
---

## Posts in english

{% assign en_pages = site.posts | where:"lang","en" %}

  <ul class="post-list">
    {% for post in en_pages %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
