import Reveal from '../components/Reveal'
import SectionNode from '../components/SectionNode'
import { patents, researchPaper } from '../data/patents'

export default function Patents() {
  return (
    <section id="research" className="mx-auto max-w-4xl px-6 py-28 md:px-12 lg:px-24">
      <SectionNode index="06" title="Patents & Research" />
      <p className="mb-10 max-w-xl text-on-surface-variant">
        Two patents published, one paper under review — where my engineering turns into IP.
      </p>

      <div className="space-y-6">
        {patents.map((patent, i) => (
          <Reveal key={patent.title} delay={i * 0.06}>
            <div className="rounded-xl border-l-2 border-tertiary/50 bg-surface-container-low p-6">
              <span className="font-mono text-xs uppercase tracking-wide text-secondary">{patent.status}</span>
              <h3 className="mt-2 font-headline text-lg font-semibold text-on-surface">{patent.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{patent.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {patent.keywords.map((k) => (
                  <span key={k} className="rounded-full border border-outline/20 px-2.5 py-0.5 font-mono text-xs text-on-surface-variant">
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.12}>
          <div className="rounded-xl border-l-2 border-outline/30 bg-surface-container-low p-6">
            <span className="font-mono text-xs uppercase tracking-wide text-secondary">{researchPaper.venue}</span>
            <h3 className="mt-2 font-headline text-lg font-semibold text-on-surface">{researchPaper.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{researchPaper.description}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
