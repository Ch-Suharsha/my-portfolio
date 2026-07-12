import type { MainProject, SecondaryProject } from "../types/portfolio";

export const mainProjects: MainProject[] = [
  {
    id: "atlas",
    title: "Atlas: AI Customer Support Agent",
    recruiterTitle: "Agentic customer support with QLoRA fine-tuned SLM and RAG",
    hook: "An agentic customer-support system pairing a fine-tuned small language model with semantic retrieval over 1.4M product records and a full evaluation harness.",
    problem:
      "Customer support teams face high ticket volume and require fast, accurate lookup across extensive product specs and support policies, which off-the-shelf LLMs cannot ground reliably without high costs and hallucination risks.",
    data: "E-commerce customer support dialogues, product catalog metadata (~1.4M Amazon product records), and support policy documents stored in PostgreSQL and Qdrant.",
    system:
      "FastAPI service implementing deterministic routing across 8 domain tools, a Qdrant vector database for semantic policy and product search, a fine-tuned Phi-4-mini-instruct model served as a local or cloud LLM endpoint, and an automated G-Eval validation pipeline.",
    methods: [
      "QLoRA Fine-Tuning",
      "Semantic RAG Retrieval",
      "Agent Tool-Routing",
      "Model Benchmarking",
      "LLM Evaluation (G-Eval)",
      "Containerized Microservices",
    ],
    outputs: [
      "Fine-tuned Phi-4-mini-instruct model weights on HuggingFace",
      "Interactive customer support web demo",
      "Radar performance visualization and evaluation dashboard",
      "Reproducible Docker Compose environment",
    ],
    reviewSupport: [
      "Evaluation Harness: G-Eval measuring relevance, faithfulness, completeness, and groundedness",
      "Testing Evidence: 50-case evaluation suite comparing base vs fine-tuned models",
      "System Architecture: 8 domain tools for transactional state operations",
    ],
    tools: ["Python", "FastAPI", "Qdrant", "PostgreSQL", "QLoRA", "Unsloth", "HuggingFace", "Docker"],
    skills: ["GenAI Systems", "Fine-Tuning", "RAG", "Agent Orchestration", "LLM Evaluation", "Software Engineering"],
    metrics: [
      {
        label: "Task success",
        value: "72.3%",
        context: "across a 50-case evaluation suite",
        verified: true,
      },
      {
        label: "G-Eval score",
        value: "3.79/5",
        context: "measured across relevance, faithfulness, and completeness",
        verified: true,
      },
      {
        label: "Product records",
        value: "1.4M",
        context: "indexed in Qdrant vector database",
        verified: true,
      },
      {
        label: "Domain tools",
        value: "8",
        context: "implemented for agent deterministic routing",
        verified: true,
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Ch-Suharsha/atlas",
        type: "github",
      },
    ],
    visualType: "pipeline",
    visualAsset: "/assets/projects/atlas/atlas_system_diagram.png",
    visualAssets: [
      {
        src: "/assets/projects/atlas/atlas_system_diagram.png",
        alt: "Atlas agentic system architecture diagram",
      },
      {
        src: "/assets/projects/atlas/1_radar_dimensions.png",
        alt: "Evaluation metrics comparison radar chart",
      },
    ],
    layout: "text-left",
    status: "complete",
  },
  {
    id: "tollgate",
    title: "Tollgate: Cost-Aware LLM Router",
    recruiterTitle: "LangGraph supervisor routing query complexity to optimal models",
    hook: "A LangGraph routing layer that dispatches queries to the right-sized model via a deterministic, zero-cost complexity classifier to optimize inference cost and latency.",
    problem:
      "Sending simple or routine questions to premium LLMs generates unnecessary API costs, while sending complex requests to small models degrades accuracy.",
    data: "A 40-query evaluation set spanning varied complexity levels, annotated with published Groq model prices and expected tier classifications.",
    system:
      "A LangGraph-orchestrated supervisor service with a zero-cost complexity classifier, request validation middleware, rate limiting, Alembic migrations, database cost tracking, and GitHub Actions CI pipelines.",
    methods: [
      "LangGraph Orchestration",
      "Zero-Cost Classifier Design",
      "Request Routing",
      "Observability Instrumentation",
      "CI Testing Pipeline",
    ],
    outputs: [
      "FastAPI LLM Gateway service",
      "Observability logger tracking cost/latency",
      "Alembic schema migrations",
      "GitHub Actions CI pipeline results",
    ],
    reviewSupport: [
      "Evaluation Harness: 40-query eval set comparing routing vs all-premium baselines",
      "CI Evidence: Automated pytest suite running in GitHub Actions",
      "Production features: Rate limiting, middleware validation, and Alembic migrations",
    ],
    tools: ["Python", "LangGraph", "FastAPI", "Groq", "PostgreSQL", "Alembic", "Docker"],
    skills: ["LLM Orchestration", "API Design", "Database Migration", "DevOps/CI", "System Observability"],
    metrics: [
      {
        label: "Est. cost cut",
        value: "81.6%",
        context: "estimated on the eval set at published Groq prices",
        verified: true,
      },
      {
        label: "Routing accuracy",
        value: "97.5%",
        context: "no query lands more than one tier from its target",
        verified: true,
      },
      {
        label: "Inference router",
        value: "LangGraph",
        context: "supervisor and complexity routing logic",
        verified: true,
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Ch-Suharsha/tollgate",
        type: "github",
      },
    ],
    visualType: "pipeline",
    visualAsset: "/assets/fallback/dashboard-placeholder.png",
    layout: "visual-left",
    status: "complete",
  },
  {
    id: "llm-jailbreak-detector",
    title: "LLM Jailbreak Detector",
    recruiterTitle: "Classical ML classifier for adversarial prompt detection",
    hook: "A binary classifier that detects adversarial jailbreak attempts using 397 features and served through a Streamlit dashboard.",
    problem:
      "LLMs are vulnerable to prompt injection and jailbreak techniques that bypass safety alignments, demanding low-latency, preprocessing detection guards.",
    data: "A 600-sample dataset of jailbreak and normal prompts, structured using 13 handcrafted semantic signals (e.g. quote-nesting, imperative verbs).",
    system:
      "An API serving a trained scikit-learn/XGBoost classifier paired with an interactive Streamlit dashboard for real-time adversarial input probing.",
    methods: [
      "Feature Engineering (397 features)",
      "Model Benchmarking (LR vs RF vs XGBoost)",
      "Hyperparameter Optimization",
      "Model Evaluation (ROC / PR Curves)",
    ],
    outputs: [
      "Streamlit interactive testing dashboard",
      "Classifier API endpoint",
      "Confusion matrix and ROC curves back artifacts",
    ],
    reviewSupport: [
      "Evaluation Harness: Held-out 600-sample test set",
      "Artifact evidence: ROC, precision-recall, and confusion-matrix curves in-repo",
      "Feature analysis: Feature importance plots mapping handcrafted signal impact",
    ],
    tools: ["Python", "scikit-learn", "XGBoost", "Streamlit"],
    skills: ["Classical ML", "Adversarial Security", "Feature Engineering", "Dashboard Development"],
    metrics: [
      {
        label: "F1 score",
        value: "0.993",
        context: "on a 600-sample held-out test set",
        verified: true,
      },
      {
        label: "Features",
        value: "397",
        context: "including 13 handcrafted semantic signals",
        verified: true,
      },
      {
        label: "Test samples",
        value: "600",
        context: "held-out evaluation prompts",
        verified: true,
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Ch-Suharsha/llm-jailbreak-detector",
        type: "github",
      },
    ],
    visualType: "kpi-panel",
    visualAsset: "/assets/projects/llm-jailbreak-detector/feature_importance.png",
    visualAssets: [
      {
        src: "/assets/projects/llm-jailbreak-detector/feature_importance.png",
        alt: "Feature importance: top hand-crafted signals and feature-group contributions",
      },
      {
        src: "/assets/projects/llm-jailbreak-detector/roc_curve.png",
        alt: "ROC curve",
      },
      {
        src: "/assets/projects/llm-jailbreak-detector/precision_recall_curve.png",
        alt: "Precision-Recall curve",
      },
      {
        src: "/assets/projects/llm-jailbreak-detector/confusion_matrix.png",
        alt: "Confusion matrix of the jailbreak classifier",
      },
    ],
    layout: "text-left",
    status: "complete",
  },
];

export const secondaryProjects: SecondaryProject[] = [
  {
    id: "void",
    title: "V.O.I.D (Voice Operated Insurance Dispute)",
    bullets: [
      "Extracts insurance denial codes and reviewing doctor NPIs from uploaded PDFs or images using Gemini 2.5 Flash.",
      "Audits doctor specialty registrations against the NPPES registry database to flag specialty mismatch cases.",
      "Generates legally-grounded ERISA appeal letters citing Section 503 regulations based on audit findings.",
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
  {
    id: "financial-data-pipeline",
    title: "Financial Data Pipeline",
    bullets: [
      "Simulates real-time stock transaction streams into Apache Kafka brokers for high-throughput messaging.",
      "Processes streams in PySpark, applying sliding-window aggregations before persisting to PostgreSQL.",
      "Instruments the pipeline with Prometheus and Grafana dashboards for lag and ingestion rates.",
    ],
    badges: ["Apache Kafka", "PySpark", "PostgreSQL", "Prometheus", "Grafana"],
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
    id: "empathycore",
    title: "EmpathyCore (Voice-First AI Companion)",
    bullets: [
      "Voice-first conversational app: the browser captures speech and the backend replies with spoken, empathetic responses synthesized via edge-tts.",
      "Runs responses through Groq (llama-3.3-70b) behind a guarded system prompt, with SQLite-backed conversation memory for continuity across turns.",
      "Routes crisis-language messages to a separate safety path via pattern detection; deployed on Vercel (frontend) and Railway (backend).",
    ],
    badges: ["FastAPI", "Groq API", "edge-tts", "p5.js", "SQLite"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Ch-Suharsha/empathycore",
        type: "github",
      },
    ],
    status: "complete",
  },
];
