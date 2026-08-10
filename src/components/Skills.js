// src/components/Skills.js
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-pad">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & technologies"
          subtitle="A versatile toolkit spanning frontend, mobile, backend, and the DevOps that glues it all together."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <div
              key={group.group}
              className="reveal glass glass-hover rounded-2xl p-6"
              style={{ transitionDelay: `${gi * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-400 to-cyan-glow" />
                <h3 className="text-lg font-semibold text-white">{group.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="group inline-flex items-center rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/25 px-3.5 py-2 text-sm text-white/80 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee of tech */}
        <div className="reveal mt-12 relative overflow-hidden mask-fade">
          <div className="marquee gap-8">
            {[...marqueeItems, ...marqueeItems].map((m, i) => (
              <span
                key={i}
                className="text-2xl md:text-3xl font-mono text-white/15 hover:text-white/40 transition-colors whitespace-nowrap"
              >
                {m}
                <span className="text-brand-400/40 mx-8">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const marqueeItems = [
  "Dart",
  "Flutter",
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Firebase",
  "REST APIs",
  "Solidity",
  "Git",
];