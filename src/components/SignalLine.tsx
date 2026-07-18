import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

/**
 * The page's organizing visual metaphor: a continuous signal trace running down
 * the left spine of the page, with a "packet" that travels proportional to
 * scroll progress. Hidden on mobile — the timeline itself provides enough
 * structure there without a redundant global line.
 */
export default function SignalLine() {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.4 })
  const packetTop = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="pointer-events-none fixed inset-y-0 left-6 z-40 hidden w-px md:block lg:left-10">
      <div className="h-full w-px bg-gradient-to-b from-outline/0 via-outline/40 to-outline/0" />
      <motion.div
        className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tertiary shadow-[0_0_14px_4px] shadow-tertiary/50"
        style={{ top: packetTop }}
      />
    </div>
  )
}
