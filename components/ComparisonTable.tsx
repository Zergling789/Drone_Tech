interface Product {
  name: string;
  specs: Record<string, string | number>;
}

export default function ComparisonTable({ products }: { products: Product[] }) {
  const specKeys = Array.from(new Set(products.flatMap((p) => Object.keys(p.specs))));
  return (
    <table className="w-full text-sm">
      <thead className="sticky top-0 bg-gray-100">
        <tr>
          <th className="p-2 text-left">Produkt</th>
          {specKeys.map((key) => (
            <th key={key} className="p-2 text-left">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.name} className="odd:bg-gray-50">
            <td className="p-2 font-medium">{p.name}</td>
            {specKeys.map((key) => (
              <td key={key} className="p-2">
                {p.specs[key] ?? '-'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
