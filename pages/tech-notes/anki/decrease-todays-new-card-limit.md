---
layout: tech-note
title: Decrease today's new card limit
permalink: /anki/decrease-todays-new-card-limit/
comments: true
first_published: 2016-10-20
last_updated: 2019-04-28
keywords: [anki, memory, space_repetition, flashcard]
---

* TOC
{:toc}

In short, this is accomplished by
[burying all new cards](#bury-all-new-cards-of-a-deck) and then unburying new
cards selectively. After you have buried all new cards, open the browser and
search `deck:deckname is:new`[^1]. Display the `Due` field, which should
display integers numbers in parentheses. Select all the cards you want to
unbury, and then go to *Edit* -> *Reschedule*. In the *Reschedule* dialog,
select *Place at the end of new card queue* and click OK.

<br/>

---

[^1]: Add other search conditions as needed, for example `-is:suspended`.
