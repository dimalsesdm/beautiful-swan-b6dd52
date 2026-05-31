import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

const projects = [
  {
    id: 'luminary',
    title: 'Luminary',
    description:
      'A comprehensive design system and component library serving 40+ product teams. Built on React with full TypeScript support, automated accessibility checks, and a zero-dependency core.',
    tags: ['React', 'TypeScript', 'Design System', 'Storybook'],
    github: 'https://github.com',
    liveUrl: 'https://example.com',
    year: '2024',
    status: 'Live',
    accent: 'from-amber-900/40 to-orange-950/60',
  },
  {
    id: 'meridian',
    title: 'Meridian Studio',
    description:
      'Complete brand identity and interactive website for an architecture firm focused on sustainable design. Features 3D model viewer, project case studies, and a bespoke CMS.',
    tags: ['Next.js', 'Three.js', 'Framer Motion', 'Sanity CMS'],
    github: undefined,
    liveUrl: 'https://example.com',
    year: '2024',
    status: 'Live',
    accent: 'from-stone-800/40 to-zinc-900/60',
  },
  {
    id: 'sonder',
    title: 'Sonder',
    description:
      'A mindfulness and journaling app with AI-powered mood tracking. 12k+ downloads in the first month. Designed the full user journey from onboarding to daily reflection.',
    tags: ['React Native', 'AI/ML', 'UX Design', 'Node.js'],
    github: 'https://github.com',
    liveUrl: undefined,
    year: '2023',
    status: 'Acquired',
    accent: 'from-teal-900/40 to-cyan-950/60',
  },
  {
    id: 'atlas',
    title: 'Atlas Maps',
    description:
      'Real-time collaborative mapping tool for field researchers. Handles 50k+ concurrent users with offline-first architecture and seamless conflict resolution.',
    tags: ['Vue.js', 'WebSockets', 'MapboxGL', 'PostgreSQL'],
    github: 'https://github.com',
    liveUrl: 'https://example.com',
    year: '2023',
    status: 'Live',
    accent: 'from-blue-900/40 to-indigo-950/60',
  },
  {
    id: 'flux',
    title: 'Flux Finance',
    description:
      'Personal finance dashboard with intelligent expense categorization. Connected to 2500+ institutions via Plaid. Built a custom data visualization library for financial charts.',
    tags: ['React', 'D3.js', 'Plaid API', 'Python'],
    github: 'https://github.com',
    liveUrl: undefined,
    year: '2022',
    status: 'Sunset',
    accent: 'from-violet-900/40 to-purple-950/60',
  },
  {
    id: 'habitat',
    title: 'Habitat',
    description:
      'Home search and neighborhood discovery platform. ML-powered recommendations based on lifestyle preferences, commute patterns, and community data.',
    tags: ['Next.js', 'Machine Learning', 'Google Maps', 'Redis'],
    github: undefined,
    liveUrl: 'https://example.com',
    year: '2022',
    status: 'Live',
    accent: 'from-emerald-900/40 to-green-950/60',
  },
]

const statusColors: Record<string, string> = {
  Live: 'text-green-400 bg-green-400/10 border-green-400/20',
  Acquired: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  Sunset: 'text-muted-foreground bg-secondary border-border',
}

function Projects() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-xs font-sans tracking-[0.2em] uppercase mb-4">Selected Work</p>
          <h1
            className="font-serif text-6xl md:text-7xl font-bold text-foreground leading-tight mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Things I've<br />
            <span className="italic">built.</span>
          </h1>
          <p className="font-sans text-muted-foreground text-lg max-w-xl">
            A curated selection of projects — from design systems to consumer apps — where I've left my mark.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Visual header */}
              <div className={`h-40 bg-gradient-to-br ${project.accent} relative flex items-end p-5`}>
                <div className="absolute top-4 left-5 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-sans px-2.5 py-1 rounded-full border ${statusColors[project.status]}`}
                  >
                    {project.status === 'Live' && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-5 text-xs font-sans text-foreground/30 tracking-widest">
                  {project.year}
                </div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">{project.title}</h2>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-6">
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-sans px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-sans text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <Github size={13} />
                      Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-sans text-primary hover:text-primary/80 transition-colors duration-200 ml-auto"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
