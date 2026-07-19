import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { categoryLabels } from '../data/projects'
import { coverImageUrl, lockFromSlug } from '../lib/coverImage'

export default function CaseStudyCard({ project }: { project: Project }) {
  const href = project.demo ?? project.github

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-outline bg-surface-container p-3 transition-colors hover:border-tertiary/50 sm:gap-5 sm:p-4"
    >
      {/* browser-window mockup */}
      <div className="w-28 shrink-0 overflow-hidden rounded-lg border border-outline sm:w-36">
        <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-outline" />
          <span className="h-1.5 w-1.5 rounded-full bg-outline" />
          <span className="h-1.5 w-1.5 rounded-full bg-outline" />
        </div>
        <img
          src={coverImageUrl(project.coverKeyword, lockFromSlug(project.slug), 320, 200)}
          alt=""
          loading="lazy"
          className="aspect-[8/5] w-full object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <span className="inline-block rounded-full bg-surface-container-low px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-on-surface-variant">
          {categoryLabels[project.category]}
        </span>
        <h3 className="mt-2 font-headline text-base font-semibold leading-snug text-on-surface sm:text-lg">
          {project.name}
        </h3>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-tertiary">
          See Details <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  )
}
