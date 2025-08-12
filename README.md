# {{Markenname}} – Drohnen Tech Blog

Diese Next.js 14 Anwendung dient als Ausgangspunkt für einen Drohnen-Blog mit Adminbereich.

## Setup

1. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
2. `.env` anhand von `.env.example` erstellen.
3. Prisma migrieren & Seed:
   ```bash
   npx prisma migrate dev
   npm run db:seed
   ```
4. Entwicklung starten:
   ```bash
   npm run dev
   ```

## Tests

- `npm test` führt Jest Tests aus.
- `npm run e2e` startet Playwright Tests.

## Deployment

Vercel für Web, Postgres z.B. über Supabase. ENV-Variablen entsprechend setzen.
