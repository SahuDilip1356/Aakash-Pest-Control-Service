import { siteConfig } from "@/config/site.config";

export default function CallFloat() {
  return (
    <a
      href={`tel:${siteConfig.phone}`}
      className="fixed bottom-5 left-5 z-50 bg-green-700 hover:bg-green-800 text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg font-semibold text-sm"
      aria-label="Call us"
    >
      📞 Call
    </a>
  );
}
