// src/components/Projects.js
import { ArrowUpRight, Github, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects, profile } from "@/lib/data";

function ProjectCard({ project, index }) {
  return (
    <div
      className="reveal group relative glass glass-hover rounded-2xl overflow-hidden flex flex-col"
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      {/* Visual header */}
      <div className={`relative h-44 bg-gradient-to-br ${project.accent} overflow-hidden`}>
        <div className="absolute inset-0 opacity-30 grid-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-white/90 tracking-tight drop-shadow-lg">
            {project.title.split(" ")[0]}
          </span>
        </div>
        {project.featured && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/30 backdrop-blur px-2.5 py-1 text-xs text-white border border-white/20">
            <Star size={12} className="text-amber-300 fill-amber-300" /> Featured
          </span>
        )}
        {/* hover links */}
        <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label="Live demo"
              className="grid place-items-center h-11 w-11 rounded-xl bg-white text-ink-900 hover:scale-110 transition-transform"
            >
              <ArrowUpRight size={18} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Source code"
              className="grid place-items-center h-11 w-11 rounded-xl glass text-white hover:scale-110 transition-transform"
            >
              <Github size={18} />
            </a>
          )}
          {!project.github && project.link && (
            <span className="grid place-items-center h-9 px-3 rounded-xl glass text-xs font-mono text-white/70">
              Confidential
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white group-hover:text-gradient transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-white/55 leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/[0.04] border border-white/10 px-2.5 py-1 text-xs font-mono text-white/60"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative">
      <div className="section-pad">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I'm proud of"
          subtitle="A selection of products spanning web, mobile, and the decentralized web."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* More on GitHub */}
        <div className="reveal mt-10 text-center">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-6 py-3 text-sm font-medium text-white"
          >
            <Github size={18} /> More projects on GitHub
            <ArrowUpRight size={16} className="text-brand-400" />
          </a>
        </div>
      </div>
    </section>
  );
}