import './globals.css';
import { BRAND } from '@/lib/config';
import type { ReactNode } from 'react';

export const metadata = {
  title: BRAND,
  description: `${BRAND} – Drohnen Tech Blog`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
