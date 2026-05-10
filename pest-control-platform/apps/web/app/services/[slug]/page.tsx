// Individual service page e.g. /services/cockroach-control
// Slug matches keys in data/services.ts
export default function ServicePage({ params }: { params: { slug: string } }) {
  return <main><h1>{params.slug}</h1></main>;
}
