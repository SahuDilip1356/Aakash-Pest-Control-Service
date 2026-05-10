"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BookingSteps from "@/components/booking/BookingSteps";
import BookingConfirmation from "@/components/booking/BookingConfirmation";

function ConfirmContent() {
  const params = useSearchParams();
  const [bookingId, setBookingId] = useState("");
  const [loading, setLoading] = useState(true);

  const name = params.get("name") ?? "";
  const pestType = params.get("pestType") ?? "";
  const propertyType = params.get("propertyType") ?? "";
  const mobile = params.get("mobile") ?? "";
  const date = params.get("date") ?? "";
  const slot = params.get("slot") ?? "";

  useEffect(() => {
    fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, mobile, pestType, propertyType, date, slot }),
    })
      .then(r => r.json())
      .then(data => {
        setBookingId(data.bookingId);
        setLoading(false);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="min-h-screen bg-[#050d1a] flex flex-col items-center pt-24 pb-16 px-5">
      <div className="w-full max-w-xl">
        <div className="mb-8 invisible">placeholder</div>
        <BookingSteps current={3} />
        <div className="mt-8">
          {loading ? (
            <div className="glass rounded-3xl p-12 text-center">
              <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-white/50 text-sm">Confirming your booking...</p>
            </div>
          ) : (
            <BookingConfirmation
              name={name}
              date={`${date} at ${slot}`}
              pestType={pestType}
              bookingId={bookingId}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default function ConfirmPage() {
  return (
    <Suspense>
      <ConfirmContent />
    </Suspense>
  );
}
