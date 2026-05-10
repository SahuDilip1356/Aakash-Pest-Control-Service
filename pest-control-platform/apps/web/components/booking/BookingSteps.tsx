import React from "react";

export default function BookingSteps({ current }: { current: 1 | 2 | 3 }) {
  const steps = ["Select Service", "Choose Time", "Confirmed"];
  return (
    <div className="flex items-center w-full">
      {steps.map((s, i) => {
        const step = i + 1;
        const done = current > step;
        const active = current === step;
        return (
          <React.Fragment key={s}>
            <div className="flex flex-col items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all
                ${done ? "bg-green-500 text-white" : active ? "bg-green-500 text-white shadow-lg shadow-green-500/30" : "bg-white/10 text-white/30"}`}>
                {done ? "✓" : step}
              </div>
              <span className={`text-xs font-medium whitespace-nowrap
                ${active ? "text-white" : done ? "text-green-400" : "text-white/30"}`}>{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-px mx-2 mb-4 transition-colors ${done ? "bg-green-500" : "bg-white/10"}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
