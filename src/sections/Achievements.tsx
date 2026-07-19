import Reveal from '../components/Reveal'
import SectionNode from '../components/SectionNode'
import SpotlightCard from '../components/SpotlightCard'
import { achievements } from '../data/achievements'

export default function Achievements() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:px-12 lg:px-24">
      <SectionNode index="09" title="Achievements" />
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.org} delay={i * 0.05}>
            <SpotlightCard
              as={a.link ? 'a' : 'div'}
              href={a.link}
              target={a.link ? '_blank' : undefined}
              rel={a.link ? 'noreferrer' : undefined}
              className="flex h-full flex-col p-5"
            >
              {/* Badge as its own line (kicker), so titles always align regardless of badge text length */}
              <span className="w-fit rounded-full bg-secondary/10 px-3 py-1 font-mono text-xs font-semibold text-secondary">
                {a.title}
              </span>
              <p className="mt-3 font-headline font-medium text-on-surface">{a.org}</p>
              <p className="mt-1 text-sm text-on-surface-variant">{a.description}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
