export default function PriceTag({ price }: { price: number }) {
  return <div className="text-xl font-bold text-primary">{price.toFixed(2)} €</div>;
}
