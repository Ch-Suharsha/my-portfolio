import type { ExperienceItem } from "../types/portfolio";

export const experience: ExperienceItem[] = [
  {
    id: "sjsu-ms-applied-data-intelligence",
    kind: "education",
    title: "M.S. Applied Data Intelligence",
    organization: "San Jose State University",
    location: "San Jose, CA",
    startDate: "Aug 2024",
    endDate: "May 2026",
    description: [
      "Coursework: Machine Learning, Generative AI & LLMs, Cloud Computing, Systems Integration, Advanced Data Analytics.",
      "Self-Study: Designing ML Systems (Chip Huyen · Stanford), Building Production RAG Systems (DeepLearning.AI), LangGraph & Multi-Agent Architectures (LangChain Academy), LLM Application Architecture & Evaluation"
    ],
    verified: true,
  },
  {
    id: "gitam-be-computer-science",
    kind: "education",
    title: "B.E. Computer Science",
    organization: "GITAM Institute of Technology",
    location: "India",
    startDate: "Aug 2020",
    endDate: "May 2024",
    description: [
      "Coursework: System Design, Distributed Systems, Data Structures & Algorithms, Database Systems, Object-Oriented Programming, Operating Systems."
    ],
    verified: true,
  },
  {
    id: "venhan-software-engineer-intern",
    kind: "experience",
    title: "Software Engineer Intern",
    organization: "Venhan Technologies (client: CHRIMS Inc.)",
    location: "Hyderabad, India",
    startDate: "Apr 2022",
    endDate: "Apr 2024",
    description: [
      "Worked on a production financial settlement and transaction management platform."
    ],
    bullets: [
      "Helped migrate a live Flask monolith to FastAPI microservices with zero downtime by rerouting endpoints incrementally through an Nginx reverse proxy using the strangler pattern.",
      "Kept API response times flat as the portal grew past 100,000 monthly transaction records by adding keyset pagination, composite B-tree indexes, and Redis caching for settlement queries.",
      "Cut live dashboard update latency 25% and held the 200ms SLA by replacing HTTP polling with WebSocket connections backed by Redis Pub/Sub.",
      "Brought multi-year settlement reports from minutes down to milliseconds by precomputing aggregations in PostgreSQL materialized views, refreshed by Celery jobs during off-peak hours.",
      "Reduced failed deployments by about 40% by building GitHub Actions pipelines that ran linting, pytest/Jest, and Docker builds to AWS ECR before every release.",
      "Stopped a recurring class of 500 errors from malformed track-hardware payloads by enforcing Pydantic validation at API boundaries, returning descriptive 400s instead of crashing workers.",
      "Cut time to detect production failures from hours to under 3 minutes by instrumenting services with Sentry and Grafana dashboards and setting alerts on latency, error rates, and connection pool usage."
    ],
    verified: true,
  }
];
