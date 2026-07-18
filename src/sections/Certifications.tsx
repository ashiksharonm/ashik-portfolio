import { useState } from 'react'
import Reveal from '../components/Reveal'
import SectionNode from '../components/SectionNode'
import { certificationsHighlighted, certificationsRest } from '../data/certifications'

export default function Certifications() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:px-12 lg:px-24">
      <SectionNode index="08" title="Certifications" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certificationsHighlighted.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.04}>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="flex h-full items-center gap-3 rounded-xl border border-outline/15 bg-surface-container-low p-4 transition-colors hover:border-tertiary/40"
            >
              <span className="rounded-lg bg-primary/10 px-2 py-1 font-mono text-[10px] font-semibold text-primary">
                {cert.issuer}
              </span>
              <span className="text-sm text-on-surface-variant">{cert.name}</span>
            </a>
          </Reveal>
        ))}
      </div>

      {certificationsRest.length > 0 && (
        <div className="mt-6">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="text-sm font-medium text-tertiary hover:underline"
          >
            {showAll ? 'Show less' : `Show ${certificationsRest.length} more`}
          </button>
          {showAll && (
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {certificationsRest.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-outline/15 bg-surface-container-low p-4 transition-colors hover:border-tertiary/40"
                >
                  <span className="rounded-lg bg-primary/10 px-2 py-1 font-mono text-[10px] font-semibold text-primary">
                    {cert.issuer}
                  </span>
                  <span className="text-sm text-on-surface-variant">{cert.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
