import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ChevronDown } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const featuredWork = [
  {
    id: 'luminary',
    title: 'Luminary',
    category: 'Web App · Design System',
    year: '2024',
    description: 'A component library and design system built for scale, serving 40+ teams.',
    accent: 'from-amber-900/40 to-orange-950/60',
    href: '/projects',
  },
  {
    id: 'meridian',
    title: 'Meridian',
    category: 'Branding · Web',
    year: '2024',
    description: 'Brand identity and interactive website for a sustainable architecture firm.',
    accent: 'from-stone-800/40 to-slate-900/60',
    href: '/projects',
  },
  {
    id: 'sonder',
    title: 'Sonder',
    category: 'Mobile · UI/UX',
    year: '2023',
    description: 'A mindfulness app designed to connect people with meaningful moments.',
    accent: 'from-teal-900/40 to-cyan-950/60',
    href: '/projects',
  },
]

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16">
        {/* Background accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 70% 40%, oklch(0.67 0.145 55 / 0.06) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-6xl mx-auto w-full relative">
          <p className="text-primary text-sm font-sans font-medium tracking-[0.2em] uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Creative Developer & Designer
          </p>

          <h1
            className="font-serif text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.9] font-bold text-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
            style={{ letterSpacing: '-0.02em' }}
          >
            Alex
            <br />
            <span className="italic text-primary">Rivera.</span>
          </h1>

          <p className="font-sans text-muted-foreground text-lg max-w-md leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Building digital experiences where design meets craft. Based in San Francisco,
            working with teams worldwide.
          </p>

          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-sans font-medium text-sm rounded-full hover:bg-primary/90 transition-all duration-200 hover:gap-3"
            >
              View My Work
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-sans font-medium text-sm rounded-full hover:border-primary/50 hover:text-primary transition-all duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-in fade-in duration-1000 delay-700">
          <span className="text-xs font-sans tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '7+', label: 'Years Experience' },
            { value: '60+', label: 'Projects Shipped' },
            { value: '25+', label: 'Happy Clients' },
            { value: '12', label: 'Design Awards' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-serif text-4xl font-bold text-primary mb-1">{value}</div>
              <div className="font-sans text-xs text-muted-foreground tracking-widest uppercase">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-primary text-xs font-sans tracking-[0.2em] uppercase mb-3">Selected Work</p>
              <h2 className="font-serif text-5xl font-bold text-foreground">Featured Projects</h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              All projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredWork.map((work, i) => (
              <Link
                key={work.id}
                to={work.href}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Visual header */}
                <div className={`h-48 bg-gradient-to-br ${work.accent} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-6xl font-bold text-foreground/10 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 text-xs font-sans text-foreground/40 tracking-widest">
                    {work.year}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-sans text-primary tracking-wider uppercase mb-2">{work.category}</p>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {work.title}
                  </h3>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed">{work.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-sans text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              All projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-primary text-xs font-sans tracking-[0.2em] uppercase mb-3">Visual Work</p>
              <h2 className="font-serif text-5xl font-bold text-foreground">Gallery</h2>
            </div>
            <Link
              to="/gallery"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Full Gallery <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { url: '/gallery/arch.svg', label: 'Architecture', span: 'md:col-span-2 md:row-span-2' },
              { url: '/gallery/color.svg', label: 'Color Study' },
              { url: '/gallery/texture.svg', label: 'Texture' },
              { url: '/gallery/urban.svg', label: 'Urban', span: 'md:col-span-2' },
            ].map(({ url, label, span }, i) => (
              <Link
                key={i}
                to="/gallery"
                className={`group relative overflow-hidden rounded-xl bg-muted aspect-square ${span ?? ''}`}
              >
                <img
                  src={`/.netlify/images?url=${encodeURIComponent(url)}&w=600&h=600&fit=cover`}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-sans text-foreground tracking-wider uppercase">{label}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Full Gallery <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-xs font-sans tracking-[0.2em] uppercase mb-4">Let's Collaborate</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Have a project in mind?
          </h2>
          <p className="font-sans text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            Whether you need a full digital experience or just a fresh perspective — I'd love to hear about it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-sans font-medium rounded-full hover:bg-primary/90 transition-all duration-200 hover:gap-4 text-base"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
