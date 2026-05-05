import Image from "next/image"
import { Reveal } from "@/components/site/reveal"

const IMAGES = [
  {
    src: "/images/training-facilitation.jpg",
    alt: "CORD-led training facilitation session in Ethiopia",
    caption: "Training facilitation",
  },
  {
    src: "/images/community-nutrition.jpg",
    alt: "Community nutrition outreach with mothers and children",
    caption: "Community outreach",
  },
  {
    src: "/images/conference-addis.jpg",
    alt: "International conference in Addis Ababa",
    caption: "Conferences & forums",
  },
  {
    src: "/images/strategy-session.jpg",
    alt: "CORD consultants in a strategy session",
    caption: "Advisory engagements",
  },
]

export function Gallery() {
  return (
    <div>
      <Reveal>
        <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
          In the field
        </div>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Where our work happens.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {IMAGES.map((img, i) => (
          <Reveal
            key={img.src}
            delay={i * 0.08}
            className={[
              i === 0 ? "sm:col-span-2 md:col-span-2" : "",
              i === 3 ? "md:col-span-2" : "",
            ].join(" ")}
          >
            <figure className="group relative overflow-hidden rounded-2xl border border-border bg-muted">
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="absolute bottom-3 left-3 rounded-full border border-border/60 bg-background/85 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                {img.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
