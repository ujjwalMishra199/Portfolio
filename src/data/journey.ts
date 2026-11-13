export interface JourneyItem {
  period: string;
  year: string;
  role: string;
  organization: string;
  location?: string;
  type: "work" | "education" | "certification" | "next";
  description: string;
  achievements?: string[];
  badges?: string[];
}

export const journeyTimeline: JourneyItem[] = [
  {
    year: "PRESENT",
    period: "Jul 2026 – Present",
    role: "Full-Stack Developer",
    organization: "STUCARE Technologies Pvt. Ltd.",
    location: "Noida, India",
    type: "work",
    description:
      "Leading full-stack and database engineering for dual-portal Creator Referral platform, delivering live aggregation-backed dashboards and secure payout review workflows.",
    achievements: [
      "Engineered backend logic connecting Admin console and Creator partner portals using Node.js, Express, and MongoDB.",
      "Replaced mock data layers with multi-stage aggregation pipelines powering real-time campaign performance and analytics.",
      "Architected campaign publish, notify, apply, and review state machine with verified KYC payout safeguards.",
    ],
    badges: ["Node.js", "Express.js", "MongoDB", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    year: "2025 – 2026",
    period: "Nov 2025 – Jun 2026",
    role: "Backend Developer",
    organization: "OMSR Media Pvt. Ltd.",
    location: "Gurgaon, India",
    type: "work",
    description:
      "Developed high-throughput Node.js microservices, optimized database queries, containerized backend applications with Docker, and managed AWS cloud infrastructure.",
    achievements: [
      "Engineered and maintained production REST APIs handling real-time consumer traffic.",
      "Optimized MySQL and MongoDB operations with indexing strategies, reducing query latency.",
      "Implemented secure JWT and OAuth authentication mechanisms with token rotation.",
      "Containerized backend services with Docker and automated deployment pipelines across AWS EC2 and S3.",
    ],
    badges: ["Node.js", "MySQL", "AWS (EC2, S3)", "Docker", "JWT / OAuth", "REST APIs"],
  },
  {
    year: "2025",
    period: "Oct 2025",
    role: "Certified Generative AI Professional",
    organization: "Oracle Cloud Infrastructure (OCI)",
    type: "certification",
    description:
      "Awarded official Oracle certification for Generative AI on OCI, demonstrating verified expertise in Large Language Models, embeddings, RAG architectures, and model deployment.",
    badges: ["Oracle Certified", "Generative AI", "LLMs", "RAG Architecture"],
  },
  {
    year: "2024",
    period: "Sep 2024",
    role: "Software Engineering Certification",
    organization: "NPTEL (IIT Kharagpur)",
    type: "certification",
    description:
      "Completed rigorous nationwide engineering program covering software architecture, Agile methodologies, system modeling, and testing fundamentals.",
    badges: ["IIT Kharagpur", "NPTEL", "Software Engineering"],
  },
  {
    year: "2022 – 2026",
    period: "2022 – 2026",
    role: "B.Tech in Computer Science and Engineering",
    organization: "GLA University",
    location: "Mathura, India",
    type: "education",
    description:
      "Graduating with a strong foundation in core computer science, systems programming, database management, and distributed computing. Graduated with SPI 7.8.",
    achievements: [
      "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, Object-Oriented Programming.",
    ],
    badges: ["SPI: 7.8", "Computer Science", "CSE"],
  },
  {
    year: "2021 – 2022",
    period: "2021 – 2022",
    role: "Intermediate (Class XII) · 74.8%",
    organization: "C.R.B Memorial Public School",
    location: "Mainpuri, India",
    type: "education",
    description: "Senior secondary education with focus on Physics, Chemistry, and Mathematics.",
    badges: ["PCM", "74.8%"],
  },
  {
    year: "2019 – 2020",
    period: "2019 – 2020",
    role: "High School (Class X) · 72.4%",
    organization: "C.R.B Memorial Public School",
    location: "Mainpuri, India",
    type: "education",
    description: "Foundational secondary education with distinction in Mathematics and Science.",
    badges: ["72.4%"],
  },
  {
    year: "LOOKING AHEAD",
    period: "Target: 2026 & Beyond",
    role: "What I'm Looking For Next",
    organization: "Ambitious Engineering Teams",
    type: "next",
    description:
      "Targeting Full Stack or Backend Engineering roles where I can architect scalable services, optimize low-latency data pipelines, and ship software that handles serious production scale.",
    badges: ["Full Stack Roles", "Backend Engineering", "Distributed Systems"],
  },
];

