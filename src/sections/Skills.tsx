import Reveal from '../components/Reveal'
import SectionNode from '../components/SectionNode'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:px-12 lg:px-24">
      <SectionNode index="02" title="Technical Arsenal" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-outline/15 bg-surface-container-low p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-tertiary">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-outline/20 bg-surface px-3 py-1 text-xs text-on-surface-variant"
                  >
                    {item}
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
