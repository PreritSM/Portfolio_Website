import { name, tagline2, linkedin, resumeUrl, avatarUrl } from '../data/portfolio'
import { scrollToId } from '../utils/scrollToId'

const columnOne = [
  { label: 'Portfolio', kind: 'scroll' as const, target: 'projects' },
  { label: 'About', kind: 'scroll' as const, target: 'about' },
  { label: 'Resume/CV', kind: 'link' as const, target: resumeUrl },
]

const columnTwo = [
  { label: 'Contact me', kind: 'scroll' as const, target: 'contact' },
  { label: 'LinkedIn', kind: 'link' as const, target: linkedin },
]

function FooterLink({ link }: { link: (typeof columnOne)[number] }) {
  if (link.kind === 'scroll') {
    return (
      <button
        onClick={() => scrollToId(link.target)}
        className="text-text hover:text-text-h transition-colors text-left"
      >
        {link.label}
      </button>
    )
  }
  return (
    <a
      href={link.target}
      target="_blank"
      rel="noreferrer"
      className="text-text hover:text-text-h transition-colors"
    >
      {link.label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src={avatarUrl} alt="" className="h-8 w-8 rounded-full object-cover" />
            <p className="font-semibold text-text-h">{name}</p>
          </div>
          <p className="mt-3 text-sm text-text-dim">{tagline2}</p>
        </div>

        <nav className="flex gap-16 text-sm">
          <div className="flex flex-col gap-3">
            {columnOne.map((l) => (
              <FooterLink key={l.label} link={l} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {columnTwo.map((l) => (
              <FooterLink key={l.label} link={l} />
            ))}
          </div>
        </nav>
      </div>

      <div className="mt-10 border-t border-border pt-2 overflow-hidden">
        <p
          className="bg-gradient-to-r from-text to-border bg-clip-text text-transparent font-light uppercase leading-none tracking-tighter whitespace-nowrap text-[13vw] sm:text-[10vw] md:text-[7.5vw]"
          style={{ letterSpacing: '-0.05em' }}
        >
          {name}
        </p>
      </div>
    </footer>
  )
}
