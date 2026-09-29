import { name, socials } from '../data/portfolio'
import { SocialIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-dim">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={s.label}
              className="text-text-dim hover:text-accent transition-colors"
            >
              <SocialIcon icon={s.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
