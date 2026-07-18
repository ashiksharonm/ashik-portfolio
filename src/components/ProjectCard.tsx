import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { Project } from '../data/projects'
import { asset } from '../lib/asset'

/** Featured project card: subtle mouse-tilt on pointer devices, flat on touch. */
export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative overflow-hidden rounded-xl border border-outline/15 bg-surface-container-low"
    >
      <div className="aspect-video w-full overflow-hidden bg-surface-container">
        {project.thumb ? (
          <img
            src={asset(project.thumb)}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <span className="font-mono text-xs tracking-widest text-outline">{project.name}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-headline text-lg font-semibold text-on-surface">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="rounded-full bg-surface px-2.5 py-0.5 font-mono text-xs text-on-surface-variant">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-tertiary hover:underline"
          >
            GitHub →
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-secondary hover:underline"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
