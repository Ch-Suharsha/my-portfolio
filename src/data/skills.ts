import type { SkillSystemLayer } from "../types/portfolio";

export const skillLayers: SkillSystemLayer[] = [
  {
    id: "ai-ml-layer",
    name: "AI & Machine Learning",
    description:
      "Agent orchestration, semantic retrieval systems, model fine-tuning, and robust evaluation harnesses.",
    tools: [
      "LangGraph",
      "LangChain",
      "RAG",
      "QLoRA/LoRA Fine-Tuning",
      "HuggingFace",
      "LLM Evaluation (G-Eval, Ragas)",
      "scikit-learn",
      "XGBoost",
      "PyTorch",
      "Prompt Engineering",
    ],
    proofProjects: [
      "Atlas: AI Customer Support Agent",
      "Tollgate: Cost-Aware LLM Router",
      "LLM Jailbreak Detector",
    ],
  },
  {
    id: "software-engineering-layer",
    name: "Software Engineering",
    description:
      "Scalable API services, real-time communication protocols, robust validation, and automated testing/deployment pipelines.",
    tools: [
      "Python",
      "TypeScript/JavaScript",
      "FastAPI",
      "React",
      "REST APIs",
      "WebSockets",
      "Docker",
      "Pydantic",
      "Pytest",
      "CI/CD",
      "Git/GitHub Actions",
    ],
    proofProjects: [
      "Atlas: AI Customer Support Agent",
      "Tollgate: Cost-Aware LLM Router",
      "LLM Jailbreak Detector",
    ],
  },
  {
    id: "cloud-data-layer",
    name: "Cloud & Data Infrastructure",
    description:
      "Vector and transactional datastores, distributed message streaming, caching, container orchestration, and observability dashboards.",
    tools: [
      "AWS (ECS, ECR, S3)",
      "PostgreSQL",
      "Qdrant",
      "Pinecone",
      "Redis",
      "Kafka",
      "Prometheus",
      "Grafana",
    ],
    proofProjects: [
      "Atlas: AI Customer Support Agent",
      "Tollgate: Cost-Aware LLM Router",
    ],
  },
];
