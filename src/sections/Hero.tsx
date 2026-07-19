import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Download, Hand } from 'lucide-react'
import { asset } from '../lib/asset'
import { quickLinks } from '../data/quickLinks'

const CHECKLIST = [
  'Ship agents that reach production',
  'Retrieval that stays accurate at scale',
  'Evaluate, monitor, iterate — never guess',
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-16 pt-28 md:px-12 lg:px-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-30 blur-[100px]"
        style={{ background: 'conic-gradient(from 180deg, #2563eb, #7c3aed, #ec4899, #f59e0b, #2563eb)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* quick nav row */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 hidden flex-wrap gap-10 sm:flex"
        >
          {quickLinks.map((link) => (
            <a key={link.label} href={link.href} className="group">
              <span className="flex items-center gap-1 text-sm font-semibold text-on-surface">
                {link.label}
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="mt-0.5 block max-w-[10rem] text-xs text-on-surface-variant">{link.description}</span>
            </a>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low text-tertiary"
            >
              <motion.div
                animate={{ rotate: [0, 18, -12, 18, 0] }}
                transition={{ duration: 1.4, delay: 0.6, ease: 'easeInOut' }}
              >
                <Hand size={20} strokeWidth={1.75} />
              </motion.div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-headline text-5xl font-bold leading-[1.05] text-on-surface sm:text-6xl"
            >
              Hello! I'm <span className="whitespace-nowrap">Ashik</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 flex items-center gap-2 text-xl text-on-surface-variant"
            >
              <span className="h-px w-8 bg-outline" />
              AI Engineer
              <span className="text-tertiary">✦</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-md text-on-surface-variant"
            >
              I'm an <strong className="text-on-surface">AI Engineer</strong>, agentic-systems builder,
              and <strong className="text-on-surface">RAG</strong> practitioner — currently shipping
              production MCP agents, previously cutting LLM costs 39% at Intel.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 space-y-2"
            >
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-on-surface">
                  <Check size={16} className="shrink-0 text-tertiary" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <a
                href="#contact"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-transform hover:scale-105"
              >
                Let's Talk
              </a>
              <a
                href="/ashik-portfolio/resume.pdf"
                download
                className="flex items-center gap-2 text-sm font-semibold text-on-surface underline decoration-outline decoration-2 underline-offset-4 hover:decoration-tertiary"
              >
                Download CV
                <Download size={15} />
              </a>
            </motion.div>
          </div>

          {/* photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-outline">
              <img src={asset('profile.jpg')} alt="Ashik Sharon M" className="h-full w-full object-cover object-top" />
            </div>
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.7, type: 'spring' }}
              className="absolute -bottom-5 -left-5 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg"
            >
              <span className="font-headline text-sm font-bold leading-tight">
                AI
                <br />
                Eng.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
