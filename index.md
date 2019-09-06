---
layout: home
title: Karan Kajla | Blog
description: The personal blog of Karan Kajla
---

{% for post in site.posts %}

{{ post.date | date: "%b %d, %Y" }}

[{{ post.title }}]({{ post.url }})

{{ post.excerpt }}
{% raw %}
<div>&nbsp;</div>
{% endraw %}
{% endfor %}
