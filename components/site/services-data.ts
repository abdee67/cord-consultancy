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
  fullDescription: string
  highlights: string[]
  expertise: string[]
  Icon: LucideIcon
  color: string
  bgColor: string
  gradient: string
  image: string
}

export const SERVICES: Service[] = [
  {
    slug: "health",
    title: "Health Consultancy",
    short:
      "Strengthen health systems and deliver evidence-based, market-ready solutions.",
    description:
      "Health system strengthening, primary health care optimization, SRHR, adolescent and maternal health, environmental health, and program evaluation for public agencies, private clinics, hospitals, and corporate wellness programs.",
    fullDescription:
      "Our Health Consultancy services encompass comprehensive health system strengthening, primary health care optimization, and specialized expertise in Sexual and Reproductive Health and Rights (SRHR), Adolescent and Youth Health (AYH), and maternal health. We deliver evidence-based assessments, program evaluations, and market-ready recommendations for public agencies, private clinics, hospitals, and corporate wellness programs. Our proven track record includes health facility renovations, medical equipment furnishing, clinical SOPs development, and routine data quality audits (RDQA) that drive measurable health outcomes.",
    highlights: [
      "Health needs assessments",
      "Service delivery optimization",
      "Monitoring & evaluation dashboards",
      "Evidence-based reform roadmaps",
    ],
    expertise: [
      "Reproductive Maternal Newborn Child Health (RMNCH)",
      "Adolescent and Youth Health (AYH)",
      "Sexual and Gender-Based Violence (SGBV) programs",
      "Family Planning (FP) services",
      "Health facility renovation and standardization",
      "SOPs development for clinical practice",
      "Routine Data Quality Audit (RDQA)",
      "Supportive supervision frameworks",
    ],
    Icon: HeartPulse,
    color: "text-[#E74C3C]",
    bgColor: "bg-[#E74C3C]",
    gradient: "from-[#E74C3C] to-[#C0392B]",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5884210066192713496_121-gRaEGABQwSJEB1dM74Yl2cmvXchOos.jpg",
  },
  {
    slug: "nutrition",
    title: "Nutrition Consultancy",
    short:
      "Design nutrition programs that improve outcomes across the life course.",
    description:
      "Nutrition programming, diet therapy and lifestyle coaching, community outreach, behavior change communication, school-based and maternal/child nutrition, malnutrition prevention, and integration of nutrition into broader development initiatives.",
    fullDescription:
      "CORD Nutrition brings specialized expertise in nutrition programming across the life course — from early childhood through adulthood. We design and implement comprehensive nutrition interventions including diet therapy, lifestyle coaching, community outreach programs, and behavior change communication strategies. Our work spans school-based nutrition, maternal and child nutrition programs, malnutrition prevention initiatives, and the seamless integration of nutrition into broader health and development frameworks. As members of the Global Nutrition Report, we bring rigorous, evidence-based insights to every engagement.",
    highlights: [
      "Nutrition action plans",
      "Training curricula & BCC materials",
      "GMP-compliant product guidance",
      "Digital nutrition platforms",
    ],
    expertise: [
      "Early Child Development (ECD) nutrition programs",
      "Maternal and child nutrition interventions",
      "School-based nutrition initiatives",
      "Behavior Change Communication (BCC)",
      "Community nutrition outreach",
      "Food safety and catering industry standards",
      "Brain Health and Desk Performance training",
      "Digital nutrition education platforms",
    ],
    Icon: Salad,
    color: "text-[#2ECC8A]",
    bgColor: "bg-[#2ECC8A]",
    gradient: "from-[#2ECC8A] to-[#27AE60]",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fruit-AYEAzt5fgf12Gi5iG4HLGromD5TOUE.jpg",
  },
  {
    slug: "social-affairs",
    title: "Social Affairs & Development",
    short:
      "Build inclusive programs with measurable community impact.",
    description:
      "Social protection program design, gender and youth empowerment, community engagement and behavior change, social audits, stakeholder mapping, policy advocacy support, and program monitoring for governments, NGOs, and social enterprises.",
    fullDescription:
      "Our Social Affairs and Development consultancy focuses on creating sustainable, inclusive programs that drive measurable community impact. We specialize in social protection program design, gender and youth empowerment initiatives, and community engagement strategies. Our expertise includes stakeholder mapping, policy advocacy support, social audits, and comprehensive program monitoring. Working with governments, NGOs, and social enterprises, we deliver evidence-based assessments and practical recommendations that empower vulnerable populations and strengthen social systems.",
    highlights: [
      "Stakeholder engagement plans",
      "Empowerment frameworks",
      "Policy advocacy materials",
      "Impact assessments",
    ],
    expertise: [
      "Gender and youth empowerment programs",
      "Social protection system design",
      "Community mobilization and engagement",
      "Stakeholder mapping and analysis",
      "Policy advocacy and reform support",
      "Social audits and assessments",
      "Multi-stakeholder platform development",
      "E-government and digital transformation",
    ],
    Icon: Users,
    color: "text-[#4DC8E8]",
    bgColor: "bg-[#4DC8E8]",
    gradient: "from-[#4DC8E8] to-[#3498DB]",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5902267182450674529_121-eNFQegoEvAP1jvAY3dJXoswVdAWeVq.jpg",
  },
  {
    slug: "management",
    title: "Management & Leadership",
    short:
      "Strategy, governance, and operating models that scale with you.",
    description:
      "Strategic planning, organizational development, governance and risk management, performance measurement, change management, financial planning and resource mobilization, and project management office (PMO) setup for SMEs, mid-market firms, NGOs, and government-affiliated agencies.",
    fullDescription:
      "CORD Consultancy delivers comprehensive management and leadership solutions that help organizations achieve sustainable growth. Our services span strategic planning, organizational development, governance frameworks, risk management, and performance measurement systems. We specialize in change management, financial planning, resource mobilization, and PMO setup. Our demonstrated capacity for results-oriented project execution ensures deliverables are met within scope, budget, and timeline — supported by sound administrative and financial management systems.",
    highlights: [
      "Strategic plans & operating models",
      "KPIs and dashboards",
      "Process optimization",
      "Grant-readiness & fundraising",
    ],
    expertise: [
      "Strategic planning and business modeling",
      "Organizational restructuring and rebranding",
      "HR manuals and policy development",
      "Financial policies and feasibility studies",
      "Project management and PMO setup",
      "Governance and risk management",
      "Grant-readiness and donor engagement",
      "Training needs assessments",
    ],
    Icon: Briefcase,
    color: "text-[#8B5CF6]",
    bgColor: "bg-[#8B5CF6]",
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5884210066192713498_121-pxyl7UeyIsuiRJRfYm9aNcWXZ13kAw.jpg",
  },
  {
    slug: "hotel-tourism",
    title: "Hotel & Tourism",
    short:
      "Take hospitality ventures from feasibility to confident operations.",
    description:
      "Feasibility studies, market analysis, revenue management, hospitality operations optimization, branding and guest experience design, and digital market access for tourism operators, new hotel ventures, hospitality groups, and local tourism authorities.",
    fullDescription:
      "Our Hotel and Tourism consultancy takes hospitality ventures from concept to confident operations. We provide comprehensive feasibility studies, market analysis, revenue management strategies, and operations optimization. Our expertise includes branding, guest experience design, digital marketing strategies, and market access support. Whether you're launching a new hotel venture, optimizing existing hospitality operations, or developing tourism infrastructure, we deliver actionable insights and practical playbooks for sustainable success.",
    highlights: [
      "Market feasibility & business case",
      "Operational playbooks",
      "Branding & guest experience",
      "Digital marketing strategies",
    ],
    expertise: [
      "Hotel feasibility studies",
      "Tourism market analysis",
      "Revenue management optimization",
      "Guest experience design",
      "Hospitality branding strategies",
      "Digital marketing and market access",
      "Operations playbook development",
      "Staff training and development",
    ],
    Icon: Hotel,
    color: "text-[#F59E0B]",
    bgColor: "bg-[#F59E0B]",
    gradient: "from-[#F59E0B] to-[#D97706]",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5936127106884504542_121-685VqWxbIIt91ZhAS8Jlog7e2wjQux.jpg",
  },
]
