import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
}

const offsets = {
  up: { y: 28, x: 0 },
  left: { y: 0, x: -28 },
  right: { y: 0, x: 28 },
}

/** Shared scroll-triggered reveal used across every section for a consistent feel. */
export default function Reveal({ children, delay = 0, direction = 'up', className }: RevealProps) {
  const offset = offsets[direction]
  return (
    <motion.div
      initial={{ opacity: 0, y: offset.y, x: offset.x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
