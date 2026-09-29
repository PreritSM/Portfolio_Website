import { motion } from 'framer-motion'
import { career } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="career" className="max-w-3xl mx-auto px-6 py-28">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-[0.2em] text-accent mb-4 text-center"
      >
        Career
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl md:text-4xl font-bold text-text-h text-center mb-16"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-border pl-8 space-y-12">
        {career.map((entry, i) => (
          <motion.div
            key={entry.role + entry.period}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-text-h">
                {entry.role}
                {entry.org ? <span className="text-text"> · {entry.org}</span> : null}
              </h3>
              <span className="text-sm text-text-dim">{entry.period}</span>
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
