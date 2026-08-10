// src/components/Experience.js
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-pad">
        <SectionHeading
          eyebrow="Journey"
          title="Where I've worked"
          subtitle="A track record across software engineering, operations, and research."
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((job, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={job.company}
                  className={`reveal relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                    left ? "" : "md:[direction:rtl]"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* dot */}
                  <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-to-br from-brand-400 to-cyan-glow ring-4 ring-ink-950 shadow-glow" />

                  {/* card */}
                  <div
                    className={`pl-12 md:pl-0 [direction:ltr] ${
                      left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="glass glass-hover rounded-2xl p-6">
                      <span className="font-mono text-xs text-cyan-glow">{job.period}</span>
                      <h3 className="mt-2 text-xl font-semibold text-white">{job.role}</h3>
                      <p className="text-brand-400 font-medium">
                        {job.company} <span className="text-white/40 font-normal">· {job.location}</span>
                      </p>
                      <p className="mt-3 text-sm text-white/55 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}