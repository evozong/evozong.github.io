import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // generates static HTML files instead of a Node.js SSR server
  distDir: 'docs',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
