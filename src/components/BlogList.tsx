import Link from 'next/link';
import { posts } from '../posts';

const BlogList: React.FC = () => {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="section">
      <h2>Blog</h2>
      <div className="stack">
        {sorted.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card card-link">
            <p className="post-meta">{post.date}</p>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
