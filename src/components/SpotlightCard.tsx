import { useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import type { ReactNode } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'a'
  href?: string
  target?: string
  rel?: string
}

/**
 * A card with a mouse-following radial glow that brightens the border on hover.
 * Inert on touch devices (no mousemove events fire there), so it degrades to a
 * plain static card automatically.
 */
export default function SpotlightCard({ children, className = '', as = 'div', href, target, rel }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [opacity, setOpacity] = useState(0)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const background = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, rgba(140,231,255,0.12), transparent 70%)`

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp: any = as === 'a' ? motion.a : motion.div

  return (
    <Comp
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`group relative overflow-hidden rounded-xl border border-outline/15 bg-surface-container-low ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{ background, opacity }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-colors duration-300 group-hover:border-tertiary/30" />
      {children}
    </Comp>
  )
}
