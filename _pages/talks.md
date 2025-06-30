---
layout: page
permalink: /talks/
title: Talks
description: 
nav: true
nav_order: 3
---

<!-- _pages/talks.md -->

<div class="talks">

{% assign talks_by_year = site.data.talks | group_by: "year" | reverse %}

{% for year_group in talks_by_year %}
  <h3>{{ year_group.name }}</h3>
  
  {% assign talks_sorted = year_group.items | sort: "date" | reverse %}
  {% for talk in talks_sorted %}
    <div class="talk-entry">
      <p>
        <strong>{{ talk.date }}</strong>. 
        {% if talk.title %}
          {% if talk.slides %}
            <a href="{{ talk.slides }}" target="_blank">{{ talk.title }}</a>
          {% else %}
            {{ talk.title }}
          {% endif %}
        {% endif %}
        {% if talk.description %}
          {{ talk.description }}
        {% endif %}
        {% if talk.venue %}
          Held {% if talk.location %}{{ talk.location }} {% endif %}at {{ talk.venue }}.
        {% endif %}
        {% if talk.video %}
          A video recording is available on <a href="{{ talk.video }}" target="_blank">YouTube</a>.
        {% endif %}
      </p>
    </div>
  {% endfor %}
  
{% endfor %}

</div>
