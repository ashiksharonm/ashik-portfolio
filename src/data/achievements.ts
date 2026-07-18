export interface Achievement {
  title: string
  org: string
  description: string
  link?: string
}

export const achievements: Achievement[] = [
  {
    title: 'Top 100 statewide',
    org: 'Niral Thiruvizha 2024 (Govt. of Tamil Nadu)',
    description:
      'AgroVoiceAI — an AI-driven voice-based agricultural assistant — ranked among the Top 100 teams statewide out of 500+ shortlisted.',
    link: 'https://github.com/ashiksharonm/AgroVoiceAI',
  },
  {
    title: 'Winner',
    org: 'TECHNO TEEN Science Fair',
    description: 'First position for developing DigiPass, a digital bus-pass mobility solution.',
  },
  {
    title: 'Finalist',
    org: 'Ashok Leyland Hackathon',
    description: 'Pitched IntelliRoute, an AI-powered EV energy-management system optimizing charging times.',
  },
  {
    title: 'Winner — Idea Presentation',
    org: 'Praestantia 2023',
    description: 'Proposed StockistAI, a hybrid LSTM + SVM stock trend forecasting model.',
  },
]

export const leadershipNote =
  'Outside of engineering: captained the volleyball team to a Gold Medal at the Chief Minister\'s Trophy 2024 (District Level), and organized Hackwarts, a college-level hackathon at Xplore 2023.'
