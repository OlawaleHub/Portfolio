// src/components/Services.js
import { Code2, Smartphone, Palette, PenLine } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/data";

const iconMap = { Code2, Smartphone, Palette, PenLine };

export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="section-pad">
        <SectionHeading
          eyebrow="What I do"
          title="Services tailored to ship"
          subtitle="From first sketch to production deploy, I cover the full product lifecycle across web and mobile."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Code2;
            return (
              <div
                key={s.title}
                className="reveal group glass glass-hover rounded-2xl p-6 relative overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-500/30 to-cyan-glow/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-cyan-glow/10 border border-white/10 text-brand-400 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}