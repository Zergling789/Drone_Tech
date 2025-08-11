import { NextResponse } from 'next/server';

export async function POST() {
  // Placeholder for Cloudinary signed upload
  return NextResponse.json({ url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg' });
}
