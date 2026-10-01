import { motion } from 'framer-motion'
import { about, portraitUrl } from '../data/portfolio'
import { SectionBadge } from './SectionHeader'

export default function About() {
  const loopedKeywords = [...about.keywords, ...about.keywords]

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-14 scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,480px)_1fr] gap-10 lg:gap-24 items-center max-w-[1120px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[480px] mx-auto md:mx-0 rounded-2xl border border-border overflow-hidden aspect-[480/580]"
        >
          <img
            src={portraitUrl}
            alt="Prerit Mittal"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <div>
          <SectionBadge>About</SectionBadge>

          <div className="mt-6 space-y-5">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-text leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="glass mt-12 max-w-[1120px] mx-auto rounded-2xl overflow-hidden"
      >
        <div
          className="flex overflow-hidden py-6"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)',
          }}
        >
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {loopedKeywords.map((k, i) => (
              <span key={i} className="text-text-h font-medium text-lg">
                {k}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
