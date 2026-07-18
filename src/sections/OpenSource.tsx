import Reveal from '../components/Reveal'
import SectionNode from '../components/SectionNode'
import { openSource } from '../data/patents'

export default function OpenSource() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-12 lg:px-24">
      <SectionNode index="07" title="Open Source" />
      <p className="mb-10 max-w-xl text-on-surface-variant">
        Two fixes that shipped to production code at Meta and Google DeepMind.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {openSource.map((contrib, i) => (
          <Reveal key={contrib.link} delay={i * 0.08}>
            <a
              href={contrib.link}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-xl border border-outline/15 bg-surface-container-low p-6 transition-colors hover:border-tertiary/40"
            >
              {/* Plain wordmark, no AI-redrawn logos — trademark-safe */}
              <span className="font-headline text-lg font-semibold text-on-surface">{contrib.org}</span>
              <span className="mt-1 font-mono text-xs text-tertiary">{contrib.prLabel}</span>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-on-surface-variant">{contrib.description}</p>
              <span className="mt-4 text-sm font-medium text-secondary group-hover:underline">
                View pull request →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
