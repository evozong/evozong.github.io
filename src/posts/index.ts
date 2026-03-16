import helloWorldRaw from './hello-world.md?raw';

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

export const posts: PostMeta[] = [
  {
    slug: '2026-03-16-hello-world',
    title: 'Hello World!',
    date: '2026-03-16',
    description: 'First post on my new blog — what to expect and a bit about me.',
    content: helloWorldRaw,
  },
];

export const postsBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));
