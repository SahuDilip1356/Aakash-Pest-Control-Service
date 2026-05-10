// Calls Claude API with vision to identify pest from uploaded image
import Anthropic from "@anthropic-ai/sdk";

export async function identifyPest(imageBase64: string, mimeType: string) {
  const client = new Anthropic();
  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            source: { type: "base64", media_type: mimeType as "image/jpeg", data: imageBase64 },
          },
          {
            type: "text",
            text: `You are a pest control expert in India. Identify the pest in this image and respond in JSON:
{
  "pest": "pest name",
  "severity": "low | medium | high",
  "service": "recommended service name",
  "priceRange": "₹X–₹Y range for a 2BHK in Delhi NCR",
  "urgency": "book within X days"
}`,
          },
        ],
      },
    ],
  });

  const text = response.content[0].type === "text" ? response.content[0].text : "";
  return JSON.parse(text);
}
