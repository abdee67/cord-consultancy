import type { Metadata } from "next"
import { PageHeader } from "@/components/site/page-header"
import { ProjectCard } from "@/components/site/project-card"
import { PROJECTS } from "@/components/site/projects-data"
import { FinalCTA } from "@/components/site/final-cta"
import { Reveal } from "@/components/site/reveal"

export const metadata: Metadata = {
  title: "Projects — CORD Consultancy",
  description:
    "Selected case studies from CORD Consultancy across health, nutrition, social affairs, management, and capacity building.",
}

export default function ProjectsPage() {
  // Group by category for a cleaner read
  const categories = Array.from(new Set(PROJECTS.map((p) => p.category)))

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected case studies."
        description="A snapshot of recent and ongoing engagements — from clinical center standardization to high-level nutrition training and organizational restructuring."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Categories
            </span>
            {categories.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
