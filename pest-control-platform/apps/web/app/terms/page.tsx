import { siteConfig } from "@/config/site.config";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050d1a] py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-white/30 text-xs hover:text-white/60 transition-colors mb-8 inline-block">← Home</a>
        <h1 className="text-3xl font-extrabold text-white mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: May 2026</p>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-base mb-2">Service Agreement</h2>
            <p>By booking a service with {siteConfig.name}, you agree to provide accurate contact and property details. Our technicians will arrive within the confirmed time window.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-2">Booking &amp; Cancellation</h2>
            <p>Bookings may be cancelled or rescheduled up to 4 hours before the confirmed appointment, free of charge, by contacting us on WhatsApp. Same-day cancellations are subject to a ₹200 convenience fee.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-2">30-Day Warranty</h2>
            <p>All services carry a 30-day re-treatment warranty. If pests reappear within 30 days of treatment, we will return and re-treat at no additional charge. The warranty applies to the treated area only and does not cover new infestations from adjacent areas.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-2">Customer Responsibilities</h2>
            <p>Customers must ensure technician access to the property, clear stored items in infested areas before treatment, and follow post-treatment instructions (e.g., ventilating rooms, avoiding treated surfaces for the specified duration).</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-2">Payment</h2>
            <p>Payment is due on completion of service. We accept cash, UPI (PhonePe / Google Pay / Paytm), and bank transfer. Invoices are provided on request.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-2">Limitation of Liability</h2>
            <p>Our liability is limited to the value of the service booked. We are not responsible for damage arising from pre-existing structural issues or failure to follow post-treatment instructions.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-2">Contact</h2>
            <p>
              For disputes or queries, contact us at{" "}
              <a href={`https://wa.me/${siteConfig.whatsapp}`} className="text-green-400 hover:underline">
                {siteConfig.phone}
              </a>
              . We aim to resolve all issues within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
