export interface Offering {
  title: string
  description: string
  href: string
  invert?: boolean
}

export const offerings: Offering[] = [
  {
    title: 'Agentic AI & MCP',
    description: 'Multi-agent orchestration, custom MCP servers/tools, scoped tool access.',
    href: '#work',
    invert: true,
  },
  {
    title: 'RAG & Retrieval',
    description: 'Hybrid graph + vector retrieval, GraphRAG, query routing, eval harnesses.',
    href: '#work',
  },
  {
    title: 'MLOps & Cloud',
    description: 'Docker, Kubernetes, CI/CD, AWS/Azure — models that actually stay in production.',
    href: '#experience',
  },
]
