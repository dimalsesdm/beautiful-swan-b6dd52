import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
  useRouterState,
} from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Alex Rivera — Creative Developer & Designer' },
      {
        name: 'description',
        content:
          'Portfolio of Alex Rivera — building beautiful digital experiences through thoughtful design and clean code.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/projects', label: 'Work' },
  { to: '/weather', label: 'Weather' },
  { to: '/contact', label: 'Contact' },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors duration-200"
        >
          Alex Rivera
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                  pathname === to ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ${
                    pathname === to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-300 ${
              menuOpen ? 'opacity-0 w-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-64 border-b border-border' : 'max-h-0'
        } bg-background/98 backdrop-blur-md`}
      >
        <ul className="px-6 py-6 space-y-5">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`block text-lg font-serif italic transition-colors duration-200 ${
                  pathname === to ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border py-10 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm font-sans">
          © {year} Alex Rivera. All rights reserved.
        </p>
        <div className="flex gap-6">
          {[
            { href: 'https://github.com', label: 'GitHub' },
            { href: 'https://twitter.com', label: 'Twitter' },
            { href: 'https://linkedin.com', label: 'LinkedIn' },
            { href: 'https://dribbble.com', label: 'Dribbble' },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="grain">
      <head>
        <HeadContent />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
