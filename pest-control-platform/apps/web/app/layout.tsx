import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";
import CallFloat from "@/components/common/CallFloat";
import AIChatWidget from "@/components/ai/AIChatWidget";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.tagline,
  icons: {
    icon: [
      { url: siteConfig.logo.icon, type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    images: [{ url: siteConfig.logo.full, width: 1402, height: 1122, alt: siteConfig.name }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <AIChatWidget />
        <WhatsAppFloat />
        <CallFloat />
      </body>
    </html>
  );
}
