import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { offerings } from '../data/offerings'

export default function Offerings() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-12 lg:px-24">
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-on-surface-variant">— What I Work On</p>
          <h2 className="font-headline text-3xl font-bold text-on-surface sm:text-4xl">Where I Focus</h2>
        </div>
        <p className="max-w-sm text-sm text-on-surface-variant">
          Three areas I keep coming back to, across every job and side project.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {offerings.map((offering, i) => (
          <Reveal key={offering.title} delay={i * 0.08}>
            <a
              href={offering.href}
              className={`group flex h-full flex-col justify-between rounded-xl border border-outline p-6 transition-transform hover:-translate-y-1 ${
                offering.invert ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface'
              }`}
            >
              <div>
                <h3 className="font-headline text-lg font-bold">{offering.title}</h3>
                <p className={`mt-2 text-sm ${offering.invert ? 'text-on-primary/75' : 'text-on-surface-variant'}`}>
                  {offering.description}
                </p>
              </div>
              <span className="mt-6 flex items-center gap-1 text-sm font-semibold">
                Explore
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
