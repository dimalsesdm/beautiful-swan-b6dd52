import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Send, CheckCircle, Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const socials = [
  {
    label: 'GitHub',
    handle: '@alexrivera',
    href: 'https://github.com',
    Icon: Github,
    desc: 'Open source & side projects',
  },
  {
    label: 'Twitter / X',
    handle: '@alexrivera',
    href: 'https://twitter.com',
    Icon: Twitter,
    desc: 'Thoughts on design & code',
  },
  {
    label: 'LinkedIn',
    handle: 'in/alexrivera',
    href: 'https://linkedin.com',
    Icon: Linkedin,
    desc: 'Professional network',
  },
  {
    label: 'Instagram',
    handle: '@alexrivera.photo',
    href: 'https://instagram.com',
    Icon: Instagram,
    desc: 'Photography & visual work',
  },
  {
    label: 'Email',
    handle: 'hello@alexrivera.design',
    href: 'mailto:hello@alexrivera.design',
    Icon: Mail,
    desc: 'For direct enquiries',
  },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-xs font-sans tracking-[0.2em] uppercase mb-4">Get In Touch</p>
          <h1
            className="font-serif text-6xl md:text-7xl font-bold text-foreground leading-tight mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Let's make<br />
            <span className="italic">something.</span>
          </h1>
          <p className="font-sans text-muted-foreground text-lg max-w-md">
            Whether it's a new project, a collaboration, or just saying hello — I'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Social links + availability */}
          <div className="lg:col-span-2 space-y-10">
            {/* Availability */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-sans font-medium text-foreground">Currently available</span>
              </div>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                Open to freelance projects, consulting, and full-time roles. Response time is usually within 24 hours.
              </p>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-5">Find me on</p>
              <div className="space-y-3">
                {socials.map(({ label, handle, href, Icon, desc }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-sans font-medium text-foreground">{label}</span>
                      </div>
                      <span className="text-xs font-sans text-primary">{handle}</span>
                      <p className="text-xs font-sans text-muted-foreground">{desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center max-w-sm mx-auto">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-serif text-3xl font-semibold text-foreground mb-3">Message received!</h2>
                  <p className="font-sans text-muted-foreground mb-8">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 border border-border text-foreground font-sans text-sm rounded-full hover:border-primary/50 hover:text-primary transition-all duration-200"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-sans font-medium text-muted-foreground tracking-widest uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-sans font-medium text-muted-foreground tracking-widest uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="hello@example.com"
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-sans font-medium text-muted-foreground tracking-widest uppercase mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground font-sans text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200 appearance-none"
                  >
                    <option value="">What's this about?</option>
                    <option value="project">New project inquiry</option>
                    <option value="consulting">Consulting</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="hiring">Job opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-sans font-medium text-muted-foreground tracking-widest uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans font-medium rounded-full hover:bg-primary/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:gap-3"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
