export interface Patent {
  title: string
  status: string
  description: string
  keywords: string[]
}

export const patents: Patent[] = [
  {
    title: 'Adaptive Multi-Agent Generative AI System for Automated Legal Contract Drafting and Advisory',
    status: 'Patent application filed, 2025',
    description:
      'Designed a multi-agent architecture (Clause Selector, Drafter, Compliance, Verifier) achieving a 92% F1-score in information extraction from dense legal documents using LayoutLMv3, with an HSM-signed WORM audit-log layer for tamper-evident traceability.',
    keywords: ['LayoutLMv3', 'Multi-Agent Systems', 'HSM/TPM Security', 'Natural Language Inference'],
  },
  {
    title: 'Hardware-Accelerated Semantic Downlink of Synthetic Aperture Radar (SAR) Data with Onboard Vision-Language Models',
    status: 'Patent application filed',
    description:
      'A "Semantic Downlink" pipeline that reduces satellite-to-ground bandwidth requirements by 95%+, converting high-resolution SAR imagery into high-veracity tactical briefings onboard using a Veracity Enforcement Processor with <250ms per-sentence inference latency.',
    keywords: ['Synthetic Aperture Radar', 'Vision-Language Models', 'Hardware-Enforced Veracity'],
  },
]

export const researchPaper = {
  title: 'Zero-Shot Land Cover Classification of SAR-like Imagery using Vision-Language Models (VLMs)',
  venue: 'Under review, IEEE GeoScience and Remote Sensing Letters (International)',
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
    prLabel: 'PR #4792',
    description:
      "Fixed a multi-platform CI regression, restoring build stability for a vector-search library used at global scale across mission-critical similarity-search workflows.",
    link: 'https://github.com/facebookresearch/faiss/pull/4792',
  },
  {
    org: 'Google DeepMind — Gemma',
    prLabel: 'PR #590',
    description:
      'Resolved a runtime crash in the Sampler.sample() method of the Gemma2 implementation and added regression tests securing the inference pipeline for a production LLM repository.',
    link: 'https://github.com/google-deepmind/gemma/pull/590',
  },
]
