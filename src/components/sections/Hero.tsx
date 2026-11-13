"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMotion } from "@/components/ui/MotionProvider";

/* ─────────────────────────── types ─────────────────────────── */
type Vec2 = { x: number; y: number };

/* ─────────────────────────── component ─────────────────────── */
export function Hero() {
  const { motionEnabled, toggleMotion, shouldAnimate } = useMotion();
  const [mouse, setMouse] = useState<Vec2>({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // ── Scroll-based portrait scale 1 → 1.03
  const { scrollY } = useScroll();
  const portraitScale = useTransform(scrollY, [0, 400], [1, 1.03]);

  // ── Mouse parallax (desktop only)
  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer:coarse)").matches);
  }, []);

  useEffect(() => {
    if (!shouldAnimate || isTouch) return;
    const handler = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      setMouse({
        x: (e.clientX / w - 0.5) * 2,
        y: (e.clientY / h - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [shouldAnimate, isTouch]);

  const portraitShift = shouldAnimate && !isTouch
    ? { x: mouse.x * 8, y: mouse.y * 8 }
    : { x: 0, y: 0 };
  const glowShift = shouldAnimate && !isTouch
    ? { x: -mouse.x * 16, y: -mouse.y * 16 }
    : { x: 0, y: 0 };
  const textShift = shouldAnimate && !isTouch
    ? { x: mouse.x * 4, y: mouse.y * 4 }
    : { x: 0, y: 0 };

  /* Animation variants */
  const portraitVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between"
      style={{ background: "var(--bg)" }}
    >
      {/* ── 1. PAGE BACKGROUND (full-bleed, behind everything) ─── */}

      {/* 8-column faint vertical lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent calc(12.5% - 1px), rgba(255,255,255,.03) calc(12.5% - 1px), rgba(255,255,255,.03) 12.5%)",
        }}
      />

      {/* Thin ring behind head: 640px circle, 1px border rgba(255,255,255,.07) */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-0"
        style={{
          width: 640,
          height: 640,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,.07)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -62%)",
        }}
      />

      {/* Cyan glow: centred behind chest ~760x520px, blur 40px */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none z-0"
        style={{
          width: 760,
          height: 520,
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          background:
            "radial-gradient(closest-side, rgba(92,200,255,.30), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: glowShift.x, y: glowShift.y }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
      />

      {/* Violet glow: right of centre (left 62%, top 120px), 480x480px, blur 40px */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none z-0"
        style={{
          width: 480,
          height: 480,
          top: 120,
          left: "62%",
          background:
            "radial-gradient(closest-side, rgba(139,123,255,.18), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: glowShift.x * 0.6, y: glowShift.y * 0.6 }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
      />

      {/* Subtle film grain overlay */}
      <div
        aria-hidden="true"
        className="noise-overlay absolute inset-0 pointer-events-none z-0 opacity-50"
      />

      {/* ── 2. CORNER LABELS (z-30, hidden under 900px) ───────── */}

      {/* Top-left: left 4%, top 150px */}
      <div className="absolute top-[150px] left-[4%] z-30 hidden min-[900px]:flex items-center gap-2 select-none">
        <span
          aria-hidden="true"
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
        />
        <span
          className="font-mono text-[11px] uppercase tracking-[.16em]"
          style={{ color: "var(--text-muted)" }}
        >
          BACKEND. FULL STACK. BUILDER.
        </span>
      </div>

      {/* Top-right: right 4%, top 150px */}
      <div className="absolute top-[150px] right-[4%] z-30 hidden min-[900px]:flex items-center select-none">
        <span
          className="font-mono text-[11px] uppercase tracking-[.16em]"
          style={{ color: "var(--text-muted)" }}
        >
          GURGAON, INDIA · OPEN TO WORK
        </span>
      </div>

      {/* Mid-left: left 4%, top 340px */}
      <div className="absolute top-[340px] left-[4%] z-30 hidden min-[900px]:flex flex-col select-none font-mono">
        <span
          className="text-[11px] font-bold uppercase tracking-[.18em]"
          style={{ color: "var(--accent)" }}
        >
          01 / PRESENCE
        </span>
        <span
          aria-hidden="true"
          className="text-[11px] my-1 font-bold"
          style={{ color: "var(--accent)" }}
        >
          +
        </span>
        <span
          className="text-[10px] uppercase tracking-[.16em] leading-[2]"
          style={{ color: "var(--text-muted)" }}
        >
          API DESIGN
          <br />
          SECURE AUTH
          <br />
          CLOUD &amp; INFRA
        </span>
      </div>

      {/* Mid-right: right 4%, top 400px, glass chip with floating motion */}
      <motion.div
        className="absolute right-[4%] z-30 hidden min-[900px]:flex items-center gap-1.5 select-none font-mono text-[11px] uppercase tracking-[.16em] px-3.5 py-2 rounded-xl"
        style={{
          top: 400,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid #1e2630",
          background: "rgba(11,15,20,.85)",
        }}
        animate={shouldAnimate ? { y: [0, -10, 0] } : { y: 0 }}
        transition={
          shouldAnimate
            ? { duration: 7, ease: "easeInOut", repeat: Infinity }
            : {}
        }
      >
        <span style={{ color: "var(--accent)" }}>GET</span>
        <span style={{ color: "var(--text)" }}>/api/ujjwal</span>
        <span style={{ color: "var(--success)" }}>200 OK · 24ms</span>
        <span
          aria-hidden="true"
          className="inline-block w-[7px] h-[14px] ml-0.5"
          style={{
            background: "var(--accent)",
            animation: shouldAnimate ? "pulse 1s step-end infinite" : "none",
            verticalAlign: "middle",
          }}
        />
      </motion.div>

      {/* ── 3. PORTRAIT + TEXT CENTREPIECE (z-1 / z-2) ────────── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start pt-[104px] pb-12 px-4 w-full max-w-6xl mx-auto">

        {/* PORTRAIT: wrapper 600px wide, 616px tall on desktop, z-1 */}
        <motion.div
          className="relative z-1 flex items-start justify-center pointer-events-none select-none w-full"
          style={{
            maxWidth: 600,
            height: "clamp(480px, 66vh, 616px)",
            filter: "drop-shadow(0 24px 60px rgba(92,200,255,.18))",
            x: portraitShift.x,
            y: portraitShift.y,
            scale: portraitScale,
            maskImage: "linear-gradient(to bottom, #000 78%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000 78%, transparent 100%)",
          }}
          variants={portraitVariants}
          initial={shouldAnimate ? "hidden" : "visible"}
          animate="visible"
        >
          {/* Mobile cutout (<640px) */}
          <div className="sm:hidden relative w-full h-full">
            <Image
              src="/images/ujjwal-cutout-sm.webp"
              alt="Ujjwal Mishra, Full Stack and Backend Developer"
              width={720}
              height={740}
              priority
              quality={90}
              sizes="88vw"
              className="object-contain object-top w-full h-full"
            />
          </div>

          {/* Desktop cutout (>=640px) */}
          <div className="hidden sm:block relative w-full h-full">
            <Image
              src="/images/ujjwal-cutout.webp"
              alt="Ujjwal Mishra, Full Stack and Backend Developer"
              width={1148}
              height={1180}
              priority
              quality={90}
              sizes="(min-width:1024px) 600px, 88vw"
              className="object-contain object-top w-full h-full"
            />
          </div>
        </motion.div>

        {/* TEXT BLOCK: z-2, starts about 405px from top (collar line overlap) */}
        <motion.div
          className="relative z-2 w-full flex flex-col items-center"
          style={{
            marginTop: "clamp(-210px, -23vh, -160px)",
            x: textShift.x,
            y: textShift.y,
          }}
          variants={textVariants}
          initial={shouldAnimate ? "hidden" : "visible"}
          animate="visible"
        >
          {/* Inline-block wrapper: label left-aligns with H1 left edge */}
          <div className="inline-block text-left">
            {/* Label: mono 10px, tracking .3em, uppercase, muted */}
            <p
              className="font-mono text-[10px] uppercase mb-3"
              style={{
                letterSpacing: ".3em",
                color: "var(--text-muted)",
              }}
            >
              A BACKEND-FIRST PERSPECTIVE ON PRODUCTS
            </p>

            {/* H1: clamp(4rem, 11vw, 11rem), line-height .92, tight tracking */}
            <h1
              className="font-serif leading-[.92] tracking-[-0.025em] select-none"
              style={{
                fontSize: "clamp(4rem, 11vw, 11rem)",
                textShadow: "0 2px 40px rgba(0,0,0,.6)",
              }}
            >
              <span style={{ color: "var(--text)" }}>Ujjwal </span>
              <span
                className="italic font-normal accent-gradient-text"
                style={{ paddingRight: "0.06em", textShadow: "none" }}
              >
                Mishra
              </span>
            </h1>
          </div>

          {/* Subtitle: 22px below, max 34ch, DM Sans */}
          <p
            className="font-sans text-center max-w-[34ch] mt-[22px] leading-relaxed text-balance"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              color: "#d3d9e0",
            }}
          >
            I build scalable web apps, secure APIs and reliable backend systems.
          </p>

          {/* CTAs: 28px below, gap 24px */}
          <div className="mt-[28px] flex flex-col min-[600px]:flex-row items-center justify-center gap-6">
            {/* Pill button: Explore my work ↓ */}
            <a
              href="#work"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.16em] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              style={{
                padding: "17px 28px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.28)",
                background: "rgba(255,255,255,.04)",
                color: "var(--text)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.background = "rgba(92,200,255,.10)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.28)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.04)";
              }}
            >
              <span>Explore my work</span>
              <span style={{ color: "var(--accent)" }}>↓</span>
            </a>

            {/* Text link: Start a conversation ↗ */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[.16em] transition-all duration-200 pb-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              style={{
                color: "var(--text-muted)",
                borderBottom: "1px solid rgba(255,255,255,.4)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "var(--accent)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(255,255,255,.4)";
              }}
            >
              <span>Start a conversation</span>
              <span style={{ color: "var(--accent)" }}>↗</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── 4. BOTTOM BAR (bottom 28px, left/right 4%) ────────── */}
      <div
        className="relative z-30 w-full px-[4%] pb-7 pt-3 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {/* Left: Scroll to discover with 1px accent left border, 16px pl */}
        <div
          style={{ borderLeft: "1px solid var(--accent)", paddingLeft: 16 }}
        >
          <a
            href="#about"
            className="font-mono text-[11px] uppercase tracking-[.2em] flex items-center gap-1.5 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            style={{ color: "var(--text-muted)" }}
          >
            SCROLL TO DISCOVER
            <span style={{ color: "var(--accent)" }}>↓</span>
          </a>
        </div>

        {/* Centre: Full Stack · Backend · Oracle GenAI Certified (hidden <900px) */}
        <div
          className="hidden min-[900px]:block font-mono text-[11px] uppercase tracking-[.18em] select-none"
          style={{ color: "var(--text-muted)" }}
        >
          FULL STACK · BACKEND · ORACLE GENAI CERTIFIED
        </div>

        {/* Right: Functional MOTION ON/OFF toggle (hidden <900px) */}
        <div className="hidden min-[900px]:flex items-center">
          <button
            onClick={toggleMotion}
            type="button"
            aria-label={`Toggle motion: currently ${motionEnabled ? "On" : "Off"}`}
            title="Toggle interactive animations"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            style={{
              padding: "6px 14px",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,.02)",
              color: "var(--text-muted)",
            }}
          >
            <span>MOTION:</span>
            <span
              className="font-bold"
              style={{ color: motionEnabled ? "var(--accent)" : "#4b5563" }}
            >
              {motionEnabled ? "ON" : "OFF"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
