import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";
import CallFloat from "@/components/common/CallFloat";
import AIChatWidget from "@/components/ai/AIChatWidget";
import "@/styles/globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  process.env.DEPLOY_PRIME_URL ??
  "https://aakash-pest-control-services.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
