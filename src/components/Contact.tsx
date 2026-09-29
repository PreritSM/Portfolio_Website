import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { email, linkedin } from '../data/portfolio'
import { SocialIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-28 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-[0.2em] text-accent mb-4"
      >
        Contact
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl md:text-4xl font-bold text-text-h mb-6"
      >
        Let's Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-text max-w-md mx-auto mb-10"
      >
        Have an opportunity, a project, or just want to talk ML systems? My inbox is open.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent text-bg font-medium px-6 py-3 hover:opacity-90 transition-opacity"
        >
          <Mail size={18} />
          {email}
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border text-text-h font-medium px-6 py-3 hover:border-accent hover:text-accent transition-colors"
        >
          <SocialIcon icon="linkedin" size={18} />
          LinkedIn
        </a>
      </motion.div>
    </section>
  )
}
