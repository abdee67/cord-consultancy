export type ProjectCategory =
  | "Health"
  | "Nutrition"
  | "Social Affairs"
  | "Management"
  | "Capacity Building"

export type Project = {
  title: string
  category: ProjectCategory
  role: string
  outcome: string
}

// Engagements are described by the activity itself — accomplished work and
// progress — without naming the partnering organizations.
export const PROJECTS: Project[] = [
  {
    title: "Specialty Center Standardization & Visibility Study",
    category: "Health",
    role:
      "Center renovation, standardization, SOP development, and a visibility study for a private specialty clinic.",
    outcome:
      "Established standardized clinical workflows and a clear go-to-market positioning for the specialty center.",
  },
  {
    title: "Strategic Organizational Restructuring",
    category: "Management",
    role:
      "Project consultancy, organizational restructuring, document preparation, and rebranding for a local NGO.",
    outcome:
      "Re-architected program governance and rebranded the organization to support its development portfolios.",
  },
  {
    title: "Accredited CPD E-Learning Course Design",
    category: "Capacity Building",
    role:
      "Course material development for an accredited CPD e-learning program.",
    outcome:
      "Produced competency-based digital learning materials for ongoing professional development.",
  },
  {
    title: "Public Health E-Learning Curriculum",
    category: "Capacity Building",
    role:
      "Course material development for an accredited public health CPD program.",
    outcome:
      "Delivered high-impact online curricula tailored to Ethiopia's public health workforce.",
  },
  {
    title: "Occupational Safety & Health Workshop",
    category: "Capacity Building",
    role:
      "Workshop facilitation on occupational safety and health for operations staff.",
    outcome:
      "Strengthened safety culture and frontline awareness for staff across operations.",
  },
  {
    title: "Adolescent & Youth Health Training",
    category: "Social Affairs",
    role:
      "Two-round comprehensive training facilitation on adolescent and youth health.",
    outcome:
      "Built lasting capacity in AYH service delivery for staff supporting children and youth.",
  },
  {
    title: "Brain Health & Leadership Performance",
    category: "Nutrition",
    role:
      "Multi-round high-level training facilitation for senior leaders and directors.",
    outcome:
      "Delivered evidence-based nutrition and brain-health insights to senior leaders across multiple organizations.",
  },
]
