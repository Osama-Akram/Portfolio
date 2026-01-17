// Portfolio Data - Single source of truth for all content

export const personalInfo = {
  name: "M. Osama Akram",
  title: "Automation Engineer | Agentic AI Developer",
  tagline: "Building intelligent automation systems that eliminate manual workflows and scale businesses",
  email: "osamaakram.dev@gmail.com",
  github: "https://github.com/Osama-Akram",
  linkedin: "https://linkedin.com/in/osama-akram",
  location: "Pakistan",
};

export const aboutContent = {
  paragraphs: [
    "I specialize in building automation systems and AI-powered solutions that transform how businesses operate. My expertise lies at the intersection of test automation, workflow orchestration, and agentic AI development.",
    "With hands-on experience in Playwright for end-to-end testing, n8n for workflow automation, and cutting-edge RAG systems using vector databases, I deliver solutions that reduce manual effort and improve operational efficiency.",
    "Currently advancing my skills in Agentic AI development through PIAIC, focusing on building autonomous AI agents that can reason, plan, and execute complex tasks with minimal human intervention.",
  ],
};

export const skillsData = {
  "Automation & Testing": [
    { name: "Playwright", level: 90 },
    { name: "Selenium", level: 85 },
    { name: "n8n", level: 88 },
    { name: "Test Automation", level: 90 },
    { name: "CI/CD Pipelines", level: 80 },
  ],
  "AI & Agentic Systems": [
    { name: "RAG Systems", level: 85 },
    { name: "LangChain", level: 80 },
    { name: "Vector Databases", level: 82 },
    { name: "Prompt Engineering", level: 88 },
    { name: "LLM Integration", level: 85 },
  ],
  "Backend & Databases": [
    { name: "Python", level: 90 },
    { name: "FastAPI", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "FAISS", level: 82 },
    { name: "REST APIs", level: 88 },
  ],
  "Frontend": [
    { name: "TypeScript", level: 80 },
    { name: "React", level: 78 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "HTML/CSS", level: 90 },
  ],
  "DevOps & Collaboration": [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "GitHub Actions", level: 78 },
    { name: "Agile/Scrum", level: 85 },
    { name: "Technical Documentation", level: 88 },
  ],
};

export const experienceData = [
  {
    title: "Automation Engineer",
    company: "Octathorn Pvt. Ltd.",
    location: "Pakistan",
    period: "June 2025 – September 2025",
    type: "Full-time",
    achievements: [
      "Architected and implemented end-to-end test automation framework using Playwright, reducing manual testing time by streamlining regression test cycles",
      "Developed automated workflows for healthcare appointment scheduling systems, improving booking efficiency and reducing human error",
      "Built and deployed a medical portal with integrated automation capabilities, enabling seamless patient data management",
      "Collaborated with cross-functional teams to identify automation opportunities and implement solutions aligned with business objectives",
      "Established testing best practices and documentation standards for the engineering team",
    ],
  },
  {
    title: "SEO Associate",
    company: "EDM Pvt. Ltd.",
    location: "Pakistan",
    period: "September 2023 – December 2023",
    type: "Full-time",
    achievements: [
      "Conducted comprehensive keyword research and competitive analysis to inform content strategy",
      "Optimized on-page SEO elements including meta tags, content structure, and internal linking",
      "Monitored and analyzed website performance metrics using Google Analytics and Search Console",
      "Developed technical SEO foundation that later informed automation approach to content optimization",
    ],
  },
];

export const projectsData = [
  {
    title: "Healthcare Appointment Automation",
    description: "End-to-end automation system for healthcare appointment scheduling that eliminates manual booking processes and reduces operational overhead.",
    problem: "Healthcare facilities were spending significant staff hours manually managing appointment bookings, leading to errors, double-bookings, and patient dissatisfaction.",
    solution: "Built a comprehensive Playwright-based automation framework that handles the entire appointment lifecycle—from availability checking to confirmation emails—with robust error handling and retry mechanisms.",
    techStack: ["Playwright", "TypeScript", "Node.js", "PostgreSQL"],
    impact: [
      "Automated repetitive booking workflows",
      "Reduced scheduling errors through validation checks",
      "Enabled 24/7 appointment processing capability",
    ],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Medical Portal Development",
    description: "Full-stack medical portal enabling healthcare providers to manage patient records, appointments, and communications in a unified platform.",
    problem: "Healthcare providers lacked a centralized system to manage patient interactions, leading to fragmented data and inefficient workflows.",
    solution: "Developed a comprehensive portal with role-based access control, patient record management, appointment scheduling integration, and secure communication channels.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript"],
    impact: [
      "Centralized patient data management",
      "Streamlined provider-patient communication",
      "Integrated with existing appointment automation system",
    ],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Production-Ready RAG System",
    description: "Retrieval-Augmented Generation system that enables intelligent document querying using vector similarity search and LLM-powered responses.",
    problem: "Organizations struggle to extract insights from large document repositories, with traditional search often missing contextually relevant information.",
    solution: "Implemented a RAG pipeline using FAISS for efficient vector storage and similarity search, integrated with Groq's Llama 3.1 8B for fast, accurate response generation. The system chunks documents intelligently, generates embeddings, and retrieves contextually relevant passages to ground LLM responses.",
    techStack: ["Python", "FAISS", "Groq API", "Llama 3.1 8B", "LangChain"],
    impact: [
      "Sub-second query response times",
      "Accurate, grounded responses with source citations",
      "Scalable architecture for large document collections",
    ],
    github: "https://github.com/Osama-Akram/RAG",
    live: null,
    featured: true,
  },
];

export const certificationsData = [
  {
    title: "Agentic AI Developer",
    issuer: "PIAIC (Presidential Initiative for AI & Computing)",
    date: "In Progress",
    status: "in-progress",
    description: "Comprehensive program covering autonomous AI agents, multi-agent systems, and production AI deployment",
    credentialUrl: null,
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "Google Cloud",
    date: "2024",
    status: "completed",
    description: "Foundation in generative AI concepts, prompt design, and responsible AI practices",
    credentialUrl: null,
  },
  {
    title: "Generative AI for Decision Makers",
    issuer: "Google Cloud",
    date: "2024",
    status: "completed",
    description: "Strategic implementation of generative AI in business contexts",
    credentialUrl: null,
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
