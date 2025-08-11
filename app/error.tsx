'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold">Ein Fehler ist aufgetreten</h1>
      <p>{error.message}</p>
    </main>
  );
}
