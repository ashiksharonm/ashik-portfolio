export type ProjectCategory = 'genai' | 'backend' | 'mlops' | 'data' | 'fullstack'

export interface Project {
  slug: string
  name: string
  category: ProjectCategory
  description: string
  stack: string[]
  github: string
  demo?: string
  /** Keyword for a real (non-AI-generated) stock photo cover, resolved via coverImageUrl(). */
  coverKeyword: string
  featured?: boolean
}

export const projects: Project[] = [
  // --- Featured 5 ---
  {
    slug: 'polirag',
    name: 'PoliRAG',
    category: 'genai',
    description:
      'Production-grade RAG system for enterprise compliance — hybrid BM25 + FAISS retrieval with cross-encoder reranking, hierarchical RBAC, automated PII redaction, and citation-required generation.',
    stack: ['Python', 'FastAPI', 'OpenAI GPT-4', 'FAISS', 'BM25', 'spaCy', 'Docker', 'Prometheus'],
    github: 'https://github.com/ashiksharonm/PoliRAG-Enterprise-Policy-Compliance-Intelligence-Engine',
    demo: 'https://polirag-enterprise-policy-compliance.streamlit.app/',
    coverKeyword: 'law,office',
    featured: true,
  },
  {
    slug: 'alphaguard',
    name: 'AlphaGuard',
    category: 'mlops',
    description:
      'Production ML system predicting Alpha defects in hot-rolled steel — a 6-model ensemble hitting 0.845 AUC-ROC and 100% recall, served with a Prometheus/Grafana monitoring stack and Jenkins CI/CD.',
    stack: ['Python', 'scikit-learn', 'XGBoost', 'LightGBM', 'FastAPI', 'Docker Compose', 'Jenkins'],
    github: 'https://github.com/ashiksharonm/alphaguard',
    demo: 'https://huggingface.co/spaces/sharonashik005/alphaguard',
    coverKeyword: 'manufacturing,factory',
    featured: true,
  },
  {
    slug: 'votechainai',
    name: 'VoteChainAI',
    category: 'fullstack',
    description:
      'AI-backed blockchain voting platform — biometric liveness verification, client-side zero-knowledge proofs for ballot secrecy, and immutable Solidity smart contracts on Ethereum.',
    stack: ['React', 'TypeScript', 'FastAPI', 'Solidity', 'Hardhat', 'face-api.js', 'JWT'],
    github: 'https://github.com/ashiksharonm/votechainai',
    demo: 'https://votechainai.duckdns.org',
    coverKeyword: 'vote,ballot',
    featured: true,
  },
  {
    slug: 'libmalloc',
    name: 'libmalloc',
    category: 'backend',
    description:
      'A from-scratch C memory allocator — malloc/free/realloc/calloc via a doubly-linked free list, boundary-tag coalescing, and double-free detection, verified with ASAN across 10,000+ stress cycles.',
    stack: ['C', 'POSIX', 'GDB', 'AddressSanitizer', 'Valgrind', 'Makefile'],
    github: 'https://github.com/ashiksharonm/libmalloc',
    coverKeyword: 'computer,circuit',
    featured: true,
  },
  {
    slug: 'mcp-server-poc',
    name: 'MCP Server POC',
    category: 'genai',
    description:
      'An Agent Tool Gateway built on FastAPI + Pydantic — sub-100ms tool dispatch, exponential-backoff fault tolerance, a "Safe SQL" read-only validator, and an automated tool-selection eval harness.',
    stack: ['Python 3.11+', 'FastAPI', 'Pydantic', 'HTTPX', 'Tenacity', 'Aiosqlite', 'Docker'],
    github: 'https://github.com/ashiksharonm/mcp-server-poc',
    coverKeyword: 'coding,laptop',
    featured: true,
  },

  // --- Archive ---
  {
    slug: 'medvision-lm',
    name: 'MedVision-LM',
    category: 'genai',
    description:
      'A multimodal medical VLM assistant for chest X-ray analysis — CLIP + FAISS retrieval (89% Recall@5), a fine-tuned BLIP model for report generation, and GradCAM interpretability.',
    stack: ['PyTorch', 'HuggingFace (BLIP, CLIP)', 'FAISS', 'FastAPI', 'Streamlit', 'OpenCV'],
    github: 'https://github.com/ashiksharonm/MedVision-LM',
    coverKeyword: 'hospital,xray',
  },
  {
    slug: 'summarizationbench-llm',
    name: 'SummarizationBench-LLM',
    category: 'genai',
    description:
      'A LoRA-based PEFT pipeline adapting T5-small for summarization — 99.5% fewer trainable parameters than BART-large while retaining 93% of its ROUGE-L accuracy, with a live 3-way model comparison dashboard.',
    stack: ['PyTorch', 'HuggingFace (PEFT/LoRA)', 'Streamlit', 'Plotly', 'ROUGE', 'BLEU'],
    github: 'https://github.com/ashiksharonm/SummarizationBench-LLM',
    coverKeyword: 'books,library',
  },
  {
    slug: 'documind-ocr',
    name: 'DocuMind OCR Intelligence',
    category: 'genai',
    description:
      'A document intelligence API extracting structured data from invoices — a hybrid EasyOCR + Tesseract pipeline with custom OpenCV preprocessing, hitting 95%+ accuracy on standard business documents.',
    stack: ['Python', 'FastAPI', 'EasyOCR', 'Tesseract', 'OpenCV', 'spaCy'],
    github: 'https://github.com/ashiksharonm/DocuMind-OCR-Intelligence',
    coverKeyword: 'invoice,office',
  },
  {
    slug: 'zero-shot-sar',
    name: 'Zero-Shot SAR Land Cover Classification',
    category: 'genai',
    description:
      'Zero-shot land-cover classification for SAR-like satellite imagery using CLIP — 44.26% coarse-level accuracy via hierarchical prompting, benchmarked across 27,000 images. Under review at IEEE GRSL.',
    stack: ['PyTorch', 'CLIP (OpenAI)', 'HuggingFace Datasets', 'Scikit-Learn'],
    github: 'https://github.com/ashiksharonm/Zero-Shot-SAR-Classification',
    coverKeyword: 'satellite,space',
  },
  {
    slug: 'fintech-voice',
    name: 'FinTech Voice-Based System',
    category: 'genai',
    description:
      'A conversational AI agent for B2B debt discovery — LangChain + Pydantic structured-output parsing (95%+ intent accuracy) with a Groq-powered Whisper voice interface cutting speech-to-text latency ~40%.',
    stack: ['Python', 'FastAPI', 'LangChain', 'Groq API', 'Whisper-v3', 'Streamlit', 'Docker Compose'],
    github: 'https://github.com/ashiksharonm/FinTech-Voice-Based-System',
    coverKeyword: 'microphone,call',
  },
  {
    slug: 'timesyncd',
    name: 'TimeSyncD',
    category: 'backend',
    description:
      'A distributed clock-synchronization engine in C managing 1,024+ concurrent clients with sub-millisecond precision — Welford\'s online algorithm for O(1) jitter tracking and a zero-copy shared-memory telemetry bridge.',
    stack: ['C', 'POSIX Threads', 'TCP/UDP Sockets', 'Shared Memory (mmap)', 'Makefile'],
    github: 'https://github.com/ashiksharonm/TimeSyncD',
    coverKeyword: 'clock,time',
  },
  {
    slug: 'legaldoctracker',
    name: 'LegalDocTracker',
    category: 'backend',
    description:
      'A contract-lifecycle management system with polyglot persistence — PostgreSQL for ACID metadata, MongoDB for clause storage, JWT auth, and a state-transition matrix (Draft → Review → Signed).',
    stack: ['Python', 'Django REST Framework', 'PostgreSQL', 'MongoDB', 'JWT', 'Docker'],
    github: 'https://github.com/ashiksharonm/LegalDocTracker',
    coverKeyword: 'lawyer,contract',
  },
  {
    slug: 'minipaymentapi',
    name: 'MiniPaymentAPI',
    category: 'backend',
    description:
      'A production-style payments API in Clean Architecture — a Redis-backed idempotency engine guaranteeing zero duplicate charges under concurrent retries, with SQLAlchemy 2.0 + Pydantic v2 type-safety.',
    stack: ['Python 3.10+', 'FastAPI', 'SQLAlchemy 2.0', 'Redis', 'Pydantic v2', 'Pytest'],
    github: 'https://github.com/ashiksharonm/MiniPaymentAPI',
    coverKeyword: 'money,wallet',
  },
  {
    slug: 'globalized-course-service',
    name: 'Globalized Learning Platform Module',
    category: 'backend',
    description:
      'A locale-aware course metadata service with a 3-tier BCP 47 fallback chain, idempotent progress tracking via PostgreSQL ON CONFLICT, and native RTL support for Arabic without layout duplication.',
    stack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'i18next', 'Testcontainers'],
    github: 'https://github.com/ashiksharonm/globalized-course-service',
    coverKeyword: 'classroom,school',
  },
  {
    slug: 'collection-campaign-optimizer',
    name: 'Collection Campaign Optimizer',
    category: 'backend',
    description:
      'A contextual multi-armed bandit system (LinUCB + Thompson Sampling) for debt-collection channel selection — a 12.5% uplift in recovery reward with SHAP-based real-time decision transparency.',
    stack: ['Python 3.11', 'Contextual Bandits', 'FastAPI', 'SHAP', 'Scikit-learn', 'Docker'],
    github: 'https://github.com/ashiksharonm/CollectionCampaignOptimizer',
    coverKeyword: 'finance,calculator',
  },
  {
    slug: 'aws-ml-risk-scoring',
    name: 'AWS ML Risk Scoring Service',
    category: 'mlops',
    description:
      'An XGBoost credit-default model (81.7% accuracy, 0.77 ROC-AUC) deployed dual-strategy on AWS Lambda and Dockerized EC2, with sub-150ms latency and a GitHub Actions + AWS SAM CI/CD pipeline.',
    stack: ['Python', 'XGBoost', 'AWS (Lambda, EC2, SAM)', 'Docker', 'Caddy', 'GitHub Actions'],
    github: 'https://github.com/ashiksharonm/aws-ml-risk-scoring-service',
    coverKeyword: 'bank,finance',
  },
  {
    slug: 'waferdefectx',
    name: 'WaferDefectX',
    category: 'mlops',
    description:
      'An automated semiconductor wafer-inspection system — a hybrid classical-CV + CNN pipeline, INT8-quantized and exported to ONNX/OpenVINO for a 4× latency cut (8.6ms → 2.1ms) in production.',
    stack: ['Python', 'C++17', 'OpenCV', 'PyTorch', 'ONNX Runtime', 'OpenVINO'],
    github: 'https://github.com/ashiksharonm/WaferDefectX',
    coverKeyword: 'semiconductor,factory',
  },
  {
    slug: 'telemetrypulse',
    name: 'TelemetryPulse',
    category: 'mlops',
    description:
      'A production-grade IoT event pipeline on Kafka/Redpanda ingesting 5,000+ events/sec from 45+ simulated devices, with exactly-once processing and real-time windowed anomaly detection.',
    stack: ['Python 3.11', 'Apache Kafka (Redpanda)', 'PostgreSQL', 'FastAPI', 'SQLAlchemy', 'Docker'],
    github: 'https://github.com/ashiksharonm/TelemetryPulse',
    coverKeyword: 'sensor,iot',
  },
  {
    slug: 'pricepulse',
    name: 'PricePulse',
    category: 'data',
    description:
      'An automated pricing-intelligence pipeline ingesting 10+ years of US CPI data — a SARIMAX forecasting engine (20% lower prediction error than baseline) with auto-generated executive PDF/Excel decks.',
    stack: ['Python (Pandas, Statsmodels, SciPy)', 'OpenPyXL', 'FPDF', 'GitHub Actions'],
    github: 'https://github.com/ashiksharonm/PricePulse--Inflation-driven-Pricing-Strategy',
    coverKeyword: 'stockmarket,chart',
  },
  {
    slug: 'productgrowthanalysis',
    name: 'ProductGrowthAnalysis',
    category: 'data',
    description:
      'A product growth-analytics engine over Wikipedia pageview data — STL decomposition + rolling Z-scores for anomaly detection, plus a statistical A/B-testing simulator with Cohen\'s d effect sizes.',
    stack: ['Python (Pandas, SciPy, Statsmodels)', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/ashiksharonm/ProductGrowthAnalysis',
    coverKeyword: 'analytics,chart',
  },
  {
    slug: 'smart-campus-analytics',
    name: 'Smart Campus Analytics Platform',
    category: 'data',
    description:
      'A predictive analytics platform identifying at-risk students with 95% ROC-AUC via Gradient Boosting, deployed as a scalable FastAPI + Docker pipeline scoring 10,000+ students per run.',
    stack: ['Python (Pandas, Scikit-learn)', 'FastAPI', 'Streamlit', 'DuckDB', 'Docker'],
    github: 'https://github.com/ashiksharonm/Smart-Campus-Analytics-Platform',
    coverKeyword: 'university,campus',
  },
  {
    slug: 'socialsignalbench',
    name: 'SocialSignalBench',
    category: 'data',
    description:
      'A multimodal engagement-signal benchmark — ResNet-18 transfer learning on audio spectrograms hitting 93.8% validation accuracy, fused with facial-encoder embeddings for HCI behavioral recognition.',
    stack: ['PyTorch', 'TorchAudio', 'TorchVision', 'ResNet-18', 'Librosa', 'Scikit-learn'],
    github: 'https://github.com/ashiksharonm/SocialSignalBench',
    coverKeyword: 'webcam,camera',
  },
  {
    slug: 'digipass',
    name: 'DigiPass',
    category: 'fullstack',
    description:
      'A digital bus-pass ecosystem with real-time Firebase sync (99.9% uptime target), an encrypted QR-based validation engine, Google Maps route planning, and a mock payment gateway.',
    stack: ['React Native (Expo SDK)', 'TypeScript', 'Firebase', 'Google Maps API'],
    github: 'https://github.com/ashiksharonm/DigiPass',
    coverKeyword: 'bus,transport',
  },
  {
    slug: 'decideai',
    name: 'DecideAI: Enterprise Portfolio Copilot',
    category: 'fullstack',
    description:
      'An AI-powered financial copilot built on Microsoft Semantic Kernel — real-time Yahoo Finance data aggregation serving 1,000+ daily requests at sub-second latency, deployed on Render.',
    stack: ['C# .NET 7.0', 'Microsoft Semantic Kernel', 'MongoDB', 'Yahoo Finance API', 'Docker'],
    github: 'https://github.com/ashiksharonm/decideAI',
    demo: 'https://decideai-api.onrender.com/swagger/index.html',
    coverKeyword: 'stockmarket,finance',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const archiveProjects = projects.filter((p) => !p.featured)

export const categoryLabels: Record<ProjectCategory, string> = {
  genai: 'GenAI / RAG',
  backend: 'Backend / Systems',
  mlops: 'MLOps / Cloud',
  data: 'Data / Analytics',
  fullstack: 'Full-Stack',
}
