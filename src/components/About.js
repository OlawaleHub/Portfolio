// src/components/About.js
"use client";
import { useEffect, useRef, useState } from "react";
import { stats, profile } from "@/lib/data";

function Counter({ end, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 1600;
          const start = performance.now();
          const step = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(end * eased);
            if (p < 1) requestAnimationFrame(step);
            else setValue(end);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);

  const display = Number.isInteger(end) ? Math.round(value) : value.toFixed(1);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-pad">
        <div className="reveal eyebrow">About me</div>
        <h2 className="reveal mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white max-w-3xl">
          Turning complex problems into{" "}
          <span className="text-gradient">elegant products</span>.
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-10 items-start">
          <div className="reveal md:col-span-2 space-y-5 text-white/60 leading-relaxed text-lg">
            <p>
              I'm a software engineer specializing in web and cross-platform
              mobile development with Dart & Flutter. Over the last{" "}
              {stats[0].value}+ years I've built responsive websites, offline-first
              PWAs, and scalable mobile apps with clean architecture and smooth
              state management.
            </p>
            <p>
              With a background in biological sciences, I bring a human-centered,
              analytical mindset to engineering — I care about performance,
              accessibility, and the small details that make software feel alive and
              genuinely useful to the people who depend on it.
            </p>
            <p>
              When I'm not coding, I'm mentoring junior developers, writing, or
              volunteering with youth empowerment initiatives in my community.
            </p>
          </div>

          <div className="reveal glass rounded-2xl p-6">
            <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
              Currently
            </p>
            <p className="mt-3 text-white text-lg font-medium">
              Software Engineer
            </p>
            <p className="text-white/50">@ Refcrypt Labs · Remote</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Web & Mobile", "Flutter & Dart", "Mentor"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="reveal glass glass-hover rounded-2xl p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}