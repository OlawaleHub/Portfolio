// src/components/PrintButton.js
"use client";
import { Download, Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <div className="flex flex-wrap items-center gap-3 no-print">
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-glow px-5 py-2.5 text-sm font-medium text-white shadow-glow hover:shadow-glow-cyan transition-all hover:scale-[1.02]"
      >
        <Download size={16} /> Download PDF
      </button>
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-5 py-2.5 text-sm font-medium text-white"
      >
        <Printer size={16} /> Print
      </button>
    </div>
  );
}