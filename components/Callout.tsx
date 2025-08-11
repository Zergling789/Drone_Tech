import { ReactNode } from 'react';

export default function Callout({ children }: { children: ReactNode }) {
  return <div className="border-l-4 border-primary pl-4 py-2 bg-blue-50 dark:bg-blue-900">{children}</div>;
}
