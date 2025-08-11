import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  // In real implementation, verify token etc.
  return NextResponse.redirect(new URL(`/posts/${slug}?preview=true`, req.url));
}
