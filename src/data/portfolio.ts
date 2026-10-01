import type { CareerEntry, FocusArea, Project, SkillGroup } from '../types/portfolio'

export const name = 'Prerit Mittal'
export const greeting = "Hello, I'm Prerit👋"
export const tagline =
  'Machine Learning Engineer building production ML systems that are fast, reliable, and measurable.'
export const resumeUrl = `${import.meta.env.BASE_URL}Prerit_S_Mittal_Resume_Main.pdf`
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
    slug: 'adaptive-rag',
    title: 'Adaptive Multi-Agent RAG System',
    status: 'Applied LLMs & Agentic AI',
    metrics: ['0.89 · RAGAS faithfulness', '77% · fewer hallucinations'],
    details: [
      'Engineered an uncertainty-aware multi-agent RAG system orchestrating an Agent Swarm with adaptive retrieval across ChromaDB, Qdrant, and BM25, built to know when not to answer rather than guessing.',
    ],
    whatIDid: [
      'Achieved 0.89 RAGAS faithfulness, 0.86 precision@3, and a 4.3% hallucination rate by orchestrating Agent Swarm with adaptive retrieval.',
      'Reduced weak-context hallucinations by 77% by implementing cosine-similarity uncertainty scoring, threshold-based refusal, and claim-level self-correction loops.',
      'Benchmarked search and retrieval tools to validate uncertainty thresholds and retrieval strategy choices.',
    ],
  },
  {
    slug: 'agentic-supply-chain-forecasting',
    title: 'Agentic Supply Chain Forecasting Pipeline',
    status: 'Applied LLMs & Agentic AI',
    metrics: ['92.4% · defect catch rate', '0.8% · false-quarantine rate'],
    details: [
      'Engineered a self-correcting four-agent LangGraph pipeline over hierarchical Walmart retail sales series, with tool-based agent access orchestrated through three custom MCP servers.',
    ],
    whatIDid: [
      'Achieved a 92.4% defect catch rate at a 0.8% false-quarantine rate and 0.584 WRMSSE forecast accuracy by engineering a self-correcting four-agent LangGraph pipeline.',
      'Orchestrated tool-based agent access via three custom MCP servers atop a dual-backend abstraction supporting dbt-modeled Postgres and Databricks DLT (Auto Loader over Unity Catalog).',
    ],
  },
  {
    slug: 'uav-obstacle-avoidance',
    title: 'Monocular Obstacle Avoidance For UAVs',
    status: 'Computer Vision & Autonomy',
    metrics: [
      '≤90 ms · median inference latency',
      '10–15 Hz · perception rate',
      '≤3% · stale predictions',
    ],
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
    slug: 'wafer-defect-mlops',
    title: 'Wafer Defect Detection - MLOps',
    status: 'ML Systems & MLOps',
    metrics: ['60–80% · faster retraining'],
    details: [
      'Built a production-grade wafer quality prediction system for SECOM sensor data, enabling auditable Pass/Fail classification through automated validation, MLflow tracking, and inference logging for drift monitoring.',
    ],
    whatIDid: [
      'Accelerated retraining by 60–80% by versioning feature snapshots with DVC, automating GitHub Actions CI/CD, and launching on-demand EC2 training pipelines.',
      'Enabled auditable Pass/Fail classification by building automated validation checks, MLflow experiment tracking, and inference logging for drift monitoring.',
    ],
  },
  {
    slug: 'llm-finetuning-grpo',
    title: 'Adaptive LLM Finetuning with GRPO',
    status: 'Applied LLMs & Agentic AI',
    metrics: ['+8.5% · GSM8K accuracy'],
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
    slug: 'podai',
    title: 'AI Serverless Podcast - PodAI',
    status: 'ML Systems & MLOps',
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
    slug: 'vgg16-cuda',
    title: 'VGG16 CUDA Kernels',
    status: 'GPU & Performance Engineering',
    metrics: [
      '2.5× · throughput boost',
      '30% · higher GPU utilization',
      '15% · lower memory latency',
    ],
    details: [
      'Optimized VGG16 convolution layers using CUDA (shared memory tiling, register coarsening, cuBLAS, Nsight) on NVIDIA GPUs.',
    ],
    whatIDid: [
      'Boosted model throughput by 2.5× and improved GPU utilization by 30% by redesigning kernels with shared-memory tiling and register optimization.',
      'Lowered memory latency by 15% by profiling with Nsight Compute and applying hierarchical tiling and im2col + cuBLAS strategies.',
    ],
  },
  {
    slug: 'autonomous-vehicle-nav',
    title: 'Autonomous Vehicle Navigation System',
    status: 'Computer Vision & Autonomy',
    metrics: ['~0.85 mAP@0.50 · multi-class detection'],
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
    slug: 'person-reid',
    title: 'Robust Person Re-Identification and Tracking',
    status: 'Computer Vision & Autonomy',
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

export const focusAreas: FocusArea[] = [
  {
    title: 'Applied LLMs & Agentic AI',
    description:
      'Multi-agent and retrieval systems designed to know when not to answer, not just how to answer.',
    projectSlug: 'adaptive-rag',
  },
  {
    title: 'ML Systems & MLOps',
    description:
      'Pipelines built for auditability and rollback safety, not just training-time accuracy.',
    projectSlug: 'wafer-defect-mlops',
  },
  {
    title: 'GPU & Performance Engineering',
    description:
      'Kernel-level tuning where the model and the hardware are optimized as one problem.',
    projectSlug: 'vgg16-cuda',
  },
  {
    title: 'Computer Vision & Autonomy',
    description:
      'Perception and control stacks that hold up under real-time and real-world constraints.',
    projectSlug: 'autonomous-vehicle-nav',
  },
]

export const career: CareerEntry[] = [
  {
    role: 'Graduate Research Assistant',
    from: '2025',
    to: '2026',
    points: [
      'Architected a dual-model edge-to-cloud perception system via Triton Server, serving quantized YOLOv8-seg and Depth Anything V2, achieving 72 ms median end-to-end latency and 98 ms p95.',
      'Enforced codified latency SLAs (p95 < 120 ms) by building an offline benchmarking tool for per-model p95/p99 inference analysis, catching regressions before deployment.',
      'Improved readiness for real-time obstacle avoidance, maintaining a ~9.8 Hz usable update rate with 1.4% stale frames, by streaming near/mid/far obstacle metadata over a self-hosted WebRTC DataChannel.',
      'Led multimodal dataset collection for a custom 3-DOF robotic arm in LeRobot format, handing off the pipeline for future VLA (Vision-Language-Action) model fine-tuning.',
    ],
  },
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

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Tools',
    skills: ['Python', 'C++', 'CUDA', 'SQL', 'Git', 'Bash', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'OpenCV',
      'Flask',
      'FastAPI',
    ],
  },
  {
    title: 'Cloud & MLOps',
    skills: [
      'Weights & Biases',
      'DVC',
      'MLflow',
      'GitHub Actions',
      'AWS (EC2, S3, SageMaker, Bedrock)',
    ],
  },
  {
    title: 'DL & ML Techniques',
    skills: [
      'CNNs',
      'NLP',
      'Reinforcement Learning',
      'LLMs',
      'Model Optimization',
      'Inference Acceleration',
    ],
  },
  {
    title: 'Data Engineering & Visualization',
    skills: ['Databricks', 'PySpark', 'MongoDB', 'MSSQL', 'PostgreSQL', 'Neo4j', 'Terraform'],
  },
  {
    title: 'Agentic AI & RAG',
    skills: [
      'LangGraph',
      'LangChain',
      'RAG',
      'MCP',
      'Tool Calling',
      'Hybrid Retrieval',
      'BM25',
      'Vector Databases',
    ],
  },
]

export const email = 'mail2preritmittal@gmail.com'
export const linkedin = 'https://www.linkedin.com/in/preritmittal/'
export const tagline2 = 'Seeking Full Time opportunities'
