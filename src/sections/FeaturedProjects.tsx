import Reveal from '../components/Reveal'
import SectionNode from '../components/SectionNode'
import ProjectCard from '../components/ProjectCard'
import { featuredProjects } from '../data/projects'

export default function FeaturedProjects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28 md:px-12 lg:px-24">
      <SectionNode index="04" title="Featured Projects" />
      <p className="mb-12 max-w-xl text-on-surface-variant">
        A few systems I've built end-to-end, from retrieval pipelines to a custom memory allocator.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
