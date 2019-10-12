# List of all Blog posts
{% for post in site.posts %}
[{{ post.title }}]({{ post.url }})
{% endfor %}
