"use client";
import { siteConfig } from "@/config/site.config";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I need pest control help`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("float")}
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg font-semibold text-sm transition-colors"
      aria-label="Chat on WhatsApp"
    >
      💬 WhatsApp
    </a>
  );
}
