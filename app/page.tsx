import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { status: 'PUBLISHED' },
    orderBy: { publishedAt: 'desc' },
    take: 5,
  });

  return (
    <main className="mx-auto max-w-4xl p-4">
      <h1 className="text-3xl font-bold mb-4">Neueste Artikel</h1>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.id} className="border-b pb-2">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
