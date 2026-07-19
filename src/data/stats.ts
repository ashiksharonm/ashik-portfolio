export interface Stat {
  value: number
  decimals?: number
  suffix?: string
  prefix?: string
  label: string
}

export const stats: Stat[] = [
  { value: 39.4, decimals: 1, suffix: '%', label: 'fewer LLM input tokens shipped at Intel' },
  { value: 92, suffix: '%', label: 'F1-score on the patented legal-drafting system' },
  { value: 24, suffix: '+', label: 'production-style projects shipped solo' },
  { value: 2, label: 'merged PRs — Meta FAISS & Google DeepMind Gemma' },
]
