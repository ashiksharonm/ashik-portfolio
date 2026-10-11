export interface Patent {
  title: string
  status: string
  description: string
  keywords: string[]
}

export const patents: Patent[] = [
  {
    title: 'Adaptive Multi-Agent Generative AI System for Automated Legal Contract Drafting and Advisory',
    status: 'Invention disclosure (IDF-B), VIT IPR & TT Cell — not yet filed or granted',
    description:
      'A multi-agent architecture (Clause Selector, Drafter, Compliance, Verifier) for contract drafting and advisory, with provenance logging and secure hardware integration for tamper-evident traceability.',
    keywords: ['Multi-Agent Systems', 'Legal AI', 'Provenance Logging', 'HSM/TPM Security'],
  },
  {
    title: 'Hardware-Accelerated Semantic Downlink of Synthetic Aperture Radar (SAR) Data with Onboard Vision-Language Models',
    status: 'Invention disclosure (IDF-B), VIT IPR & TT Cell — not yet filed or granted',
    description:
      'A "semantic downlink" concept that converts SAR imagery into compact textual briefings onboard using vision-language models and FPGA acceleration, instead of downlinking raw imagery.',
    keywords: ['Synthetic Aperture Radar', 'Vision-Language Models', 'FPGA'],
  },
  {
    title: 'Dual-Processor Hallucination-Hardened Generative AI Mission Briefing Engine',
    status: 'Invention disclosure (IDF-B), VIT IPR & TT Cell — not yet filed or granted',
    description:
      'A dual-processor design that confines LLM briefing output with hardware-enforced semantic veracity checks, contradiction detection, tiered content gating and a tamper-evident audit trail.',
    keywords: ['LLM Safety', 'Hallucination Detection', 'Hardware Security'],
  },
]

export const researchPaper = {
  title: 'Zero-Shot Land Cover Classification of SAR-like Imagery using Vision-Language Models (VLMs)',
  venue: 'Under review, Journal of Applied Earth Observation and Geoinformation (Elsevier)',
  description:
    '31.5% Top-1 zero-shot accuracy on EuroSAT without any labeled training samples, improved to 44.26% via hierarchical prompting — benchmarked across 27,000 images comparing CLIP ViT-B/32 vs. ViT-L/14.',
}

export interface OpenSourceContribution {
  org: string
  prLabel: string
  description: string
  link: string
}

export const openSource: OpenSourceContribution[] = [
  {
    org: 'Meta — FAISS',
    prLabel: 'PR #4792 · merged',
    description:
      "Fixed a multi-platform CI build regression in the FAISS vector-search library (merged).",
    link: 'https://github.com/facebookresearch/faiss/pull/4792',
  },
  {
    org: 'Google DeepMind — Gemma',
    prLabel: 'PR #590 · open',
    description:
      'Open PR fixing a runtime crash in Sampler.sample() in the Gemma2 implementation, with regression tests.',
    link: 'https://github.com/google-deepmind/gemma/pull/590',
  },
]
