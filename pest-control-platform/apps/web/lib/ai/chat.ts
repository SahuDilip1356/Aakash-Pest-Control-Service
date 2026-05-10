// Streaming Claude chat handler for the AI chat widget
import Anthropic from "@anthropic-ai/sdk";
import { siteConfig } from "@/config/site.config";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are a helpful pest control booking assistant for ${siteConfig.name} in ${siteConfig.cities.join(", ")}.

You help customers with:
- Service information (cockroach, termite, bedbug, mosquito, rodent control)
- Pricing (typical rates for 1BHK/2BHK/3BHK in Delhi NCR)
- Booking process and availability
- Safety and post-treatment care
- Warranty and re-service policies

Always be friendly and brief. When the customer is ready to book, say:
"Great! You can book at [booking link] or WhatsApp us at ${siteConfig.whatsapp}"

Do not make up specific prices — give ranges and encourage booking for exact quotes.`;

export async function streamChat(messages: { role: string; content: string }[]) {
  return client.messages.stream({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    system: SYSTEM_PROMPT,
    messages: messages as Anthropic.MessageParam[],
  });
}
