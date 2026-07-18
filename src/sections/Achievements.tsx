import Reveal from '../components/Reveal'
import SectionNode from '../components/SectionNode'
import { achievements, leadershipNote } from '../data/achievements'

export default function Achievements() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-12 lg:px-24">
      <SectionNode index="09" title="Achievements" />
      <div className="space-y-4">
        {achievements.map((a, i) => (
          <Reveal key={a.org} delay={i * 0.05}>
            {a.link ? (
              <a
                href={a.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-xl border border-outline/15 bg-surface-container-low p-5 transition-colors hover:border-tertiary/40"
              >
                <AchievementContent a={a} />
              </a>
            ) : (
              <div className="flex items-start gap-4 rounded-xl border border-outline/15 bg-surface-container-low p-5">
                <AchievementContent a={a} />
              </div>
            )}
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <p className="mt-8 text-sm leading-relaxed text-on-surface-variant">{leadershipNote}</p>
      </Reveal>
    </section>
  )
}

function AchievementContent({ a }: { a: (typeof achievements)[number] }) {
  return (
    <>
      <span className="mt-0.5 shrink-0 rounded-full bg-secondary/10 px-3 py-1 font-mono text-xs font-semibold text-secondary">
        {a.title}
      </span>
      <div>
        <p className="font-medium text-on-surface">{a.org}</p>
        <p className="mt-1 text-sm text-on-surface-variant">{a.description}</p>
      </div>
    </>
  )
}
