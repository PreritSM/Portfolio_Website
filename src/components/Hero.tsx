import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { greeting, taglineLines, linkedin } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      <div className="geo-bg absolute inset-0 z-0" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to bottom, transparent 60%, var(--color-bg) 100%)' }}
      />

      <div className="relative z-10 flex w-full flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass inline-flex items-center rounded-full px-4 py-1.5 text-sm text-text-h mb-8"
        >
          {greeting}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-7xl text-4xl md:text-6xl lg:text-[70px] font-medium tracking-tight leading-[1.1] text-text-h"
        >
          {taglineLines.map((line, i) => (
            <span key={i} className="md:block">
              {i > 0 && ' '}
              {line}
            </span>
          ))}
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
      </div>
    </section>
  )
}
