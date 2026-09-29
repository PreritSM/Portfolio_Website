import { motion } from 'framer-motion'
import { career } from '../data/portfolio'
import { SectionBadge, SectionHeading } from './SectionHeader'

export default function Experience() {
  return (
    <section id="career" className="max-w-3xl mx-auto px-6 py-28">
      <div className="flex flex-col items-center mb-16">
        <SectionBadge>Career</SectionBadge>
        <div className="mt-6">
          <SectionHeading muted="And This Is">My Career</SectionHeading>
        </div>
      </div>

      <div className="space-y-0">
        {career.map((entry, i) => (
          <motion.div
            key={entry.role + entry.from}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-t border-border py-8 first:border-t-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-text-h">{entry.role}</h3>
              <span className="text-sm text-text-dim">
                {entry.from} – {entry.to}
              </span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {entry.points.map((point) => (
                <li key={point} className="text-sm text-text leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
