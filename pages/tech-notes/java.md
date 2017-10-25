---
layout: tech-note
title: Notes on Java
permalink: /java/
comments: true
first_published: 2016-12-14
last_updated: 2017-10-25
keywords: [java]
---

* TOC
{:toc}

## New `maven` simple project

{% highlight bash %}
$ mvn archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-quickstart
{% endhighlight %}

## Android SDK with Java 9

{% highlight bash %}
$ export JAVA_OPTS="--add-modules java.xml.bind"
{% endhighlight %}

- <https://stackoverflow.com/questions/43574426/how-to-resolve-java-lang-noclassdeffounderror-javax-xml-bind-jaxbexception-in-j>

<br/>

---
