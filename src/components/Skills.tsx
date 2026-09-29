import { motion } from 'framer-motion'
import { skillIcons } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-text text-center mb-14"
      >
        Skills Sphere
      </motion.h2>

      <div className="rounded-2xl border border-border overflow-hidden bg-black py-16 px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {skillIcons.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex flex-col items-center gap-2"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3 + (i % 4) * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: (i % 5) * 0.3,
                }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-border bg-surface flex items-center justify-center shadow-lg group-hover:border-accent/50 transition-colors"
              >
                <img
                  src={`https://cdn.simpleicons.org/${s.slug}/ffffff`}
                  alt={s.label}
                  className="w-8 h-8 md:w-10 md:h-10 opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.style.display = 'none'
                    img.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <span className="hidden text-xs font-bold text-text-h opacity-80">
                  {s.label.slice(0, 3).toUpperCase()}
                </span>
              </motion.div>
              <span className="text-xs text-text-dim">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
