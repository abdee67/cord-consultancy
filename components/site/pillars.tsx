"use client"

import Image from "next/image"
import { Reveal } from "@/components/site/reveal"
import { cn } from "@/lib/utils"

const PILLARS = [
  {
    title: "Trust in the CORD of Connection",
    description:
      "Just as the spinal cord connects our body and mind, we trust in the power of nutrition to connect us emotionally, spiritually, and physically. CORD Nutrition is committed to providing scientifically backed, holistic solutions that support enduring health across generations.",
    color: "from-[#0E4FA8] to-[#0A3D85]",
    bgColor: "bg-[#0E4FA8]/10",
    textColor: "text-[#0E4FA8]",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5884210066192713496_121-gRaEGABQwSJEB1dM74Yl2cmvXchOos.jpg",
  },
  {
    title: "Emotional, Spiritual & Nutritional Integration",
    description:
      "We recognize that true wellness transcends mere physical health. Our approach nurtures the emotional and spiritual health of each individual, understanding that these elements are inseparable from proper nutrition and overall well-being.",
    color: "from-[#2ECC8A] to-[#25B077]",
    bgColor: "bg-[#2ECC8A]/10",
    textColor: "text-[#2ECC8A]",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fruit-AYEAzt5fgf12Gi5iG4HLGromD5TOUE.jpg",
  },
  {
    title: "Interconnectedness of Life",
    description:
      "At CORD Nutrition, we believe that health begins at the roots — our body's interconnected systems. Nutrition is the foundation of life itself, nurturing every aspect of our being to foster harmony and balance from conception to age.",
    color: "from-[#0E4FA8] to-[#0A3D85]",
    bgColor: "bg-[#0E4FA8]/10",
    textColor: "text-[#0E4FA8]",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5888793921578976886_121-8h0YxjuSbyFd7Z7rxkBpQMI7bQEdrR.jpg",
  },
  {
    title: "Commitment to Development & Sustainability",
    description:
      "We are dedicated to advancing human development through personalized, compassionate health solutions rooted in trust and interconnectedness. Our mission is to foster sustainable growth empowering individuals and communities to thrive.",
    color: "from-[#2ECC8A] to-[#25B077]",
    bgColor: "bg-[#2ECC8A]/10",
    textColor: "text-[#2ECC8A]",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5902267182450674535_121-nomatzHnk1y60y0ZAAWoC4h04qk56M.jpg",
  },
]

export function Pillars() {
  return (
    <div>
      <Reveal>
        <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
          Our pillars
        </div>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Four pillars guide everything we do.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          These foundational principles shape our approach to health, nutrition, and development — ensuring holistic, sustainable impact.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {PILLARS.map(({ title, description, color, bgColor, textColor, image }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div
              className="group relative h-full overflow-hidden rounded-3xl border-2 border-border/60 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              style={{ backgroundColor: "#E2E8F0" }}
            >
              {/* Image header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={cn("absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent")} />
                {/* Pillar number badge */}
                <div className={cn(
                  "absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-white font-bold text-lg shadow-lg",
                  color
                )}>
                  {i + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Colored accent line */}
                <div className={cn("h-1 w-16 rounded-full bg-gradient-to-r mb-4", color)} />
                
                <h3 className={cn("text-lg font-bold tracking-tight", textColor)}>
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-800">
                  {description}
                </p>
              </div>

              {/* Bottom gradient accent */}
              <div className={cn(
                "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                color
              )} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
