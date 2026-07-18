export interface ExperienceEntry {
  role: string
  org: string
  location: string
  period: string
  current?: boolean
  bullets: string[]
  stack: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'AI Engineer',
    org: 'CobuildX.ai',
    location: 'Chennai, India · On-site',
    period: 'Jun 2026 – Present',
    current: true,
    bullets: [
      'Building full-stack features for WarpX, an AI-powered collaborative workspace platform: a React + TypeScript frontend and a Python FastAPI backend deployed on AWS Lambda.',
      'Designed and shipped AI custom agents with MCP (Model Context Protocol) tool integration, giving each agent scoped GitHub repository access for code-aware automated reviews.',
      'Built a real-time collaborative Kanban task board and audited the production Supabase/Postgres schema for row-level security across the multi-tenant data model.',
      'Built a config-driven entity-extraction evaluation framework (Precision/Recall/Fβ, Micro/Macro-F1 scoring) for an AI invoice-extraction pipeline, surfacing and fixing real production defects with zero changes to production code.',
    ],
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'AWS Lambda', 'Supabase', 'Anthropic Claude API', 'MCP'],
  },
  {
    role: 'Graduate Technical Intern — AI Engineering',
    org: 'Intel Technology India Pvt. Ltd.',
    location: 'Bengaluru, India',
    period: 'Jul 2025 – Feb 2026',
    bullets: [
      'Designed and deployed a production multi-agent LLM ticket-automation system integrated with ServiceNow via Azure AI Foundry, cutting model costs 35–45% and reducing input tokens by 39.4%.',
      'Built a Retriever API against internal wikis, improving average response time to 12s (P90: 20s) and throughput by 1.8×–2.3× for automated classification.',
      'Engineered an enterprise GraphRAG knowledge-retrieval platform (LlamaIndex, Neo4j, FAISS hybrid search), lifting retrieval accuracy 32% and cutting lookup latency 45%.',
      'Orchestrated an MLOps pipeline with Docker containerization and Kubernetes deployment (Rancher/CaaS), achieving zero-regression releases through automated GitHub Actions CI/CD.',
    ],
    stack: ['Python', 'OpenAI', 'Azure AI Foundry', 'LangChain', 'LlamaIndex', 'Neo4j', 'FAISS', 'Docker', 'Kubernetes'],
  },
  {
    role: 'Full Stack Development Intern',
    org: 'Delonix Designs',
    location: 'Chennai, India',
    period: 'Apr 2023 – May 2023',
    bullets: [
      'Developed "Tri2Champ," a high-concurrency web application for live sports registration supporting 1,000+ participants, achieving a 100% transaction success rate through secure payment gateway integration.',
      'Engineered a responsive React frontend and a robust Node.js backend with RESTful APIs for real-time dashboards, reducing manual administrative coordination by approximately 50%.',
      'Collaborated in an Agile environment to deliver production-ready features, using Git for version control and ensuring alignment between designer specs and stakeholder requirements.',
      'Designed backend data models and API contracts supporting distributed, concurrent registration workflows across web clients.',
    ],
    stack: ['React', 'Node.js', 'REST APIs', 'Git'],
  },
]

export const education = [
  {
    school: 'Vellore Institute of Technology (VIT)',
    degree: 'M.Tech — Computer Science & Engineering (AI & Machine Learning)',
    detail: 'CGPA: 9.34 / 10',
    period: 'Aug 2024 – Jun 2026',
  },
  {
    school: 'Loyola-ICAM College of Engineering & Technology (Anna University)',
    degree: 'B.E. — Computer Science and Engineering',
    detail: 'CGPA: 9.16 / 10',
    period: 'Aug 2020 – May 2024',
  },
]
