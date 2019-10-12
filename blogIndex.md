# List of all Blog posts
{% for post in site.posts | sort: 'date' | reverse %}
* [{{post.date | date: "%Y %b %d" }} - {{ post.title }}]({{ post.url }})
{% endfor %}
