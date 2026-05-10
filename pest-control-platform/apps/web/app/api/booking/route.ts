import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const now = new Date();
  const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const rand = Math.floor(1000 + Math.random() * 9000);
  const bookingId = `APC-${datePart}-${rand}`;
  // TODO: persist to DB via lib/db.ts, send WhatsApp confirmation
  console.log("New booking:", { ...body, bookingId });
  return NextResponse.json({ success: true, bookingId });
}
