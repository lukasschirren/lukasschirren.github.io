---
layout: page
permalink: /talks/
title: Talks
description: 
nav: true
nav_order: 1
---

<!-- _pages/talks.md -->

<div class="talks">

{% assign talks_by_year = site.data.talks | group_by: "year" | reverse %}

{% for year_group in talks_by_year %}
  <h3>{{ year_group.name }}</h3>
  
  {% assign talks_sorted = year_group.items | sort: "sort_date" | reverse %}
  {% for talk in talks_sorted %}
    <div class="talk-entry">
      <p>
        {{ talk.date }}. 
        {% if talk.title %}
          {% if talk.slides %}
            <a href="{{ talk.slides }}" target="_blank" style="color: var(--global-theme-color);">{{ talk.title }}</a>
          {% else %}
            <span style="color: var(--global-theme-color);">{{ talk.title }}</span>
          {% endif %}
        {% endif %}
        {% if talk.description %}
        . {{ talk.description }}
        {% endif %}
        {% if talk.venue %}
        . Held at <em>{{ talk.venue }}</em>{% if talk.location %} in {{ talk.location }}{% endif %}
        {% endif %}
        {% if talk.video %}
        . A video recording is available on <a href="{{ talk.video }}" target="_blank">YouTube</a>
        {% endif %}.
      </p>
    </div>
  {% endfor %}
  
{% endfor %}

</div>
