---
layout: tech-note
title: Microsoft SQL Server
permalink: /microsoft-sql-server/
comments: true
first_published: 2017-04-27
last_updated: 2017-05-25
keywords: [sql, database, data, sqlserver]
---

* TOC
{:toc}

Get definition text of stored procedures.
`INFORMATION_SCHEMA.ROUTINES.ROUTINE_DEFINITION` returns the first 4000
characters of the definition text of stored procedure only, if the function or
stored procedure is not encrypted.

{% highlight sql %}
SELECT
  r.ROUTINE_NAME,
  OBJECT_DEFINITION(OBJECT_ID(SCHEMA_NAME(o.schema_id) + '.' + r.ROUTINE_NAME)) complete_text,
  r.ROUTINE_DEFINITION
FROM INFORMATION_SCHEMA.ROUTINES r
INNER JOIN sys.objects o
  ON r.ROUTINE_NAME = o.name
WHERE LOWER(r.ROUTINE_NAME) LIKE '%somestring%'
ORDER BY r.ROUTINE_NAME
{% endhighlight %}

<br/>

---
