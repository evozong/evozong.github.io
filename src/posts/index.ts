import fs from 'fs';
import path from 'path';

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

function readPost(filename: string): string {
  return fs.readFileSync(path.join(process.cwd(), 'src', 'posts', filename), 'utf-8');
}

export const posts: PostMeta[] = [
  {
    slug: '2026-03-16-hello-world',
    title: 'Hello World!',
    date: '2026-03-16',
    description: 'First post on my new blog — what to expect and a bit about me.',
    content: readPost('2026-03-16-hello-world.md'),
  },
];

export const postsBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));
