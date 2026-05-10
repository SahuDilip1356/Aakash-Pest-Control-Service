import { siteConfig } from "@/config/site.config";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050d1a] py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-white/30 text-xs hover:text-white/60 transition-colors mb-8 inline-block">← Home</a>
        <h1 className="text-3xl font-extrabold text-white mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: May 2026</p>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-base mb-2">Information We Collect</h2>
            <p>We collect the name, mobile number, address, and pest type you provide through our booking form. This information is used solely to schedule and confirm your service appointment.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-2">How We Use Your Information</h2>
            <p>Your contact details are used to: confirm your booking via WhatsApp; dispatch a certified technician; send service reminders and warranty follow-ups. We do not sell or share your data with third parties.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-2">WhatsApp Communication</h2>
            <p>By booking with us, you consent to receive WhatsApp messages regarding your booking status, technician ETA, and service reminders from {siteConfig.name}.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-2">Cookies &amp; Analytics</h2>
            <p>We use Google Analytics to understand how visitors use our website. This involves anonymised cookies. You may opt out via your browser settings or Google&apos;s opt-out tools.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-2">Data Retention</h2>
            <p>We retain booking records for 12 months for service history and warranty purposes. You may request deletion by contacting us on WhatsApp.</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-base mb-2">Contact</h2>
            <p>
              Questions? WhatsApp us at{" "}
              <a href={`https://wa.me/${siteConfig.whatsapp}`} className="text-green-400 hover:underline">
                {siteConfig.phone}
              </a>{" "}
              or write to us at {siteConfig.address}.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
