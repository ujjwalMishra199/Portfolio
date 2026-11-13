export const profile = {
  name: "Ujjwal Mishra",
  firstName: "Ujjwal",
  lastName: "Mishra",
  role: "Full Stack Developer · Backend Developer",
  tagline: "Building scalable web applications & reliable backend systems.",
  location: "Gurgaon, Haryana, India",
  timezone: "Asia/Kolkata",
  email: "ujjwalmishra002005@gmail.com",
  phone: "+91 9045678028",
  github: "https://github.com/ujjwalMishra199",
  linkedin: "https://www.linkedin.com/in/ujjwal-mishra-683933300/",
  resumeUrl: "/Ujjwal_Mishra_Resume.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ujjwalmishra.vercel.app",
  status: "Available for ambitious engineering roles",
  bio: [
    "I am a Full Stack and Backend Developer based in Gurgaon with hands-on production experience building resilient web applications and high-throughput REST APIs.",
    "My primary focus centers on backend design: architecting clean schemas, tuning aggregation pipelines, and implementing robust security with JWT, OAuth, and role-based access control.",
    "Certified as an Oracle Cloud Infrastructure 2025 Generative AI Professional, I bridge clean low-level data architectures with practical product delivery.",
  ],
  stats: [
    { value: "1+ Year", label: "Production Experience" },
    { value: "OCI GenAI", label: "Oracle Certified Pro" },
    { value: "Full Stack", label: "Node · React · Cloud" },
  ],
  perspectives: {
    build: {
      title: "Clean APIs & Solid Foundations",
      subtitle: "Designing systems that are intuitive to consume and simple to maintain.",
      description:
        "Every feature begins with a strict domain contract. I structure REST APIs and services with predictable request/response patterns, strong TypeScript typings, comprehensive schema validation, and modular service-controller layers that decouple business logic from transport protocols.",
      chips: ["Node.js", "Express.js", "TypeScript", "REST APIs", "Clean Architecture", "Postman"],
    },
    secure: {
      title: "Defensive Authentication & Access Control",
      subtitle: "Zero-trust principles applied to APIs, tokens, and data flows.",
      description:
        "Security cannot be an afterthought. I engineer token rotation lifecycles, HTTP-only secure cookie sessions, OAuth 2.0 social authorization, bcrypt password hashing, and granular role-based access control (RBAC) to ensure multi-tenant isolation and data protection.",
      chips: ["JWT & Refresh Tokens", "OAuth 2.0", "RBAC", "Bcrypt", "CORS & Helmet", "Data Sanitization"],
    },
    scale: {
      title: "Optimized Queries & Resilient Infrastructure",
      subtitle: "Eliminating bottlenecks before they reach production.",
      description:
        "From MongoDB aggregation pipelines and compound indexes to MySQL relational constraints and Redis caching layers, I engineer data operations for predictable latency. Docker containers and AWS EC2/S3 infrastructure with CI/CD ensure reproducible deployment.",
      chips: ["MongoDB Aggregations", "MySQL Indexing", "Redis Cache", "Docker", "AWS (EC2, S3)", "CI/CD"],
    },
  },
};

