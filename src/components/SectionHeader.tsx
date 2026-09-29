import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-text-h"
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ muted, children }: { muted: string; children: ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="text-3xl md:text-5xl font-medium tracking-tight text-center leading-tight"
    >
      <span className="text-text">{muted} </span>
      <span className="text-text-h">{children}</span>
    </motion.h2>
  )
}
