// src/app/resume/page.js
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Twitter, Award, BookOpen } from "lucide-react";
import PrintButton from "@/components/PrintButton";
import {
  profile,
  experience,
  education,
  certifications,
  achievements,
} from "@/lib/data";

export const metadata = {
  title: `${profile.name} — Resume`,
  description: `Resume / CV for ${profile.name}, ${profile.role}.`,
};

const socialIcon = { github: Github, linkedin: Linkedin, twitter: Twitter };

export default function ResumePage() {
  return (
    <section className="pt-28 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Top bar */}
        <div className="no-print flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
          <PrintButton />
        </div>

        {/* Sheet */}
        <div className="resume-sheet glass rounded-2xl p-8 md:p-12">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{profile.name}</h1>
              <p className="text-brand-400 font-medium mt-1">{profile.role}</p>
            </div>
            <div className="text-sm text-white/60 space-y-1 md:text-right">
              <p className="flex items-center gap-2 md:justify-end">
                <Mail size={14} className="text-cyan-glow" /> {profile.email}
              </p>
              <p className="flex items-center gap-2 md:justify-end">
                <Phone size={14} className="text-cyan-glow" /> {profile.phone}
              </p>
              <p className="flex items-center gap-2 md:justify-end">
                <MapPin size={14} className="text-cyan-glow" /> {profile.location}
              </p>
            </div>
          </header>

          {/* Objective */}
          <Section title="Objective">
            <p className="text-white/60 leading-relaxed text-sm md:text-[0.95rem]">
              {profile.objective}
            </p>
          </Section>

          {/* Experience */}
          <Section title="Experience">
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={`${job.company}-${job.period}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-white font-semibold">{job.role}</h3>
                    <span className="font-mono text-xs text-cyan-glow">{job.period}</span>
                  </div>
                  <p className="text-brand-400 text-sm mt-0.5">
                    {job.company} <span className="text-white/40">· {job.location}</span>
                  </p>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section title="Education">
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.school} className="flex items-baseline gap-3">
                  <BookOpen size={16} className="text-cyan-glow shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">{e.school}</h3>
                    <p className="text-white/55 text-sm">{e.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Certifications */}
          <Section title="Certifications">
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((group) => (
                <div key={group.group}>
                  <h3 className="text-brand-400 text-sm font-medium mb-3">{group.group}</h3>
                  <ul className="space-y-1.5">
                    {group.items.map((c) => (
                      <li key={c} className="text-white/60 text-sm flex gap-2">
                        <span className="text-cyan-glow mt-0.5">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Leadership & Awards */}
          <Section title="Leadership, Awards & Volunteering">
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {achievements.map((a) => (
                <li key={a} className="text-white/60 text-sm flex gap-2">
                  <Award size={14} className="text-cyan-glow shrink-0 mt-0.5" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Footer of sheet */}
          <footer className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-white/40">
            {Object.entries(profile.socials).map(([key, url]) => {
              const Icon = socialIcon[key];
              return Icon ? (
                <span key={key} className="flex items-center gap-1.5">
                  <Icon size={13} /> {url.replace(/^https?:\/\//, "")}
                </span>
              ) : null;
            })}
            <span className="ml-auto">References available upon request.</span>
          </footer>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-gradient-to-b from-brand-400 to-cyan-glow" />
        {title}
      </h2>
      {children}
    </section>
  );
}
