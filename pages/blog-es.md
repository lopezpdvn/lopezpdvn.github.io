---
layout: page
title: Blog posts in spanish
permalink: /blog/es/
---

## Posts en español

{% assign es_pages = site.posts | where:"lang","es" %}

  <ul class="post-list">
    {% for post in es_pages %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
