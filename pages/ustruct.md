---
layout: page
title: ustruct blog
permalink: /ustruct/
---

## All posts

<p>Subscribe <a href="{{ "/ustruct.xml" | prepend: site.baseurl }}">via Atom.</a></p>

<ul class="post-list">
  {% for post in site.ustruct %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
      {{ post.excerpt }}... <a href="{{ post.url | prepend: site.baseurl }}">See whole post</a>

    </li>
  {% endfor %}
</ul>
