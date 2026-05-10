// POST /api/ai/pest-identify — identify pest from uploaded image
// Accepts: multipart form with image file
// Returns: pest name, severity, recommended service, estimated price range
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // TODO: extract image, call lib/ai/pest-identifier.ts with Claude Vision
  return NextResponse.json({ pest: "", severity: "", service: "", priceRange: "" });
}
