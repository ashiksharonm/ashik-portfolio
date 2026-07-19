import { motion } from 'framer-motion'
import { asset } from '../lib/asset'

export default function Hero() {
  return (
    <section id="home" className="relative flex h-screen min-h-[640px] items-end overflow-hidden">
      {/* full-bleed cinematic still, code-driven motion only — no AI-generated imagery */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={asset('profile.jpg')}
          alt="Ashik Sharon M"
          className="h-full w-full object-cover object-top"
          initial={{ scale: 1.12 }}
          animate={{ scale: [1.12, 1.04, 1.1] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface/70 via-transparent to-surface/40" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-tertiary/15 blur-[140px]"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 w-full px-6 pb-16 md:px-12 md:pb-20 lg:px-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-3 font-mono text-xs tracking-[0.3em] text-tertiary"
        >
          ASHIK SHARON M · AI ENGINEER
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-headline text-4xl font-bold leading-[1.05] text-on-surface sm:text-6xl lg:text-7xl"
        >
          I ship agents that actually reach production.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-5 max-w-lg text-base text-on-surface-variant sm:text-lg"
        >
          Agentic AI at CobuildX.ai. GraphRAG at Intel. Two patents published, contributions
          merged into Meta FAISS and Google DeepMind Gemma.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-transform hover:scale-105"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-outline/50 px-6 py-3 text-sm font-semibold text-on-surface backdrop-blur-sm transition-colors hover:border-tertiary hover:text-tertiary"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-6 right-6 hidden font-mono text-xs text-on-surface-variant/70 sm:right-12 sm:block"
      >
        scroll ↓
      </motion.div>
    </section>
  )
}
