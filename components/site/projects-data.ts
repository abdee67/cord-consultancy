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
    title: "Life Addis Specialty Center",
    client: "Aleph Medical / Life Addis",
    category: "Health",
    role:
      "Center renovation, standardization, SOP development, and visibility study.",
    outcome:
      "Delivered structured operations and a refreshed clinical setup for one of Addis Ababa's growing internal medicine and surgical specialty centers.",
  },
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
    title: "USAID-MSH-SCS Project Restructuring",
    client: "alignAfrica (LNGO)",
    category: "Management",
    role:
      "Project consultancy, organizational restructuring, document preparation, and rebranding.",
    outcome:
      "Re-architected program governance and rebranded the organization to support its USAID-MSH-SCS and MGF Youth Engagement portfolios.",
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
    title: "Health Informatics E-Learning",
    client: "Ethiopian Health Informatics Professional Association",
    category: "Capacity Building",
    role: "Course material development for an accredited CPD program.",
    outcome:
      "Built scalable online learning content for healthcare informatics professionals nationwide.",
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
    title: "Organizational Capacity Building",
    client: "Fetan Transport and Logistics Share Company",
    category: "Management",
    role:
      "Stakeholder baseline assessment, market study, and HR and organizational policy preparation.",
    outcome:
      "Equipped the company with foundational HR, governance, and policy documents to scale operations confidently.",
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
    title: "SRHR Capacity Building",
    client: "Family Guidance Association Ethiopia (FGAE)",
    category: "Health",
    role:
      "Training facilitation across CAC-WISH2 and SRH-DKT projects for healthcare professionals.",
    outcome:
      "Improved provider competence and program quality across SRHR service points.",
  },
  {
    title: "Adolescent & Youth Health Training",
    client: "SOS Children's Village Ethiopia",
    category: "Social Affairs",
    role: "Two-round training facilitation in collaboration with FGAE.",
    outcome:
      "Built lasting capacity in AYH service delivery for staff supporting children and youth.",
  },
  {
    title: "ECD & Daycare Capacity Building",
    client: "Opportunities Industrialization Center Ethiopia (O.I.C.E)",
    category: "Social Affairs",
    role:
      "Early Child Development and daycare professional training facilitation.",
    outcome:
      "Strengthened ECD service quality and professional standards across daycare networks.",
  },
  {
    title: "Brain Health & Desk Performance — CBE",
    client: "SCOPUS / Commercial Bank of Ethiopia",
    category: "Nutrition",
    role:
      "Two-round high-level training facilitation for CBE presidents and directors.",
    outcome:
      "Delivered evidence-based nutrition and brain-health insights to senior leaders driving Ethiopia's largest bank.",
  },
  {
    title: "Brain Health & Desk Performance — Addis Ababa",
    client: "Addis Ababa Health Bureau & Design and Construction Bureau",
    category: "Nutrition",
    role: "Fourth-round training facilitation for senior public-sector teams.",
    outcome:
      "Embedded nutrition-aware leadership practices across two major Addis Ababa city bureaus.",
  },
]
