import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#research', label: 'Research' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 md:px-12 ${
        scrolled ? 'bg-surface/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <a href="#home" className="font-mono text-sm font-semibold tracking-tight text-on-surface">
        ash<span className="text-tertiary">.</span>sh
      </a>
      <nav className="hidden gap-8 md:flex">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-on-surface-variant transition-colors hover:text-tertiary"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="rounded-full border border-outline/40 px-4 py-1.5 text-sm text-on-surface transition-colors hover:border-tertiary hover:text-tertiary"
      >
        Let's talk
      </a>
    </motion.header>
  )
}
