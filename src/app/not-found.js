// src/app/not-found.js
import Link from "next/link";
import { Home, Compass } from "lucide-react";

export const metadata = { title: "404 — Page not found" };

export default function NotFound() {
  return (
    <section className="min-h-screen grid place-items-center px-6 text-center">
      <div className="reveal is-visible">
        <div className="font-mono text-7xl md:text-9xl font-bold text-gradient">404</div>
        <h1 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
          You've wandered off the map.
        </h1>
        <p className="mt-3 text-white/50 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-glow px-6 py-3.5 font-medium text-white shadow-glow hover:shadow-glow-cyan transition-all hover:scale-[1.02]"
        >
          <Home size={18} /> Back home
        </Link>
        <div className="mt-12 flex justify-center text-white/20">
          <Compass size={48} className="animate-spin-slow" />
        </div>
      </div>
    </section>
  );
}