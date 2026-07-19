import { useState } from 'react'
import Reveal from '../components/Reveal'
import SectionNode from '../components/SectionNode'

// TODO(ashik): create a form at https://formspree.io using sharonashik20@gmail.com
// and replace FORMSPREE_ENDPOINT below with the real endpoint, e.g.
// 'https://formspree.io/f/abcdwxyz'. See README.md for the full setup step.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdaqgzjj'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 md:px-12 lg:px-24">
      <SectionNode index="11" title="Let's Connect" />
      <p className="mb-10 max-w-xl text-on-surface-variant">
        Building something interesting? I'd like to hear about it.
      </p>

      <Reveal>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="rounded-lg border border-outline/20 bg-surface-container-low px-4 py-3 text-base text-on-surface placeholder:text-on-surface-variant/60 focus:border-tertiary focus:outline-none"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="rounded-lg border border-outline/20 bg-surface-container-low px-4 py-3 text-base text-on-surface placeholder:text-on-surface-variant/60 focus:border-tertiary focus:outline-none"
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="What are you building?"
            className="w-full rounded-lg border border-outline/20 bg-surface-container-low px-4 py-3 text-base text-on-surface placeholder:text-on-surface-variant/60 focus:border-tertiary focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-transform hover:scale-105 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'sent' && <p className="text-sm text-tertiary">Thanks — I'll get back to you soon.</p>}
          {status === 'error' && (
            <p className="text-sm text-secondary">
              Something went wrong — email me directly at{' '}
              <a href="mailto:sharonashik20@gmail.com" className="underline">
                sharonashik20@gmail.com
              </a>
              .
            </p>
          )}
        </form>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-6 text-sm">
        <a href="mailto:sharonashik20@gmail.com" className="text-on-surface-variant hover:text-tertiary">
          sharonashik20@gmail.com
        </a>
        <a
          href="https://github.com/ashiksharonm"
          target="_blank"
          rel="noreferrer"
          className="text-on-surface-variant hover:text-tertiary"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ashik-sharon-6757011b3/"
          target="_blank"
          rel="noreferrer"
          className="text-on-surface-variant hover:text-tertiary"
        >
          LinkedIn
        </a>
      </Reveal>
    </section>
  )
}
