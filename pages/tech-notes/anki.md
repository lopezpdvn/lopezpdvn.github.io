---
layout: tech-note
title: Notes on Anki
permalink: /anki/
comments: true
first_published: 2016-10-20
last_updated: 2016-11-09
keywords: [anki, memory, space_repetition, flashcard]
---

* TOC
{:toc}

## Decrease today's new card limit

In short, this is accomplished by
[burying all new cards](#bury-all-new-cards-of-a-deck) and then unburying new
cards selectively. After you have buried all new cards, open the browser and
search `deck:deckname is:new`[^1]. Display the `Due` field, which should
display integers numbers in parentheses. Select all the cards you want to
unbury, and then go to *Edit* -> *Reschedule*. In the *Reschedule* dialog,
select *Place at the end of new card queue* and click OK.

## Bury all new cards of a deck

This has to be done manually. Click on the deck, and then on *Custom study*.
Select *Study by card state or tag*, then *New cards only* and select a number
of cards sufficiently large to pull all new cards from the deck. Click on
*Choose tags*. In the *Selective Study* window, select tags if needed, then
click on *OK*.

A new *Custom Study Session* deck is created. Start studying, and bury every
card when shown. You can do this quickly by pressing the `-` key repeatedly.
Then delete the *Custom Study Session* deck.

<br/>

---

[^1]: Add other search conditions as needed, for example `-is:suspended`.
