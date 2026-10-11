import Reveal from '../components/Reveal'
import SectionNode from '../components/SectionNode'
import { education } from '../data/experience'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-28 md:px-12 lg:px-24">
      <SectionNode index="01" title="About" />
      <Reveal>
        <p className="text-lg leading-relaxed text-on-surface-variant sm:text-xl">
          I'm an AI/ML Engineer Intern at{' '}
          <span className="text-on-surface">CobuildX.ai</span>, building agentic workflows with LangGraph
          and MCP and contributing to an LLM evaluation platform (async eval pipelines on AWS Lambda and SQS). Before that, at{' '}
          <span className="text-on-surface">Intel Technology India</span>, I built a multi-agent
          LLM ticket-automation system and a GraphRAG knowledge platform on Neo4j and FAISS. I'm
          finishing an M.Tech in AI &amp; Machine Learning at VIT, alongside three invention disclosures at VIT's IPR cell (not yet filed or granted) and a paper under review at Elsevier. Outside of work, I maintain a
          growing set of personal systems projects, from a from-scratch C memory allocator to
          production-style RAG and ML-serving pipelines, and I've had a CI fix merged into Meta's
          FAISS and have an open PR against Google DeepMind's Gemma.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-16 grid gap-6 sm:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="rounded-xl border border-outline/15 bg-surface-container-low p-6"
          >
            <p className="font-mono text-xs tracking-wide text-tertiary">{edu.period}</p>
            <h3 className="mt-2 font-headline text-lg font-semibold text-on-surface">{edu.school}</h3>
            <p className="mt-1 text-sm text-on-surface-variant">{edu.degree}</p>
            <p className="mt-2 text-sm font-medium text-secondary">{edu.detail}</p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
