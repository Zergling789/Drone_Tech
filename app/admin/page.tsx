import Link from 'next/link';

export default function AdminHome() {
  return (
    <main className="mx-auto max-w-2xl p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Bereich</h1>
      <p>
        Hier können Inhalte verwaltet werden. Funktionalität wie Login, Rollen
        und der TipTap-Editor sind vorbereitet aber noch nicht vollständig
        implementiert.
      </p>
      <Link href="/admin/posts" className="text-blue-500">Posts verwalten</Link>
    </main>
  );
}
