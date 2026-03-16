import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import type { PostMeta } from '../posts';

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
}

function heading(level: 1 | 2 | 3 | 4 | 5 | 6): Components['h1'] {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return ({ children }) => {
    const id = slugify(typeof children === 'string' ? children : String(children));
    return <Tag id={id}>{children}</Tag>;
  };
}

const markdownComponents: Components = {
  h1: heading(1), h2: heading(2), h3: heading(3),
  h4: heading(4), h5: heading(5), h6: heading(6),
};

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
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {post.content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default BlogPost;
