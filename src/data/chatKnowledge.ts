import type { ChatAnswer, ChatBullet, ChatIntent } from "../types/chat";
import { links } from "./links";

/**
 * Static knowledge base for the portfolio assistant.
 * Answers are deliberately terse: one short intro and/or up to four short
 * bullets. Every fact here mirrors the verified data used on the page.
 */

export const SUGGESTED_QUESTIONS = [
  "Strongest project?",
  "What's his tech stack?",
  "Which certifications?",
  "How do I contact him?",
];

export const GREETING: ChatAnswer = {
  intro:
    "Hi — ask me anything about Suharsha's projects, stack, certifications, or how to reach him.",
};

export const FALLBACK: ChatAnswer = {
  intro: "Not sure about that one. I can answer questions like:",
  bullets: [
    "“Strongest project?”",
    "“What tools does he use?”",
    "“What's his education?”",
    "“How do I contact him?”",
  ],
};

const contactBullets: ChatBullet[] = [
  { text: `Email: ${links.email}`, href: `mailto:${links.email}` },
  ...(links.linkedin ? [{ text: "LinkedIn: Suharsha Cheedalla", href: links.linkedin }] : []),
  { text: "GitHub: Ch-Suharsha", href: links.github },
];

export const chatIntents: ChatIntent[] = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "yo", "good morning", "good afternoon"],
    answer: GREETING,
  },
  {
    id: "strongest-project",
    keywords: ["strongest", "best project", "top project", "flagship", "most impressive", "favorite"],
    answer: {
      intro: "Atlas: AI Customer Support Agent is the flagship system:",
      bullets: [
        "QLoRA fine-tuned Phi-4-mini-instruct on e-commerce support dialogues",
        "72.3% task success and 3.79/5 G-Eval across a 50-case evaluation suite",
        "Semantic RAG retrieval over 1.4M Amazon product catalog records in Qdrant",
        "Deterministic agentic routing across 8 domain tools in FastAPI",
      ],
      followUp: {
        label: "View repo",
        href: "https://github.com/Ch-Suharsha/atlas",
      },
    },
  },
  {
    id: "projects-overview",
    keywords: ["projects", "portfolio", "what has he built", "built", "work", "systems", "show me"],
    answer: {
      intro: "Suharsha's portfolio showcases production GenAI, agentic, and safety systems:",
      bullets: [
        "Atlas — Customer support agent with fine-tuned Phi-4-mini + RAG",
        "Tollgate — Cost-aware LangGraph routing layer cutting est. costs by 81.6%",
        "LLM Jailbreak Detector — Adversarial prompt classifier with 0.993 F1",
        "V.O.I.D — Next.js insurance dispute analyzer with NPPES registry audit",
      ],
    },
  },
  {
    id: "project-atlas",
    keywords: ["atlas", "support agent", "customer support", "agent", "fine-tuning", "unsloth", "qlora"],
    answer: {
      intro: "Atlas: AI Customer Support Agent:",
      bullets: [
        "QLoRA + Unsloth fine-tuned Phi-4-mini on e-commerce support data",
        "72.3% task success and 3.79/5 G-Eval across 50 test cases",
        "Semantic RAG retrieval over 1.4M Amazon product records",
        "Built with FastAPI, Qdrant, PostgreSQL, and Docker Compose",
      ],
      followUp: {
        label: "View repo",
        href: "https://github.com/Ch-Suharsha/atlas",
      },
    },
  },
  {
    id: "project-tollgate",
    keywords: ["tollgate", "router", "routing", "gateway", "langgraph", "cost"],
    answer: {
      intro: "Tollgate: Cost-Aware LLM Router:",
      bullets: [
        "LangGraph supervisor routes queries based on complexity",
        "81.6% estimated inference cost cut against all-premium baseline",
        "97.5% tier-adjacent accuracy on a 40-query eval set",
        "API-key auth, rate limiting, Alembic migrations, and pytest CI",
      ],
      followUp: {
        label: "View repo",
        href: "https://github.com/Ch-Suharsha/tollgate",
      },
    },
  },
  {
    id: "project-jailbreak",
    keywords: ["jailbreak", "detector", "adversarial", "security", "safety", "sklearn", "xgboost", "streamlit"],
    answer: {
      intro: "LLM Jailbreak Detector:",
      bullets: [
        "Binary classifier detecting adversarial prompts at 0.993 F1",
        "397 features including 13 handcrafted semantic signals",
        "Benchmarked Logistic Regression vs Random Forest vs XGBoost",
        "Interactive Streamlit dashboard and classifier API",
      ],
      followUp: {
        label: "View repo",
        href: "https://github.com/Ch-Suharsha/llm-jailbreak-detector",
      },
    },
  },
  {
    id: "project-void",
    keywords: ["void", "insurance", "dispute", "erisa", "nppes", "next.js"],
    answer: {
      intro: "V.O.I.D (Voice Operated Insurance Dispute):",
      bullets: [
        "Uploads insurance denial PDFs/images to extract denial codes & doctor NPI",
        "Audits doctor registry specialty database to detect mismatches",
        "Generates legally-grounded ERISA appeal letters citing Section 503",
      ],
      followUp: {
        label: "View repo",
        href: "https://github.com/Ch-Suharsha/V.O.I.D",
      },
    },
  },
  {
    id: "project-pipeline",
    keywords: ["pipeline", "kafka", "pyspark", "stream", "streaming"],
    answer: {
      intro: "Financial Data Pipeline:",
      bullets: [
        "Real-time stock transaction generator streaming to Apache Kafka",
        "PySpark consumer applying sliding-window aggregates to PostgreSQL",
        "Prometheus and Grafana dashboards for throughput and lag monitoring",
      ],
      followUp: {
        label: "View repo",
        href: "https://github.com/Ch-Suharsha/financial-data-pipeline",
      },
    },
  },
  {
    id: "stack",
    keywords: ["stack", "tools", "technologies", "tech", "skills", "languages", "software"],
    answer: {
      intro: "Core stack, organized in three layers:",
      bullets: [
        "AI & Agents: LangGraph, LangChain, RAG, QLoRA, HuggingFace, LLM Eval",
        "Software: Python, TypeScript, FastAPI, React, REST, WebSockets, Docker",
        "Cloud & Data: AWS (ECS, ECR, S3), PostgreSQL, Qdrant, Redis, Kafka",
      ],
    },
  },
  {
    id: "certificates",
    keywords: ["certificate", "certification", "certified", "credential", "badges"],
    answer: {
      intro: "Suharsha's certifications and achievements:",
      bullets: [
        "AWS Cloud Foundations Certified",
        "Claude 101 Certified (Anthropic)",
        "Anthropic AI Fluency Certified",
        "B.E.L.L.A x Mule Run Hackathon Winner",
      ],
    },
  },
  {
    id: "education",
    keywords: ["education", "degree", "school", "university", "sjsu", "masters", "study"],
    answer: {
      intro: "Suharsha holds an M.S. in Applied Data Intelligence from San Jose State University (graduated May 2026):",
      bullets: [
        "B.E. Computer Science, GITAM Institute of Technology (May 2024)",
        "Self-Study: ML Systems (Stanford), Production RAG (DeepLearning.AI), LangGraph",
      ],
    },
  },
  {
    id: "experience",
    keywords: ["experience", "job", "worked", "employer", "company", "internship", "years", "venhan", "chrims"],
    answer: {
      intro: "Suharsha has professional software engineering internship experience:",
      bullets: [
        "Software Engineer Intern at Venhan Technologies (client: CHRIMS Inc.) — Hyderabad (Apr 2022 – Apr 2024)",
        "FastAPI microservices migration, keyset pagination, Redis caching, WebSockets",
        "GitHub Actions CI/CD pipelines, Pydantic validation, Grafana observability",
      ],
      followUp: { label: "Download resume", href: links.resume },
    },
  },
  {
    id: "location",
    keywords: ["location", "based", "relocate", "relocation", "remote", "hybrid", "onsite", "sponsorship", "visa", "authorization", "opt", "salary"],
    answer: {
      intro: "Based in San Jose, CA (graduated from SJSU in May 2026):",
      bullets: [
        "Authorized to work in the US on OPT",
        "Prefers onsite or hybrid roles; open to remote",
        "Willing to relocate for the right role",
      ],
      followUp: { label: `Email Suharsha`, href: `mailto:${links.email}` },
    },
  },
  {
    id: "roles",
    keywords: ["role", "open to", "looking for", "hiring", "position", "available", "opportunity"],
    answer: {
      intro: "Looking for full-time opportunities in AI and Machine Learning engineering:",
      bullets: [
        "AI Engineer",
        "ML Engineer",
        "GenAI Engineer / LLM Systems Engineer",
      ],
      followUp: { label: `Email Suharsha`, href: `mailto:${links.email}` },
    },
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "linkedin", "github", "resume", "cv", "connect", "hire"],
    answer: {
      intro: "How to connect with Suharsha:",
      bullets: contactBullets,
      followUp: { label: "Download resume", href: links.resume },
    },
  },
  {
    id: "about",
    keywords: ["who is", "about", "summary", "background", "intro"],
    answer: {
      intro: "Suharsha Cheedalla is an AI Engineer who builds production-ready GenAI and agentic systems:",
      bullets: [
        "Built Atlas (fine-tuned Phi-4-mini + RAG over 1.4M records + G-Eval)",
        "2 years Software Engineer Intern experience at Venhan Technologies",
        "M.S. in Applied Data Intelligence from SJSU (May 2026)",
      ],
    },
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "great", "cool", "awesome", "nice"],
    answer: {
      intro: "You're welcome! Let me know if you want to know more about Suharsha's projects, stack, or experience.",
    },
  },
];
