// TEMPLATE — copy this folder to clients/[new-client]/ and fill in values
const config = {
  name: "Your Pest Control Business Name",
  tagline: "Safe Pest Control in [City] — Same-Day Inspection Available",
  phone: "09XXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",  // country code + number, no spaces or +
  address: "Your full address",
  rating: 4.8,
  reviewCount: 100,
  primaryColor: "#22c55e",   // brand green (Tailwind green-500) — single source of truth
  accentColor: "#f97316",    // CTA orange
  brand: {
    green: "#22c55e",
    greenDark: "#0a3d1f",
    brown: "#8B5A3C",
  },
  logo: {
    icon: "/images/logo-icon.svg",
    full: "/images/logo-full.png",
    fullSvg: "/images/logo-full.svg",
    favicon: "/favicon.ico",
  },
  cities: ["City1", "City2", "City3"],
  googleBusinessUrl: "https://g.page/your-business",
  calendarId: "your-calendar-id@group.calendar.google.com",
};

export default config;
