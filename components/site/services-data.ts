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
  borderColor: string
  image: string
}

export const SERVICES: Service[] = [
  {
    slug: "health",
    title: "Health Consultancy",
    short:
      "Advance reproductive, adolescent, women's, mental health, and nursing care services.",
    description:
      "Sexual and reproductive health, adolescent and youth health, women's health, pregnancy and post-pregnancy support, mental health, nursing homecare, and palliative nursing care for public, private, and community partners.",
    fullDescription:
      "Our Health Consultancy services support organizations working across the full continuum of care, from prevention and health promotion to specialized patient support. We help partners strengthen sexual and reproductive health, adolescent and youth health, women's health, mental health, pregnancy and post-pregnancy services, nursing homecare, and palliative nursing care. Each engagement combines practical service design, evidence-based guidance, and implementation support that improves access, quality, and continuity of care.",
    highlights: [
      "Sexual & reproductive health programs",
      "Adolescent, youth, and women's health",
      "Mental health and family wellness support",
      "Nursing homecare and palliative nursing care",
      "Routine Data Quality Assurance",
      "Quality Assurance auditing",
    ],
    expertise: [
      "Sexual & Reproductive Health (SRH)",
      "Adolescent and Youth Health",
      "Women's Health",
      "Pre-pregnancy, pregnancy, and post-pregnancy support",
      "Mental Health",
      "Nursing Homecare",
      "Palliative Care",
      "Health service quality improvement and referral pathways",
      "Routine Data Quality Assurance",
      "Quality Assurance auditing",
    ],
    Icon: HeartPulse,
    color: "#0E4FA8",
    bgColor: "#0E4FA8",
    gradient: "from-[#0E4FA8] to-[#0A3D85]",
    borderColor: "#0E4FA8",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5884210066192713496_121-gRaEGABQwSJEB1dM74Yl2cmvXchOos.jpg",
  },
  {
    slug: "nutrition",
    title: "Nutrition Consultancy",
    short:
      "Deliver clinical, community, wellness, and dietetic nutrition services across the life course.",
    description:
      "Nutrition-focused NCD management, medical nutrition therapy, palliative nutrition, dietetics, weight management, wellness and sport nutrition, beauty nutrition, child growth monitoring, and hospital catering and dietetic support.",
    fullDescription:
      "CORD Nutrition brings practical, evidence-based nutrition support to clinical, community, institutional, and wellness settings. Our team designs nutrition services for non-communicable disease management, medical nutrition therapy, palliative nutrition, dietetics, weight management, wellness and sport nutrition, beauty nutrition, child growth monitoring, and hospital catering. We translate nutrition science into clear plans, training, and service models that support healthier individuals, families, and institutions.",
    highlights: [
      "NCD nutrition management and MNT",
      "Weight, wellness, and sport nutrition",
      "Child growth monitoring and family nutrition",
      "Hospital catering and dietetic systems",
      "Training and capacity building",
    ],
    expertise: [
      "Nutrition-focused NCD management including CVD, DM, HTN, renal, GERD, and metabolic syndrome",
      "Medical Nutrition Therapy (MNT)",
      "Palliative Nutrition",
      "Nutrition & Dietetic services",
      "Weight management",
      "Wellness & Sport Nutrition",
      "Beauty Nutrition",
      "Child Growth Monitoring",
      "Hospital Catering & Dietetic services",
    ],
    Icon: Salad,
    color: "#2ECC8A",
    bgColor: "#2ECC8A",
    gradient: "from-[#2ECC8A] to-[#27AE60]",
    borderColor: "#2ECC8A",
    image: "/images/nutrition-1.jfif",
  },
  {
    slug: "social-affairs",
    title: "Social Affairs & Development",
    short:
      "Build inclusive social programs that protect rights and strengthen communities.",
    description:
      "Gender and women's rights, school health and nutrition, early child development and daycare, natural and human catastrophic response, and environmental and developmental initiatives.",
    fullDescription:
      "Our Social Affairs and Development consultancy helps partners design inclusive programs that respond to real community needs. We support initiatives focused on gender and women's rights, school health and nutrition, early child development and daycare, natural and human catastrophic responses, and environmental and developmental action. Our work combines stakeholder engagement, practical program design, and implementation support for public agencies, NGOs, schools, and community organizations.",
    highlights: [
      "Gender and women's rights",
      "School health and nutrition",
      "ECD and daycare program support",
      "Emergency and environmental initiatives",
    ],
    expertise: [
      "Gender and women rights",
      "School Health & Nutrition",
      "Early Child Development (ECD) & Daycare",
      "Natural & Human Catastrophic Responses",
      "Environmental & Developmental Initiatives",
      "Community mobilization and stakeholder engagement",
      "Inclusive program planning and monitoring",
      "Social behavior change and advocacy support",
    ],
    Icon: Users,
    color: "#0E4FA8",
    bgColor: "#0E4FA8",
    gradient: "from-[#0E4FA8] to-[#0A3D85]",
    borderColor: "#0E4FA8",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5902267182450674529_121-eNFQegoEvAP1jvAY3dJXoswVdAWeVq.jpg",
  },
  {
    slug: "management",
    title: "Management & Leadership",
    short:
      "Strengthen projects, teams, facilities, and operating systems with practical management support.",
    description:
      "Project management, training and capacity building, health facility renovation and restructuring, document preparation, and related advisory activities for organizations that need clearer systems and stronger delivery.",
    fullDescription:
      "CORD Consultancy delivers management support that helps organizations move from intention to organized execution. We assist with project management, training and capacity building, health facility renovation and restructuring, document preparation, and related advisory activities. Our approach is practical and results-driven, helping teams clarify priorities, organize resources, improve service environments, and produce the documents and systems needed for accountable delivery.",
    highlights: [
      "Project management support",
      "Training and capacity building",
      "Facility renovation and restructuring",
      "Document preparation and advisory support",
    ],
    expertise: [
      "Project Management",
      "Training and Capacity Building Services",
      "Health Facility Renovation & Restructuring",
      "Document Preparation",
      "Other Related Activities",
      "Operational planning and workplan development",
      "Team coordination and implementation tracking",
      "Organizational restructuring and service improvement",
    ],
    Icon: Briefcase,
    color: "#0E4FA8",
    bgColor: "#0E4FA8",
    gradient: "from-[#0E4FA8] to-[#0A3D85]",
    borderColor: "#0E4FA8",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5884210066192713498_121-pxyl7UeyIsuiRJRfYm9aNcWXZ13kAw.jpg",
  },
  {
    slug: "hotel-tourism",
    title: "Hotel & Tourism",
    short:
      "Improve food service, safety, guest experience, and hospitality market positioning.",
    description:
      "Food service management, food safety and menu planning for business, safety and hazard prevention, branding and marketing, and related activities for hotels, restaurants, and tourism operators.",
    fullDescription:
      "Our Hotel and Tourism consultancy supports hospitality and food service businesses that want safer operations, stronger menus, clearer brands, and better guest experiences. We advise on food service management, food safety and menu planning for business, safety and hazard prevention, branding and marketing, and related activities. Whether improving an existing operation or preparing a new hospitality concept, we provide practical recommendations that connect nutrition, safety, service quality, and market readiness.",
    highlights: [
      "Food service management",
      "Food safety and menu planning",
      "Safety and hazard prevention",
      "Branding and marketing",
    ],
    expertise: [
      "Food Service Management",
      "Food Safety & Menu Planning for Business",
      "Safety and Hazard Prevention",
      "Branding and Marketing",
      "Other Related Activities",
      "Hospitality operations improvement",
      "Guest experience and service flow guidance",
      "Staff orientation for safe food handling",
    ],
    Icon: Hotel,
    color: "#0E4FA8",
    bgColor: "#0E4FA8",
    gradient: "from-[#0E4FA8] to-[#0A3D85]",
    borderColor: "#0E4FA8",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5936127106884504542_121-685VqWxbIIt91ZhAS8Jlog7e2wjQux.jpg",
  },
]
