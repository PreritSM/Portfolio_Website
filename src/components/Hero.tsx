import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { name, tagline, linkedin } from '../data/portfolio'
import { scrollToId } from '../utils/scrollToId'
import { SocialIcon } from './Icons'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 20%, rgba(0,153,255,0.16), transparent 70%)',
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-[0.2em] text-accent mb-6"
      >
        Machine Learning Engineer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-text-h"
      >
        Hi, I'm <span className="gradient-text">{name}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-text"
      >
        {tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex items-center gap-4"
      >
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent text-bg font-medium px-6 py-3 hover:opacity-90 transition-opacity"
        >
          <SocialIcon icon="linkedin" size={18} />
          Connect with me
        </a>
        <button
          onClick={() => scrollToId('projects')}
          className="inline-flex items-center gap-2 rounded-full border border-border text-text-h font-medium px-6 py-3 hover:border-accent hover:text-accent transition-colors"
        >
          View Projects
        </button>
      </motion.div>

      <motion.button
        onClick={() => scrollToId('about')}
        aria-label="Scroll to About"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 text-text-dim hover:text-accent transition-colors"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  )
}
