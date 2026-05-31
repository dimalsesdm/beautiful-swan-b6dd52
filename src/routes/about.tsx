import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, MapPin, Coffee } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

const skills = [
  { category: 'Design', items: ['UI/UX Design', 'Design Systems', 'Prototyping', 'Brand Identity', 'Motion Design'] },
  { category: 'Development', items: ['React / Next.js', 'TypeScript', 'Node.js', 'CSS / Tailwind', 'GraphQL'] },
  { category: 'Tools', items: ['Figma', 'Framer', 'Webflow', 'Vercel / Netlify', 'Git'] },
]

const timeline = [
  {
    year: '2022–Present',
    role: 'Senior Product Designer & Frontend Engineer',
    company: 'Horizon Labs',
    desc: 'Leading design and frontend for a suite of enterprise SaaS tools. Built and maintained a design system used by 40+ product teams.',
  },
  {
    year: '2020–2022',
    role: 'UI/UX Designer',
    company: 'Studio Meridian',
    desc: 'Designed digital experiences for clients across fintech, healthcare, and consumer goods. Led research, wireframing, and visual design.',
  },
  {
    year: '2018–2020',
    role: 'Frontend Developer',
    company: 'Pixel & Co.',
    desc: 'Built responsive web applications for startups. Developed a passion for the intersection of clean code and polished design.',
  },
]

function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-xs font-sans tracking-[0.2em] uppercase mb-4">About Me</p>
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-foreground leading-tight mb-6"
            style={{ letterSpacing: '-0.02em' }}>
            Designer who<br />
            <span className="italic">codes.</span>
          </h1>
          <p className="font-sans text-muted-foreground text-lg max-w-xl">
            I live at the intersection of design craft and engineering precision — building things that feel as good as they look.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Photo + quick facts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile image */}
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 translate-x-3 translate-y-3" />
              <img
                src="/.netlify/images?url=%2Fheadshot-on-white.jpg&w=600&h=700&fit=cover&position=top"
                alt="Alex Rivera"
                className="relative w-full max-w-xs rounded-2xl object-cover border border-border"
                style={{ aspectRatio: '4/5' }}
              />
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-sans text-foreground">Available for work</span>
              </div>
            </div>

            {/* Quick facts */}
            <div className="space-y-3 pt-8">
              <div className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                <MapPin size={14} className="text-primary flex-shrink-0" />
                <span>San Francisco, California</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                <Coffee size={14} className="text-primary flex-shrink-0" />
                <span>Fueled by espresso & curiosity</span>
              </div>
            </div>

            {/* Languages */}
            <div className="border-t border-border pt-6">
              <p className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-3">Languages</p>
              <div className="flex flex-wrap gap-2">
                {['English', 'Spanish', 'Portuguese'].map((lang) => (
                  <span key={lang} className="text-xs font-sans px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Bio + skills + timeline */}
          <div className="lg:col-span-3 space-y-12">
            {/* Bio */}
            <div className="space-y-5">
              <p className="font-sans text-foreground/80 leading-relaxed text-base">
                I'm Alex Rivera — a creative developer and designer with 7+ years of experience turning
                complex problems into elegant digital solutions. My work spans product design, brand identity,
                interactive development, and photography.
              </p>
              <p className="font-sans text-foreground/80 leading-relaxed text-base">
                I believe great design is invisible. When a product feels effortless to use, the design has done
                its job. I obsess over the details that others overlook — typography, micro-interactions,
                performance, accessibility.
              </p>
              <p className="font-sans text-foreground/80 leading-relaxed text-base">
                When I'm not at my desk, you'll find me with a camera, exploring city streets or hiking trails,
                looking for the light that makes an ordinary scene extraordinary. That same obsession with light
                and composition carries into everything I design.
              </p>
            </div>

            {/* Skills */}
            <div>
              <p className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-6">Expertise</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {skills.map(({ category, items }) => (
                  <div key={category}>
                    <h3 className="text-sm font-sans font-semibold text-primary mb-3">{category}</h3>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="text-sm font-sans text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience timeline */}
            <div>
              <p className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-6">Experience</p>
              <div className="relative space-y-8">
                <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
                {timeline.map(({ year, role, company, desc }) => (
                  <div key={role} className="pl-6 relative">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-0.5" />
                    <p className="text-xs font-sans text-primary tracking-wider mb-1">{year}</p>
                    <h3 className="font-sans font-semibold text-foreground text-base">{role}</h3>
                    <p className="text-sm font-sans text-muted-foreground mb-2">{company}</p>
                    <p className="text-sm font-sans text-foreground/70 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-sans font-medium text-sm rounded-full hover:bg-primary/90 transition-all duration-200 hover:gap-3"
              >
                Work with me <ArrowRight size={16} />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-sans font-medium text-sm rounded-full hover:border-primary/50 hover:text-primary transition-all duration-200"
              >
                See my gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
