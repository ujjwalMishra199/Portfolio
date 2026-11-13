"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 32);
      if (y > 100) {
        if (y > lastY.current + 6) setVisible(false);
        else if (y < lastY.current - 6) setVisible(true);
      } else {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[9999] px-4 py-2 rounded-lg font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
        style={{ background: "var(--accent)" }}
      >
        Skip to main content
      </a>

      {/* Floating pill container */}
      <div
        className="fixed top-6 left-0 right-0 z-50 pointer-events-none transition-transform duration-300 ease-out px-4"
        style={{ transform: visible ? "translateY(0)" : "translateY(-120%)" }}
      >
        <header
          className="pointer-events-auto mx-auto flex items-center justify-between transition-all duration-300"
          style={{
            maxWidth: "min(1200px, 92%)",
            padding: "12px 16px 12px 28px",
            borderRadius: 28,
            background: scrolled
              ? "rgba(5,7,10,.88)"
              : "rgba(255,255,255,.04)",
            backdropFilter: `blur(${scrolled ? 24 : 18}px)`,
            WebkitBackdropFilter: `blur(${scrolled ? 24 : 18}px)`,
            border: "1px solid rgba(255,255,255,.10)",
            boxShadow: scrolled
              ? "0 16px 48px rgba(0,0,0,.7)"
              : "0 8px 32px rgba(0,0,0,.4)",
          }}
        >
          {/* Left: Name + scroll avatar */}
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-sm"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 30,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            {scrolled && (
              <div
                className="relative shrink-0 overflow-hidden"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,.12)",
                  background: "linear-gradient(160deg,#0b1220,#12304a)",
                }}
              >
                <Image
                  src="/images/ujjwal-cutout.webp"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                  style={{ objectPosition: "50% 18%" }}
                />
              </div>
            )}
            <span>Ujjwal Mishra</span>
          </Link>

          {/* Centre: nav links (≥900px) */}
          <nav
            aria-label="Primary navigation"
            className="hidden min-[900px]:flex items-center gap-9"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-[12px] uppercase tracking-[.16em] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-sm"
                style={{ color: "var(--text-muted)" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden min-[600px]:inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.18)",
                color: "var(--text)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.background = "rgba(92,200,255,.10)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.18)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <span>Let&apos;s talk</span>
              <span style={{ color: "var(--accent)" }}>↗</span>
            </a>

            {/* Mobile menu toggle (<900px) */}
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="min-[900px]:hidden p-2 rounded-full transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              style={{
                border: "1px solid rgba(255,255,255,.12)",
                color: "var(--text-muted)",
              }}
            >
              {mobileOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div
            className="pointer-events-auto min-[900px]:hidden mx-auto mt-2 rounded-2xl p-6 flex flex-col gap-4"
            style={{
              maxWidth: "min(1200px, 92%)",
              background: "rgba(11,15,20,.96)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,.10)",
            }}
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-[12px] uppercase tracking-widest py-2.5 border-b transition-colors hover:text-[var(--accent)]"
                  style={{
                    color: "var(--text-muted)",
                    borderColor: "rgba(255,255,255,.06)",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="text-center font-mono text-[11px] uppercase tracking-wider py-2.5 rounded-full transition-colors"
                style={{
                  border: "1px solid rgba(255,255,255,.18)",
                  color: "var(--text)",
                }}
              >
                Let&apos;s talk ↗
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="text-center font-mono text-[11px] uppercase tracking-wider py-2.5 rounded-full transition-colors"
                style={{
                  border: "1px solid rgba(255,255,255,.10)",
                  color: "var(--text-muted)",
                }}
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
