// City-specific SEO page e.g. /areas/delhi
// Generates unique H1, meta, and local schema per city from data/areas.ts
import { siteConfig } from "@/config/site.config";

export function generateStaticParams() {
  return siteConfig.cities.map((city) => ({ city: city.toLowerCase() }));
}

export default function CityPage({ params }: { params: { city: string } }) {
  return <main><h1>Pest Control in {params.city}</h1></main>;
}
