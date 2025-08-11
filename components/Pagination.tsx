interface Props {
  page: number;
  totalPages: number;
}

export default function Pagination({ page, totalPages }: Props) {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <a
          key={p}
          href={`?page=${p}`}
          className={`px-3 py-1 border ${p === page ? 'bg-primary text-white' : ''}`}
        >
          {p}
        </a>
      ))}
    </div>
  );
}
