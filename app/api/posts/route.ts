import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const post = await prisma.post.create({
    data: {
      title: data.title,
      slug: data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      content: data.content,
      author: { connect: { id: data.authorId || '' } },
    },
  });
  return NextResponse.json(post);
}
