'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { Reveal } from "@/components/site/reveal"

interface GalleryImage {
  src: string
  alt: string
  title: string
  description: string
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youth%20engagement%203-dsYKazB5qJckp1gInra4e51OpxOMNM.jpg",
    alt: "CORD team welcoming youth to Yegna Ethio Family Wellness Hub Summer Camp",
    title: "Yegna Ethio Summer Camp",
    description: "Family wellness hub welcoming youth"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/community%20engagement-W63ynFkiZyqrdsx6IWGTcLVcOHtCz8.jpg",
    alt: "CORD team conducting a community engagement field interview",
    title: "Community Engagement",
    description: "Field-based household assessment"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youth%20engagement%201-4rYOvYjMiveFvAan2eGE6YXrknS69c.jpg",
    alt: "CORD mentors with youth in a computer training lab",
    title: "Youth Digital Skills",
    description: "Computer training and mentorship"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youth%20engagement%202-CuaNTDdnGq1gEbOjglnM7IAgTNZajQ.jpg",
    alt: "Computer lab session with students and instructor",
    title: "Hands-on Learning",
    description: "Active classroom training"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5902267182450674529_121-eNFQegoEvAP1jvAY3dJXoswVdAWeVq.jpg",
    alt: "CORD team workshop session with participants",
    title: "Interactive Workshop",
    description: "Collaborative knowledge-sharing session"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5888793921578976886_121-8h0YxjuSbyFd7Z7rxkBpQMI7bQEdrR.jpg",
    alt: "CORD capacity building session",
    title: "Capacity Building",
    description: "Training and professional development"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5884210066192713498_121-pxyl7UeyIsuiRJRfYm9aNcWXZ13kAw.jpg",
    alt: "CORD board meeting with leadership",
    title: "Leadership Meeting",
    description: "Strategic planning and governance"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5902267182450674535_121-nomatzHnk1y60y0ZAAWoC4h04qk56M.jpg",
    alt: "CORD consultation event",
    title: "Stakeholder Consultation",
    description: "Community engagement and dialogue"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5884210066192713496_121-gRaEGABQwSJEB1dM74Yl2cmvXchOos.jpg",
    alt: "CORD training presentation",
    title: "Expert Presentation",
    description: "Knowledge transfer and learning"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5936127106884504542_121-685VqWxbIIt91ZhAS8Jlog7e2wjQux.jpg",
    alt: "CORD conference hall session",
    title: "Conference Event",
    description: "Large-scale professional gathering"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5888793921578976875_121-h8mD0lekkeYTiNeuhIzRS83UjPNNY8.jpg",
    alt: "CORD nutrition workshop with healthcare professionals",
    title: "Nutrition Consultation",
    description: "Health and nutrition initiative"
  },
]

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div>
      <Reveal>
        <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
          In the field
        </div>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Our Impact in Action
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          See our team collaborating, learning, and driving positive change across health, nutrition, and social development initiatives.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
        {GALLERY_IMAGES.map((image, index) => (
          <Reveal
            key={index}
            delay={index * 0.08}
            className={[
              index === 0 ? "lg:col-span-2 lg:row-span-2 auto-rows-auto" : "",
              index === 3 ? "lg:col-span-2" : "",
            ].join(" ")}
          >
            <div
              className={`group relative overflow-hidden rounded-2xl bg-muted transition-all duration-500 hover:shadow-2xl cursor-pointer h-full ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
              
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                <p className="text-sm text-white/90">{image.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
