import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionNode from '../components/SectionNode'
import { archiveProjects, categoryLabels, type ProjectCategory } from '../data/projects'
import { asset } from '../lib/asset'

const CATEGORIES: (ProjectCategory | 'all')[] = ['all', 'genai', 'backend', 'mlops', 'data', 'fullstack']

export default function ProjectArchive() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')
  const visible = filter === 'all' ? archiveProjects : archiveProjects.filter((p) => p.category === filter)

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-12 lg:px-24">
      <SectionNode index="05" title="Project Archive" />
      <p className="mb-8 max-w-xl text-on-surface-variant">
        Everything else — twenty-plus projects across GenAI, backend systems, MLOps, and data
        engineering.
      </p>

      <div className="no-sb mb-10 flex gap-2 overflow-x-auto pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-sm transition-colors ${
              filter === cat
                ? 'border-tertiary bg-tertiary/10 text-tertiary'
                : 'border-outline/20 text-on-surface-variant hover:border-outline/40'
            }`}
          >
            {cat === 'all' ? 'All' : categoryLabels[cat]}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {visible.map((project) => (
            <motion.a
              layout
              key={project.slug}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-outline/15 bg-surface-container-low transition-colors hover:border-outline/30"
            >
              <div className="aspect-[16/9] w-full overflow-hidden bg-surface-container">
                {project.thumb ? (
                  <img
                    src={asset(project.thumb)}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                    <span className="font-mono text-[10px] tracking-widest text-outline">
                      {categoryLabels[project.category]}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-headline text-base font-semibold text-on-surface">{project.name}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-on-surface-variant">{project.description}</p>
                <span className="mt-3 text-xs font-medium text-tertiary">View on GitHub →</span>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
