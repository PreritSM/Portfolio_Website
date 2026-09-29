import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-28">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-[0.2em] text-accent mb-4 text-center"
      >
        Portfolio
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl md:text-4xl font-bold text-text-h text-center mb-16"
      >
        My Latest Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent/50 hover:bg-surface-hover transition-colors"
          >
            <h3 className="text-lg font-semibold text-text-h">{p.title}</h3>
            <p className="mt-2 text-sm text-text leading-relaxed">{p.description}</p>
            <p className="mt-4 text-sm font-medium text-accent">{p.highlight}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full border border-border px-3 py-1 text-text-dim group-hover:text-text transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
