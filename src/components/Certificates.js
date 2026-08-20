// src/components/Certificates.js
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications, profile } from "@/lib/data";

export default function Certificates() {
  return (
    <section id="certificates" className="relative">
      <div className="section-pad">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Continuous learning across software, mobile, and professional development — verified certificates available on request."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((group, gi) => (
            <div
              key={group.group}
              className="reveal glass glass-hover rounded-2xl p-6"
              style={{ transitionDelay: `${gi * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-brand-500/20 to-cyan-glow/10 border border-white/10 text-brand-400">
                  <ShieldCheck size={18} />
                </span>
                <h3 className="text-lg font-semibold text-white">{group.group}</h3>
              </div>
              <ul className="space-y-3">
                {group.items.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-white/65">
                    <Award size={15} className="text-cyan-glow shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Google Drive link */}
        {profile.certificatesDrive &&
          profile.certificatesDrive !== "PASTE_GOOGLE_DRIVE_LINK_HERE" && (
            <div className="reveal mt-10 text-center">
              <a
                href={profile.certificatesDrive}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-glow px-6 py-3.5 text-sm font-medium text-white shadow-glow hover:shadow-glow-cyan transition-all hover:scale-[1.02]"
              >
                <ExternalLink size={18} /> View all certificates on Google Drive
              </a>
            </div>
          )}
      </div>
    </section>
  );
}
