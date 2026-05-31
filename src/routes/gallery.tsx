import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

const photos = [
  {
    id: 'arch',
    url: '/gallery/arch.svg',
    title: 'Golden Hour',
    category: 'Architecture',
    year: '2024',
    description: 'Geometric light studies in downtown San Francisco. Exploring how late afternoon sun transforms urban surfaces into abstract compositions.',
    w: 800,
    h: 600,
  },
  {
    id: 'portrait',
    url: '/gallery/portrait.svg',
    title: 'Inner Light',
    category: 'Portrait',
    year: '2024',
    description: 'A series examining the relationship between light and the human form. Natural light, minimal direction.',
    w: 600,
    h: 800,
  },
  {
    id: 'landscape',
    url: '/gallery/landscape.svg',
    title: 'Threshold',
    category: 'Landscape',
    year: '2023',
    description: 'Marin Headlands, early morning. The fog moves like breath. Shot on medium format film.',
    w: 900,
    h: 600,
  },
  {
    id: 'texture',
    url: '/gallery/texture.svg',
    title: 'Wabi-Sabi',
    category: 'Texture',
    year: '2024',
    description: 'Close study of weathered surfaces — rust, paint, concrete. Finding beauty in impermanence.',
    w: 700,
    h: 700,
  },
  {
    id: 'urban',
    url: '/gallery/urban.svg',
    title: 'The Grid',
    category: 'Urban',
    year: '2023',
    description: "San Francisco's street grid from above. Geometry, shadow, and the restless energy of a city in motion.",
    w: 900,
    h: 600,
  },
  {
    id: 'color',
    url: '/gallery/color.svg',
    title: 'Chromatic Study No. 7',
    category: 'Abstract',
    year: '2024',
    description: 'Exploration of warm tone relationships. Part of an ongoing series examining color theory through photography.',
    w: 700,
    h: 700,
  },
]

function Lightbox({
  photo,
  onClose,
}: {
  photo: (typeof photos)[number]
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full border border-border text-foreground hover:text-primary hover:border-primary transition-colors duration-200"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      <div
        className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="md:col-span-2">
          <img
            src={`/.netlify/images?url=${encodeURIComponent(photo.url)}&w=1200&fit=contain&q=90`}
            alt={photo.title}
            className="w-full h-auto rounded-xl border border-border/50 object-contain max-h-[70vh]"
          />
        </div>

        {/* Details */}
        <div className="space-y-5">
          <div>
            <p className="text-xs font-sans text-primary tracking-[0.2em] uppercase mb-2">{photo.category}</p>
            <h2 className="font-serif text-3xl font-semibold text-foreground">{photo.title}</h2>
            <p className="text-sm font-sans text-muted-foreground mt-1">{photo.year}</p>
          </div>
          <div className="h-px bg-border" />
          <p className="font-sans text-sm text-foreground/70 leading-relaxed">{photo.description}</p>
          <div className="space-y-1.5 text-xs font-sans text-muted-foreground">
            <div className="flex justify-between">
              <span>Format</span>
              <span className="text-foreground">Digital</span>
            </div>
            <div className="flex justify-between">
              <span>Series</span>
              <span className="text-foreground">{photo.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Gallery() {
  const [active, setActive] = useState<(typeof photos)[number] | null>(null)
  const [filter, setFilter] = useState<string>('All')

  const categories = ['All', ...Array.from(new Set(photos.map((p) => p.category)))]
  const filtered = filter === 'All' ? photos : photos.filter((p) => p.category === filter)

  return (
    <div className="min-h-screen pt-24">
      {active && <Lightbox photo={active} onClose={() => setActive(null)} />}

      {/* Header */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-xs font-sans tracking-[0.2em] uppercase mb-4">Photography & Art</p>
          <h1
            className="font-serif text-6xl md:text-7xl font-bold text-foreground leading-tight mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Visual<br />
            <span className="italic">Stories.</span>
          </h1>
          <p className="font-sans text-muted-foreground text-lg max-w-md mb-10">
            A collection of photographic work — explorations of light, form, and the quiet poetry of everyday moments.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium tracking-wider transition-all duration-200 ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry-style grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className="break-inside-avoid group relative overflow-hidden rounded-xl border border-border cursor-pointer hover:border-primary/30 transition-all duration-500"
                onClick={() => setActive(photo)}
              >
                {/* Netlify Image CDN optimized thumbnail */}
                <img
                  src={`/.netlify/images?url=${encodeURIComponent(photo.url)}&w=800&q=85`}
                  alt={photo.title}
                  width={photo.w}
                  height={photo.h}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                  <p className="text-xs font-sans text-primary tracking-[0.15em] uppercase mb-1">{photo.category}</p>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{photo.title}</h3>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-sans text-foreground/60">
                    <ZoomIn size={12} />
                    <span>View details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
