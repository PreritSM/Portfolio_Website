export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'github' | 'twitter' | 'email' | 'leetcode';
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Tool {
  name: string;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  href?: string;
  repoHref?: string;
  status?: 'live' | 'coming-soon';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets?: string[];
  logo?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  logo?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  image?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  location?: string;
  email?: string;
  resumeHref?: string;
  profileImage?: string;
  socials: SocialLink[];
  skills: Skill[];
  tools: Tool[];
  certifications: Certification[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  about: {
    headline: string;
    professionalProfile: string;
    journey: string;
  };
  contact: {
    heading: string;
    subheading: string;
  };
}
