import {
  HeartPulse,
  Salad,
  Users,
  Briefcase,
  Hotel,
  type LucideIcon,
} from "lucide-react"

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  highlights: string[]
  Icon: LucideIcon
}

export const SERVICES: Service[] = [
  {
    slug: "health",
    title: "Health Consultancy",
    short:
      "Strengthen health systems and deliver evidence-based, market-ready solutions.",
    description:
      "Health system strengthening, primary health care optimization, SRHR, adolescent and maternal health, environmental health, and program evaluation for public agencies, private clinics, hospitals, and corporate wellness programs.",
    highlights: [
      "Health needs assessments",
      "Service delivery optimization",
      "Monitoring & evaluation dashboards",
      "Evidence-based reform roadmaps",
    ],
    Icon: HeartPulse,
  },
  {
    slug: "nutrition",
    title: "Nutrition Consultancy",
    short:
      "Design nutrition programs that improve outcomes across the life course.",
    description:
      "Nutrition programming, diet therapy and lifestyle coaching, community outreach, behavior change communication, school-based and maternal/child nutrition, malnutrition prevention, and integration of nutrition into broader development initiatives.",
    highlights: [
      "Nutrition action plans",
      "Training curricula & BCC materials",
      "GMP-compliant product guidance",
      "Digital nutrition platforms",
    ],
    Icon: Salad,
  },
  {
    slug: "social-affairs",
    title: "Social Affairs & Development",
    short:
      "Build inclusive programs with measurable community impact.",
    description:
      "Social protection program design, gender and youth empowerment, community engagement and behavior change, social audits, stakeholder mapping, policy advocacy support, and program monitoring for governments, NGOs, and social enterprises.",
    highlights: [
      "Stakeholder engagement plans",
      "Empowerment frameworks",
      "Policy advocacy materials",
      "Impact assessments",
    ],
    Icon: Users,
  },
  {
    slug: "management",
    title: "Management & Leadership",
    short:
      "Strategy, governance, and operating models that scale with you.",
    description:
      "Strategic planning, organizational development, governance and risk management, performance measurement, change management, financial planning and resource mobilization, and project management office (PMO) setup for SMEs, mid-market firms, NGOs, and government-affiliated agencies.",
    highlights: [
      "Strategic plans & operating models",
      "KPIs and dashboards",
      "Process optimization",
      "Grant-readiness & fundraising",
    ],
    Icon: Briefcase,
  },
  {
    slug: "hotel-tourism",
    title: "Hotel & Tourism",
    short:
      "Take hospitality ventures from feasibility to confident operations.",
    description:
      "Feasibility studies, market analysis, revenue management, hospitality operations optimization, branding and guest experience design, and digital market access for tourism operators, new hotel ventures, hospitality groups, and local tourism authorities.",
    highlights: [
      "Market feasibility & business case",
      "Operational playbooks",
      "Branding & guest experience",
      "Digital marketing strategies",
    ],
    Icon: Hotel,
  },
]
