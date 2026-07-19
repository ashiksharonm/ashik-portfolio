import { Sparkle } from 'lucide-react'
import Marquee from './Marquee'

const ITEMS = ['AGENTIC AI', 'RAG / GRAPHRAG', 'MCP', 'MLOPS', 'CLOUD NATIVE', 'BACKEND SYSTEMS']

export default function TickerBar() {
  return (
    <div className="bg-primary py-3 text-on-primary">
      <Marquee duration={22}>
        {ITEMS.map((item) => (
          <span key={item} className="flex shrink-0 items-center gap-6 font-headline text-sm font-bold tracking-wide sm:text-base">
            {item}
            <Sparkle size={14} className="shrink-0" />
          </span>
        ))}
      </Marquee>
    </div>
  )
}
