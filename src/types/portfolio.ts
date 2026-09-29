export interface Project {
  title: string
  description: string
  tech: string[]
  highlight: string
}

export interface CareerEntry {
  role: string
  org: string
  period: string
  points: string[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface SocialLink {
  label: string
  href: string
  icon: 'linkedin' | 'github' | 'mail' | 'file-text'
}
