// WhatsApp message builder — supports wa.link (no API key) and WhatsApp Business API
import { siteConfig } from "@/config/site.config";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function bookingConfirmationMessage(name: string, date: string, pestType: string, bookingId: string): string {
  return `Hi ${name}, your ${pestType} control booking is confirmed for ${date}. Booking ID: ${bookingId}. Our team will contact you 30 min before arrival. – ${siteConfig.name}`;
}

export async function sendWhatsAppAPI(phone: string, message: string): Promise<void> {
  // TODO: implement WhatsApp Business API call if token is configured
  // Falls back to wa.link approach if no API token
  if (!process.env.WHATSAPP_API_TOKEN) return;
  // ... API call
}
