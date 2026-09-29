import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { greeting, tagline, linkedin } from '../data/portfolio'
import { scrollToId } from '../utils/scrollToId'

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
          background: 'radial-gradient(60% 50% at 50% 20%, rgba(0,153,255,0.16), transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-text-h mb-8"
      >
        {greeting}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl text-4xl md:text-6xl lg:text-[70px] font-bold tracking-tight leading-[1.1] text-text-h"
      >
        {tagline}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-10"
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
