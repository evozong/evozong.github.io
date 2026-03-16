import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { PostMeta } from '../posts';

const BlogPost: React.FC<{ post: PostMeta | undefined }> = ({ post }) => {
  if (!post) {
    return (
      <section className="section">
        <h2>Post not found</h2>
        <p>Sorry, that post doesn&apos;t exist.</p>
        <Link href="/blog" className="post-nav">← Back to Blog</Link>
      </section>
    );
  }

  return (
    <section className="section">
      <Link href="/blog" className="post-nav">← Back to Blog</Link>
      <p className="post-meta">{post.date}</p>
      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default BlogPost;
