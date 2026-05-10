"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I can help with pricing, pest types, and booking. What's your pest problem?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setLoading(true);

    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages([...history, assistantMsg]);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) return;

      let accumulated = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages(prev =>
          prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: accumulated } : m))
        );
      }
    } catch {
      setMessages(prev =>
        prev.map((m, i) =>
          i === prev.length - 1
            ? { ...m, content: "Sorry, I'm having trouble connecting. Please WhatsApp us directly." }
            : m
        )
      );
    } finally {
      setLoading(false);
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-5 z-40 bg-[#0d1f14] border border-green-500/20 text-white flex items-center gap-2 px-4 py-2.5 rounded-full shadow-xl text-xs font-medium hover:bg-green-500/10 transition-all"
        aria-label="Open AI chat assistant"
      >
        🤖 Ask anything
      </button>
    );
  }

  return (
    <div className="fixed bottom-24 right-5 z-40 w-80 bg-[#050d1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white text-sm font-semibold">Pest Control Assistant</span>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="text-white/40 hover:text-white text-lg leading-none transition-colors"
          aria-label="Close chat"
        >
          ✕
        </button>
      </div>

      <div className="h-72 overflow-y-auto p-3 space-y-2 scroll-smooth">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
              m.role === "user"
                ? "bg-green-500 text-white"
                : "bg-white/8 text-white/80 border border-white/5"
            }`}>
              {m.content || <span className="opacity-40 animate-pulse">●●●</span>}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="flex gap-2 p-3 border-t border-white/10">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder="Ask about pricing, services..."
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-xs placeholder-white/30 focus:outline-none focus:border-green-500/50 transition-colors"
          disabled={loading}
        />
        <button
          onClick={send}
          disabled={loading}
          className="bg-green-500 hover:bg-green-400 disabled:opacity-50 text-white font-bold px-3 py-2 rounded-xl text-xs transition-all"
        >
          →
        </button>
      </div>
    </div>
  );
}
