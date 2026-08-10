// src/components/Contact.js
"use client";
import { useState } from "react";
import { Mail, Send, MapPin, Phone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const mailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
        return;
      }

      // Backend not configured or failed → fall back to mailto.
      if (data.fallback === "mailto" || res.status === 503 || res.status === 502) {
        mailtoFallback();
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
        return;
      }

      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      // Network error → fall back to mailto so the user can still reach out.
      mailtoFallback();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const buttonContent = () => {
    switch (status) {
      case "sending":
        return (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        );
      case "sent":
        return (
          <>
            <CheckCircle2 size={18} /> Message sent — thank you!
          </>
        );
      case "error":
        return (
          <>
            <AlertCircle size={18} /> Something went wrong — try again
          </>
        );
      default:
        return (
          <>
            <Send size={18} /> Send message
          </>
        );
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="section-pad">
        <div className="reveal glass rounded-3xl p-8 md:p-14 relative overflow-hidden">
          {/* glow accents */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-glow/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: copy */}
            <div>
              <span className="eyebrow">Get in touch</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white">
                Let's build something <span className="text-gradient">great</span>.
              </h2>
              <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-md">
                Have a project in mind, a role to fill, or just want to say hi?
                My inbox is always open.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-white/80 hover:text-white group"
                >
                  <span className="grid place-items-center h-11 w-11 rounded-xl glass glass-hover text-brand-400">
                    <Mail size={18} />
                  </span>
                  <span className="group-hover:text-gradient transition-colors">
                    {profile.email}
                  </span>
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-white/80 hover:text-white group"
                >
                  <span className="grid place-items-center h-11 w-11 rounded-xl glass glass-hover text-brand-400">
                    <Phone size={18} />
                  </span>
                  <span className="group-hover:text-gradient transition-colors">
                    {profile.phone}
                  </span>
                </a>
                <div className="flex items-center gap-3 text-white/60">
                  <span className="grid place-items-center h-11 w-11 rounded-xl glass text-brand-400">
                    <MapPin size={18} />
                  </span>
                  {profile.location}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-brand-400/60 focus:bg-white/[0.06] transition-all"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-brand-400/60 focus:bg-white/[0.06] transition-all"
                />
              </div>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project..."
                maxLength={4000}
                className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-brand-400/60 focus:bg-white/[0.06] transition-all resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-glow px-6 py-3.5 font-medium text-white shadow-glow hover:shadow-glow-cyan transition-all hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {buttonContent()}
              </button>
              <p className="text-center text-xs text-white/40">
                Or email me directly at {profile.email}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}