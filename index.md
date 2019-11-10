---
---

{% assign postsToShow = site.posts | sort: 'date' | reverse %}
{% for post in postsToShow limit:5 %}
<section class="blog-post">
  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
  <h4><small>{{ post.date | date: "%A, %Y %b %d" }}</small></h4>
  {{ post.excerpt }}
</section>
{% endfor %}
