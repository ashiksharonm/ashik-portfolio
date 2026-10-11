export interface Stat {
  value: number
  decimals?: number
  suffix?: string
  prefix?: string
  label: string
}

export const stats: Stat[] = [
  { value: 39.4, decimals: 1, suffix: '%', label: 'fewer LLM input tokens shipped at Intel' },
  { value: 32, suffix: '%', label: 'retrieval-accuracy gain from the Intel GraphRAG platform' },
  { value: 0.876, decimals: 3, label: 'micro-F1 for Donut on 100 CORD-v2 docs (extract-eval)' },
  { value: 1, label: 'merged upstream PR in Meta FAISS (Gemma PR open)' },
]
