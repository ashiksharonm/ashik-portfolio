import { motion } from 'framer-motion'

interface SectionNodeProps {
  index: string
  title: string
}

/** A node on the Signal Line: lights up from dim to gradient when its section scrolls into view. */
export default function SectionNode({ index, title }: SectionNodeProps) {
  return (
    <div className="mb-6 flex items-center gap-3 md:gap-4">
      <motion.span
        initial={{ backgroundColor: 'var(--color-outline)', scale: 0.8 }}
        whileInView={{ backgroundColor: 'var(--color-tertiary)', scale: 1 }}
        viewport={{ once: true, margin: '-35% 0px -35% 0px' }}
        transition={{ duration: 0.5 }}
        className="h-2.5 w-2.5 shrink-0 rounded-full"
      />
      <span className="font-mono text-xs tracking-[0.2em] text-outline">{index}</span>
      <h2 className="font-headline text-3xl font-semibold text-on-surface md:text-4xl">{title}</h2>
    </div>
  )
}
