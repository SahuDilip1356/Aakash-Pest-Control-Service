import { siteConfig } from "@/config/site.config";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="bg-white rounded-xl p-3 inline-block mb-4">
            <img src={siteConfig.logo.full} alt={siteConfig.name} className="h-20 w-auto block" />
          </div>
          <p className="text-sm">{siteConfig.address}</p>
          <a href={`tel:${siteConfig.phone}`} className="block mt-2 text-green-400 font-medium">{siteConfig.phone}</a>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} className="block mt-1 text-green-400">WhatsApp Us</a>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Services</h3>
          <ul className="text-sm space-y-1">
            {["Cockroach Control","Termite Control","Bedbug Control","Mosquito Control","Rodent Control"].map(s => (
              <li key={s}><a href="/services" className="hover:text-white">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Service Areas</h3>
          <ul className="text-sm space-y-1">
            {siteConfig.cities.map(city => (
              <li key={city}><a href={`/areas/${city.toLowerCase()}`} className="hover:text-white">Pest Control in {city}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 border-t border-gray-700 pt-4 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          <a href="/track" className="hover:text-gray-300 transition-colors">Track Booking</a>
        </div>
      </div>
    </footer>
  );
}
