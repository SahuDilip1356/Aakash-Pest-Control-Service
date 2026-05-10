// AI Pest Identifier: photo upload → Claude Vision → pest name + service rec + price range
"use client";
import { useState } from "react";

export default function PestIdentifier() {
  const [result, setResult] = useState<{ pest: string; service: string; priceRange: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.[0]) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    const res = await fetch("/api/ai/pest-identify", { method: "POST", body: formData });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <section id="pest-identifier">
      <h2>Not sure what pest it is? Upload a photo — our AI will identify it.</h2>
      <input type="file" accept="image/*" capture="environment" onChange={handleUpload} />
      {loading && <p>Analyzing your photo...</p>}
      {result && (
        <div>
          <p>Pest detected: <strong>{result.pest}</strong></p>
          <p>Recommended service: {result.service}</p>
          <p>Estimated cost: {result.priceRange}</p>
          <a href={`/booking?pest=${encodeURIComponent(result.pest)}`}>Book Treatment →</a>
        </div>
      )}
    </section>
  );
}
