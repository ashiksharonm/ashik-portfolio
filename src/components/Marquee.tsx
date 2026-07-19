import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode[]
  duration?: number
  className?: string
}

/** Infinite horizontal auto-scroll (pure CSS keyframes), pauses on hover. Duplicates content for a seamless loop. */
export default function Marquee({ children, duration = 32, className = '' }: MarqueeProps) {
  return (
    <div className={`group overflow-hidden ${className}`}>
      <div
        className="marquee-track flex w-max gap-6 group-hover:[animation-play-state:paused]"
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 gap-6">{children}</div>
        <div className="flex shrink-0 gap-6" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
