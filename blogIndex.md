---
---

# List of all Blog posts
{% assign postsToShow = site.posts | sort: 'date' | reverse %}
{% for post in postsToShow %}
* [{{post.date | date: "%Y %b %d" }} - {{ post.title }}]({{ post.url }})
{% endfor %}
