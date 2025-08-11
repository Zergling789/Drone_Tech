import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';
  const posts = await prisma.post.findMany({
    where: { title: { contains: q, mode: 'insensitive' }, status: 'PUBLISHED' },
    take: 10,
  });
  return NextResponse.json(posts);
}
