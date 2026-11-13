"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Mail, Phone, ArrowUpRight, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setFeedback("Please fill out all required fields.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFeedback(data.message || "Thank you! I will reply to you as soon as possible.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setFeedback(data.error || "Failed to send message. Please reach out via email directly.");
      }
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please email me directly at " + profile.email);
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <SectionLabel number="06" label="THE NEXT CHAPTER" />
            <div className="flex items-center gap-5 mt-2 mb-4">
              <div
                className="relative shrink-0 overflow-hidden"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  background: "linear-gradient(160deg,#0b1220,#12304a)",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/ujjwal-cutout.webp"
                  alt="Ujjwal Mishra"
                  width={72}
                  height={72}
                  className="object-cover w-full h-full"
                  style={{ objectPosition: "50% 18%" }}
                />
                <span
                  className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2"
                  aria-label="Open to work"
                  style={{ background: "var(--success)", borderColor: "var(--bg)" }}
                />
              </div>
              <AccentHeading
                plain="Something great starts with"
                accent="a hello."
                as="h2"
              />
            </div>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              I am currently open to full-time engineering roles, backend contracts, and technical collaborations. Whether you have an architecture challenge or a position to discuss, my inbox is open.
            </p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Connect & Quick Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <SpotlightCard className="bg-[#0b0d13] border-white/10 p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-4">
                DIRECT CHANNELS
              </span>

              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest block mb-1">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-lg sm:text-xl font-semibold text-white hover:text-cyan-300 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>{profile.email}</span>
                    <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest block mb-1">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="text-base sm:text-lg font-mono text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{profile.phone}</span>
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest block mb-2">
                    Profiles
                  </span>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Quick Resume Download Card */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#07090e] flex items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest block">
                  Curriculum Vitae
                </span>
                <p className="text-sm text-white font-medium mt-0.5">
                  Latest resume PDF (ATS-optimized)
                </p>
              </div>
              <a
                href={profile.resumeUrl}
                download
                className="px-4 py-2 rounded-lg bg-white text-zinc-950 hover:bg-cyan-300 font-sans text-xs font-semibold tracking-tight transition-colors shrink-0"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="bg-[#0b0d13] border-white/10 p-8 sm:p-10">
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-3">
                SEND A MESSAGE
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-6">
                Start a conversation directly
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:border-cyan-400 focus:bg-white/[0.05] transition-colors outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2"
                    >
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:border-cyan-400 focus:bg-white/[0.05] transition-colors outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Inbound"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:border-cyan-400 focus:bg-white/[0.05] transition-colors outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2"
                  >
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, the challenge, or what you're building..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:border-cyan-400 focus:bg-white/[0.05] transition-colors outline-none resize-none"
                  />
                </div>

                {/* Status Message */}
                {status !== "idle" && feedback && (
                  <div
                    className={`p-3.5 rounded-xl flex items-center gap-2.5 text-xs font-mono ${
                      status === "success"
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
                        : "bg-rose-500/10 border border-rose-500/20 text-rose-300"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    <span>{feedback}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-zinc-950 font-semibold text-sm tracking-tight transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "loading" ? "Dispatching..." : "Send Message"}</span>
                </button>
              </form>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
