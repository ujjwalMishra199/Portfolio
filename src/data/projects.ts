export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  role: string;
  timeline: string;
  tagline: string;
  problem: string;
  stack: string[];
  metricsTarget?: string;
  githubUrl: string;
  liveUrl?: string;
  company?: string;
  overview: string;
  problemDetail: string;
  approach: string[];
  architecture: {
    title: string;
    description: string;
    flow: string[];
  };
  keyDecisions: { decision: string; rationale: string }[];
  challenges: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    slug: "creator-referral-platform",
    number: "01",
    title: "Creator Referral Partner Platform",
    category: "Full Stack & Multi-Tenant Portal",
    role: "Full-Stack Developer",
    company: "STUCARE Technologies",
    timeline: "Jul 2026 – Present",
    tagline:
      "A two-sided Admin and Creator platform powered by live MongoDB aggregation pipelines for real-time campaign analytics and payout lifecycles.",
    problem:
      "Legacy mock architecture lacked live data cohesion between Admin campaign creators and Creator applicant portals, resulting in data desynchronization and unverified payout risks.",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Aggregation Pipelines",
    ],
    githubUrl: "https://github.com/ujjwalMishra199",
    overview:
      "Engineered the complete backend and database integration linking the high-privilege Admin console with external Creator portals. Engineered MongoDB aggregation pipelines replacing static mocks with live analytics, multi-step campaign applications, and secure KYC/payout approval flows.",
    problemDetail:
      "The platform required two disparate user flows: administrative managers drafting, broadcasting, and reviewing marketing campaigns, and creator partners discovering campaigns, submitting proof-of-work, and claiming financial payouts. Without atomic aggregation workflows, real-time analytics suffered from cache stale reads and manual ledger reviews.",
    approach: [
      "Engineered multi-stage MongoDB aggregation pipelines ($lookup, $unwind, $group, $facet) for zero-latency dashboard analytics across campaigns, clicks, and payout states.",
      "Designed an asynchronous campaign publish-notify-apply-review state machine ensuring transactional consistency across administrative review gates.",
      "Integrated secure KYC validation checkpoints prior to payout dispatch with cryptographic audit logs.",
      "Crafted TypeScript interfaces shared between frontend React views and Express API endpoints to prevent payload drift.",
    ],
    architecture: {
      title: "Dual-Portal Event & Pipeline Architecture",
      description:
        "Decoupled client portals communicating with a central Express API layer backed by MongoDB indexed collections.",
      flow: [
        "Creator Client / Admin Portal (React + TypeScript)",
        "API Gateway & JWT Role Guard (Express.js Middleware)",
        "Service Controller & Input Validator Layer",
        "MongoDB Multi-stage Aggregation Engine (Facets, Lookups)",
        "State Transition Hooks & Transaction Auditing",
      ],
    },
    keyDecisions: [
      {
        decision: "Single Database Multi-Collection Model with Compound Indexes",
        rationale:
          "Rather than separate databases for admin and creator, leveraged collection-level RBAC and compound indexes on (creatorId, campaignId, status) to optimize read performance and preserve transactional referential integrity.",
      },
      {
        decision: "Aggregation-backed Faceted Queries",
        rationale:
          "Calculated summary totals, pending approval queues, and filtered records in a single database round-trip using $facet, eliminating server-side in-memory joins.",
      },
    ],
    challenges: [
      "Resolving data-integrity mismatches between concurrent campaign submissions and admin review states.",
      "Optimizing complex multi-table joins in MongoDB without degrading sub-second response targets on high-volume campaign lists.",
    ],
    learnings: [
      "Deep practical mastery of MongoDB aggregation mechanics and pipeline explain plans.",
      "How to design defensive data models that keep admin and consumer portals strictly synchronized.",
    ],
  },
  {
    slug: "connecwrk",
    number: "02",
    title: "ConnecWrk AI Platform Backend",
    category: "Backend Engineering & AI Services",
    role: "Backend Developer",
    company: "OMSR Media",
    timeline: "Nov 2025 – Jun 2026",
    tagline:
      "High-throughput relational backend, authentication architecture, and discovery engine for an AI-powered talent marketplace.",
    problem:
      "Connecting freelancers and businesses required structured profile schemas, low-latency search filters, and secure authentication capable of handling production traffic.",
    stack: [
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
      "JWT & OAuth",
      "Docker",
      "AWS EC2",
      "Postman",
    ],
    githubUrl: "https://github.com/ujjwalMishra199",
    overview:
      "Engineered backend services and normalized relational MySQL schemas for an AI-driven discovery ecosystem. Built bulletproof JWT and OAuth authentication routines, optimized complex database queries, and implemented endpoints consumed by dynamic web clients and AI matching models.",
    problemDetail:
      "Talent discovery platforms require rich multi-faceted search across skills, locations, pricing tiers, and portfolio verified credentials. Unoptimized queries and brittle authentication were the primary vulnerabilities that needed a complete relational overhaul.",
    approach: [
      "Normalized MySQL schemas to 3NF, creating clear indexing strategies for multi-attribute search and talent categorization.",
      "Implemented dual-token authentication (short-lived access JWT + long-lived HTTP-only refresh tokens) with cryptographic session revocation.",
      "Containerized micro-services with Docker and deployed reproducible instances to AWS EC2 behind reverse proxies.",
      "Contributed to data ingestion and payload normalization pipelines feeding AI-driven recommendation workflows.",
    ],
    architecture: {
      title: "Relational Services & Auth Boundary",
      description:
        "Stateless Node.js services with connection pooling, structured query optimization, and secured token lifecycle management.",
      flow: [
        "Client Application (Web & Mobile)",
        "Reverse Proxy & Rate Limiter",
        "Express Stateless Service Layer with JWT/OAuth verification",
        "MySQL Connection Pool with Prepared Statements & B-tree Indexes",
        "AI Recommendation Ingest & Cache Interface",
      ],
    },
    keyDecisions: [
      {
        decision: "MySQL Prepared Statements with B-Tree Composite Indexing",
        rationale:
          "Prevented SQL injection vulnerabilities while enabling sub-50ms query lookups across talent listings filtered simultaneously by category and experience level.",
      },
      {
        decision: "Dual-Token Rotation Lifecycle",
        rationale:
          "Mitigated credential replay vectors by issuing 15-minute access tokens alongside refresh tokens validated against a server-side revocation registry.",
      },
    ],
    challenges: [
      "Balancing relational normalization with query speed for complex user profile retrieval.",
      "Maintaining consistent session validation across external OAuth providers and native email/password accounts.",
    ],
    learnings: [
      "Deep understanding of SQL execution plans, index cardinality, and transaction isolation levels.",
      "Hands-on experience deploying and securing production Node.js servers on AWS EC2.",
    ],
  },
  {
    slug: "distributed-task-engine",
    number: "03",
    title: "Distributed Async Task Engine",
    category: "Systems & Infrastructure",
    role: "Backend Architect",
    timeline: "2026",
    tagline:
      "Asynchronous job scheduler and distributed rate-limiting microservice built with Node.js, Redis streams, and Docker.",
    problem:
      "Heavy I/O operations and third-party webhook integrations frequently choked standard HTTP request loops, risking thread starvation during peak load.",
    stack: [
      "Node.js",
      "TypeScript",
      "Redis",
      "Docker",
      "AWS S3",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/ujjwalMishra199",
    overview:
      "Engineered an asynchronous job queue and rate-limiting system designed to offload long-running computations, file processing pipelines to AWS S3, and third-party notification dispatchers using Redis queues and consumer worker pools.",
    problemDetail:
      "When building production backend architectures, blocking synchronous endpoints for report generation or external API calls degrades overall availability. An isolated worker architecture was built to decouple ingestion from execution.",
    approach: [
      "Engineered a token-bucket rate limiter in Redis to protect upstream endpoints from burst throttling.",
      "Designed isolated worker processes that consume from Redis queues with automatic retry exponential backoff.",
      "Implemented file transformation and stream-to-S3 pipelines with signed URLs for secure client downloads.",
      "Configured automated GitHub Actions workflows for linting, testing, and Docker container builds.",
    ],
    architecture: {
      title: "Producer-Consumer Queue Pipeline",
      description:
        "Asynchronous task ingestion decoupling client response latency from heavy computational work.",
      flow: [
        "Incoming HTTP Task Request",
        "Ingest Controller validates schema & pushes job payload to Redis Queue",
        "HTTP 202 Accepted returned to client in <15ms",
        "Distributed Worker Pool polls Redis & processes tasks in background",
        "Completed artifacts streamed to AWS S3 & completion status emitted",
      ],
    },
    keyDecisions: [
      {
        decision: "Redis In-Memory Queues with Persistent AOF",
        rationale:
          "Provided sub-millisecond enqueue/dequeue operations while preserving queue state across host restarts.",
      },
      {
        decision: "Pre-Signed S3 URLs for Asset Ingestion",
        rationale:
          "Eliminated server bandwidth bottlenecks by allowing clients to stream heavy payloads directly to AWS S3.",
      },
    ],
    challenges: [
      "Handling graceful worker shutdown without dropping tasks currently in-flight.",
      "Implementing deadlock-free distributed locks using Redis SETNX and TTL lease renewal.",
    ],
    learnings: [
      "Production strategies for asynchronous processing, message guarantees, and distributed lock mechanics.",
    ],
  },
];

