import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: 'password',
      name: 'Admin',
      role: 'ADMIN',
    },
  });

  const categories = await Promise.all(
    ['News', 'Reviews', 'How-tos', 'Vergleiche'].map((name) =>
      prisma.category.upsert({ where: { name }, update: {}, create: { name } })
    )
  );

  const products = [
    {
      name: 'Einsteiger-Drohne',
      brand: 'BrandA',
      slug: 'einsteiger-drohne',
      images: ['https://placehold.co/400x300'],
      specs: { Gewicht: '500g', Flugzeit: '20min', Reichweite: '1km', Kamera: '1080p', Sensoren: 'GPS' },
      price: 299,
      rating: 4,
    },
    {
      name: 'Kamera-Drohne',
      brand: 'BrandB',
      slug: 'kamera-drohne',
      images: ['https://placehold.co/400x300'],
      specs: { Gewicht: '700g', Flugzeit: '25min', Reichweite: '2km', Kamera: '4K', Sensoren: 'GPS' },
      price: 599,
      rating: 5,
    },
    {
      name: 'FPV-Drohne',
      brand: 'BrandC',
      slug: 'fpv-drohne',
      images: ['https://placehold.co/400x300'],
      specs: { Gewicht: '400g', Flugzeit: '15min', Reichweite: '1.5km', Kamera: 'HD', Sensoren: 'IMU' },
      price: 399,
      rating: 4.5,
    },
    {
      name: 'Mini-Drohne',
      brand: 'BrandD',
      slug: 'mini-drohne',
      images: ['https://placehold.co/400x300'],
      specs: { Gewicht: '249g', Flugzeit: '30min', Reichweite: '2km', Kamera: '2.7K', Sensoren: 'GPS' },
      price: 499,
      rating: 4.2,
    },
    {
      name: 'Pro-Drohne',
      brand: 'BrandE',
      slug: 'pro-drohne',
      images: ['https://placehold.co/400x300'],
      specs: { Gewicht: '900g', Flugzeit: '35min', Reichweite: '5km', Kamera: '8K', Sensoren: 'GPS,Obstacle' },
      price: 999,
      rating: 4.8,
    },
    {
      name: 'Industrial-Drohne',
      brand: 'BrandF',
      slug: 'industrial-drohne',
      images: ['https://placehold.co/400x300'],
      specs: { Gewicht: '3kg', Flugzeit: '40min', Reichweite: '10km', Kamera: 'Thermal', Sensoren: 'Lidar' },
      price: 4999,
      rating: 5,
    },
  ];

  await Promise.all(products.map((p) => prisma.product.upsert({ where: { slug: p.slug }, update: {}, create: p })));

  const posts = [
    { title: 'Neue Drohnenregeln 2025', category: 'News' },
    { title: 'DJI Mini 4 Pro Review', category: 'Reviews' },
    { title: 'Wie starte ich mit FPV?', category: 'How-tos' },
    { title: 'Einsteiger vs. Pro Drohnen', category: 'Vergleiche' },
    { title: 'Top Kamera-Drohnen', category: 'Reviews' },
    { title: 'Reparatur einer Drohne', category: 'How-tos' },
    { title: 'FPV Zubehör Guide', category: 'News' },
    { title: 'Beste Drohnen 2025', category: 'Vergleiche' },
  ];

  for (const p of posts) {
    await prisma.post.upsert({
      where: { slug: p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') },
      update: {},
      create: {
        title: p.title,
        slug: p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        content: `<p>${p.title} Inhalt...</p>`,
        status: 'PUBLISHED',
        authorId: admin.id,
        category: { connect: { name: p.category } },
        publishedAt: new Date(),
      },
    });
  }

  await prisma.comparison.upsert({
    where: { title: 'Beste Drohnen 2025: Einsteiger bis Pro' },
    update: {},
    create: {
      title: 'Beste Drohnen 2025: Einsteiger bis Pro',
      products: { connect: products.map((p) => ({ slug: p.slug })) },
      verdict: 'Alle Drohnen getestet',
      summary: 'Vergleich der besten Drohnen für 2025.'
    }
  });
}

main().finally(() => prisma.$disconnect());
