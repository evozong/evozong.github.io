# List of all Blog posts
{% for post in site.posts | sort: 'title' | reverse %}
* [{{post.date}} - {{ post.title }}]({{ post.url }})
{% endfor %}
