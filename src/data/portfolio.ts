// ============================================================================
//  EDIT YOUR INFORMATION HERE
//  Every section of the site (hero, about, skills, projects, education,
//  terminal, contact, footer) reads from this single file — update the text
//  and links below and the whole site updates with you.
// ============================================================================

export const profile = {
  name: "Shashvat Payghan",
  role: "AI & Data Science Student | Full Stack Developer",
  tagline: "One Mind. One World. Infinite Possibilities. 🌎",
  intro:
    "I'm an AI & Data Science student and full-stack developer who loves turning raw data and wild ideas into products people actually use. I build with Python and TypeScript, and I'm obsessed with clean, scalable systems that solve real problems.",
  email: "shashvat.payghan@example.com",
  location: "India",
  github: "https://github.com/shashvatpayghan",
  linkedin: "https://www.linkedin.com/in/shashvat-payghan",
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
    skills: ["Node.js", "FastAPI", "Express", "REST APIs", "Authentication"],
  },
  {
    icon: "ai",
    title: "AI & Machine Learning",
    skills: ["scikit-learn", "PyTorch", "TensorFlow", "NLP", "Computer Vision", "LLMs"],
  },
  {
    icon: "data",
    title: "Data Science & Analytics",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Statistics"],
  },
  {
    icon: "database",
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis"],
  },
  {
    icon: "tools",
    title: "Tools & Technologies",
    skills: ["Git & GitHub", "Docker", "Linux", "VS Code", "Figma", "Postman"],
  },
] as const;

// ---- Projects (edit freely — links can be "#" until you add them) ----------

export const projects = [
  {
    title: "AI Resume Screener",
    description:
      "Web app that parses resumes and ranks candidates against a job description using NLP embeddings and a scoring model.",
    tech: ["React", "FastAPI", "scikit-learn", "NLP"],
    github: "https://github.com/shashvatpayghan",
    demo: "#",
  },
  {
    title: "Sentiment Analysis Dashboard",
    description:
      "Interactive dashboard that analyses product reviews in real time, surfacing sentiment trends and keyword clouds.",
    tech: ["Python", "Pandas", "Chart.js", "Flask"],
    github: "https://github.com/shashvatpayghan",
    demo: "#",
  },
  {
    title: "Campus Event Platform",
    description:
      "Full-stack platform for college fests — event listings, registrations, QR check-in and an organiser admin panel.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/shashvatpayghan",
    demo: "#",
  },
  {
    title: "ML Model Explorer",
    description:
      "Visual playground that lets users tweak hyperparameters and watch decision boundaries and metrics update live.",
    tech: ["TypeScript", "PyTorch", "D3.js", "FastAPI"],
    github: "https://github.com/shashvatpayghan",
    demo: "#",
  },
] as const;

// ---- Education & Experience -------------------------------------------------

export const education = [
  {
    period: "2024 – 2028",
    title: "B.Tech — Artificial Intelligence & Data Science",
    org: "Your University Name",
    detail:
      "Relevant coursework: Machine Learning, Data Structures & Algorithms, DBMS, Statistics, Deep Learning, Cloud Computing.",
  },
] as const;

export const learningJourney = [
  "Started with Python, statistics and the fundamentals of programming.",
  "Trained my first ML models with scikit-learn and dove into deep learning with PyTorch.",
  "Expanded into full-stack development — React frontends, Node & FastAPI backends, databases.",
  "Currently exploring LLM applications, RAG pipelines and MLOps.",
] as const;

export const experience = [
  {
    period: "Summer 2026",
    title: "AI/ML Intern",
    org: "Company Name (placeholder)",
    detail:
      "Describe what you built, the tools you used and the impact you made. Replace this with your real internship.",
  },
] as const;

export const certifications = [
  { name: "Machine Learning Specialization", issuer: "DeepLearning.AI (placeholder)", year: "2025" },
  { name: "Full Stack Web Development", issuer: "Platform (placeholder)", year: "2025" },
  { name: "Data Analytics with Python", issuer: "Platform (placeholder)", year: "2024" },
] as const;

export const achievements = [
  { title: "Finalist — National Level Hackathon", detail: "Placeholder: describe the project and result." },
  { title: "Top 10% — Data Analytics Competition", detail: "Placeholder: describe the competition." },
  { title: "Core Member — College AI Club", detail: "Placeholder: describe your role and contributions." },
] as const;

// ---- Contact ---------------------------------------------------------------

// The form validates with zod and currently simulates a successful send.
// To receive real messages, connect a backend or email service in
// src/components/portfolio/Contact.tsx (marked with a TODO).
export const contact = {
  heading: "Let's build something together",
  blurb:
    "Have an internship opportunity, a project idea, or just want to talk AI? My inbox is always open.",
};
