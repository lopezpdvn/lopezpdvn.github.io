---
layout: tech-note
title: Microsoft SQL Server
permalink: /microsoft-sql-server/
comments: true
first_published: 2017-04-27
last_updated: 2017-04-27
keywords: [sql, database, data, sqlserver]
---

* TOC
{:toc}

Search by table and/or column name.

{% highlight sql %}
SELECT COLUMN_NAME
--SELECT DISTINCT table_name
FROM INFORMATION_SCHEMA.COLUMNS
WHERE 1=1
  --AND TABLE_NAME = 'mytablename'
  AND LOWER(TABLE_NAME) LIKE '%mytablename%'
  --AND TABLE_NAME = 'true_table_name'
  --AND LOWER(TABLE_SCHEMA) LIKE '%someschema%'
  AND LOWER(COLUMN_NAME) LIKE '%prefix_column_example%'
--ORDER BY COLUMN_NAME
ORDER BY TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME
{% endhighlight %}

<br/>

---
