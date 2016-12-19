---
layout: tech-note
title: "Firefox"
lang: en
categories: en
keywords: [tech, security, web, internet, firefox, browser]
comments: true
first_published: 2016-06-24
last_updated: 2016-12-19
permalink: /firefox/
---

* TOC
{:toc}

## Add-ons

- [NoScript](https://noscript.net/)
- [HTTPS Everywhere](https://www.eff.org/https-everywhere)
- [Adblock Plus](https://adblockplus.org/en/)
- [BetterPrivacy](https://addons.mozilla.org/en-US/firefox/addon/betterprivacy/)
- [PrivacyBadger](https://www.eff.org/privacybadger)
- [Random Agent Spoofer](https://github.com/dillbyrne/random-agent-spoofer)
- [Ublock Origin](https://github.com/gorhill/uBlock)

## Search bookmarks by description or keywords

Query the bookmarks SQLite database, file `places.sqlite` in the browser
profile directory

{% highlight sql %}
SELECT b.title 'Title', p.url 'Location', ia.content 'Description'
FROM moz_items_annos ia
  INNER JOIN moz_bookmarks b
  INNER JOIN moz_places p
  INNER JOIN moz_keywords k
ON ia.item_id = b.id AND p.id = b.fk AND p.id = k.place_id
WHERE LOWER(ia.content) LIKE '%searchstr%'
  OR LOWER(k.keyword) LIKE '%searchstr%'
GROUP BY b.title, p.url, ia.content
{% endhighlight %}
