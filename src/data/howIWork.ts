export interface ProcessStep {
  step: string;
  name: string;
  detail: string;
}

export interface HowIWorkPillar {
  id: string;
  label: string;
  headline: string;
  summary: string;
  steps: ProcessStep[];
  chips: string[];
}

export const howIWorkPillars: HowIWorkPillar[] = [
  {
    id: "backend",
    label: "Backend & APIs",
    headline: "Deterministic contracts, clean controllers & defensive security.",
    summary:
      "I treat APIs as immutable contracts. Every endpoint starts with clear request/response specifications, granular validation rules, and decoupled business logic to ensure rapid frontend integration and maintainable lifecycles.",
    steps: [
      {
        step: "01",
        name: "Define the Contract & Data Model",
        detail:
          "Draft strict TypeScript schemas and OpenAPI/Postman specs before writing implementation logic. Establish authentication guards and error code standards upfront.",
      },
      {
        step: "02",
        name: "Implement Controllers & Service Layers",
        detail:
          "Structure modular Express/Node.js handlers that keep HTTP request parsing isolated from database queries and domain logic. Enforce input sanitization and rate limits.",
      },
      {
        step: "03",
        name: "Audit, Test & Monitor",
        detail:
          "Execute automated integration tests, inspect response latencies, verify token expiration and edge case handling, and ensure structured error logs are emitted.",
      },
    ],
    chips: ["Node.js", "Express.js", "TypeScript", "REST APIs", "JWT Auth", "Postman"],
  },
  {
    id: "data",
    label: "Data & Infrastructure",
    headline: "High-cardinality indexing, query tuning & reproducible containers.",
    summary:
      "A fast backend is only as fast as its slowest database query. I design relational and document schemas around access patterns, profile query execution plans, and containerize runtimes for zero-drift deployments.",
    steps: [
      {
        step: "01",
        name: "Pattern-Driven Schema Architecture",
        detail:
          "Model MongoDB document boundaries or normalize MySQL schemas to 3NF based on read vs. write frequency. Establish foreign key constraints and compound index keys.",
      },
      {
        step: "02",
        name: "Query Optimization & Aggregations",
        detail:
          "Profile queries using EXPLAIN plans. Leverage multi-stage aggregation pipelines for complex analytics and integrate Redis layers for frequently queried cacheable data.",
      },
      {
        step: "03",
        name: "Containerize & Provision Cloud Runtime",
        detail:
          "Write multi-stage Dockerfiles for lean image sizes. Deploy to AWS EC2 with reverse proxy configurations, S3 asset pipelines, and automated CI/CD branch triggers.",
      },
    ],
    chips: ["MongoDB Aggregations", "MySQL Indexing", "Redis", "Docker", "AWS EC2 / S3", "CI/CD"],
  },
  {
    id: "ai-product",
    label: "AI & Product Impact",
    headline: "Bridging foundational models with high-utility production software.",
    summary:
      "As an Oracle Certified Generative AI Professional, I don't treat AI as a gimmick. I focus on embedding LLMs and intelligent discovery pipelines into real products where they solve concrete user friction.",
    steps: [
      {
        step: "01",
        name: "Identify Friction & Target Workflow",
        detail:
          "Pinpoint exactly where probabilistic models add leverage (e.g. semantic talent search, automated campaign recommendations, or content summarization) vs. deterministic code.",
      },
      {
        step: "02",
        name: "Orchestrate Prompting & Context Grounding",
        detail:
          "Structure robust system prompts, temperature controls, and retrieval augmentation (RAG) to eliminate hallucinations and preserve consistent JSON structured outputs.",
      },
      {
        step: "03",
        name: "Integrate, Fallback & Measure",
        detail:
          "Wrap AI calls in resilient retry wrappers with timeout fallbacks, rate limit buffers, and cost-efficient token monitoring.",
      },
    ],
    chips: ["Oracle GenAI Certified", "LLMs", "RAG Pipelines", "Prompt Engineering", "JSON Mode"],
  },
];

