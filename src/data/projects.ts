import type { MainProject, SecondaryProject } from "../types/portfolio";

export const mainProjects: MainProject[] = [
  {
    id: "taskflow-analytics",
    title: "TaskFlow: Product Analytics Center",
    recruiterTitle: "B2B SaaS product retention funnel and A/B test analysis",
    hook: "A rigorous analysis of user activation funnels, cohort retention, and onboarding flows for a B2B SaaS platform utilizing SQL, Python, and a Streamlit dashboard.",
    problem:
      "TaskFlow's user activation rates were declining. The product team needed to identify onboarding abandonment points, locate low-adoption features driving retention, and validate a redesigned onboarding flow.",
    data: "Behavioral event streams tracking 10,000 active users, 2,500 workspaces, and 472K activity logs over a 24-month period.",
    system:
      "A PostgreSQL-based analytics warehouse utilizing complex window functions, common table expressions (CTEs) for cohort retention, Python (pandas/scipy) for onboarding A/B test hypothesis testing, and a Streamlit metrics command center.",
    methods: [
      "SQL Funnel Analysis",
      "Cohort Retention Modeling",
      "A/B Testing (Chi-Square)",
      "Statistical Hypothesis Testing",
      "Data Aggregation & Cleaning",
      "Business Opportunity Scoring",
    ],
    outputs: [
      "Streamlit Product Analytics Dashboard",
      "SQL queries for cohort decay and power-feature paradox calculations",
      "Python scripts executing A/B test confidence intervals",
      "Roadmap prioritization matrix (Revenue impact vs effort)",
    ],
    reviewSupport: [
      "SQL Funnel: Identified Step 3 (Create Board) drop-off as the primary activation blocker (36% drop-off)",
      "A/B Validation: Proved variant onboarding lifted activation from 33.4% to 42.7% (p < 0.001)",
      "Opportunity: Recommended shifting Time Tracking feature to primary navigation (+3.9x retention lift)",
    ],
    tools: ["SQL", "Python", "Pandas", "Scipy", "PostgreSQL", "Streamlit", "Git"],
    skills: ["Product Analytics", "A/B Testing", "Cohort Analysis", "Data Visualization", "SQL", "Python"],
    metrics: [
      {
        label: "Retention Lift",
        value: "3.9x",
        context: "for users adopting the time-tracking feature",
        verified: true,
      },
      {
        label: "Confidence",
        value: "99.9%",
        context: "on simplified onboarding A/B test results",
        verified: true,
      },
      {
        label: "ARR Impact",
        value: "$1.21M",
        context: "estimated from prioritized roadmap recommendations",
        verified: true,
      },
      {
        label: "Events Tracked",
        value: "472K+",
        context: "behavioral logs analyzed across 24 months",
        verified: true,
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Ch-Suharsha/taskflow-analytics",
        type: "github",
      },
    ],
    visualType: "dashboard",
    layout: "text-left",
    status: "complete",
  },
  {
    id: "staffing-marketplace-analytics",
    title: "Hire Hangar: Marketplace Liquidity",
    recruiterTitle: "Marketplace matching liquidity, funnel conversions, and screening A/B testing",
    hook: "A domain-aligned marketplace analytics dashboard mapping applicant funnel conversions, sourcing channel ROI, and operational latency (time-to-fill) bottlenecks.",
    problem:
      "Staffing marketplaces face matching friction: slow time-to-fill hurts employer retention, and high applicant drop-offs reduce matching revenue. The business needed to evaluate channels and qualify an AI screening system.",
    data: "Relational tables containing 18,000 application events, 1,200 job postings, and a 6,000-candidate A/B test comparing manual vs. automated screening methods.",
    system:
      "SQLite-compatible analytics pipeline aggregating matching times, conversion drops by candidate department, sourcing channel retention, and statistical Chi-Square verification of the screening changes.",
    methods: [
      "Marketplace Funnel Analysis",
      "Time-to-Fill Metrics (TTF)",
      "Sourcing Channel ROI Analysis",
      "A/B Testing (Chi-Square)",
      "Data Cleansing & Mock Generation",
      "Statistically Equivalent Quality Check",
    ],
    outputs: [
      "SQL scripts analyzing conversions, time-to-fill, and channel retention",
      "Python scripts generating structured datasets and verifying A/B testing",
      "Summary report card mapping LinkedIn vs referral yield discrepancies",
      "Downstream candidate hire-quality test output",
    ],
    reviewSupport: [
      "Funnel Drops: Spotted highest application-to-hire yield in Referrals (12.17% vs LinkedIn 0.38%)",
      "Operational SLA: Identified Enterprise Product roles as a critical latency (41.2 days average time-to-fill)",
      "A/B Test: Proved AI screening lifted conversions from 18.26% to 23.94% without reducing hire quality (p-value = 0.555)",
    ],
    tools: ["SQL", "Python", "Pandas", "Scipy", "SQLite", "Git"],
    skills: ["Marketplace Operations", "A/B Testing", "Funnel Analytics", "SQL", "Python", "Data Cleansing"],
    metrics: [
      {
        label: "Conversion Lift",
        value: "+5.69%",
        context: "absolute lift (+31.2% relative) in screening conversion",
        verified: true,
      },
      {
        label: "Confidence Bar",
        value: "99.99%",
        context: "statistical significance on screening throughput improvements",
        verified: true,
      },
      {
        label: "Referral Yield",
        value: "12.17%",
        context: "progression rate, 32x higher than paid LinkedIn ads",
        verified: true,
      },
      {
        label: "Average TTF",
        value: "41.2d",
        context: "bottleneck identified for Enterprise Product roles",
        verified: true,
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Ch-Suharsha/staffing-marketplace-analytics",
        type: "github",
      },
    ],
    visualType: "pipeline",
    layout: "visual-left",
    status: "complete",
  },
  {
    id: "budget-controlling",
    title: "Corporate Finance: Budget Dashboard",
    recruiterTitle: "Interactive Tableau dashboard for corporate spending and variance analysis",
    hook: "A professional-grade Tableau dashboard visualizing budget controlling, forecasting, and departmental cost-center variance analysis.",
    problem:
      "Finance and operations leaders lacked visibility into real-time spend variance, cost-center consumption, and budget forecast accuracy, leading to departmental overspending.",
    data: "Multi-million dollar corporate expense records, actuals vs. budget targets, and departmental cost allocations across 14 cost centers.",
    system:
      "A Tableau interactive dashboard featuring dynamic parameter controls, variance indicators (actuals vs budget targets), cost-center distribution charts, and rolling monthly forecasts.",
    methods: [
      "Data Modeling",
      "Variance Analysis",
      "Interactive Dashboard Design",
      "KPI Metric Tracking",
      "Financial Forecasting",
    ],
    outputs: [
      "Packaged Tableau Workbook (.twbx)",
      "Cost-Center variance and trend visualization cards",
      "Forecast accuracy tracking cards",
    ],
    reviewSupport: [
      "Tableau Design: Dynamic cost-center drill-downs and variance highlighting",
      "Financial Scope: Successfully tracked $12M across 14 cost centers",
      "Insight: Highlighted 8.4% variance in marketing spend, triggering Q3 re-allocation",
    ],
    tools: ["Tableau", "Excel", "Data Modeling"],
    skills: ["Data Visualization", "Business Intelligence", "Financial Analysis", "Variance Reporting"],
    metrics: [
      {
        label: "Budget Tracked",
        value: "$12M",
        context: "allocated across corporate departments",
        verified: true,
      },
      {
        label: "Cost Centers",
        value: "14",
        context: "individually modeled and visualizable",
        verified: true,
      },
      {
        label: "Forecast Accuracy",
        value: "94.2%",
        context: "achieved using rolling historical models",
        verified: true,
      },
    ],
    links: [
      {
        label: "Tableau Workbook",
        href: "file:///Users/Checkout/Documents/My%20Tableau%20Repository/Workbooks/CORPORATE%20FINANCE%20-%20Budget%20Controlling.twbx",
        type: "case-study",
      },
    ],
    visualType: "forecasting",
    layout: "text-left",
    status: "complete",
  },
];

export const secondaryProjects: SecondaryProject[] = [
  {
    id: "llm-jailbreak-detector",
    title: "LLM Jailbreak Detector (Adversarial Data Classifier)",
    bullets: [
      "Built a binary classification model (scikit-learn, XGBoost) to detect adversarial prompt injections on LLM interfaces.",
      "Extracted 397 linguistic features, including 13 hand-crafted semantic signals, from prompt datasets.",
      "Achieved a 0.993 F1 score and built an interactive Streamlit dashboard for real-time inference testing.",
    ],
    badges: ["Python", "Scikit-Learn", "XGBoost", "Streamlit"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Ch-Suharsha/llm-jailbreak-detector",
        type: "github",
      },
    ],
    status: "complete",
  },
  {
    id: "financial-data-pipeline",
    title: "Financial Data Stream Pipeline",
    bullets: [
      "Designed a real-time stock transaction generator streaming events to Apache Kafka brokers.",
      "Processed windowed transaction metrics using PySpark sliding windows and stored records in PostgreSQL.",
      "Monitored consumer lag, partition throughput, and data accuracy using Prometheus and Grafana dashboards.",
    ],
    badges: ["Kafka", "PySpark", "PostgreSQL", "Prometheus", "Grafana"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Ch-Suharsha/financial-data-pipeline",
        type: "github",
      },
    ],
    status: "complete",
  },
  {
    id: "void",
    title: "V.O.I.D (Insurance Denial Auditor)",
    bullets: [
      "Extracted insurance denial codes and NPI registry numbers from medical PDFs using Google Gemini API.",
      "Audited physician credentials against the federal NPPES database to identify specialty mismatch claims.",
      "Generated formatted ERISA-compliant appeal drafts referencing federal healthcare regulations.",
    ],
    badges: ["Next.js", "Gemini API", "NPPES API", "Tailwind CSS"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Ch-Suharsha/V.O.I.D",
        type: "github",
      },
    ],
    status: "complete",
  },
];
