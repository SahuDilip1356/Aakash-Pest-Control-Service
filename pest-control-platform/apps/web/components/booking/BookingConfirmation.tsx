import { siteConfig } from "@/config/site.config";

interface BookingConfirmationProps {
  name: string;
  date: string;
  pestType: string;
  bookingId: string;
}

export default function BookingConfirmation({ name, date, pestType, bookingId }: BookingConfirmationProps) {
  const waMessage = encodeURIComponent(`Hi, my booking is confirmed. ID: ${bookingId}. Date: ${date}. Pest: ${pestType}.`);
  return (
    <div className="glass rounded-3xl p-8 text-center">
      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-3xl">✅</span>
      </div>
      <h2 className="text-2xl font-extrabold text-white mb-1">Booking Confirmed!</h2>
      <p className="text-white/40 text-sm mb-6">Thank you, {name}. We&apos;ll WhatsApp you within 30 minutes.</p>

      <div className="bg-white/5 rounded-xl p-4 mb-6 text-left space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-white/40">Booking ID</span>
          <span className="text-white font-bold">{bookingId}</span>
        </div>
        <div className="h-px bg-white/5" />
        <div className="flex justify-between text-sm">
          <span className="text-white/40">Service</span>
          <span className="text-white">{pestType}</span>
        </div>
        <div className="h-px bg-white/5" />
        <div className="flex justify-between text-sm">
          <span className="text-white/40">Date &amp; Time</span>
          <span className="text-white">{date}</span>
        </div>
      </div>

      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=${waMessage}`}
        target="_blank" rel="noopener noreferrer"
        className="block w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3.5 rounded-xl cta-glow transition-all text-sm"
      >
        💬 Send to WhatsApp →
      </a>
      <a href={`/track?id=${bookingId}`} className="block mt-3 text-white/40 text-xs hover:text-white/60 transition-colors">
        Track this booking → {bookingId}
      </a>
    </div>
  );
}
