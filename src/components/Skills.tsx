import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-28">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-[0.2em] text-accent mb-4 text-center"
      >
        Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl md:text-4xl font-bold text-text-h text-center mb-16"
      >
        Tools &amp; Technologies
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm rounded-full bg-accent-soft text-accent px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
