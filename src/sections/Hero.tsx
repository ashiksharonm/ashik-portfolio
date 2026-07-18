import { motion } from 'framer-motion'
import { asset } from '../lib/asset'

const HEADLINE_LINES = ['AI Engineer.', 'I ship agentic systems,', 'retrieval pipelines, and the', 'infrastructure that keeps them honest.']

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 md:px-12 lg:px-24">
      {/* ambient glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-secondary/20 blur-[140px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* mobile background photo, low opacity, full bleed */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={asset("profile.jpg")}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/70 to-surface" />
      </div>

      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm tracking-[0.25em] text-tertiary"
          >
            ASHIK SHARON M
          </motion.p>
          <h1 className="font-headline text-4xl font-bold leading-[1.1] text-on-surface sm:text-5xl lg:text-6xl">
            {HEADLINE_LINES.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 max-w-lg text-base text-on-surface-variant sm:text-lg"
          >
            Currently building agentic AI features at CobuildX.ai. Previously at Intel — multi-agent
            LLM automation and GraphRAG at production scale. Two patents filed, contributions merged
            into Meta FAISS and Google DeepMind Gemma.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
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
              className="rounded-full border border-outline/50 px-6 py-3 text-sm font-semibold text-on-surface transition-colors hover:border-tertiary hover:text-tertiary"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* desktop photo: still + code-driven motion, no AI-generated imagery */}
        <div className="relative hidden md:col-span-2 md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-xl border border-outline/20"
          >
            <motion.img
              src={asset("profile.jpg")}
              alt="Ashik Sharon M"
              className="h-full w-full object-cover object-top"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{
                background: 'linear-gradient(160deg, rgba(163,166,255,0.35), rgba(172,138,255,0.15) 45%, rgba(13,13,22,0.55))',
              }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
