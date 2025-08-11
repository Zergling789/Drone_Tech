import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  // Placeholder for revalidate logic
  return NextResponse.json({ revalidated: true, slug: body.slug });
}
