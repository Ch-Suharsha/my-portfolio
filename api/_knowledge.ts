/**
 * Grounding document for the portfolio assistant.
 * Every fact here is verified; the model is instructed to use nothing else.
 */
export const KNOWLEDGE = `
# Suharsha Cheedalla — Portfolio Knowledge Base (Data Analyst)

## Identity and positioning
- Name: Suharsha Cheedalla. Data Analyst / Product Analyst with an M.S. in Applied Data Intelligence from San Jose State University.
- Core identity: turns complex data streams into clear, actionable business insights.
- Primary positioning: Data Analyst, Product Analyst, or Operations Analyst.
- Focus areas: SQL query design, Python/pandas data cleansing, statistical A/B testing, cohort/funnel conversions, and interactive BI dashboarding (Tableau, Streamlit).
- Voice/Approach: direct, technically specific, slightly casual, zero corporate filler. No hype words. Leads with systems built and why they matter to the business decisions rather than his degree.

## Recruiter summary
Strong fit for Data Analyst, Product Analyst, and Operations Analyst roles. Expert in querying relational databases (SQL), writing scripts to clean and model data (Python/pandas), conducting statistical hypothesis testing (A/B testing, Chi-Square, t-tests), and visualizing trends (Tableau, Streamlit). Backed by a solid engineering foundation (fast API services, caching, data schemas, Git/CI-CD).

## Location, availability, logistics
- Based in San Jose, CA. Completed his MS in Applied Data Intelligence at SJSU in May 2026.
- Work authorization: Authorized to work in the US on OPT. Recruiters should confirm specific sponsorship or long-term authorization details directly with him.
- Open to full-time roles and relocation.
- Work preference: Open to onsite, hybrid, or remote.
- Contact: suharshacheedalla@gmail.com | (408) 549-4735.

## Contact & Links
- Email: suharshacheedalla@gmail.com
- LinkedIn: https://www.linkedin.com/in/suharsha-cheedalla/
- GitHub: https://github.com/Ch-Suharsha
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

### 1. TaskFlow: Product Analytics Center (Flagship / Hero)
- Repo: https://github.com/Ch-Suharsha/taskflow-analytics
- Description: B2B SaaS product analytics tool measuring activation funnels, cohort retention decay, and A/B test onboarding flows.
- Details: Analyzed 472K+ behavioral events and ran Chi-Square statistical tests comparing control vs variant onboarding layouts.
- Metrics: 99.9% statistical confidence, +9.3% absolute conversion lift, 3.9x retention lift on time-tracking feature, and estimated $1.21M ARR roadmap impact.
- Stack: SQL, Python, Pandas, Scipy, PostgreSQL, Streamlit, Git.

### 2. Hire Hangar: Marketplace Liquidity (Domain-Aligned)
- Repo: https://github.com/Ch-Suharsha/staffing-marketplace-analytics
- Description: Funnel conversions, operational latency, and screening A/B testing dashboard modeling a two-sided recruitment marketplace.
- Details: Aggregated applicant stages (Applied -> Hired), calculated time-to-fill across departments, and ran Chi-Square validation comparing manual vs AI screening.
- Metrics: +5.69% absolute screening lift, 99.99% statistical confidence, 12.17% referral yield rate (32x LinkedIn), 41.2 days average time-to-fill for Product roles.
- Stack: SQL, Python, Pandas, Scipy, SQLite, Git.

### 3. Corporate Finance: Budget Dashboard (Visualization / BI)
- Dashboard: Packed Tableau Workbook (.twbx) at "My Tableau Repository/Workbooks/CORPORATE FINANCE - Budget Controlling.twbx"
- Description: Cost-center controlling and spending variance dashboard for corporate finance leaders.
- Metrics: $12M total budget modeled, 14 Cost Centers tracked, 94.2% forecast accuracy achieved.
- Stack: Tableau, Excel, Data Modeling.

## Secondary projects

### 4. LLM Jailbreak Detector (Adversarial Data Classifier)
- Repo: https://github.com/Ch-Suharsha/llm-jailbreak-detector
- Description: Binary classifier detecting prompt injection attacks via 397 hand-crafted signals.
- Metrics: 0.993 F1 score, Streamlit dashboard.
- Stack: Python, Scikit-Learn, XGBoost, Streamlit.

### 5. Financial Data Stream Pipeline (Data Engineering)
- Repo: https://github.com/Ch-Suharsha/financial-data-pipeline
- Description: Real-time stock transaction generator streaming to Kafka and processed via PySpark sliding-windows.
- Stack: Kafka, PySpark, PostgreSQL, Prometheus, Grafana.
`;
