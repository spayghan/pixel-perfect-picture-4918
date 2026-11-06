// ============================================================================
//  PORTFOLIO DATA SOURCE
//  Every section of the site (hero, about, skills, projects, education,
//  milestones, terminal, contact, footer) reads from this single file.
// ============================================================================

export const profile = {
  name: "Shashvat Payghan",
  role: "AI & Data Science Student | Full Stack Developer",
  tagline: "One Mind. One World. Infinite Possibilities. 🌎",
  intro:
    "I'm an AI & Data Science student and full-stack developer who loves turning raw data and wild ideas into products people actually use. I build with Python and TypeScript, and I'm obsessed with clean, scalable systems that solve real problems.",
  email: "payghanshashvat@gmail.com",
  location: "India",
  avatar: "/images/profile.jpg",
  github: "https://github.com/spayghan",
  linkedin: "https://www.linkedin.com/in/shashvat-payghan-a08a20330/",
  twitter: "https://x.com/Shashvatpayghan",
  youtube: "https://www.youtube.com/@AIpoweredGeneration",
};

// Words cycled through in the hero's animated text
export const rotatingWords = [
  "Artificial Intelligence",
  "Data Science",
  "Full Stack Development",
];

// ---- About ----------------------------------------------------------------

export const aboutIntro =
  "I'm currently pursuing my degree in Artificial Intelligence & Data Science, and I spend my time equally between training models, exploring datasets, and shipping full-stack web apps. My goal: bridge the gap between what AI can do and what people need.";

export const aboutCards = [
  {
    icon: "brain",
    title: "AI & Machine Learning",
    text: "Building and training models — from classic ML to deep learning and modern LLM applications.",
  },
  {
    icon: "chart",
    title: "Data Science & Analytics",
    text: "Exploring, cleaning and visualising data to find the story hiding inside the numbers.",
  },
  {
    icon: "layers",
    title: "Full Stack Web Development",
    text: "Designing and shipping complete products — React frontends, APIs, databases and deployment.",
  },
  {
    icon: "rocket",
    title: "Real-World Projects",
    text: "Learning by building: hackathons, open source and self-driven projects that solve actual problems.",
  },
] as const;

// ---- Skills ----------------------------------------------------------------

export const skillCategories = [
  {
    icon: "code",
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    icon: "frontend",
    title: "Frontend Development",
    skills: ["React", "Tailwind CSS", "HTML/CSS", "Framer Motion", "Vite"],
  },
  {
    icon: "backend",
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Authentication"],
  },
  {
    icon: "ai",
    title: "AI & Machine Learning",
    skills: ["scikit-learn", "PyTorch", "TensorFlow", "Computer Vision", "OCR", "LLMs"],
  },
  {
    icon: "data",
    title: "Data Science & Analytics",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Statistics"],
  },
  {
    icon: "database",
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
  },
  {
    icon: "tools",
    title: "Tools & Technologies",
    skills: ["Git & GitHub", "Docker", "Linux", "VS Code", "Postman", "n8n", "Airtable"],
  },
] as const;

// ---- Projects ("Things I've Built") ----------------------------------------

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "AI-Powered Legal Metrology Inspection",
    description:
      "A system that uses computer vision, OCR, barcode analysis, and rule-based compliance checks to verify packaged commodities against applicable regulatory requirements.",
    tech: ["React", "Node.js", "Express.js", "Python", "MongoDB"],
    image: "/images/projects/legal-metrology-inspection.jpg",
    github: "https://github.com/spayghan",
    demo: "#",
  },
  {
    title: "AI-Powered Employee Onboarding Automation System",
    description:
      "An automated system that streamlines employee registration, document collection, document verification, HR approval, progress tracking, and automated email notifications using no-code tools.",
    tech: ["n8n", "Softr", "Airtable", "Glide", "Gmail", "Document Verification"],
    image: "/images/projects/employee-onboarding-automation.jpg",
    github: "https://github.com/spayghan",
    demo: "#",
  },
  {
    title: "AI-Enhanced Inventory & E-Commerce Management System",
    description:
      "A full-stack e-commerce and inventory management platform built with React, Node.js, Express.js, MySQL, and a Python FastAPI-based machine learning service. It provides demand forecasting, inventory analytics, and stock replenishment insights.",
    tech: ["React", "Node.js", "Express.js", "Python", "FastAPI", "MySQL"],
    image: "/images/projects/inventory-ecommerce-management.png",
    github: "https://github.com/spayghan",
    demo: "#",
  },
  {
    title: "Generative AI Agent for Predictive Maintenance Scheduling in Manufacturing",
    description:
      "An intelligent generative AI agent that analyzes industrial sensor telemetry, maintenance logs, and equipment degradation patterns to automate predictive maintenance scheduling and prevent costly manufacturing downtime.",
    tech: ["Python", "Generative AI", "LLMs", "FastAPI", "Predictive Analytics"],
    image: "/images/projects/predictive-maintenance-manufacturing.png",
    github: "https://github.com/spayghan/Generative-AI-Agent-for-Predictive-Maintenance-Scheduling-in-Manufacturing",
    demo: "#",
  },
];

// ---- Education & Experience -------------------------------------------------

export const education = [
  {
    period: "2024 – 2028",
    title: "B.Tech — Artificial Intelligence & Data Science",
    org: "University Engineering Institute",
    detail:
      "Relevant coursework: Machine Learning, Data Structures & Algorithms, DBMS, Statistics, Deep Learning, Cloud Computing.",
  },
] as const;

export const learningJourney = [
  "Started with Python, statistics and the fundamentals of programming.",
  "Trained foundational ML models with scikit-learn and delved into computer vision and OCR.",
  "Expanded into MERN full-stack development — React frontends, Node & Express backends, MongoDB.",
  "Engineered automated workflows with n8n, Softr, Airtable and AI agent integrations.",
  "Currently exploring LLM applications, generative AI maintenance agents, and end-to-end MLOps.",
] as const;

export const experience = [
  {
    period: "2024 – Present",
    title: "MERN Stack Development – Learning & Project Development",
    org: "Full-Stack Project Engineering",
    detail:
      "Focused on learning and developing full-stack web applications using MongoDB, Express.js, React, and Node.js. Gaining practical experience by building real-world projects, developing backend APIs, integrating databases, and creating responsive user interfaces.",
  },
] as const;

// ---- Milestones Unlocked (Achievements & Competitions) ----------------------

export interface MilestoneItem {
  id: string;
  title: string;
  competition: string;
  projectTopic: string;
  description: string;
  badge: string;
  category: "ideathon" | "battle" | "project";
  image: string;
  certificateImage: string;
}

export const milestones: MilestoneItem[] = [
  {
    id: "ayurveda-x",
    title: "Ideathon Competition Winner",
    competition: "AYURVEDA-X",
    projectTopic: "A Multimodal AI Platform for Real-Time Vikriti Mapping and Precision Wellness.",
    description:
      "Awarded winner in the national ideathon for designing a multimodal artificial intelligence platform capable of real-time physiological constitution assessment and customized wellness mapping.",
    badge: "Winner — Ideathon",
    category: "ideathon",
    image: "/images/achievements/ayurveda-x.jpg",
    certificateImage: "/images/achievements/ayurveda-x-cert.jpg",
  },
  {
    id: "no-code-talent-battle",
    title: "First Prize – No-Code Talent Battle",
    competition: "No-Code Talent Battle",
    projectTopic: "AI-Powered Employee Onboarding Automation System",
    description:
      "Secured 1st Prize by building a seamless automated employee onboarding pipeline integrating Softr, Airtable, Glide, n8n, and OCR document verification with zero boilerplate code.",
    badge: "1st Prize Winner",
    category: "battle",
    image: "/images/achievements/no-code-talent-battle.jpg",
    certificateImage: "/images/achievements/no-code-talent-battle-cert.jpg",
  },
  {
    id: "sign2voice",
    title: "Project Competition Winner",
    competition: "Project Competition Showcase",
    projectTopic: "Sign2Voice ⚡",
    description:
      "An AI-driven system designed to bridge the communication gap for hearing and speech-impaired individuals using real-time computer vision gesture recognition and dynamic speech synthesis.",
    badge: "Project Winner",
    category: "project",
    image: "/images/achievements/sign2voice.jpg",
    certificateImage: "/images/achievements/sign2voice-cert.jpg",
  },
];

export const certifications = [
  { name: "Machine Learning Specialization", issuer: "DeepLearning.AI", year: "2025" },
  { name: "Full Stack Web Development (MERN)", issuer: "Full-Stack Academy", year: "2025" },
  { name: "Data Science & Python Analytics", issuer: "Data Science Institute", year: "2024" },
] as const;

// Backward-compatibility export
export const achievements = milestones.map((m) => ({
  title: m.title,
  detail: `${m.competition} — ${m.projectTopic}`,
}));

// ---- Contact ---------------------------------------------------------------

export const contact = {
  heading: "Let's build something together",
  blurb:
    "Have an opportunity, a project idea, or just want to collaborate on AI and full-stack development? Send me a message below or connect directly.",
};
