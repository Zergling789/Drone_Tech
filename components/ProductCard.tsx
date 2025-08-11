import Image from 'next/image';
import Link from 'next/link';
import RatingStars from './RatingStars';
import PriceTag from './PriceTag';

interface Props {
  product: {
    name: string;
    slug: string;
    images: string[];
    price?: number;
    rating?: number;
  };
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded p-4 flex flex-col">
      {product.images[0] && (
        <Image src={product.images[0]} alt={product.name} width={400} height={300} className="object-cover" />
      )}
      <h3 className="text-lg font-semibold mt-2">
        <Link href={`/products/${product.slug}`}>{product.name}</Link>
      </h3>
      {product.rating && <RatingStars rating={product.rating} />}
      {product.price && <PriceTag price={product.price} />}
    </div>
  );
}
