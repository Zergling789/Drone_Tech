import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

interface Params { slug: string }

export default async function ProductPage({ params }: { params: Params }) {
  const product = await prisma.product.findUnique({ where: { slug: params.slug } });
  if (!product) notFound();
  return (
    <main className="mx-auto max-w-2xl p-4">
      <ProductCard product={product} />
    </main>
  );
}
