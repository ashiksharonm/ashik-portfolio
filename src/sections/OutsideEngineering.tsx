import Reveal from '../components/Reveal'
import SectionNode from '../components/SectionNode'
import Marquee from '../components/Marquee'
import { galleryItems } from '../data/gallery'
import { asset } from '../lib/asset'

export default function OutsideEngineering() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-24">
        <SectionNode index="10" title="Outside of Engineering" />
        <p className="mb-10 max-w-xl text-on-surface-variant">
          Volleyball captain, hackathon organizer, occasional idea-pitch competitor.
        </p>
      </div>

      <Reveal>
        <Marquee duration={30}>
          {galleryItems.map((item) => (
            <figure
              key={item.image}
              className="relative w-72 shrink-0 overflow-hidden rounded-xl border border-outline/15 bg-surface-container-low sm:w-80"
            >
              <img
                src={asset(item.image)}
                alt={item.caption}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface/95 via-surface/60 to-transparent p-4">
                <p className="font-headline text-sm font-semibold text-on-surface">{item.caption}</p>
                <p className="mt-0.5 text-xs text-on-surface-variant">{item.detail}</p>
              </figcaption>
            </figure>
          ))}
        </Marquee>
      </Reveal>
    </section>
  )
}
