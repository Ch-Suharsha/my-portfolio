const base = import.meta.env.BASE_URL ?? "/";
const cleanBase = base.endsWith("/") ? base : `${base}/`;

export const profile = {
  name: "Suharsha Cheedalla",
  headline: "AI systems that hold up in production.",
  subheadline:
    "Fine-tuning, retrieval, agent orchestration, and evaluation — shipped end to end and measured.",
  roleLine: "AI Engineer / LLM Systems / Agentic AI / RAG",
  topSkills: ["Python", "LangGraph", "RAG", "LLM Eval"] as const,
  photo: "/assets/profile/suharsha-profile.jpg",
  /** Square face-centered crop for small circular avatars. */
  photoHeadshot: "/assets/profile/suharsha-headshot.jpg",
  resume: `${cleanBase}resume/Suharsha_Cheedalla_Resume.pdf`,
  openTo:
    "Open to AI Engineer, ML Engineer, and GenAI Engineer roles — building production LLM and agentic systems.",
  about:
    "I build AI systems that hold up in production — efficient, measurable, and useful to the people relying on them. Most recently Atlas, an agentic customer-support system pairing a fine-tuned small language model with retrieval over 1.4M product records and a full evaluation harness. I finished my MS in Applied Data Intelligence at SJSU in May 2026.",
};
