import { posts, postsBySlug } from '../../../posts';
import BlogPost from '../../../components/BlogPost';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postsBySlug[slug];
  return <BlogPost post={post} />;
}
