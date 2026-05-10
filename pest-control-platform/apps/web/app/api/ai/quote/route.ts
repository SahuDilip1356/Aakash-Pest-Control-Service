// POST /api/ai/quote — generate instant price quote
// Body: { propertyType, pestType, city, areaSqFt? }
// Returns: priceRange, inclusions, duration, nextStep
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  // TODO: call lib/ai/quote-generator.ts
  return NextResponse.json({ priceRange: "", inclusions: [], duration: "" });
}
