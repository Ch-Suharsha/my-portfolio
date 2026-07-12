/**
 * Grounding document for the portfolio assistant.
 * Every fact here is verified; the model is instructed to use nothing else.
 */
export const KNOWLEDGE = `
# Suharsha Cheedalla — Portfolio Knowledge Base

## Identity and positioning
- Name: Suharsha Cheedalla. AI Engineer with an M.S. in Applied Data Intelligence from San Jose State University.
- Core identity: builds AI systems that hold up in production — efficient, measurable, and useful to the people relying on them.
- Primary positioning: AI Engineer, GenAI Engineer, or ML Engineer.
- Focus areas: Fine-tuning, retrieval (RAG), agent orchestration, and evaluation — shipped end to end and measured.
- Voice/Approach: direct, technically specific, slightly casual, zero corporate filler. No hype words. Leads with systems built and why they matter to the workflow/business rather than his degree.

## Recruiter summary
Strong fit for AI Engineer, GenAI Engineer, and ML Engineer roles. Expert in designing and implementing agentic workflows (LangGraph), semantic RAG pipelines over large datasets (Qdrant), model fine-tuning (QLoRA, Unsloth), and robust LLM evaluation frameworks (G-Eval). Backed by a solid software engineering foundation with professional internship experience (FastAPI microservices, concurrency, caching, CI/CD, and full-stack system observability).

## Location, availability, logistics
- Based in San Jose, CA. Completed his MS in Applied Data Intelligence at SJSU in May 2026.
- Work authorization: Authorized to work in the US on OPT. Recruiters should confirm specific sponsorship or long-term authorization details directly with him.
- Open to full-time roles and relocation for the right role.
- Work preference: Open to onsite, hybrid, or remote.
- Contact: suharshacheedalla@gmail.com | (408) 549-4735.
- Salary/compensation: Open to market-aligned compensation discussions; final compensation should be discussed directly.

## Contact
- Email: suharshacheedalla@gmail.com
- LinkedIn: "Suharsha Cheedalla" — https://www.linkedin.com/in/suharsha-cheedalla/
- GitHub: "Ch-Suharsha" — https://github.com/Ch-Suharsha
- Resume PDF: https://ch-suharsha.github.io/resume/Suharsha_Cheedalla_Resume.pdf

## Education
- M.S. in Applied Data Intelligence, San Jose State University (SJSU), Aug 2024 - May 2026. Coursework: Machine Learning, Generative AI & LLMs, Cloud Computing, Systems Integration, Advanced Data Analytics.
- B.E. in Computer Science, GITAM Institute of Technology, Aug 2020 - May 2024. Coursework: System Design, Distributed Systems, Data Structures & Algorithms, Database Systems, Object-Oriented Programming, Operating Systems.
- Self-Study: Designing ML Systems (Chip Huyen · Stanford), Building Production RAG Systems (DeepLearning.AI), LangGraph & Multi-Agent Architectures (LangChain Academy), LLM Application Architecture & Evaluation.

## Experience
Software Engineer Intern — Venhan Technologies (client: CHRIMS Inc.), Hyderabad, India, Apr 2022 - Apr 2024.
- Helped migrate a live Flask monolith to FastAPI microservices with zero downtime by rerouting endpoints incrementally through an Nginx reverse proxy using the strangler pattern.
- Kept API response times flat as the portal grew past 100,000 monthly transaction records by adding keyset pagination, composite B-tree indexes, and Redis caching for settlement queries.
- Cut live dashboard update latency 25% and held the 200ms SLA by replacing HTTP polling with WebSocket connections backed by Redis Pub/Sub.
- Brought multi-year settlement reports from minutes down to milliseconds by precomputing aggregations in PostgreSQL materialized views, refreshed by Celery jobs during off-peak hours.
- Reduced failed deployments by about 40% by building GitHub Actions pipelines that ran linting, pytest/Jest, and Docker builds to AWS ECR before every release.
- Stopped a recurring class of 500 errors from malformed track-hardware payloads by enforcing Pydantic validation at API boundaries, returning descriptive 400s instead of crashing workers.
- Cut time to detect production failures from hours to under 3 minutes by instrumenting services with Sentry and Grafana dashboards and setting alerts on latency, error rates, and connection pool usage.

## Featured projects (Priority order)

### 1. Atlas: AI Customer Support Agent (Flagship / Hero)
- Repo: https://github.com/Ch-Suharsha/atlas (master branch)
- Description: Agentic customer-support system pairing a fine-tuned small language model (Phi-4-mini-instruct) with retrieval over 1.4M product records and a G-Eval evaluation harness.
- Architecture: FastAPI backend, deterministic tool-routing across 8 domain tools, Qdrant vector database for semantic search, PostgreSQL for transactional state, and Docker Compose packaging.
- Fine-Tuning: Benchmarked 4 small language models (Phi-4-mini, Qwen3-4B, LLaMA-3.2-3B, SmolLM3-3B) with QLoRA + Unsloth on support data; Phi-4-mini deployed as cloud/local switchable endpoint.
- Metrics: 72.3% task success and 3.79/5 G-Eval across a 50-case suite (measuring relevance, faithfulness, completeness, and groundedness).
- Stack: Python, FastAPI, Qdrant, PostgreSQL, QLoRA, Unsloth, HuggingFace, Docker.

### 2. Tollgate: Cost-Aware LLM Router
- Repo: https://github.com/Ch-Suharsha/tollgate
- Description: LangGraph supervisor routing queries based on complexity to optimize LLM API costs.
- Architecture: Zero-cost complexity classifier dispatches requests to right-sized models (with per-request override), FastAPI service with API-key auth, rate limiting, request validation middleware, Alembic migrations, database cost tracking, and GitHub Actions CI.
- Metrics: 81.6% estimated inference cost reduction against an all-premium baseline on a 40-query eval set; 97.5% tier-adjacent routing accuracy.
- Stack: Python, LangGraph, FastAPI, Groq, PostgreSQL, Alembic, Docker.

### 3. LLM Jailbreak Detector
- Repo: https://github.com/Ch-Suharsha/llm-jailbreak-detector
- Description: Scikit-learn/XGBoost binary classifier detecting adversarial jailbreak prompts.
- Details: Extracts 397 features including 13 handcrafted signals (instruction-pattern counts, quote nesting depth, imperative-verb scoring). Served via API and Streamlit dashboard.
- Metrics: 0.993 F1 on a 600-sample held-out test set; cross-validation and hyperparameter search comparison (LR vs RF vs XGBoost).
- Stack: Python, scikit-learn, XGBoost, Streamlit.

## Secondary projects

### 4. V.O.I.D (Voice Operated Insurance Dispute)
- Repo: https://github.com/Ch-Suharsha/V.O.I.D
- Description: Next.js app that extracts denial codes/doctor NPIs, audits specialties against the NPPES government registry, and generates ERISA appeal letters.
- Stack: Next.js, TypeScript, Tailwind CSS, Gemini API, NPPES API.

### 5. Financial Data Pipeline
- Repo: https://github.com/Ch-Suharsha/financial-data-pipeline
- Description: Real-time stock transaction generator streaming to Apache Kafka, processed with PySpark sliding-window aggregations, stored in PostgreSQL, monitored with Prometheus/Grafana.
- Stack: Python, Kafka, PySpark, PostgreSQL, Docker, Prometheus, Grafana.

## Skills as three system layers
1. AI & Machine Learning: LangGraph, LangChain, RAG, QLoRA/LoRA Fine-Tuning, HuggingFace, LLM Evaluation (G-Eval, Ragas), scikit-learn, XGBoost, PyTorch, Prompt Engineering.
2. Software Engineering: Python, TypeScript/JavaScript, FastAPI, React, REST APIs, WebSockets, Docker, Pydantic, Pytest, CI/CD, Git/GitHub Actions.
3. Cloud & Data Infrastructure: AWS (ECS, ECR, S3), PostgreSQL, Qdrant, Pinecone, Redis, Kafka, Prometheus, Grafana.

## Certifications & Achievements
- AWS Cloud Foundations Certified
- Claude 101 Certified — Anthropic
- Anthropic AI Fluency Certified — Anthropic
- B.E.L.L.A x Mule Run Hackathon Winner
`;
