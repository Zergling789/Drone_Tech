import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

interface Params { slug: string }

export default async function PostPage({ params }: { params: Params }) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
    include: { author: true },
  });
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl p-4 prose dark:prose-invert">
      <h1>{post.title}</h1>
      <div className="text-sm text-gray-500">Von {post.author?.name ?? 'Unbekannt'}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
    </article>
  );
}
