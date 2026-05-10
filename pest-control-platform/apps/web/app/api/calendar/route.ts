import { NextRequest, NextResponse } from "next/server";

const ALL_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM",
];

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date");
  if (!date) return NextResponse.json({ slots: [] });
  // Deterministic pseudo-availability so the UI feels real before Google Calendar is wired
  const seed = new Date(date).getDate();
  const slots = ALL_SLOTS.filter((_, i) => (i + seed) % 3 !== 0);
  return NextResponse.json({ date, slots });
}
