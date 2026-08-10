// src/components/Hero.js
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, Sparkles, MapPin, Download } from "lucide-react";
import { profile } from "@/lib/data";

function useTypewriter(words, typeSpeed = 90, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? typeSpeed / 2 : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28">
      <div className="section-pad !py-0 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-white/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </div>

          <h1 className="reveal mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
            Hi, I'm <span className="text-gradient">{profile.name}</span>.
            <br />
            I build <span className="text-gradient">{profile.tagline}</span>.
          </h1>

          <div className="reveal mt-6 flex items-center gap-2 text-xl md:text-2xl font-mono text-white/70">
            <span className="text-brand-400">{'>'}</span>
            <span>{typed}</span>
            <span className="inline-block w-[2px] h-6 bg-cyan-glow animate-pulse" />
          </div>

          <p className="reveal mt-6 max-w-xl text-lg text-white/60 leading-relaxed">
            {profile.bio}
          </p>

          <div className="reveal mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-glow px-6 py-3.5 font-medium text-white shadow-glow hover:shadow-glow-cyan transition-all hover:scale-[1.02]"
            >
              View my work
              <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-6 py-3.5 font-medium text-white"
            >
              <Download size={18} className="text-cyan-glow" />
              Download CV
            </a>
          </div>

          <div className="reveal mt-6 flex items-center gap-2 text-sm text-white/50">
            <MapPin size={14} /> {profile.location}
          </div>
        </div>

        {/* Right: profile photo with floating chips */}
        <div className="lg:col-span-5 relative reveal">
          <div className="animate-float">
            <div className="relative glass rounded-3xl p-2.5 shadow-glow">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
              </div>

              {/* overlapping code chip */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass rounded-xl px-4 py-2.5 font-mono text-xs whitespace-nowrap">
                <span className="text-brand-400">const</span>{" "}
                <span className="text-cyan-300">dev</span>{" "}
                <span className="text-white/60">=</span>{" "}
                <span className="text-blue-400">"{profile.brand}"</span>
              </div>
            </div>
          </div>

          {/* floating tech chips */}
          <div
            className="absolute -top-4 -left-4 glass rounded-xl px-3 py-2 text-xs font-mono text-white/80 animate-float"
            style={{ animationDelay: "-2s" }}
          >
            🐦 Dart
          </div>
          <div
            className="absolute top-1/3 -right-5 glass rounded-xl px-3 py-2 text-xs font-mono text-white/80 animate-float"
            style={{ animationDelay: "-4s" }}
          >
            ▲ Next.js
          </div>
          <div
            className="absolute -bottom-8 right-8 glass rounded-xl px-3 py-2 text-xs font-mono text-white/80 animate-float"
            style={{ animationDelay: "-1s" }}
          >
            ⚛️ Flutter
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white transition-colors"
      >
        <span className="text-xs font-mono">scroll</span>
        <span className="h-9 w-5 rounded-full border border-white/20 flex justify-center pt-1.5">
          <span className="h-2 w-1 rounded-full bg-white/60 animate-bounce" />
        </span>
      </a>
    </section>
  );
}