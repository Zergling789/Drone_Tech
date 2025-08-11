import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Placeholder for receiving price updates from providers
  return NextResponse.json({ received: true });
}
