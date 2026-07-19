import { Trophy } from 'lucide-react'
import Reveal from './Reveal'

/**
 * Replaces the reference layout's "client testimonial" slot. There's no real client
 * quote to feature here, so this surfaces a real, verifiable achievement instead
 * of a fabricated quote from a made-up person.
 */
export default function AchievementQuote() {
  return (
    <Reveal>
      <div className="rounded-xl border border-outline bg-surface-container p-6 sm:p-8">
        <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">Recognition</span>
        <p className="mt-3 font-headline text-2xl font-bold leading-tight text-on-surface sm:text-3xl">
          "Ranked Top 100 statewide, out of 500+ shortlisted teams."
        </p>
        <div className="mt-5 flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
            <Trophy size={18} strokeWidth={1.75} />
          </span>
          <div>
            <p className="text-sm font-semibold text-on-surface">AgroVoiceAI</p>
            <p className="text-xs text-on-surface-variant">Niral Thiruvizha 2024, Govt. of Tamil Nadu</p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
