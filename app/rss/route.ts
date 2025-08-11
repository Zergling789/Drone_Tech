import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { DOMAIN } from '@/lib/config';

export async function GET() {
  const posts = await prisma.post.findMany({ where: { status: 'PUBLISHED' }, orderBy: { publishedAt: 'desc' } });
  const items = posts
    .map((p) => `
      <item>
        <title>${p.title}</title>
        <link>${DOMAIN}/posts/${p.slug}</link>
        <pubDate>${p.publishedAt?.toUTCString()}</pubDate>
      </item>
    `)
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0"><channel><title>${DOMAIN}</title>${items}</channel></rss>`;
  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } });
}
