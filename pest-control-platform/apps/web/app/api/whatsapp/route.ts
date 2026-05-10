// POST /api/whatsapp — send booking confirmation via WhatsApp Business API
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { phone, message } = await req.json();
  // TODO: call WhatsApp API via lib/whatsapp.ts
  return NextResponse.json({ success: true });
}
