import fs from 'fs';
import path from 'path';

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

const FILENAME_RE = /^(\d{4}-\d{2}-\d{2})-(.+)\.md$/;
const DESCRIPTION_LENGTH = 160;

const postsDir = path.join(process.cwd(), 'src', 'posts');

function toTitleCase(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function extractDescription(content: string): string {
  const text = content
    .split('\n')
    .filter((line) => !line.startsWith('#'))   // strip headings
    .join(' ')
    .trim();
  return text.length > DESCRIPTION_LENGTH
    ? text.slice(0, DESCRIPTION_LENGTH).trimEnd() + '…'
    : text;
}

export const posts: PostMeta[] = fs
  .readdirSync(postsDir)
  .filter((f) => f.endsWith('.md'))
  .map((filename) => {
    const match = filename.match(FILENAME_RE);
    if (!match) {
      throw new Error(
        `Post filename "${filename}" does not match required format YYYY-MM-DD-title.md`
      );
    }
    const [, date, titleSlug] = match;
    const content = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
    return {
      slug: filename.replace(/\.md$/, ''),
      date,
      title: toTitleCase(titleSlug),
      description: extractDescription(content),
      content,
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const postsBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));
