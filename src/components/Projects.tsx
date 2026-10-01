import { motion } from 'framer-motion'
import { focusAreas, projects } from '../data/portfolio'
import { scrollToId } from '../utils/scrollToId'
import { SectionBadge, SectionHeading } from './SectionHeader'

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-14 scroll-mt-16">
      <div className="flex flex-col items-center mb-16">
        <SectionBadge>Portfolio</SectionBadge>
        <div className="mt-6">
          <SectionHeading muted="My Latest">Projects</SectionHeading>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {focusAreas.map((area, i) => (
          <motion.button
            key={area.title}
            onClick={() => scrollToId(`project-${area.projectSlug}`)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass text-left rounded-2xl p-5 hover:border-accent/50 transition-colors"
          >
            <h3 className="text-sm font-semibold text-text-h">{area.title}</h3>
            <p className="mt-2 text-xs text-text leading-relaxed">{area.description}</p>
            <span className="mt-3 inline-block text-xs text-accent">See the work →</span>
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.slug}
            id={`project-${p.slug}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="glass scroll-mt-24 rounded-2xl p-6 hover:border-accent/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-text-h">{p.title}</h3>
            {p.status && (
              <span className="mt-2 inline-block rounded-full border border-border bg-bg px-3 py-1 text-xs text-text-dim">
                {p.status}
              </span>
            )}

            {p.metrics && p.metrics.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                {p.metrics.map((m, j) => (
                  <p key={j} className="font-mono text-sm text-accent">
                    {m}
                  </p>
                ))}
              </div>
            )}

            <p className="mt-4 font-medium text-text-h">Project details</p>
            <div className="mt-2 space-y-2">
              {p.details.map((d, j) => (
                <p key={j} className="text-sm text-text leading-relaxed">
                  {d}
                </p>
              ))}
            </div>

            <p className="mt-5 font-medium text-text-h">What I did</p>
            <div className="mt-2 space-y-2">
              {p.whatIDid.map((point, j) => (
                <p key={j} className="text-sm text-text leading-relaxed">
                  {point}
                </p>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
