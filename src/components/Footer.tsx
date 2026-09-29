import { name, tagline2, linkedin, resumeUrl } from '../data/portfolio'
import { scrollToId } from '../utils/scrollToId'

const links = [
  { label: 'Portfolio', kind: 'scroll' as const, target: 'projects' },
  { label: 'About', kind: 'scroll' as const, target: 'about' },
  { label: 'Resume/CV', kind: 'link' as const, target: resumeUrl },
  { label: 'Contact me', kind: 'scroll' as const, target: 'contact' },
  { label: 'LinkedIn', kind: 'link' as const, target: linkedin },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-4">
        <p className="font-semibold text-text-h">{name}</p>
        <p className="text-sm text-text-dim">{tagline2}</p>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-2 text-sm">
          {links.map((l) =>
            l.kind === 'scroll' ? (
              <button
                key={l.label}
                onClick={() => scrollToId(l.target)}
                className="text-text hover:text-text-h transition-colors"
              >
                {l.label}
              </button>
            ) : (
              <a
                key={l.label}
                href={l.target}
                target="_blank"
                rel="noreferrer"
                className="text-text hover:text-text-h transition-colors"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <p className="text-xs text-text-dim mt-6">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
