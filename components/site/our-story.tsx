import Image from "next/image"
import { FloatingMetricBadge } from "@/components/site/animated-metric"
import { Reveal } from "@/components/site/reveal"

const TIMELINE = [
  {
    year: "2024",
    title: "Foundations",
    description:
      "CORD Consultancy traces its beginnings to 2024, founded on the conviction that health, nutrition, and development must be advanced together — not in silos.",
  },
  {
    year: "2025",
    title: "Building the Coalition",
    description:
      "Early engagements across SRH, AYH, ECD, and nutrition initiatives demonstrated the value of an integrated, evidence-based approach in real Ethiopian contexts.",
  },
  {
    year: "2026",
    title: "A reinvigorated identity",
    description:
      "Re-registered as CORD Nutrition and Health Trading PLC under Ethiopia's new trade laws, formalizing our role as a private consultancy hub.",
  },
  {
    year: "Today",
    title: "An international footprint",
    description:
      "Internationally accredited, member of the Global Nutrition Report, and active participant in Share-Net Netherlands — a credible voice on the global stage.",
  },
]

export function OurStory() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      {/* Left side - Image collage */}
      <Reveal className="order-2 lg:order-1">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5936127106884504542_121-685VqWxbIIt91ZhAS8Jlog7e2wjQux.jpg"
                  alt="CORD training session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fruit-AYEAzt5fgf12Gi5iG4HLGromD5TOUE.jpg"
                  alt="Nutrition education"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5884210066192713498_121-pxyl7UeyIsuiRJRfYm9aNcWXZ13kAw.jpg"
                  alt="Strategic meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5888793921578976875_121-h8mD0lekkeYTiNeuhIzRS83UjPNNY8.jpg"
                  alt="Healthcare training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          {/* Floating badge */}
          <FloatingMetricBadge
            value={13}
            suffix="+"
            label="projects"
            eyebrow="Delivered"
            accent="#2ECC8A"
            body="Health, nutrition, ECD, youth, and organizational engagements."
            className="absolute -bottom-4 -right-4 w-64"
          />
        </div>
      </Reveal>

      {/* Right side - Content */}
      <div className="order-1 lg:order-2">
        <Reveal>
          <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
            Our story
          </div>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Building Coalition for Professional Excellence
          </h2>
          <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
            <p>
              CORD Consultancy is a purpose-driven organization that combines public health expertise with private-sector agility. Our team of experienced professionals specializes in nutrition, health, and development initiatives, taking a results-driven approach to every project.
            </p>
            <p>
              We envision ourselves as a <span className="font-semibold text-foreground">Center of Alliance and Coalition for Professional Excellence</span> — a collaborative space where stakeholders and partners come together to advance meaningful outcomes in health, nutrition, and sustainable development.
            </p>
          </div>
        </Reveal>

        <ol className="mt-10 space-y-6 border-l-2 border-primary/20 pl-6 md:pl-8">
          {TIMELINE.map((item, i) => (
            <Reveal as="li" key={item.year} delay={i * 0.1} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[29px] top-1 inline-flex h-4 w-4 items-center justify-center md:-left-[33px]"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0E4FA8] to-[#2ECC8A]" />
                <span className="relative h-2 w-2 rounded-full bg-white" />
              </span>
              <div className="text-xs font-bold uppercase tracking-widest text-[#0E4FA8]">
                {item.year}
              </div>
              <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  )
}
