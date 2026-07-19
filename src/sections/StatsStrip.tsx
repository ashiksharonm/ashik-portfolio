import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { stats } from '../data/stats'

export default function StatsStrip() {
  return (
    <section className="border-y border-outline/10 bg-surface-container-lowest/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4 md:px-12 lg:px-24">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <p className="font-headline text-3xl font-bold text-tertiary sm:text-4xl">
              <Counter to={stat.value} decimals={stat.decimals} suffix={stat.suffix} prefix={stat.prefix} />
            </p>
            <p className="mt-2 text-sm text-on-surface-variant">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
