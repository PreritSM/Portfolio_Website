export interface Project {
  slug: string
  title: string
  status?: string
  metric?: string
  details: string[]
  whatIDid: string[]
}

export interface FocusArea {
  title: string
  description: string
  projectSlug: string
}

export interface CareerEntry {
  role: string
  from: string
  to: string
  points: string[]
}

export interface SkillGroup {
  title: string
  skills: string[]
}
