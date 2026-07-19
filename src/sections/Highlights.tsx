import Reveal from '../components/Reveal'
import ExperienceStrip from '../components/ExperienceStrip'
import CaseStudyCard from '../components/CaseStudyCard'
import AchievementQuote from '../components/AchievementQuote'
import { featuredProjects } from '../data/projects'

export default function Highlights() {
  const caseStudies = featuredProjects.slice(0, 3)

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-12 lg:px-24">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-on-surface-variant">— Where I've Been</p>
          <ExperienceStrip />
        </div>

        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="grid grid-cols-2 gap-0.5">
              <span className="h-1 w-1 rounded-full bg-outline" />
              <span className="h-1 w-1 rounded-full bg-outline" />
              <span className="h-1 w-1 rounded-full bg-outline" />
              <span className="h-1 w-1 rounded-full bg-outline" />
            </span>
            <h2 className="font-headline text-2xl font-bold text-on-surface">Case Studies</h2>
          </div>
          <div className="space-y-4">
            {caseStudies.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <CaseStudyCard project={project} />
              </Reveal>
            ))}
          </div>

          <div className="mt-8">
            <AchievementQuote />
          </div>
        </div>
      </div>
    </section>
  )
}
