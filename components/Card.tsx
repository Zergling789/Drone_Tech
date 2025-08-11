import { ReactNode } from 'react';

export default function Card({ children }: { children: ReactNode }) {
  return <div className="border rounded p-4 shadow-sm bg-white dark:bg-gray-800">{children}</div>;
}
