import { MetadataRoute } from 'next';
import { DOMAIN } from '@/lib/config';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await prisma.post.findMany({ where: { status: 'PUBLISHED' } });
  const pages = posts.map((p: any) => ({ url: `${DOMAIN}/posts/${p.slug}`, lastModified: p.updatedAt }));
  return [
    { url: DOMAIN, lastModified: new Date() },
    ...pages,
  ];
}
