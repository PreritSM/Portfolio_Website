import type { CareerEntry, Project, SkillIcon } from '../types/portfolio'

export const name = 'Prerit Mittal'
export const greeting = "Hello, I'm Prerit👋"
export const tagline =
  'Machine Learning Engineer building production ML systems that are fast, reliable, and measurable.'
export const resumeUrl =
  'https://drive.google.com/file/d/1r6arhnWsGECq68AOM_euJfYIl4J-0c9U/view?usp=sharing'
export const portraitUrl =
  'https://framerusercontent.com/images/Mnm6YSYXfomiSI3RZ6e8FwUNk.jpg?width=3024&height=4032'
export const avatarUrl =
  'https://framerusercontent.com/images/6eRLmA4mo9qovDisxrpWbkQUe4.jpeg?width=400&height=400'

export const about = {
  paragraphs: [
    "I'm an ML engineer who likes working at the point where models stop being academic and start being accountable. My work sits at that intersection: taking messy data, designing reliable pipelines, optimizing model behavior, and making sure the end system is something a team can actually run, trust, and improve over time.",
    "I did not come into machine learning only from coursework. At GE Digital, I worked close to production systems where performance, upgrade safety, and data quality had direct operational consequences. That shaped how I think: not just about model accuracy, but about auditability, rollback safety, monitoring, infrastructure, and the engineering cost of every decision. You can see that same pattern across my projects from hardened wafer inspection pipelines and experiment tracking to CUDA kernel tuning and reinforcement-based LLM adaptation.",
  ],
  keywords: [
    'Applied LLMs',
    'Agentic AI',
    'MLOps',
    'Inference Optimization',
    'ML Systems Engineering',
    'GPU Acceleration',
    'Computer Vision',
  ],
}

export const projects: Project[] = [
  {
    title: 'Adaptive Multi-Agent RAG System',
    details: [
      'Engineered a multi-agent RAG system that could retrieve, verify, and synthesize answers while knowing when not to answer.',
      'Built with FastAPI, LangGraph, LangChain, vector search, and RAGAS, it emphasized citation-grounded responses, adaptive retrieval, and measurable hallucination control.',
    ],
    whatIDid: [
      'Designed the retrieval core across dense, sparse, and hybrid search, then added an uncertainty estimator to refuse weakly grounded responses.',
      'Built the evaluation harness, prompt experiments, Dockerized deployment, and metric tracking for faithfulness, refusal rate, latency, and query cost.',
    ],
  },
  {
    title: 'Monocular Obstacle Avoidance For UAVs',
    details: [
      'Designed a real-time monocular depth estimation pipeline using PyTorch and OpenCV for low-latency UAV obstacle avoidance.',
    ],
    whatIDid: [
      'Achieved sub-100 ms inference latency (median ≤90 ms, p95 ≤120 ms) by optimizing preprocessing, model execution, and post-processing stages.',
      'Sustained real-time perception at 10–15 Hz with ≤3% stale predictions by implementing frame buffering and latency-aware queue scheduling.',
      'Improved system resilience under network variability by tolerating up to 2% packet loss (functional up to 5%) and enabling auto-recovery within 300 ms.',
    ],
  },
  {
    title: 'Wafer Defect Detection - MLOps',
    details: [
      'End-to-end MLOps pipeline on AWS (S3, Lambda, RDS, EC2, MLflow, Docker, FastAPI, DVC, GitHub Actions) for scalable model training, governance, and deployment.',
    ],
    whatIDid: [
      'Reduced retraining setup time by 60–80% by orchestrating DVC versioning and GitHub Actions-driven EC2 training workflows.',
      'Enabled 100% data auditability and sub-minute deployments by implementing Lambda validation, MLflow tracking, and Dockerized FastAPI services.',
      'Strengthened data reliability by enforcing schema checks and persisting validated features in AWS RDS for consistent training/inference pipelines.',
    ],
  },
  {
    title: 'Adaptive LLM Finetuning with GRPO',
    details: [
      'Developed a reinforcement learning-based fine-tuning framework using LoRA, Unsloth, and GRPO to improve LLM reasoning.',
    ],
    whatIDid: [
      'Increased GSM8K accuracy by 8.5% by implementing GRPO with reward shaping, KL regularization, and advantage normalization.',
      'Scaled efficient fine-tuning across multiple LLMs by integrating LoRA adapters, quantization, and custom evaluation pipelines.',
      'Optimized training efficiency by designing modular pipelines enabling rapid experimentation across Qwen, Gemma, and Llama models.',
    ],
  },
  {
    title: 'AI Serverless Podcast - PodAI',
    details: [
      'Built an AI-powered tutoring podcast platform that converts uploaded course materials like PDFs, images, and lecture videos into an engaging two-speaker teaching podcast tailored to user needs.',
      'The system used AWS services end to end for ingestion, transcription, script generation, speech synthesis, job orchestration, and user notifications, turning static learning content into an interactive audio format.',
    ],
    whatIDid: [
      'Worked on designing the cloud workflow that handled file uploads, preprocessing, transcription, AI script generation, podcast creation, and job-state tracking across the pipeline.',
      'Also helped build the observability layer using job status monitoring, CloudWatch logs, alarms, and SNS alerts so failed or stuck podcast jobs could be detected and debugged quickly.',
    ],
  },
  {
    title: 'VGG16 CUDA Kernels',
    details: [
      'Optimized VGG16 convolution layers using CUDA (shared memory tiling, register coarsening, cuBLAS, Nsight) on NVIDIA GPUs.',
    ],
    whatIDid: [
      'Boosted model throughput by 2.5× and improved GPU utilization by 30% by redesigning kernels with shared-memory tiling and register optimization.',
      'Lowered memory latency by 15% by profiling with Nsight Compute and applying hierarchical tiling and im2col + cuBLAS strategies.',
    ],
  },
  {
    title: 'Autonomous Vehicle Navigation System',
    details: [
      'Built a real-time autonomous driving system using YOLO-based perception, UFLD lane detection, and closed-loop control in CARLA simulator.',
    ],
    whatIDid: [
      'Achieved ~0.85 mAP@0.50 for multi-class detection by training YOLO models on custom CARLA datasets with augmentation.',
      'Enabled collision-free multi-lap navigation by integrating lane estimation, waypoint fallback, and distance-aware braking.',
      'Improved robustness under dense traffic by optimizing perception-control integration at real-time inference speeds.',
    ],
  },
  {
    title: 'Robust Person Re-Identification and Tracking',
    details: [
      'Developed a multi-object tracking system combining Faster R-CNN detection with Siamese network-based re-identification.',
    ],
    whatIDid: [
      'Maintained identity consistency across frames by implementing cosine similarity matching with hard-negative mining.',
      'Reduced identity switches in long sequences by training on MOT16 and Market-1501 with optimized embedding pipelines.',
      'Improved tracking stability by optimizing embedding representations and detection-reidentification integration.',
    ],
  },
]

export const career: CareerEntry[] = [
  {
    role: 'Services Engineering Specialist',
    from: '2023',
    to: '2024',
    points: [
      'Developed a closed-loop Advanced Process Control (APC) digital twin using PCA and neural networks to optimize temperature and pressure setpoints, reducing process variability by 15% and increasing throughput by 10%.',
      'Automated baseline checks post-upgrade, cutting manual review time from 42 hours to 1.5 hours, achieving 95% defect detection accuracy, and saving approximately $5K per upgrade cycle.',
      'Streamlined database migration, cutting transfer time for 80K+ records from 1 hour to 15 minutes by automating validation and transformation, improving consistency and throughput.',
    ],
  },
  {
    role: 'Winter Research Intern',
    from: '2021',
    to: '2022',
    points: [
      'Co-developed and published a CNN-based system for automatic Chinese handwriting assessment trained on 39K+ human-rated samples.',
      'Built the work around predicting penmanship quality in a way that made subjective evaluation more measurable and consistent.',
      'Achieved 9.82% normalized MAPE, showing near-human performance in aesthetic and legibility scoring.',
      'Extended the research into a real-time mobile application for practical penmanship evaluation and potential cognitive-screening use cases.',
    ],
  },
  {
    role: 'Data Science Intern',
    from: '2022',
    to: '2022',
    points: [
      'Independently developed an Item Response Theory (IRT)-based web app for adaptive quiz recommendation.',
      'Designed the model to use response difficulty, correctness, and response time to predict the next question level. Built the system to summarize student performance and estimate latent traits for more personalized assessment. The POC was accepted with 93.2% model accuracy and a System Usability Scale score of 79.7.',
    ],
  },
]

export const skillIcons: SkillIcon[] = [
  { label: 'AWS', slug: 'amazonwebservices' },
  { label: 'C++', slug: 'cplusplus' },
  { label: 'Bash', slug: 'gnubash' },
  { label: 'Kubernetes', slug: 'kubernetes' },
  { label: 'PyTorch', slug: 'pytorch' },
  { label: 'CUDA', slug: 'nvidia' },
  { label: 'Docker', slug: 'docker' },
  { label: 'PostgreSQL', slug: 'postgresql' },
  { label: 'MongoDB', slug: 'mongodb' },
  { label: 'MLflow', slug: 'mlflow' },
  { label: 'GitHub', slug: 'github' },
  { label: 'TensorFlow', slug: 'tensorflow' },
  { label: 'Python', slug: 'python' },
]

export const email = 'mail2preritmittal@gmail.com'
export const linkedin = 'https://www.linkedin.com/in/preritmittal/'
export const tagline2 = 'Seeking Full Time opportunities'
