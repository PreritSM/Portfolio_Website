import type { CareerEntry, Project, SkillGroup, SocialLink } from '../types/portfolio'

export const name = 'Prerit Mittal'
export const tagline =
  'Machine Learning Engineer building production ML systems that are fast, reliable, and measurable.'

export const about = {
  lead:
    "I'm an ML engineer who likes working at the point where models stop being academic and start being accountable.",
  body:
    "Through my work on production systems at GE Digital, I've focused on auditability, rollback safety, monitoring, and infrastructure — the parts of ML that decide whether a model actually survives contact with the real world. My projects span wafer inspection pipelines, CUDA kernel tuning, and reinforcement-based LLM adaptation.",
}

export const projects: Project[] = [
  {
    title: 'Adaptive Multi-Agent RAG System',
    description:
      'A multi-agent retrieval-augmented generation pipeline with dedicated retrieval, verification, and synthesis stages to control hallucination.',
    tech: ['FastAPI', 'LangGraph', 'LangChain', 'Vector Search', 'RAGAS'],
    highlight: 'Hallucination-controlled synthesis',
  },
  {
    title: 'Monocular Obstacle Avoidance for UAVs',
    description:
      'Real-time obstacle avoidance for drones using a single camera, tuned for tight latency and stability budgets.',
    tech: ['PyTorch', 'OpenCV'],
    highlight: '<100ms latency · 10–15 Hz sustained · <3% stale predictions',
  },
  {
    title: 'Wafer Defect Detection — MLOps',
    description:
      'End-to-end MLOps pipeline for semiconductor wafer defect detection, from data versioning to sub-minute deployments.',
    tech: ['AWS S3', 'Lambda', 'RDS', 'EC2', 'MLflow', 'Docker', 'FastAPI', 'DVC', 'GitHub Actions'],
    highlight: '60–80% faster retraining · sub-minute deploys',
  },
  {
    title: 'Adaptive LLM Finetuning with GRPO',
    description:
      'Reinforcement-based finetuning of open LLMs using GRPO and LoRA adapters for efficient adaptation.',
    tech: ['LoRA', 'Unsloth', 'GRPO'],
    highlight: '+8.5% GSM8K accuracy',
  },
  {
    title: 'PodAI — AI Serverless Podcast',
    description:
      'Serverless platform that converts PDFs, images, and lecture videos into podcast-style audio content.',
    tech: ['AWS', 'CloudWatch', 'SNS'],
    highlight: 'Fully serverless content pipeline',
  },
  {
    title: 'VGG16 CUDA Kernels',
    description:
      'Hand-tuned CUDA kernels for VGG16 inference, optimizing throughput and GPU utilization.',
    tech: ['CUDA', 'C++'],
    highlight: '2.5x throughput · +30% GPU utilization',
  },
  {
    title: 'Autonomous Vehicle Navigation System',
    description:
      'Lane detection and navigation stack for autonomous driving, validated in simulation.',
    tech: ['YOLO', 'UFLD', 'CARLA'],
    highlight: '~0.85 mAP@0.50',
  },
  {
    title: 'Robust Person Re-Identification and Tracking',
    description:
      'Multi-object tracking and re-identification system combining detection and metric learning.',
    tech: ['Faster R-CNN', 'Siamese Networks', 'MOT16', 'Market-1501'],
    highlight: 'Robust cross-camera re-ID',
  },
]

export const career: CareerEntry[] = [
  {
    role: 'Services Engineering Specialist',
    org: 'GE Digital',
    period: '2023 — 2024',
    points: [
      'Built an Advanced Process Control digital twin for production manufacturing lines.',
      '15% reduction in process variability, 10% increase in throughput, 95% defect detection.',
      'Saved approximately $5K per production cycle.',
    ],
  },
  {
    role: 'Data Science Intern',
    org: '',
    period: '2022',
    points: [
      'Built an Item Response Theory web app for adaptive quizzes.',
      '93.2% model accuracy with a 79.7 System Usability Scale score.',
    ],
  },
  {
    role: 'Winter Research Intern',
    org: '',
    period: '2021 — 2022',
    points: [
      'CNN-based Chinese handwriting assessment across 39,000+ samples.',
      'Achieved 9.82% normalized MAPE.',
    ],
  },
]

export const skills: SkillGroup[] = [
  {
    category: 'ML & Deep Learning',
    items: ['PyTorch', 'CUDA', 'LoRA / GRPO', 'RAG', 'LangChain', 'LangGraph', 'Computer Vision'],
  },
  {
    category: 'MLOps & Infra',
    items: ['MLflow', 'Docker', 'DVC', 'GitHub Actions', 'AWS (S3, Lambda, EC2, RDS)', 'FastAPI'],
  },
  {
    category: 'Languages & Tools',
    items: ['Python', 'C++', 'SQL', 'OpenCV', 'CARLA'],
  },
]

export const socials: SocialLink[] = [
  { label: 'Email', href: 'mailto:mail2preritmittal@gmail.com', icon: 'mail' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/preritmittal/', icon: 'linkedin' },
]

export const email = 'mail2preritmittal@gmail.com'
export const linkedin = 'https://linkedin.com/in/preritmittal/'
