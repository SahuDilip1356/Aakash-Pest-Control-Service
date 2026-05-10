import { siteConfig } from "@/config/site.config";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section className="py-16 px-4 bg-green-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">{siteConfig.rating}★ on Google</h2>
          <p className="text-gray-500">{siteConfig.reviewCount}+ verified customer reviews</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reviews.map(r => (
            <div key={r.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3 text-yellow-400 text-lg">
                {"★".repeat(r.rating)}
              </div>
              <p className="text-gray-700 text-sm mb-4">"{r.text}"</p>
              <p className="font-semibold text-gray-900 text-sm">— {r.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
