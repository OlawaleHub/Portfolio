// src/components/Footer.js
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function Footer() {
  return (
    <footer className="no-print relative border-t border-white/10 mt-10">
      <div className="section-pad !py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <a href="#hero" className="flex items-center gap-2.5 group">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-glow text-white font-bold shadow-glow">
                {profile.initials}
              </span>
              <div className="leading-tight">
                <span className="block text-lg font-semibold text-white">{profile.brand}</span>
                <span className="block text-xs text-white/40 font-mono">{profile.name}</span>
              </div>
            </a>
            <p className="mt-3 text-sm text-white/50 max-w-xs">
              Building delightful web & mobile experiences from {profile.location}.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {Object.entries(profile.socials).map(([key, url]) => {
              const Icon = iconMap[key] || ArrowUpRight;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={key}
                  className="grid place-items-center h-11 w-11 rounded-xl glass glass-hover text-white/80 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 font-mono">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}