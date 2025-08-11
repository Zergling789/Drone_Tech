import { BRAND } from '@/lib/config';

export const metadata = { title: 'Über uns' };

export default function About() {
  return (
    <main className="mx-auto max-w-3xl p-4">
      <h1 className="text-3xl font-bold mb-4">Über uns</h1>
      <p>{BRAND} berichtet über Drohnen-Technologie.</p>
    </main>
  );
}
