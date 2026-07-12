import type { ChatIntent } from "../types/chat";
import { links } from "./links";

export const chatIntents: ChatIntent[] = [
  {
    id: "greetings",
    keywords: ["hello", "hi", "hey", "greetings", "yo", "welcome"],
    answer: {
      intro: "Hi! I'm Suharsha's portfolio assistant. I can tell you about his data analysis projects, SQL/Python skills, Tableau dashboards, and background. What would you like to know?",
      followUp: { label: "Tell me about his projects", href: "#work" },
    },
  },
  {
    id: "projects",
    keywords: ["project", "projects", "portfolio", "built", "code", "work", "systems", "repos"],
    answer: {
      intro: "Suharsha has built several detailed analysis projects, including:",
      bullets: [
        "**TaskFlow Product Analytics:** analyzed 472K+ behavioral events and ran A/B tests to improve B2B SaaS onboarding (99.9% confidence, +9.3% conversion lift).",
        "**Hire Hangar Marketplace Liquidity:** mapped applicant funnels and computed sourcing channel yield rates (Referrals had 12.17% yield, 32x higher than LinkedIn).",
        "**Corporate Finance Budget Controlling:** built an interactive Tableau dashboard modeling a $12M budget across 14 Cost Centers.",
      ],
      followUp: { label: "Explore his projects on GitHub", href: links.github },
    },
  },
  {
    id: "skills",
    keywords: ["skills", "tools", "languages", "technologies", "stack", "sql", "python", "tableau", "excel"],
    answer: {
      intro: "Suharsha's analytics capabilities span three key layers:",
      bullets: [
        "**Core Analytics & Stats:** SQL (PostgreSQL, SQLite), Excel (Pivot Tables, VLOOKUP), A/B Testing, Cohort & Funnel Analysis, Chi-Square/t-tests.",
        "**Programming & Automation:** Python (Pandas, Numpy, Scipy), Streamlit dashboard scripting, Jupyter Notebooks, Git/GitHub Actions.",
        "**Visualization & BI:** Tableau Desktop, Power BI, Looker Studio, Relational Databases, data warehousing.",
      ],
      followUp: { label: "View technical skills", href: "#skills" },
    },
  },
  {
    id: "education",
    keywords: ["education", "degree", "school", "university", "sjsu", "masters", "study", "gitam"],
    answer: {
      intro: "Suharsha's academic credentials include:",
      bullets: [
        "**M.S. in Applied Data Intelligence**, San Jose State University (graduated May 2026). Coursework in ML, Cloud Computing, GenAI, and Advanced Data Analytics.",
        "**B.E. in Computer Science**, GITAM Institute of Technology (graduated May 2024). Focused on System Design, Data Structures, and Database Systems.",
        "**Self-Study:** Designing ML Systems (Stanford), Production RAG Systems, and LangGraph multi-agent architectures.",
      ],
      followUp: { label: "Download resume", href: links.resume },
    },
  },
  {
    id: "experience",
    keywords: ["experience", "job", "worked", "employer", "company", "internship", "years", "venhan", "chrims"],
    answer: {
      intro: "Suharsha has professional software engineering internship experience:",
      bullets: [
        "**Software Engineer Intern** at Venhan Technologies (Client: CHRIMS Inc., Apr 2022 - Apr 2024). Migration of Flask monolith to FastAPI microservices, keyset pagination, and precomputing materialized views for speed.",
        "Built automated GitHub Actions pipelines to run linting, Pytest unit tests, and Docker builds before releasing to AWS ECR.",
        "Instrumented microservices with Sentry and Grafana dashboards for latency and error tracking.",
      ],
      followUp: { label: "See his full history", href: "#experience" },
    },
  },
  {
    id: "tableau",
    keywords: ["tableau", "dashboard", "dashboards", "viz", "visualization", "power bi", "looker"],
    answer: {
      intro: "Suharsha is highly skilled in Tableau and visual analytics:",
      bullets: [
        "Built a **Corporate Finance Budget Controlling** dashboard in Tableau tracking a $12M budget across 14 cost centers.",
        "Designed the dashboard with interactive parameter controls, spending trend lines, and rolling budget forecasts.",
        "Developed interactive Streamlit apps in Python to display dynamic metrics and statistical outcomes.",
      ],
      followUp: { label: "See Tableau Project", href: "#work" },
    },
  },
  {
    id: "sql",
    keywords: ["sql query", "sql queries", "postgres", "sqlite", "querying", "db", "database", "database queries"],
    answer: {
      intro: "Suharsha writes advanced SQL (PostgreSQL, SQLite) to solve complex analytical questions:",
      bullets: [
        "Used **Window Functions** and **CTEs** to calculate user cohort retention decay rates over 24-month streams.",
        "Built **Multi-stage Funnel Queries** tracking candidate drop-offs across application, screening, interview, and offer stages.",
        "Optimized queries with composite B-tree indexing, keyset pagination, and precomputed materialized views.",
      ],
      followUp: { label: "Check SQL Projects", href: "#work" },
    },
  },
];

export const FALLBACK = {
  intro: "I'm not sure about that specific query. You can ask me about Suharsha's SQL skills, Python A/B tests, Tableau dashboards, work history, or download his resume.",
  followUp: { label: "Get his resume", href: links.resume },
};

export const GREETING = {
  intro: "Hi! I'm Suharsha's portfolio assistant. I can tell you about his data analysis projects, SQL/Python skills, Tableau dashboards, and background. What would you like to know?",
  followUp: { label: "Tell me about his projects", href: "#work" },
};

export const SUGGESTED_QUESTIONS = [
  "What projects have you built?",
  "Tell me about your SQL skills.",
  "Do you have Tableau dashboard experience?",
  "Tell me about the Hire Hangar project.",
];
