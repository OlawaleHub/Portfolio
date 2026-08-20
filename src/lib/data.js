// src/lib/data.js
// Single source of truth for portfolio content.

export const profile = {
  name: "Soliu Quadri",
  initials: "SQ",
  brand: "Sulphate",
  role: "Full-Stack Web & Mobile Developer",
  tagline: "Web & Mobile Applications",
  roles: [
    "Web Developer",
    "Mobile Developer",
    "Dart/Flutter Engineer",
    "React Engineer",
    "Next.js Specialist",
  ],
  location: "Lagos, Nigeria",
  email: "quadrisoliu14@gmail.com",
  phone: "+234 705 435 5120",
  resumeUrl: "/resume",
  avatar: "/profile.jpg",
  objective:
    "Highly versatile Biological Sciences Graduate and Software Engineer specializing in web and mobile application development using Dart & Flutter. Combines strong technical capabilities across cross-platform mobile engineering, web development, and data analysis with hands-on experience in laboratory research, administrative support, customer management, and education. Proven ability to architect scalable cross-platform applications, streamline operational workflows, manage cross-functional projects, and apply analytical problem-solving to complex technical challenges.",
  bio: "Software Engineer building fast, accessible websites and cross-platform mobile apps with Dart & Flutter. With a background in biological sciences, I combine solid engineering with human-centered thinking to create solutions that solve real-world problems and improve lives.",
  certificatesDrive: "https://drive.google.com/drive/folders/1r58nr-8laS2e9kBhuQXgq7qSr4aJvxOY",
  socials: {
    github: "https://github.com/OlawaleHub",
    linkedin: "https://www.linkedin.com/in/quadri-soliu-9448bb1a6",
    twitter: "https://twitter.com/Sulphate04",
  },
};

export const stats = [
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Open Source Repos", value: 7, suffix: "+" },
  { label: "Internships", value: 3, suffix: "+" },
];

export const skills = [
  {
    group: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    group: "Mobile",
    items: ["Dart", "Flutter", "Cross-Platform", "Android Studio"],
  },
  {
    group: "Backend & APIs",
    items: ["REST APIs", "Firebase", "Solidity", "Supabase"],
  },
  {
    group: "Version Control",
    items: ["Git", "GitHub"],
  },
  {
    group: "Development Tools",
    items: ["VS Code", "Android Studio", "Hardhat"],
  },
  {
    group: "Data & AI",
    items: ["IBM SPSS", "Generative AI", "Agentic AI", "AI-Assisted Dev"],
  },
];

export const projects = [
  {
    title: "Refcrypt Labs Website",
    description:
      "The official website for Refcrypt Labs — a production client project I built and maintain as a Software Engineer on the web & mobile team. Source code is confidential (NDA).",
    tags: ["Next.js", "Tailwind", "CMS", "SEO", "Client Work"],
    accent: "from-violet-500 to-indigo-500",
    link: "https://refcryptlabs.com/",
    github: "",
    featured: true,
  },
  {
    title: "Lagos Emergency PWA",
    description:
      "A one-tap, offline-first emergency reporting PWA for Lagos. Report to the nearest Police, Fire, or Medical service with zero internet — powered by REFCRYPT LABS.",
    tags: ["Next.js", "React", "Tailwind", "IndexedDB", "Service Worker"],
    accent: "from-emerald-500 to-blue-500",
    link: "https://lagos-emergency-pwa.vercel.app/",
    github: "https://github.com/OlawaleHub/lagos-emergency-pwa",
    featured: true,
  },
  {
    title: "Ifeoluwa Medical Articles",
    description:
      "A clean, fast website for publishing medical articles — built with Next.js App Router, Tailwind, and Sanity CMS, with ISR revalidation and an embedded no-code Studio for writing articles without touching code.",
    tags: ["Next.js", "Tailwind", "Sanity CMS", "ISR", "lucide-react"],
    accent: "from-sky-500 to-teal-500",
    link: "https://ifeoluwa-medical-czhv.vercel.app/",
    github: "https://github.com/OlawaleHub/ifeoluwa-medical",
    featured: true,
  },
  {
    title: "Token-Gated Voting",
    description:
      "A decentralized governance platform on Ethereum with paid voting, refunds, and quorum. A capstone group project built on OpenZeppelin Governor.",
    tags: ["Solidity", "Hardhat", "OpenZeppelin", "ERC-20", "Web3"],
    accent: "from-amber-500 to-rose-500",
    link: "https://github.com/OlawaleHub/token-gated-voting",
    github: "https://github.com/OlawaleHub/token-gated-voting",
    featured: true,
  },
];

export const experience = [
  {
    company: "Refcrypt Labs",
    role: "Software Engineer — Web & Mobile",
    period: "Jan 2022 — Present",
    location: "Remote",
    description:
      "Architect and deploy responsive, cross-platform mobile applications using Flutter & Dart with clean architecture, smooth state management, and seamless API integrations. Design custom web/CMS solutions, mentor junior developers, and refine UI/UX through analytics feedback loops.",
  },
  {
    company: "First City Monument Bank",
    role: "Customer Relationship Support",
    period: "Sept 2024 — Present",
    location: "Lagos, Nigeria",
    description:
      "Engage customers on new banking products, resolve account issues, and run surveys to tailor recommendations. Collaborate with cross-functional teams to turn customer feedback into product improvements.",
  },
  {
    company: "Elyon Labs",
    role: "Administrative Support",
    period: "March 2026 — Present",
    location: "Remote",
    description:
      "Provide operational and administrative support in a fast-paced tech environment — coordinating project scheduling, resource allocation, and centralized records to streamline team workflows.",
  },
  {
    company: "Great Value Classic School",
    role: "Physics & Mathematics Tutor",
    period: "Aug 2023 — Aug 2024",
    location: "Ibafo, Ogun State",
    description:
      "Delivered Physics and Mathematics curricula with digital literacy tools, and digitized the school library system to improve accessibility for staff and students.",
  },
  {
    company: "Institute of Agricultural Research & Training",
    role: "Research Lab Assistant — Intern",
    period: "Apr 2021 — Oct 2021",
    location: "Ibadan, Oyo State",
    description:
      "Conducted tissue culture, sterilization, and seed germination testing under GLP guidelines, and applied statistical methods to analyze plant breeding data.",
  },
];

export const services = [
  {
    icon: "Code2",
    title: "Web Development",
    desc: "Production-grade websites and web apps with Next.js & React — responsive, accessible, and SEO-ready.",
  },
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with Dart & Flutter — clean architecture, smooth state management, and seamless API integrations.",
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    desc: "Human-centered interfaces and interactions that turn analytics and user feedback into delightful experiences.",
  },
  {
    icon: "PenLine",
    title: "Content Writing & Admin",
    desc: "Technical content, documentation, and operational support that keeps tech teams organized and communication flowing.",
  },
];

export const certifications = [
  {
    group: "Software & Mobile Development",
    items: [
      "Flutter & Dart Mobile Development — Udemy, 2026",
      "Full Stack Web Development — Udemy, 2026",
      "Introduction to Software Engineering — IBM (Coursera), 2025",
      "Programming with JavaScript — Meta (Coursera), 2025",
      "Software Development — Septa Software Engineering Ltd, 2025",
    ],
  },
  {
    group: "Safety & Professional Development",
    items: [
      "Diploma in Workplace Safety & Health — Alison, 2024",
      "Digital Safety & Security — Atingi, 2024",
      "Basic Financial Literacy — Kudimata, 2024",
      "Climate Change & Carbon Markets — Atingi, 2024",
      "Principles of Eco-friendly Living — Alison, 2025",
    ],
  },
];

export const education = [
  {
    school: "Federal University of Agriculture, Abeokuta",
    degree: "Bachelor of Science in Biological Science",
    period: "",
  },
];

export const achievements = [
  "Founder, Light a Path Youth Empowerment Initiative",
  "President, NYSC Medical & Health CDS Group",
  "Best Teacher of the Year — Great Value Classic School",
  "Most Outstanding Executive — FUNAAB Biosciences",
  "Best Writer of the Year — FUNAAB Biosciences",
];
