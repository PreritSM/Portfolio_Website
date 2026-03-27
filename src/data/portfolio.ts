import { PortfolioData } from '../types/portfolio';

const portfolio: PortfolioData = {
  name: "Prerit Mittal",
  title: "Data Science Enthusiast | Grad Student @ RIT",
  bio: "Blending engineering and design to build solutions to real-world problems. Currently focusing on Computer Vision and DSA while exploring Deep Learning and Agentic AI.",
  location: "Rochester, NY, USA",
  email: "mail2preritmittal@gmail.com",
  resumeHref: "/resume.pdf",
  profileImage: "/profile.jpg",
  
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/preritmittal/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/PreritSM", icon: "github" },
    { label: "Email", href: "mailto:mail2preritmittal@gmail.com", icon: "email" },
  ],

  skills: [
    { name: "Python", percentage: 90 },
    { name: "C++", percentage: 80 },
    { name: "JavaScript", percentage: 75 },
    { name: "SQL", percentage: 85 },
    { name: "PyTorch / TensorFlow", percentage: 80 },
  ],

  tools: [
    { name: "Git & GitHub" },
    { name: "Docker & Kubernetes" },
    { name: "AWS / GCP" },
    { name: "MongoDB / Neo4j" },
    { name: "React & Flask" },
    { name: "CARLA Simulator" },
  ],

  certifications: [
    // TODO: Add certifications from resume if available
  ],

  projects: [
    {
      title: "CARLA Autonomous Driving System",
      description: "Multi-modal perception and control pipeline for autonomous driving with YOLO11n object detection (vehicles, pedestrians, traffic lights), UFLD lane detection, HSV traffic light recognition, and adaptive speed control with 20 km/h cap.",
      tech: ["Python", "PyTorch", "YOLO", "OpenCV", "CARLA 0.9.15"],
      image: "/projects/carla.jpg",
      repoHref: "https://github.com/PreritSM/Carla_Autonomous_Driving",
      status: "live",
    },
    {
      title: "MOTS Person Tracking System",
      description: "Robust pedestrian tracking combining Faster R-CNN for detection and Siamese network for person re-identification. Handles occlusions and lighting changes using triplet loss training on MOT16 and Market1501 datasets.",
      tech: ["Python", "PyTorch", "Faster R-CNN", "OpenCV", "CUDA"],
      image: "/projects/mots.jpg",
      repoHref: "https://github.com/shahzeb-jadoon/MOTS_Mask-RCNN",
      status: "live",
    },
    {
      title: "TrendZ - Fashion Intelligence System",
      description: "Full-stack ML application for Flipkart GRID 4.0 that identifies real-time fashion trends from social media using AWS Rekognition for apparel detection and custom CNN for color/pattern classification.",
      tech: ["Python", "JavaScript", "React", "Flask", "AWS Rekognition", "TensorFlow"],
      image: "/projects/trendz.jpg",
      repoHref: "https://github.com/PreritSM/Fashion-Intelligence-System-Trendzz-",
      status: "live",
    },
    {
      title: "Learning MLOps",
      description: "End-to-end MLOps implementations covering Docker containerization, Kubernetes orchestration, Flask APIs, GitHub Actions CI/CD, and cloud deployment patterns for scalable ML systems.",
      tech: ["Python", "Docker", "Kubernetes", "Flask", "GitHub Actions"],
      image: "/projects/mlops.jpg",
      repoHref: "https://github.com/PreritSM/Learning_MLOps",
      status: "live",
    },
    {
      title: "Amazon Fine Food Reviews Analysis",
      description: "Sentiment analysis on 500K+ Amazon food reviews to predict positive/negative ratings using NLP techniques and machine learning classification models.",
      tech: ["Python", "Jupyter", "Pandas", "Scikit-learn", "NLP"],
      image: "/projects/amazon-reviews.jpg",
      repoHref: "https://github.com/PreritSM/Amazon-Fine-Food-Reviews-Analysis",
      status: "live",
    },
    {
      title: "Telecom Graph Exploration (Neo4j)",
      description: "Graph database learning project exploring telecom network relationships and querying patterns using Neo4j graph database.",
      tech: ["JavaScript", "Neo4j", "Cypher"],
      image: "/projects/neo4j.jpg",
      repoHref: "https://github.com/PreritSM/Telecom-Graph-Exploration_Neo4j",
      status: "live",
    },
    {
      title: "VGG-16 CUDA Performance Architecture",
      description: "High-performance inference engine for VGG-16, optimizing 2D convolutional layers to maximize throughput on NVIDIA RTX 3080 GPUs. Engineered custom CUDA kernels utilizing shared memory tiling, memory coalescing, and kernel fusion to overcome memory bandwidth bottlenecks and achieve significant speedups over baseline implementations.",
      tech: ["C++", "CUDA", "cuDNN", "cuBLAS", "ONNX Runtime", "Nsight Systems"],
      image: "/projects/hpa-cuda.jpg",
      repoHref: "https://github.com/Jainparas99/HPA_Project",
      status: "live",
    },
    {
      title: "Pokemon NoSQL Data Architecture",
      description: "Engineered a robust NoSQL database system using MongoDB for managing complex, semi-structured gaming datasets. Implemented optimized aggregation pipelines and indexing strategies to facilitate high-speed querying of multifaceted Pokemon attributes and evolution chains.",
      tech: ["MongoDB", "Python", "PyMongo", "NoSQL", "Data Modeling"],
      image: "/projects/pokemon-db.jpg",
      repoHref: "https://github.com/PreritSM/Pokemon-MongoDB-Project",
      status: "live",
    },
    {
      title: "Cognitive Speech Feature Analysis",
      description: "Computational analysis framework for identifying vocal biomarkers in speech. Extracted and analyzed prosodic and spectral features (MFCCs, pitch, jitter) using signal processing techniques to quantify variations in speech patterns for psychological and clinical research.",
      tech: ["Python", "Librosa", "Scikit-learn", "Pandas", "Audio Processing"],
      image: "/projects/speech-analysis.jpg",
      repoHref: "https://github.com/hhennessy20/PSYC_684_Project",
      status: "live",
    },
  ],

  experience: [
    {
      company: "Rochester Institute of Technology",
      role: "Graduate Teaching Assistant",
      period: "Aug 2024 – Present",
      summary: "Supporting graduate-level courses while pursuing MS in Computer Science with focus on Computer Vision and Deep Learning.",
      bullets: [
        "Mentoring students in advanced programming concepts and software design",
        "Conducting lab sessions and providing technical guidance",
        "Currently focusing on Computer Vision, DSA, and Agentic AI research",
      ],
    },
    {
      company: "Accenture",
      role: "Application Development Analyst",
      period: "Aug 2022 – Jul 2024",
      summary: "Delivered enterprise solutions for Fortune 500 clients specializing in full-stack development and cloud architecture.",
      bullets: [
        "Built scalable microservices reducing system latency by 40%",
        "Led AWS migration achieving 99.9% uptime and 30% cost reduction",
        "Implemented CI/CD pipelines cutting deployment time by 60%",
      ],
    },
    {
      company: "Accenture",
      role: "Application Development Associate",
      period: "Sep 2020 – Jul 2022",
      summary: "Developed and maintained enterprise applications while building expertise in cloud technologies and agile methodologies.",
      bullets: [
        "Developed RESTful APIs serving 100K+ daily requests",
        "Optimized database queries reducing response times by 50%",
        "Automated testing increasing code coverage from 45% to 85%",
      ],
    },
  ],

  education: [
    {
      institution: "Rochester Institute of Technology",
      degree: "Master of Science in Computer Science",
      period: "Aug 2024 – May 2026 (Tentative)",
    },
    {
      institution: "IIIT Lucknow",
      degree: "Bachelor of Technology in Computer Science",
      period: "Jul 2016 – May 2020",
    },
  ],

  about: {
    headline: "About Me",
    professionalProfile: "Graduate student at RIT passionate about Computer Vision, Deep Learning, and building practical AI systems.",
    journey: "My journey has taken me from the enterprise software landscape of GE Vernova to the frontier of autonomous driving research. I’m deeply invested in the world of Computer Vision and Generative AI, with a specific focus on MLOps—ensuring that powerful models (like LLMs) don't just work in a lab, but excel in the real world"
  },

  contact: {
    heading: "Let's Connect",
    subheading: "Open to collaborations on Deep Learning projects and always happy to chat about tech!",
  },
};

export default portfolio;
