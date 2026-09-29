import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import { SectionBadge, SectionHeading } from './SectionHeader'

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-28">
      <div className="flex flex-col items-center mb-16">
        <SectionBadge>Portfolio</SectionBadge>
        <div className="mt-6">
          <SectionHeading muted="My Latest">Projects</SectionHeading>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="rounded-2xl border border-border bg-surface p-6 hover:border-accent/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-text-h">{p.title}</h3>

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
