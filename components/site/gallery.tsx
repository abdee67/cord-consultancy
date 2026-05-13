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
    alt: "Youth participants gathered during a CORD-supported engagement activity",
    title: "Youth Engagement",
    description: "Women and youth empowerment through practical development programs"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/community%20engagement-W63ynFkiZyqrdsx6IWGTcLVcOHtCz8.jpg",
    alt: "CORD team conducting a community field conversation",
    title: "Community Assessment",
    description: "Stakeholder mapping, baseline assessment, and local context review"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youth%20engagement%201-4rYOvYjMiveFvAan2eGE6YXrknS69c.jpg",
    alt: "Youth participants learning in a computer lab",
    title: "Digital Skills",
    description: "Digital literacy and creative economy integration for young people"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youth%20engagement%202-CuaNTDdnGq1gEbOjglnM7IAgTNZajQ.jpg",
    alt: "Instructor supporting students during a computer-based training session",
    title: "Capacity Building",
    description: "Hands-on training designed for practical workplace readiness"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5902267182450674529_121-eNFQegoEvAP1jvAY3dJXoswVdAWeVq.jpg",
    alt: "Workshop participants seated for a CORD-facilitated session",
    title: "SRHR & AYH Training",
    description: "Training facilitation for reproductive, adolescent, and youth health"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5888793921578976886_121-8h0YxjuSbyFd7Z7rxkBpQMI7bQEdrR.jpg",
    alt: "CORD facilitator leading a professional training session",
    title: "Professional Training",
    description: "Competency-based learning for health, nutrition, and food safety teams"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5884210066192713498_121-pxyl7UeyIsuiRJRfYm9aNcWXZ13kAw.jpg",
    alt: "CORD leadership and partners in a meeting room",
    title: "Management Advisory",
    description: "Organizational restructuring, documentation, and project consultation"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5902267182450674535_121-nomatzHnk1y60y0ZAAWoC4h04qk56M.jpg",
    alt: "CORD consultation and stakeholder discussion event",
    title: "Partner Dialogue",
    description: "Coalition building with public, private, and development partners"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5884210066192713496_121-gRaEGABQwSJEB1dM74Yl2cmvXchOos.jpg",
    alt: "CORD presentation for health and service improvement participants",
    title: "Health Systems Support",
    description: "Service quality improvement, SOP development, and practical guidance"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5936127106884504542_121-685VqWxbIIt91ZhAS8Jlog7e2wjQux.jpg",
    alt: "Conference hall with CORD participants and professional attendees",
    title: "National Visibility",
    description: "Participation in high-level business, finance, and climate forums"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5888793921578976875_121-h8mD0lekkeYTiNeuhIzRS83UjPNNY8.jpg",
    alt: "Healthcare and nutrition professionals in a CORD workshop",
    title: "Nutrition Training",
    description: "Nutrition, brain health, and desk performance learning sessions"
  },
  {
    src: "/images/nutrition-1.jfif",
    alt: "Nutrition counseling desk with fresh food and assessment notes",
    title: "Diet Therapy",
    description: "Medical nutrition therapy, dietetic counseling, and wellness planning"
  },
  {
    src: "/images/nutrition-2.jfif",
    alt: "Fresh foods and a tablet used for nutrition planning",
    title: "Nutrition Planning",
    description: "Digital-enabled nutrition education and individualized action plans"
  },
  {
    src: "/images/hero-background.jpg",
    alt: "Sorghum field representing local food systems and nutrition value chains",
    title: "Food Systems",
    description: "Nutrition-sensitive agriculture, food value chains, and prevention work"
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
