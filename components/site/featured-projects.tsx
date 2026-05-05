import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "./section-header"
import { ProjectCard } from "./project-card"
import { PROJECTS } from "./projects-data"
import { Reveal } from "./reveal"

export function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 3)

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Selected work"
              title="A track record of delivery."
              description="From standardizing specialty centers to high-level nutrition training for Ethiopia's largest bank, our engagements span sectors and stakeholders."
            />
            <Link
              href="/projects"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
