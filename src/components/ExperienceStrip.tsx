import Reveal from './Reveal'
import { experience, education } from '../data/experience'

interface StripRow {
  title: string
  org: string
  period: string
}

const rows: StripRow[] = [
  ...experience.map((e) => ({ title: e.role, org: e.org, period: e.period })),
  { title: education[0].degree.split('—')[0].trim(), org: education[0].school, period: education[0].period },
]

export default function ExperienceStrip() {
  return (
    <div className="divide-y divide-outline overflow-hidden rounded-xl border border-outline">
      {rows.map((row, i) => (
        <Reveal key={row.title} delay={i * 0.05} direction="right">
          <div
            className={`flex items-center justify-between gap-4 px-5 py-4 ${
              i === 0 ? 'bg-primary text-on-primary' : 'text-on-surface'
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs ${
                  i === 0 ? 'bg-on-primary text-primary' : 'bg-surface-container-low text-on-surface-variant'
                }`}
              >
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-semibold">{row.title}</p>
                <p className={`text-xs ${i === 0 ? 'text-on-primary/70' : 'text-on-surface-variant'}`}>{row.org}</p>
              </div>
            </div>
            <span className={`hidden shrink-0 font-mono text-[11px] tracking-wide sm:block ${i === 0 ? 'text-on-primary/70' : 'text-on-surface-variant'}`}>
              {row.period.toUpperCase()}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
