# Portfolio Build Plan — Suharsha Cheedalla

> **For the builder (Gemini):** This is your complete spec. Build the site exactly
> as described. Where a decision isn't stated here, ask — do not guess. Every fact,
> metric, and project claim in this plan is verified against source repos or the
> candidate's job-search files; do not add, inflate, or invent anything beyond it.

---

## A. INSPIRATION SOURCE

- **Template repo:** https://github.com/Kartz82/Kartz82.github.io
- **Live reference:** https://kartz82-github-io.vercel.app
- **What we take:** the architecture, the section layout, the visual system, the
  component set, and the AI-chat pattern.
- **What we change:** all content is Suharsha's, and the AI chat runs on **Groq**,
  not Gemini.
- **Note on provenance:** the template repo has **no license**. We therefore treat
  it as *design and architecture reference only* — rebuild the structure and
  rewrite the code and content as Suharsha's own. Do not copy the template repo
  wholesale or fork it. The build directory
  (`/Users/Checkout/Documents/projects/portfolio`) is currently empty; the
  template was analyzed directly from GitHub, and this plan reflects that analysis.

**Template stack (match it):** Vite + React + TypeScript + Tailwind CSS, Framer
Motion + GSAP + Lenis for motion, Phosphor icons, three variable fonts
(Bricolage Grotesque = display, Instrument Sans = body, JetBrains Mono = code).
Deployed as a static site (front-end) plus one serverless function for the chat.

---

## B. FILE INVENTORY — KEEP / ADAPT / DROP

Legend: **KEEP** = recreate as-is (logic is content-agnostic). **ADAPT** = keep the
structure/component, swap the content. **DROP** = do not recreate.

### Config & build
| File | Action | Reason |
|---|---|---|
| `package.json` | ADAPT | Same deps; change `name` to `ch-suharsha.github.io`, remove `@vercel/node` only if we don't use Vercel (we do — keep it). |
| `vite.config.ts` | KEEP | `base: "/"` is correct for a root user site (`ch-suharsha.github.io`). |
| `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json` | KEEP | Standard TS config, content-agnostic. |
| `postcss.config.js` | KEEP | Tailwind/PostCSS wiring. |
| `index.html` | ADAPT | Swap `<title>`, meta description, and social/OG tags to Suharsha. |
| `.gitignore` | KEEP | Standard. |
| `README.md` | ADAPT | Rewrite for Suharsha's repo; keep the setup/build/deploy instructions. |
| `.github/workflows/pages.yml` | KEEP | GitHub Pages deploy workflow works unchanged. |

### App shell & infrastructure
| File | Action | Reason |
|---|---|---|
| `src/main.tsx` | KEEP | React entry point. |
| `src/App.tsx` | ADAPT | Keep the Lenis smooth-scroll setup and the full section composition. **Keep all five sections** (Hero, ProjectShowcase + SecondaryStrip, CertificatesMarquee, Profile, Contact) — none are dropped. |
| `src/styles/global.css` | ADAPT | Keep the reset/base; retune only if we change the palette (v1 = keep template palette). |
| `src/vite-env.d.ts` | KEEP | Type shim. |
| `src/hooks/useIsMobile.ts` | KEEP | Utility hook. |
| `src/hooks/usePrefersReducedMotion.ts` | KEEP | Accessibility hook; motion-critical. |

### Layout & UI components (all KEEP — pure presentation)
| File | Action | Reason |
|---|---|---|
| `src/components/layout/Container.tsx` | KEEP | Width wrapper. |
| `src/components/layout/Section.tsx` | KEEP | Section scaffold. |
| `src/components/layout/Navbar.tsx` | ADAPT | Keep component; update nav labels/anchors to our final section list and the logo/name to "Suharsha Cheedalla". |
| `src/components/ui/Badge.tsx` | KEEP | Tag pill. |
| `src/components/ui/CountUp.tsx` | KEEP | Animated number; used for metrics. |
| `src/components/ui/DecryptedText.tsx` | KEEP | Text effect. |
| `src/components/ui/MagneticButton.tsx` | KEEP | Button effect. |
| `src/components/ui/MarqueeRow.tsx` | KEEP | Marquee mechanic (certs). |
| `src/components/ui/Reveal.tsx` | KEEP | Scroll-reveal wrapper. |
| `src/components/ui/ScrollProgress.tsx` | KEEP | Top progress bar. |
| `src/components/hero/TextPressureHeadline.tsx` | KEEP | Hero headline effect; feed it Suharsha's headline text. |
| `src/components/certificates/CertificateFlipCard.tsx` | ADAPT | Cert card; **add matching theme styles** to its `THEMES` record for the new `aws` / `anthropic` / `neutral` issuer themes (see `types/portfolio.ts`). Otherwise unchanged. |

### Sections (ADAPT — structure stays, content swaps)
| File | Action | Reason |
|---|---|---|
| `src/sections/Hero.tsx` | ADAPT | Same layout; feed Suharsha's name, headline, sub-headline, role line, CTAs. |
| `src/sections/ProjectShowcase.tsx` | ADAPT | Reads from `projects.ts`. **Remove the numbered panel ornament** (`0{index+1}` → "01/02/03") — with a small set it announces the count, violating Constraint 3. Keep everything else. |
| `src/sections/CertificatesMarquee.tsx` | KEEP | Reads from `certificates.ts`. |
| `src/sections/Profile.tsx` | ADAPT | Same layout; swap bio/about + photo + skill-system content. |
| `src/sections/Contact.tsx` | ADAPT | Same layout; swap links to Suharsha's. |

### Data files (ADAPT — this is where our real content lives)
| File | Action | Reason |
|---|---|---|
| `src/data/profile.ts` | ADAPT | Suharsha's name, headline, about, openTo, photo, resume path. |
| `src/data/projects.ts` | ADAPT | **The core.** Suharsha's curated projects (see §D). |
| `src/data/skills.ts` | ADAPT | Suharsha's skill-system layers. |
| `src/data/experience.ts` | ADAPT | Venhan internship + education. |
| `src/data/certificates.ts` | ADAPT | Suharsha's certs (see §C). |
| `src/data/links.ts` | ADAPT | Suharsha's email/LinkedIn/GitHub/portfolio. |
| `src/data/chatKnowledge.ts` | ADAPT | Static-fallback chat intents built from Suharsha's facts. |
| `src/types/portfolio.ts` | ADAPT | Reusable, **except** the `IssuerTheme` union is closed (`microsoft \| google-cloud \| databricks \| dbt \| snowflake \| google-skillshop \| cisco \| kaggle \| ibm`) and has no member matching Suharsha's issuers. **Extend the union** with `"aws" \| "anthropic" \| "neutral"`. |
| `src/types/chat.ts` | KEEP | Chat types reusable. |

### AI chat (ADAPT the backend to Groq)
| File | Action | Reason |
|---|---|---|
| `src/components/chat/PortfolioAssistant.tsx` | ADAPT | Keep widget + static-fallback logic. **Do not hardcode the chat URL** (template hardcodes a Vercel URL). Use `const CHAT_API = import.meta.env.VITE_CHAT_API ?? "";` — empty string ⇒ skip the fetch and use the static fallback, so the site works before the serverless function exists. Update greeting/suggested questions to Suharsha. |
| `api/chat.ts` | ADAPT | **Rewrite the LLM call for Groq** (see §E). Keep CORS allowlist, history handling, JSON-response contract, fallback-model retry. |
| `api/_knowledge.ts` | ADAPT | Replace the knowledge base with Suharsha's verified facts. |

### Assets (DROP the template's, ADD ours)
| File | Action | Reason |
|---|---|---|
| `public/assets/profile/kartikeya-vemula-profile*.png` | DROP | Template owner's photos. Replace with Suharsha's `profile.jpg` (from github.com/Ch-Suharsha/my-portfolio) — full + square-cropped headshot. **If that photo can't be found, use the neutral fallback image and flag it to the user rather than stalling** (same policy as missing project visuals). |
| `public/assets/projects/**/*.png` | DROP | Template owner's project screenshots. Replace with Suharsha's own (see §D visuals). |
| `public/assets/fallback/dashboard-placeholder.png` | ADAPT | Keep a neutral fallback image for projects without a screenshot; supply our own generic placeholder. |
| `public/resume/Kartikeya_Vemula_Resume.pdf` | DROP | Replace with Suharsha's resume PDF as `public/resume/Suharsha_Cheedalla_Resume.pdf`. **The PDF must be generated first:** the source of truth is `jsearch/resume-manager/resume-v2.typ` — compile it with `typst compile resume-v2.typ --font-path assets/fonts Suharsha_Cheedalla_Resume.pdf` (run inside `jsearch/resume-manager/`). Do NOT grab a differently-named stale PDF from that folder; there are several and they are outdated. |
| `public/favicon.svg` | ADAPT | Replace with a simple "SC" / initials favicon. |

---

## C. WHAT TO SWAP (ADAPT files → real content)

### `index.html`
- `<title>`: "Suharsha Cheedalla — AI Engineer"
- meta description + OG tags: short AI-engineer positioning line (see hero copy).

### `src/data/profile.ts`
```ts
export const profile = {
  name: "Suharsha Cheedalla",
  headline: "<see FINAL COPY below — authoritative>",
  subheadline: "<see FINAL COPY below — authoritative>",
  roleLine: "AI Engineer / LLM Systems / Agentic AI / RAG",
  topSkills: ["Python", "LangGraph", "RAG", "LLM Eval"] as const,
  photo: "/assets/profile/suharsha-profile.jpg",
  photoHeadshot: "/assets/profile/suharsha-headshot.jpg",
  resume: "/resume/Suharsha_Cheedalla_Resume.pdf",
  openTo:
    "Open to AI Engineer, ML Engineer, and GenAI Engineer roles — building production LLM and agentic systems.",
  about:
    "<2–3 sentences: what he builds and why it matters to a client/team; MS mentioned as a supporting line, never the lead.>",
};
```
**HARD RULE — intro voice:** every self-description opens with what he *builds* and
why it matters (production-efficient AI that optimizes a client's workflow). The
**MS in Applied Data Intelligence (SJSU, May 2026)** is a supporting line, never
the opener. This applies to `headline`, `about`, the hero, and the chat knowledge base.

### `src/data/links.ts`
- Email: suharshacheedalla@gmail.com
- LinkedIn: https://www.linkedin.com/in/suharsha-cheedalla/
- GitHub: https://github.com/Ch-Suharsha
- Portfolio label points to this site once deployed.

### `src/data/experience.ts` (Venhan + education — verified)
- **Experience:** Software Engineer Intern — Venhan Technologies (client: CHRIMS
  Inc.), Hyderabad, India, Apr 2022 – Apr 2024. Bullets: pull from
  `jsearch/resume-manager/resume-v2.typ` (the six rewritten, human-voiced,
  em-dash-free bullets). Do not reuse the old inflated bullet phrasing.
- **Education:** MS Applied Data Intelligence, SJSU, May 2026 (graduated). BE
  Computer Science, GITAM Institute of Technology, May 2024. Coursework lines per
  `resume-v2.typ`.

### `src/data/certificates.ts` (verified — from resume)
- AWS Cloud Foundations Certified
- Claude 101 Certified — Anthropic
- Anthropic AI Fluency Certified — Anthropic
- B.E.L.L.A x Mule Run Hackathon Winner
- Map each to the **extended** `issuerTheme`: AWS Cloud Foundations → `aws`;
  the two Anthropic certs → `anthropic`; the hackathon → `neutral`. (The union
  and the card's `THEMES` record must be extended first — see file inventory.
  Never mislabel a cert as `microsoft`/`snowflake`/etc. to satisfy the old union.)

### `src/data/skills.ts` (skill-system layers — from resume-v2 skills block)
Group into layers matching the template's `SkillSystemLayer` type, each with a
`proofProjects` field linking to the featured projects:
- **AI/ML:** LangGraph, LangChain, RAG, QLoRA/LoRA Fine-Tuning, HuggingFace,
  LLM Evaluation (G-Eval, Ragas), scikit-learn, XGBoost, PyTorch, Prompt Engineering
- **Software Engineering:** Python, TypeScript/JavaScript, FastAPI, React,
  REST APIs, WebSockets, Docker, Pydantic, Pytest, CI/CD, Git/GitHub Actions
- **Cloud & Data:** AWS (ECS, ECR, S3), PostgreSQL, Qdrant, Pinecone, Redis,
  Kafka, Prometheus, Grafana

### `src/sections/*` copy
- Hero: name + headline + subheadline + two CTAs ("View projects", "Resume").
- Contact: "Open to AI Engineer roles" + the four links + email.

### FINAL COPY (write these verbatim — no placeholders remain)
- **`profile.headline`:** `AI systems that hold up in production.`
- **`profile.subheadline`:** `Fine-tuning, retrieval, agent orchestration, and evaluation — shipped end to end and measured.`
- **`profile.roleLine`:** `AI Engineer / LLM Systems / Agentic AI / RAG`
- **`profile.about`:** `I build AI systems that hold up in production — efficient, measurable, and useful to the people relying on them. Most recently Atlas, an agentic customer-support system pairing a fine-tuned small language model with retrieval over 1.4M product records and a full evaluation harness. I finished my MS in Applied Data Intelligence at SJSU in May 2026.`
- **`profile.openTo`:** `Open to AI Engineer, ML Engineer, and GenAI Engineer roles — building production LLM and agentic systems.`

### Hero stat block — REMOVE THE COUNT STATS (critical)
The template's `src/sections/Hero.tsx` (≈lines 10–11) hard-codes stats from
`mainProjects.length` / `secondaryProjects.length` rendered via `CountUp`. This
**violates Global Constraint 3 (no count language)**. Replace that stat block with
**verified, non-count metrics**, each labeled with its project:
- `72.3%` — "Atlas task success"
- `81.6%` — "Tollgate est. cost cut"
- `0.993` — "Jailbreak detector F1"
Do NOT render any stat derived from the number of projects.

---

## D. PROJECT CURATION (THE CORE)

### Data sources the builder must read
1. **GitHub:** https://github.com/Ch-Suharsha — all public repos (read the actual
   code and READMEs, not just descriptions).
2. **Job-search files** (where GitHub is thin, the curated verified descriptions
   and metrics live):
   - `/Users/Checkout/Documents/jsearch/resume-manager/resume-v2.typ` — the
     canonical, verified project blurbs and metrics.
   - `/Users/Checkout/Documents/jsearch/Hermes_instructions.md` — the curation bar
     and archetype logic.
   - `/Users/Checkout/Documents/jsearch/GEMINI_CONTEXT.md` — candidate facts.
   - `/Users/Checkout/Documents/jsearch/jscan/` markdown/JSON — role-demand
     context (what AI-Engineer JDs reward), if deeper tailoring is needed.

### The featured lineup (already curated — verified in code + resume)
Order matters: the strongest project **leads** the ProjectShowcase.

1. **HERO — Atlas: AI Customer Support Agent**
   Repo: https://github.com/Ch-Suharsha/atlas
   - Agentic customer support: deterministic routing across 8 domain tools,
     semantic retrieval over 1.4M product records (Qdrant), PostgreSQL for
     transactional state, Docker Compose.
   - Fine-tuned & benchmarked 4 small language models (Phi-4-mini, Qwen3-4B,
     LLaMA-3.2-3B, SmolLM3-3B) with QLoRA + Unsloth on real e-commerce support
     data. **Do NOT claim Phi-4-mini was chosen for best eval loss — the repo's
     table shows otherwise.** Accurate framing: the deployed system runs
     fine-tuned Phi-4-mini + RAG, with Groq llama-3.3-70b as a switchable cloud
     endpoint.
   - **Verified metrics:** 72.3% task success, 3.79/5 G-Eval across a 50-case
     suite (relevance, faithfulness, completeness, groundedness, tone & empathy —
     5 dimensions). Source of truth: `atlas/eval/results.md` + `TEST_RESULTS.md`.
     **Note: Atlas's default branch is `master`, not `main`** — use it for raw
     fetches and repo links.
   - Stack: Python, FastAPI, Qdrant, PostgreSQL, QLoRA, Unsloth, HuggingFace, Docker.
   - Why hero: covers fine-tuning + RAG + agents + evaluation at once — the rarest
     and most role-relevant combination for AI-Engineer roles.

2. **Tollgate: Cost-Aware LLM Router**
   Repo: https://github.com/Ch-Suharsha/tollgate
   - LangGraph supervisor routes each query to the right-sized model via a
     deterministic, zero-cost complexity classifier; per-request override.
   - **Verified metrics:** 81.6% *estimated* inference-cost reduction vs an
     all-premium baseline on a 40-query eval set; 97.5% tier-adjacent routing
     accuracy. Source: `tollgate/eval/results.md`. **State cost savings as
     "estimated on the eval set at published Groq prices" — never as measured
     production savings.** Do NOT cite the 42.5% exact-routing-accuracy number.
   - Production surface: API-key auth, rate limiting, request-validation
     middleware, Alembic migrations, per-request cost/latency tracking, pytest
     suite in GitHub Actions CI.
   - Stack: Python, LangGraph, FastAPI, Groq, PostgreSQL, Alembic, Docker.

3. **LLM Jailbreak Detector**
   Repo: https://github.com/Ch-Suharsha/llm-jailbreak-detector
   - Classifier detecting adversarial jailbreak prompts; 397 features incl. 13
     handcrafted signals (instruction-pattern counts, quote-nesting depth,
     imperative-verb scoring).
   - **Verified metrics:** 0.993 F1 on a 600-sample held-out test set; benchmarked
     Logistic Regression vs Random Forest vs XGBoost with CV + hyperparameter
     search. Source: `llm-jailbreak-detector/models/model_metadata.json`.
   - Served via an API + Streamlit dashboard.
   - Stack: Python, scikit-learn, XGBoost, Streamlit.
   - Adds the classical-ML + AI-safety dimension the other two don't cover.

### Curation rules (write these into the build behavior)
- Target audience: **AI Engineer** hiring managers. Feature only projects that
  signal real AI/ML engineering depth. The three above are the featured set.
- **Rank by impressiveness + role-relevance; Atlas leads.**
- **Never state or imply a count** — no "3 projects", no "top projects",
  no numbered "1 of 3" UI. Present them as a showcase, strongest first.
- The template supports a `SecondaryStrip` for lighter projects. If used at all,
  populate it only with genuinely real repos from Suharsha's GitHub
  (e.g. V.O.I.D, ai-job-match-analyzer) framed honestly as smaller works — never
  padded, never tutorial repos dressed up. If nothing clears the bar, omit the
  strip rather than fill it.
- **Every metric must trace to a repo file or `resume-v2.typ`.** If a claim can't
  be verified there, it does not appear. No fabricated features, stacks, or numbers.
- **empathycore is intentionally NOT featured** (thin: single API call + regex +
  SQLite, no eval/tests/Docker). Do not add it to the featured set. It may appear
  only in the secondary strip framed honestly, or not at all.

### Mapping projects onto the `MainProject` schema
The `MainProject` type has ~14 fields, some analytics-flavored from the template.
Fill them per project as follows (leave a field an empty array rather than invent):
- `id`, `title`, `recruiterTitle`: obvious from each project above.
- `hook`: the one-line "why this matters" (first sentence of each project above).
- `problem` / `data` / `system` / `methods` / `outputs`: draw from the bullets and
  the repo README. `data` = the dataset/corpus (e.g. Atlas: ~1.4M Amazon product
  records + support policies).
- `metrics`: the **Verified metrics** above, each with `verified: true` and a
  `context` naming the source file. Only these numbers.
- `reviewSupport`: template-specific (BI "review" framing). **Rename its usage to
  "evaluation / testing evidence"** or leave `[]` — e.g. Atlas: the G-Eval harness;
  Tollgate: the CI pytest suite; Jailbreak: the CV + held-out test set.
- `tools` / `skills`: the stack lines above.
- `visualType`: Atlas → `pipeline`; Tollgate → `pipeline`; Jailbreak → `fallback`
  (or `kpi-panel` if a metrics panel is built). Never `forecasting`/`dashboard`
  unless a real matching visual exists.
- `links`: GitHub repo link per project (Atlas link uses the `master` branch).
- `status`: all three are `complete`.
- `layout`: alternate `text-left` / `visual-left` for rhythm.

### Project visuals
- Each featured project needs a real screenshot/diagram. Preferred sources:
  Atlas has `atlas_system_diagram.png` and `eval/charts/*` in-repo; the jailbreak
  detector has ROC / precision-recall / confusion-matrix PNGs in `models/`.
  Use those. Where a clean visual doesn't exist, use the neutral fallback image —
  do NOT invent a fake dashboard screenshot.

---

## E. AI CHAT — GROQ BACKEND SPEC

Rewrite `api/chat.ts` to call Groq instead of Gemini. Keep everything else in the
chat pipeline identical (CORS allowlist, rolling history, JSON response contract,
static-fallback path in `PortfolioAssistant.tsx`).

- **Endpoint:** `https://api.groq.com/openai/v1/chat/completions` (OpenAI-compatible).
- **Auth:** `Authorization: Bearer ${process.env.GROQ_API_KEY}`.
- **Model:** `llama-3.3-70b-versatile` primary; `llama-3.1-8b-instant` as the
  fast fallback on 429/503 (mirror the template's retry-once pattern).
- **Request shape:** standard `messages: [{role, content}]`. Map the template's
  history turns (`user`/`bot`) to `user`/`assistant`.
- **Structured output:** set `response_format: { type: "json_object" }` and keep
  the same response contract: `{"intro": string, "bullets"?: string[] (max 4,
  each <90 chars), "followUp"?: {label, href}}`.
- **System prompt:** same rules as template — answer ONLY from the knowledge base,
  never invent facts/numbers/links, third person, terse, recruiter-oriented. Swap
  in Suharsha's knowledge base and the intro-voice rule (builder-first, not
  degree-first).
- **CORS allowlist:** `https://ch-suharsha.github.io`, `http://localhost:5173`,
  `http://localhost:4173`.
- **Env:** `GROQ_API_KEY` (set in the serverless host). If unset, return 503 and
  let the front-end use its static keyword fallback — the site must fully work
  with no API key.

---

## F. DEPLOYMENT

- **Front-end:** GitHub Pages via `.github/workflows/pages.yml`, from a root user
  repo **`ch-suharsha.github.io`** → URL `https://ch-suharsha.github.io`.
  `vite.config.ts` `base: "/"` is correct for a root user site.
- **Chat serverless function — DECIDED (option 1):** front-end on GitHub Pages,
  the `api/chat.ts` function deployed on **Vercel**. Build sequence so nothing
  stalls: (a) ship the front-end first with `VITE_CHAT_API` unset → the static
  keyword fallback answers, site is fully live; (b) create the Vercel project for
  `api/`, set `GROQ_API_KEY` there; (c) set `VITE_CHAT_API` to the Vercel function
  URL and rebuild to enable the live Groq chat; (d) add that URL to the CORS
  allowlist in `api/chat.ts`. The site is functional at every step.
- Do not commit `GROQ_API_KEY`. It is set in Vercel's env, never in the repo.

---

## G. GLOBAL CONSTRAINTS (bind the builder)

1. Do not fabricate anything — projects, metrics, features, stacks, certs. Verify
   in the repo or `resume-v2.typ`, or leave it out.
2. Intro voice is builder-first, degree-second — everywhere.
3. No project-count language anywhere in copy or UI.
4. Template repo is unlicensed → reference only; rewrite as Suharsha's own.
5. Keep the site fully functional with no API key (static chat fallback).
6. Match the template's visual system for v1 (palette, fonts, motion). Retinting
   is a later pass, not now.
7. Accessibility: preserve `usePrefersReducedMotion` gating on all motion.
8. Ask when unsure. This plan is the contract; deviations get flagged, not guessed.
