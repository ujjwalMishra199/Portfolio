import type { Metadata, Viewport } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: "Ujjwal Mishra | Full Stack & Backend Developer",
  description:
    "Full Stack and Backend Developer based in Gurgaon, India. Building scalable web applications, low-latency RESTful APIs, clean relational schemas, and reliable distributed systems.",
  keywords: [
    "Ujjwal Mishra",
    "Full Stack Developer",
    "Backend Developer",
    "Node.js",
    "Express.js",
    "React",
    "TypeScript",
    "MongoDB",
    "MySQL",
    "AWS",
    "Docker",
    "Oracle Certified Generative AI Professional",
    "Gurgaon Developer",
  ],
  authors: [{ name: "Ujjwal Mishra", url: profile.siteUrl }],
  creator: "Ujjwal Mishra",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Ujjwal Mishra | Full Stack & Backend Developer",
    description:
      "Building scalable web applications & reliable backend systems. Node.js, React, TypeScript, AWS, and Oracle Certified Generative AI.",
    url: profile.siteUrl,
    siteName: "Ujjwal Mishra Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/ujjwal-og.png",
        width: 1200,
        height: 630,
        alt: "Ujjwal Mishra — Full Stack & Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujjwal Mishra | Full Stack & Backend Developer",
    description: "Building scalable web applications & reliable backend systems.",
    images: ["/images/ujjwal-og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Full Stack & Backend Developer",
    url: profile.siteUrl,
    image: `${profile.siteUrl}/images/ujjwal-cutout.webp`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      addressCountry: "India",
    },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: [
      "Node.js",
      "Express.js",
      "React",
      "TypeScript",
      "MongoDB",
      "MySQL",
      "AWS",
      "Docker",
      "Generative AI",
      "RESTful APIs",
    ],
  };

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[var(--bg)] text-[var(--text)] font-sans antialiased min-h-screen flex flex-col relative">
        {/* Subtle Noise / Film-Grain Texture Overlay */}
        <div className="noise-overlay fixed inset-0 pointer-events-none z-30 opacity-60" />

        <MotionProvider>
          <SmoothScroll>
            <ScrollProgress />
            <CustomCursor />
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
