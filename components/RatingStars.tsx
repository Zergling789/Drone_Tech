export default function RatingStars({ rating = 0 }: { rating?: number }) {
  return (
    <div className="flex text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
}
