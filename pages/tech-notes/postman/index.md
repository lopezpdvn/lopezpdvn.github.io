---
layout: tech-note
title: Postman
permalink: /postman/
first_published: 2020-12-21
last_updated: 2020-12-21
keywords: [api, rest, postman, javascript]
---

* TOC
{:toc}

## Visualize new lines in strings

```javascript
const template = '{{{stdErr}}}';
pm.visualizer.set(template, {
    stdErr: pm.response.json()['stdErr'].replace(/\n/g, '<br>')
});
```
