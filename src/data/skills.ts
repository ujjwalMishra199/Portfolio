export interface SkillItem {
  name: string;
  usage: string;
}

export interface SkillCategory {
  category: string;
  tagline: string;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend Architecture",
    tagline: "Core engineering: scalable APIs, microservices & authentication",
    items: [
      { name: "Node.js", usage: "Event-driven asynchronous services & non-blocking I/O" },
      { name: "Express.js", usage: "RESTful API design, routing & middleware pipelines" },
      { name: "TypeScript", usage: "Strict type contracts, interfaces & compile-time safety" },
      { name: "REST APIs", usage: "Clean endpoint semantics, versioning & idempotency" },
      { name: "JWT & OAuth 2.0", usage: "Dual-token rotation, HTTP-only auth & social sign-in" },
      { name: "RBAC & Security", usage: "Role-based access control, bcrypt & input sanitization" },
    ],
  },
  {
    category: "Databases & Storage",
    tagline: "Schema modeling, query tuning & in-memory caches",
    items: [
      { name: "MongoDB", usage: "Multi-stage aggregation pipelines ($lookup, $facet) & indexing" },
      { name: "MySQL", usage: "Normalized schemas (3NF), relational constraints & joins" },
      { name: "PostgreSQL", usage: "ACID transactions & relational data modeling" },
      { name: "Redis", usage: "Sub-millisecond caching, rate-limiting & session stores" },
      { name: "Prisma ORM", usage: "Type-safe database queries & migration management" },
    ],
  },
  {
    category: "DevOps & Cloud",
    tagline: "Containers, cloud infrastructure & continuous delivery",
    items: [
      { name: "AWS EC2", usage: "Provisioning, securing & running production Node.js instances" },
      { name: "AWS S3", usage: "Secure asset storage, presigned URLs & media pipelines" },
      { name: "Docker", usage: "Multi-stage containerization & reproducible build images" },
      { name: "CI/CD Pipelines", usage: "Automated linting, testing & deployment workflows" },
      { name: "Kafka", usage: "Event streaming & distributed publish-subscribe patterns" },
      { name: "GitHub", usage: "Version control, code reviews & branch protection rules" },
    ],
  },
  {
    category: "Frontend & UI",
    tagline: "Interactive client applications & responsive interfaces",
    items: [
      { name: "React.js", usage: "Component architecture, hooks & responsive state management" },
      { name: "Next.js", usage: "App Router, server components & SEO optimization" },
      { name: "Tailwind CSS", usage: "Utility-first responsive styling & custom design tokens" },
      { name: "Framer Motion", usage: "Hardware-accelerated animations & layout transitions" },
      { name: "HTML5 / CSS3", usage: "Semantic markup, accessibility & responsive design" },
    ],
  },
  {
    category: "Languages",
    tagline: "Foundational programming languages & paradigms",
    items: [
      { name: "JavaScript (ES6+)", usage: "Asynchronous programming, closures & event loops" },
      { name: "TypeScript", usage: "Static typing, generics & enterprise codebases" },
      { name: "Python", usage: "Scripting, automation & AI/ML model integration" },
      { name: "Java", usage: "Object-oriented programming, design patterns & multi-threading" },
      { name: "C++", usage: "High-performance computing, data structures & memory fundamentals" },
    ],
  },
  {
    category: "AI & Engineering Fundamentals",
    tagline: "Algorithmic thinking, system foundations & certified AI mastery",
    items: [
      { name: "Generative AI", usage: "LLM integration, prompting techniques & retrieval systems" },
      { name: "Data Structures & Algorithms", usage: "Algorithmic problem-solving & asymptotic complexity" },
      { name: "OOP & System Design", usage: "SOLID principles, modular decoupling & clean architecture" },
      { name: "DBMS & Networks", usage: "Transaction isolation levels, TCP/IP, DNS & HTTP/HTTPS" },
      { name: "Postman", usage: "API testing, automated suites & contract documentation" },
    ],
  },
];

export const certificationSpotlight = {
  title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
  issuer: "Oracle University",
  date: "October 2025",
  verifyUrl:
    "https://catalog-education.oracle.com/pls/certview/sharebadge?id=DCA6E71E6CC2394EC8D98B05357F2DFDE5A5448DEC0AA6D04F1712016DF41BB4",
  linkedinUrl: "https://www.linkedin.com/in/ujjwal-mishra-683933300/",
  summary:
    "Rigorous industry certification validating deep expertise in Large Language Models (LLMs), prompt engineering, retrieval-augmented generation (RAG) architectures, fine-tuning methodologies, and production deployment on Oracle Cloud Infrastructure.",
  highlights: [
    "LLM Architecture & Transformers",
    "Prompt Engineering & Chain-of-Thought",
    "RAG & Vector Embeddings",
    "OCI Generative AI Service Deployment",
  ],
};

