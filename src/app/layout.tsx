import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'My App',
  description: 'A Next.js app with JSONPlaceholder API integration',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/fetch-posts">Posts</Link> | <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 My App</footer>
      </body>
    </html>
  );
}
