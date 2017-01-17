---
layout:       work
collection:   work
title:        "Work"
headline:     "asdf"
---

{% for page in site.collections.work.pages %}
  {{ page.url }} {{ page.title }}
{% endfor %}
