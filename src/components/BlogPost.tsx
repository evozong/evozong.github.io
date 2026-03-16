import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Layout from "./Layout";
import { postsBySlug } from "../posts";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postsBySlug[slug] : undefined;

  if (!post) {
    return (
      <Layout>
        <section className="section">
          <h2>Post not found</h2>
          <p>Sorry, that post doesn't exist.</p>
          <Link to="/blog" className="post-nav">← Back to Blog</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section">
        <Link to="/blog" className="post-nav">← Back to Blog</Link>
        <p className="post-meta">{post.date}</p>
        <div className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
