// Dynamic SEO meta tags — used on city pages and service pages
interface SEOMetaProps {
  title: string;
  description: string;
  city?: string;
}

export default function SEOMeta({ title, description }: SEOMetaProps) {
  // Next.js 14 uses generateMetadata() in page.tsx — this component is for reference/override
  return null;
}
