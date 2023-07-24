import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function BlogPage() {

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">test test</h1>
    </section>
  );
}