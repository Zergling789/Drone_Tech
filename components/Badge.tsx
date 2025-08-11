import { ReactNode } from 'react';

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded">
      {children}
    </span>
  );
}
