import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import config from '../data/config.json'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-neu-sm font-display text-sm font-semibold transition-all duration-200 ${
      isActive
        ? 'bg-base shadow-neu-pressed text-brand-600'
        : 'text-ink-soft hover:text-brand-600'
    }`

  return (
    <header
      className={`sticky top-0 z-50 bg-base/90 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-neu-flat-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.svg"
              alt={`${config.instituteFullName} logo`}
              className="w-12 h-12 rounded-neu-sm shadow-neu-flat-sm group-hover:shadow-neu-hover transition-shadow"
            />
            <div className="leading-tight">
              <p className="font-display font-bold text-lg text-ink">
                {config.instituteName}
                <span className="text-brand-500">.</span>
              </p>
              <p className="text-[11px] text-ink-faint tracking-wide uppercase hidden sm:block">
                {config.tagline}
              </p>
            </div>
          </NavLink>

          <nav className="hidden lg:flex items-center gap-2 bg-base rounded-neu-lg shadow-neu-pressed px-2 py-2">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={`tel:${config.contact.phones[0]}`}
            className="hidden lg:inline-flex items-center gap-2 bg-brand-gradient text-white font-display font-semibold text-sm px-5 py-3 rounded-neu-sm shadow-neu-flat hover:brightness-110 transition"
          >
            Call Now
          </a>

          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-neu-sm bg-base shadow-neu-flat active:shadow-neu-pressed"
          >
            <div className="w-6 space-y-1.5">
              <span
                className={`block h-0.5 bg-ink rounded transition-transform ${
                  open ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span className={`block h-0.5 bg-ink rounded transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span
                className={`block h-0.5 bg-ink rounded transition-transform ${
                  open ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="px-4 pb-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-neu-sm font-display text-sm font-semibold bg-base ${
                  isActive ? 'shadow-neu-pressed text-brand-600' : 'shadow-neu-flat-sm text-ink-soft'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={`tel:${config.contact.phones[0]}`}
            className="mt-1 text-center bg-brand-gradient text-white font-display font-semibold text-sm px-5 py-3 rounded-neu-sm shadow-neu-flat"
          >
            Call Now: {config.contact.phones[0]}
          </a>
        </nav>
      </div>
    </header>
  )
}
