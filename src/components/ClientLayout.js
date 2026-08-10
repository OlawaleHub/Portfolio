// src/components/ClientLayout.js
"use client";
import useReveal from "@/lib/useReveal";

/**
 * Client-side wrapper that activates scroll-reveal animations and renders
 * the global animated background. Kept thin so Server Components stay default.
 */
export default function ClientLayout({ children }) {
  useReveal();

  return (
    <div className="relative min-h-screen">
      {/* Animated aurora background — emerald → blue */}
      <div className="no-print fixed inset-0 -z-10 overflow-hidden bg-ink-950">
        <div className="aurora-blob w-[40vw] h-[40vw] bg-brand-600/40 top-[-10%] left-[-5%] animate-aurora" />
        <div
          className="aurora-blob w-[35vw] h-[35vw] bg-cyan-glow/30 top-[20%] right-[-10%] animate-aurora"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="aurora-blob w-[30vw] h-[30vw] bg-emerald-400/20 bottom-[-15%] left-[30%] animate-aurora"
          style={{ animationDelay: "-12s" }}
        />
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/0 via-ink-950/40 to-ink-950" />
      </div>

      {children}
    </div>
  );
}