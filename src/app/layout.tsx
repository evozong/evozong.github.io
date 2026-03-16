import type { Metadata } from 'next';
import './globals.css';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'Zongyao Mao',
  description: 'Software Engineer specializing in large-scale systems, search infrastructure, and technical strategy.',
  icons: { icon: '/favicon-64.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
