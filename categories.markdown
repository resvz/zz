---
layout: default
title: 分类
permalink: /categories/
---
<h1>分类</h1>
{% for category in site.categories %}
<h2><b>{{ category | first }}</b></h2>
<!-- <span>{{ category | last | size }}</span> -->
<ul class="arc-list">
    {% for post in category.last %}
        <li>{{ post.date | date:"%Y-%m-%d"}}&ensp;<a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
{% endfor %}
