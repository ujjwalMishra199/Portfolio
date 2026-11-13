# Ujjwal Mishra — Personal Portfolio & Engineering Case Studies

A high-performance, cinematic, editorial-style developer portfolio built for **Ujjwal Mishra** (Full Stack & Backend Developer based in Gurgaon, India). Features custom serif typography, background-blended studio cutout portraiture, responsive multi-portal case studies, zero-trust backend architecture breakdowns, interactive perspective tabs, and accessible motion controls.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) + React 19
- **Language**: TypeScript (strict type checking across all data and components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Design Tokens
- **Typography** (`next/font/google`):
  - `Instrument Serif` (editorial italic display accents)
  - `DM Sans` (clean, readable body & UI copy)
  - `JetBrains Mono` (system metadata, telemetry counters, and badges)
- **Animations & Smooth Scroll**: [Framer Motion](https://www.framer.com/motion/) + [Lenis](https://lenis.darkroom.engineering/) (hardware-accelerated, disabled for reduced-motion)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Deployment**: [Vercel](https://vercel.com/) (zero-config static & serverless deployment)

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- **Node.js**: `v20.0.0` or higher
- **npm**: `v10.0.0` or higher

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/ujjwalMishra199/portfolio.git
cd portfolio
npm install
```

### 3. Environment Setup
Copy the example environment configuration:
```bash
cp .env.example .env.local
```

Configure your environment variables in `.env.local` (see table below).

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Type-check & Production Build
```bash
npm run lint      # Runs tsc --noEmit
npm run build     # Compiles optimized production bundle
npm run start     # Boots production server on localhost:3000
```

---

## 🔑 Environment Variables

| Variable | Required | Description | Example / Default |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | Public domain used for canonical links, sitemaps, robots.txt, and OpenGraph cards. | `https://ujjwalmishra.vercel.app` |
| `RESEND_API_KEY` | No | Resend API key for dispatching contact form messages directly to your email inbox. | `re_123456789...` |
| `CONTACT_RECEIVER_EMAIL` | No | Destination email address to receive inquiries from the contact form. | `ujjwalmishra002005@gmail.com` |

> **Note**: If `RESEND_API_KEY` is omitted, the `/api/contact` route still validates input and rate-limits requests gracefully without throwing errors or interrupting user submission.

---

## ☁️ Deployment on Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ujjwal Mishra portfolio"
   git remote add origin https://github.com/ujjwalMishra199/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/new) and click **Add New Project**.
3. Import your GitHub repository (`portfolio`).
4. In **Project Settings**:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./`
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)
5. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-custom-domain.vercel.app`
   - *(Optional)* `RESEND_API_KEY` = your Resend API key
   - *(Optional)* `CONTACT_RECEIVER_EMAIL` = `ujjwalmishra002005@gmail.com`
6. Click **Deploy**. Vercel will build and deploy the production bundle automatically.

---

## 📄 License & Credits

- Designed and engineered by **Ujjwal Mishra**.
- All portfolio content, architecture diagrams, and case studies are proprietary.
