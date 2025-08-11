interface Props {
  pros: string[];
  cons: string[];
}

export default function ProsCons({ pros, cons }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ul className="list-disc list-inside">
        {pros.map((p) => (
          <li key={p} className="text-green-600">{p}</li>
        ))}
      </ul>
      <ul className="list-disc list-inside">
        {cons.map((c) => (
          <li key={c} className="text-red-600">{c}</li>
        ))}
      </ul>
    </div>
  );
}
