// Calls Claude API to generate an instant price quote based on property details
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

interface QuoteInput {
  propertyType: string;
  pestType: string;
  city: string;
  areaSqFt?: number;
}

export async function generateQuote(input: QuoteInput) {
  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    messages: [
      {
        role: "user",
        content: `You are a pest control pricing expert in India. Generate a quote in JSON for:
Property: ${input.propertyType}, Pest: ${input.pestType}, City: ${input.city}${input.areaSqFt ? `, Area: ${input.areaSqFt} sq ft` : ""}.

Respond in JSON only:
{
  "priceRange": "₹X–₹Y",
  "inclusions": ["item1", "item2", "item3"],
  "duration": "45–90 minutes",
  "warranty": "30 days",
  "nextStep": "Book now and get confirmed in 30 minutes"
}`,
      },
    ],
  });

  const text = response.content[0].type === "text" ? response.content[0].text : "";
  return JSON.parse(text);
}
