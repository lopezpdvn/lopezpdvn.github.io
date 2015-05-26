---
layout: page
title: Blog
permalink: /blog/
---

## All posts

  <p class="rss-subscribe">Subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS.</a></p>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        {{ post.excerpt }}... <a href="{{ post.url | prepend: site.baseurl }}">See whole post</a>

      </li>
    {% endfor %}
  </ul>

- Browse [posts in english only]({{ site.baseurl }}/blog/en).
- Browse [posts in spanish only]({{ site.baseurl }}/blog/es).
