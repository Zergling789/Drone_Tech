'use client';
import React, { useState } from 'react';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    setTitle('');
    setContent('');
    alert('Gespeichert (Mock)');
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Neuer Post</h1>
      <input
        className="w-full border p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titel"
        required
      />
      <textarea
        className="w-full border p-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Inhalt"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded" type="submit">
        Speichern
      </button>
    </form>
  );
}
