import Reveal from '../components/Reveal'
import SectionNode from '../components/SectionNode'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-28 md:px-12 lg:px-24">
      <SectionNode index="03" title="Experience" />
      <p className="mb-12 max-w-xl text-on-surface-variant">
        Where I've built — from a Chennai sports-registration app to agentic AI systems in
        production.
      </p>

      <div className="space-y-10">
        {experience.map((job, i) => (
          <Reveal key={job.org} delay={i * 0.05} direction={i % 2 === 0 ? 'left' : 'right'}>
            <div className="relative rounded-xl border border-outline/15 bg-surface-container-low p-6 sm:p-8">
              {job.current && (
                <span className="absolute -top-3 left-6 rounded-full bg-tertiary px-3 py-1 text-xs font-semibold text-surface">
                  Current
                </span>
              )}
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <h3 className="font-headline text-xl font-semibold text-on-surface">{job.role}</h3>
                <span className="font-mono text-xs text-tertiary">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-secondary">
                {job.org} · {job.location}
              </p>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-on-surface-variant">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-outline" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-outline/20 px-2.5 py-0.5 font-mono text-xs text-on-surface-variant"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
