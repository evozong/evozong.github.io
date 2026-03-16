import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { posts } from "../posts";

const BlogList: React.FC = () => {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Layout>
      <section className="section">
        <h2>Blog</h2>
        <div className="grid">
          {sorted.map((post) => (
            <article key={post.slug} className="card">
              <p className="post-meta">{post.date}</p>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <Link to={`/blog/${post.slug}`} className="card-link">
                Read post →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BlogList;
