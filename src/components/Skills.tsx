import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolio'
import { SectionBadge, SectionHeading } from './SectionHeader'

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-28">
      <div className="flex flex-col items-center gap-6 mb-14">
        <SectionBadge>Skills</SectionBadge>
        <SectionHeading muted="What I">work with</SectionHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass rounded-2xl p-5 hover:border-accent/50 transition-colors"
          >
            <h3 className="text-sm font-semibold text-text-h mb-3">{group.title}</h3>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="font-mono text-xs text-text border border-border rounded-full px-3 py-1"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
