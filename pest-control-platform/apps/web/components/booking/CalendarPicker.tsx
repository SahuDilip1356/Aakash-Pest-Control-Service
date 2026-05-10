"use client";
import { useState } from "react";

export default function CalendarPicker({ onSelect }: { onSelect: (date: string) => void }) {
  const [selected, setSelected] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected(e.target.value);
    onSelect(e.target.value);
  }

  return (
    <div>
      <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">Select Date</label>
      <input
        type="date"
        value={selected}
        onChange={handleChange}
        min={new Date().toISOString().split("T")[0]}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-green-500/50 transition-colors [color-scheme:dark]"
      />
    </div>
  );
}
