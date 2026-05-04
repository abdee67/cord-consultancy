import {
  Compass,
  LineChart,
  Layers,
  Workflow,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

export type Service = {
  title: string
  description: string
  Icon: typeof Compass
}

export const SERVICES: Service[] = [
  {
    title: "Strategy & Advisory",
    description:
      "Clarify direction with senior-led strategy work — from market positioning to long-range planning.",
    Icon: Compass,
  },
  {
    title: "Growth & Performance",
    description:
      "Identify the levers that compound. We translate data into focused, measurable growth programs.",
    Icon: LineChart,
  },
  {
    title: "Operations Design",
    description:
      "Streamline how work flows. We redesign operating models so teams ship faster with less friction.",
    Icon: Workflow,
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize the stack and the mindset. Pragmatic transformation programs that actually land.",
    Icon: Layers,
  },
  {
    title: "Risk & Governance",
    description:
      "Anticipate, structure, and mitigate. Clear frameworks that protect value as you scale.",
    Icon: ShieldCheck,
  },
  {
    title: "Innovation Sprints",
    description:
      "Short, focused engagements to validate ideas and turn them into investable initiatives.",
    Icon: Sparkles,
  },
]
