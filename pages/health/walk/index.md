---
layout: tech-note
title: Walk
permalink: /health/walk/
last_updated: 2022-05-29
comments: true
tags: [health]
---

{% highlight python %}
STEPS_PER_H_10_DECIMILES_PER_HOUR = 34 * 2 * 60
STEPS_PER_H_15_DECIMILES_PER_HOUR = 43 * 2 * 60
STEPS_PER_H_20_DECIMILES_PER_HOUR = 47 * 2 * 60
STEPS_PER_H_25_DECIMILES_PER_HOUR = 56 * 2 * 60

HOURS_WALKING_10_DECIMILES_PER_HOUR = 0.0
HOURS_WALKING_15_DECIMILES_PER_HOUR = 0.0
HOURS_WALKING_20_DECIMILES_PER_HOUR = 0.0
HOURS_WALKING_25_DECIMILES_PER_HOUR = 1.5

TOTAL_STEPS = (
      (HOURS_WALKING_10_DECIMILES_PER_HOUR * STEPS_PER_H_10_DECIMILES_PER_HOUR)
    + (HOURS_WALKING_15_DECIMILES_PER_HOUR * STEPS_PER_H_15_DECIMILES_PER_HOUR)
    + (HOURS_WALKING_20_DECIMILES_PER_HOUR * STEPS_PER_H_20_DECIMILES_PER_HOUR)
    + (HOURS_WALKING_25_DECIMILES_PER_HOUR * STEPS_PER_H_25_DECIMILES_PER_HOUR)
)

print(TOTAL_STEPS)
{% endhighlight %}
