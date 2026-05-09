export type ProjectCategory =
  | "Health"
  | "Nutrition"
  | "Social Affairs"
  | "Management"
  | "Capacity Building"

export type Project = {
  title: string
  client: string
  category: ProjectCategory
  role: string
  outcome: string
}

export const PROJECTS: Project[] = [
  {
    title: "Hidsol Specialty Center",
    client: "Aleph Medical / Hidsol",
    category: "Health",
    role:
      "Center renovation, standardization, SOP development, and visibility study.",
    outcome:
      "Established standardized clinical workflows and a clear go-to-market positioning for the Hidsol specialty center.",
  },
  {
    title: "Strategic Organizational Restructuring",
    client: "alignAfrica (LNGO)",
    category: "Management",
    role:
      "Project consultancy, organizational restructuring, document preparation, and rebranding.",
    outcome:
      "Re-architected program governance and rebranded the organization to support its development portfolios.",
  },
  {
    title: "E-Learning Course Design",
    client: "Ethio-Medical Training PLC",
    category: "Capacity Building",
    role: "Course material development for accredited CPD e-learning.",
    outcome:
      "Produced competency-based digital learning materials for ongoing professional development.",
  },
  {
    title: "Public Health E-Learning",
    client: "Ethiopian Public Health Professional Association",
    category: "Capacity Building",
    role: "Course material development for an accredited CPD program.",
    outcome:
      "Delivered high-impact online curricula tailored to Ethiopia's public health workforce.",
  },
  {
    title: "Occupational Safety & Health Workshop",
    client: "Vision Life Share Company / ASTU",
    category: "Capacity Building",
    role: "Workshop facilitation on occupational safety and health.",
    outcome:
      "Strengthened safety culture and frontline awareness for staff across operations.",
  },
  {
    title: "Adolescent & Youth Health Training",
    client: "SOS Children's Village Ethiopia",
    category: "Social Affairs",
    role: "Two-round comprehensive training facilitation.",
    outcome:
      "Built lasting capacity in AYH service delivery for staff supporting children and youth.",
  },
  {
    title: "Brain Health & Leadership Performance",
    client: "Corporate & Public Sector Clients",
    category: "Nutrition",
    role: "Multi-round high-level training facilitation for senior leaders and directors.",
    outcome:
      "Delivered evidence-based nutrition and brain-health insights to senior leaders across multiple organizations.",
  },
]
