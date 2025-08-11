import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function AdminPosts() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } });
  return (
    <main className="mx-auto max-w-3xl p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <Link href="/admin/posts/new" className="text-blue-500">Neuen Post</Link>
      <ul className="mt-4 space-y-2">
        {posts.map((p) => (
          <li key={p.id} className="border-b pb-2">
            {p.title} – <Link href={`/posts/${p.slug}`} className="text-blue-500">Ansehen</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
