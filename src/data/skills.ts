import type { SkillSystemLayer } from "../types/portfolio";

export const skillLayers: SkillSystemLayer[] = [
  {
    id: "core-analytics",
    name: "Core Analytics & Stats",
    description: "Rigorous querying structures, cohort decay mapping, and statistical validation of product/operational decisions.",
    tools: [
      "SQL (PostgreSQL/SQLite)",
      "Excel (Pivot Tables)",
      "A/B Testing",
      "Cohort Analysis",
      "Funnel Analytics",
      "Hypothesis Testing (Chi-Square)",
    ],
    proofProjects: ["TaskFlow Analytics", "Marketplace Liquidity"],
  },
  {
    id: "data-scripting",
    name: "Data Scripting & Automation",
    description: "Clean, reproducible Python scripts and Jupyter notebooks for data cleaning, preprocessing, and automated statistical runs.",
    tools: [
      "Python",
      "Pandas",
      "Numpy",
      "Scipy.stats",
      "Jupyter Notebooks",
      "Git & GitHub Actions",
    ],
    proofProjects: ["TaskFlow Analytics", "Marketplace Liquidity", "Adversarial Data Classifier"],
  },
  {
    id: "viz-infrastructure",
    name: "Visualization & Infrastructure",
    description: "Interactive dashboards and relational databases translating complex event streams or budgets into clear business intelligence.",
    tools: [
      "Tableau Desktop",
      "Power BI",
      "Looker Studio",
      "Streamlit",
      "PostgreSQL",
      "Data Modeling",
    ],
    proofProjects: ["Corporate Finance Budget", "TaskFlow Analytics", "Financial Data Stream"],
  },
];
