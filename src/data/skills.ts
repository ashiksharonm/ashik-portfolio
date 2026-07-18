export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'C++17', 'Java 17', 'TypeScript', 'JavaScript', 'SQL', 'C'],
  },
  {
    label: 'AI / ML',
    items: ['PyTorch', 'HuggingFace Transformers', 'LangChain', 'LlamaIndex', 'FAISS', 'CLIP / BLIP', 'scikit-learn', 'XGBoost'],
  },
  {
    label: 'Agentic / GenAI',
    items: ['Anthropic Claude API', 'OpenAI API', 'MCP (Model Context Protocol)', 'Agent Tool Orchestration', 'GraphRAG'],
  },
  {
    label: 'Backend',
    items: ['FastAPI', 'Django REST Framework', 'Node.js', 'REST APIs', 'Microservices', 'Clean Architecture'],
  },
  {
    label: 'Cloud / DevOps',
    items: ['AWS (Lambda, SageMaker, EC2, S3)', 'Azure AI Foundry', 'GCP', 'Docker', 'Kubernetes', 'GitHub Actions'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Neo4j', 'Apache Kafka', 'Supabase'],
  },
]
