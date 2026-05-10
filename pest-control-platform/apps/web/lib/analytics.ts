// GA4 event helpers for booking funnel tracking
declare function gtag(...args: unknown[]): void;

export function trackBookingStarted(pestType: string) {
  if (typeof gtag === "undefined") return;
  gtag("event", "booking_started", { pest_type: pestType });
}

export function trackBookingCompleted(pestType: string, propertyType: string) {
  if (typeof gtag === "undefined") return;
  gtag("event", "booking_completed", { pest_type: pestType, property_type: propertyType });
}

export function trackWhatsAppClick(source: string) {
  if (typeof gtag === "undefined") return;
  gtag("event", "whatsapp_click", { source });
}
