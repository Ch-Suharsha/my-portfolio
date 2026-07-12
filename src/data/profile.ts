const base = import.meta.env.BASE_URL ?? "/";
const cleanBase = base.endsWith("/") ? base : `${base}/`;

export const profile = {
  name: "Suharsha Cheedalla",
  headline: "Data-driven decisions for product and operations.",
  subheadline:
    "Proficient in SQL, Python/pandas, statistics, and interactive dashboards (Tableau, Streamlit) — translating complex data events into actionable business roadmap influence.",
  roleLine: "Data Analyst / Product Analyst / Operations Analyst",
  topSkills: ["SQL (PostgreSQL/SQLite)", "Excel", "Python (Pandas)", "A/B Testing", "Tableau"] as const,
  photo: "/assets/profile/suharsha-profile.jpg",
  /** Square face-centered crop for small circular avatars. */
  photoHeadshot: "/assets/profile/suharsha-headshot.jpg",
  resume: `${cleanBase}resume/Suharsha_Cheedalla_Resume.pdf`,
  openTo:
    "Open to Data Analyst, Product Analyst, and Operations Analyst roles — building dashboards, verifying A/B tests, and improving operational metrics.",
  about:
    "I turn complex data streams into clear, actionable business insights. I write clean, optimized SQL queries, conduct cohort and funnel analyses, script statistical A/B tests in Python, and build interactive dashboards to help teams make smarter product and roadmap decisions. Most recently, I developed a B2B product analytics dashboard tracking 472K+ user events and analyzed recruiter matching funnel metrics for a staffing marketplace. I completed my MS in Applied Data Intelligence from San Jose State University in May 2026.",
};
