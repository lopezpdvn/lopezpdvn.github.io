---
layout: tech-note
title: SQL
permalink: /sql/
comments: true
first_published: 2017-05-19
last_updated: 2017-05-19
keywords: [sql, database, data]
---

* TOC
{:toc}

## Information schema

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

Search stored procedures and functions by name. Column `ROUTINE_DEFINITION` is
the definition text of the function or procedure.

{% highlight sql %}
SELECT *
FROM INFORMATION_SCHEMA.ROUTINES
WHERE LOWER(ROUTINE_NAME) LIKE '%searchstring%'
{% endhighlight %}

<br/>

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Information_schema)

---
