import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { email, linkedin } from '../data/portfolio'
import { SectionBadge, SectionHeading } from './SectionHeader'

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-28 text-center">
      <div className="flex flex-col items-center">
        <SectionBadge>Contact</SectionBadge>
        <div className="mt-6">
          <SectionHeading muted="Let's Get in">Touch</SectionHeading>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-text mt-6 mb-10"
      >
        Let's connect and build together.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-col items-center gap-4"
      >
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-white/25 text-text-h font-medium px-6 py-3 transition-colors hover:bg-white hover:text-bg"
        >
          Connect with me
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
        <p className="text-sm text-text-dim">
          Or email{' '}
          <a href={`mailto:${email}`} className="text-accent hover:underline">
            {email}
          </a>
        </p>
      </motion.div>
    </section>
  )
}
