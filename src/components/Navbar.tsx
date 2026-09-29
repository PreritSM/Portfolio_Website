import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { scrollToId } from '../utils/scrollToId'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'career', label: 'Career' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <button
          onClick={() => handleClick('hero')}
          className="font-semibold text-text-h tracking-tight"
        >
          Prerit Mittal
        </button>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => handleClick(l.id)}
                className="text-text hover:text-text-h transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-text-h"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden flex flex-col gap-1 px-6 pb-4 bg-bg/95 border-b border-border"
        >
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => handleClick(l.id)}
                className="w-full text-left py-2 text-text hover:text-text-h transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  )
}
