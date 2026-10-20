import { Briefcase, GraduationCap, Heart, Target } from "lucide-react";
import { TimelineItem, Value } from "@/lib/types";

export const TIMELINE: TimelineItem[] = [
  {
    year: "2026 — Present",
    title: "Software Engineer / Full-Stack Developer",
    company: "FrameKart",
    description:
      "Architected and deployed a production-grade e-commerce platform for custom photo framing. Engineered real-time product configuration workflows, Cashfree payment gateway integration, Cloudinary media pipelines, and administrative fulfillment dashboards.",
    icon: Briefcase,
    link: "https://framekart.co.in",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Cashfree", "Cloudinary", "Tailwind CSS"],
  },
  
  {
    year: "2023 — 2027",
    title: "B.E. in Computer Science & Engineering",
    company: "Sahyadri College of Engineering & Management",
    description:
      "Focused on software engineering principles, distributed systems, data structures, algorithms, and full-stack web applications.",
    icon: GraduationCap,
    technologies: ["Algorithms", "Data Structures", "System Design", "Web Architecture"],
  },
];

export const VALUES: Value[] = [
  {
    icon: Target,
    title: "Excellence",
    description: "Obsessed with craft. Every line of code matters. Every user interaction counts.",
  },
  {
    icon: Heart,
    title: "Impact",
    description: "Building products that solve real problems and create meaningful value.",
  },
  {
    icon: Briefcase,
    title: "Ownership",
    description: "Taking full responsibility from concept to deployment and beyond.",
  },
];

export const SKILLS = [
  {
    category: "Languages",
    description: "Core programming and query languages for algorithms, full-stack systems, and automation.",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C++",
      "SQL"
    ]
  },
  {
    category: "Frontend Development",
    description: "Building modern, responsive, and high-performance client experiences across web and mobile.",
    skills: [
      "React.js",
      "Next.js (App Router)",
      "Angular",
      "React Native",
      "Flutter",
      "Tailwind CSS",
      "ShadCN UI",
      "HTML5 & CSS3"
    ]
  },
  {
    category: "Backend & APIs",
    description: "Designing scalable server architectures, resilient APIs, and microservice workflows.",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "RESTful APIs",
      "API Design",
      "Server-Side Development"
    ]
  },
  {
    category: "Databases",
    description: "Relational and document storage solutions optimized for performance, indexing, and reliability.",
    skills: [
      "MongoDB",
      "Mongoose ORM",
      "PostgreSQL",
      "SQLite"
    ]
  },
  {
    category: "AI & Automation",
    description: "Intelligent agent orchestration, webhooks, and conversational messaging automation.",
    skills: [
      "Meta WhatsApp Cloud API",
      "WhatsApp Business Platform",
      "AI Agents",
      "Webhooks",
      "Message Templates",
      "Automated Workflows",
      "Contact Management"
    ]
  },
  {
    category: "Authentication & Security",
    description: "Identity management, token workflows, and fine-grained access policies.",
    skills: [
      "JWT",
      "Clerk",
      "NextAuth",
      "Role-Based Access Control (RBAC)",
      "API Authentication"
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Cloud hosting, containerization, and automated deployment pipelines.",
    skills: [
      "Vercel",
      "AWS",
      "Docker",
      "Git",
      "GitHub",
      "Cloudinary"
    ]
  },
  {
    category: "Payments & Integrations",
    description: "Transactional payment gateways, cloud media pipelines, and notification APIs.",
    skills: [
      "Cashfree",
      "Razorpay",
      "WhatsApp Cloud API",
      "Resend",
      "Cloudinary"
    ]
  },
  {
    category: "Development Tools",
    description: "Modern developer toolchain for multi-platform engineering and rapid prototyping.",
    skills: [
      "VS Code",
      "Postman",
      "Android Studio",
      "Expo",
      "Zustand",
      "Google Antigravity"
    ]
  }
];
