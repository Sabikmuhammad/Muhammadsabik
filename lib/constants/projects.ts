import { Project } from "@/lib/types";

export const PROJECT_CATEGORIES = ["All", "E-COMMERCE", "AI · AUTOMATION", "BUSINESS · SAAS", "API · AUTOMATION"];

export const PROJECTS: Project[] = [
  {
    slug: "framekart",
    title: "FrameKart",
    description: "Custom e-commerce platform for personalized frames.",
    category: "E-COMMERCE",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    demo: "https://framekart.co.in",
    overview: "A full-stack e-commerce platform designed for custom frame ordering, product configuration, checkout and order management.",
    keyFeatures: [
      "Custom product configuration",
      "E-commerce workflow",
      "Checkout and payments",
      "Order management",
      "Responsive storefront",
      "Scalable backend architecture"
    ],
  },
  {
    slug: "agentos",
    title: "AgentOS",
    description: "AI-powered workflow automation platform.",
    category: "AI · AUTOMATION",
    tags: ["Python", "React", "FastAPI", "AI/ML"],
    demo: "https://agentaios.vercel.app",
    statusLabel: "LIVE",
    overview: "An intelligent automation platform designed to execute tasks through AI agents, tool integrations and workflow orchestration.",
    keyFeatures: [
      "AI agent orchestration",
      "Automated workflows",
      "Tool integration",
      "Task execution",
      "API-driven architecture"
    ],
  },
  {
    slug: "whatsapp-commerce",
    title: "WhatsApp Commerce Platform",
    description: "Conversational commerce platform enabling customers to browse product catalogs and order directly through WhatsApp.",
    category: "AI · AUTOMATION",
    tags: ["WhatsApp Cloud API", "Node.js", "TypeScript", "Webhooks", "E-Commerce"],
    statusLabel: "LIVE DEMO",
    overview: "A conversational commerce platform enabling customers to browse product catalogs, explore categories, view interactive carousels, and complete purchases seamlessly within WhatsApp.",
    keyFeatures: [
      "Interactive WhatsApp product carousels",
      "Category-based messaging flows",
      "Custom product discovery & frame inquiries",
      "Cart-based checkout interactions",
      "Unified conversational order support"
    ],
  },
  {
    slug: "bizflow",
    title: "BizFlow",
    description: "Business management, billing and inventory platform.",
    category: "BUSINESS · SAAS",
    tags: ["Angular", "TypeScript", "ASP.NET Core", "C#", "EF Core", "SQLite"],
    statusLabel: "IN DEVELOPMENT",
    overview: "A full-stack SaaS platform that connects inventory, billing, customers and suppliers through a unified business management workspace.",
    keyFeatures: [
      "Real-time inventory management",
      "Billing and business workflows",
      "Customer & supplier management",
      "JWT authentication & RBAC",
      "Auditable stock transactions",
      "RESTful API architecture",
      "Responsive SaaS interface"
    ],
    customCta: {
      label: "View",
      href: "#"
    }
  },
  {
    slug: "triploom",
    title: "Triploom",
    description: "AI-powered travel planning and personalized itinerary platform.",
    category: "AI · TRAVEL",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "AI"],
    statusLabel: "IN DEVELOPMENT",
    overview: "An AI-driven travel discovery and itinerary planning platform delivering personalized destination recommendations, day-wise itineraries, and accommodation listings.",
    keyFeatures: [
      "AI-driven itinerary generation",
      "Conversational travel planner",
      "Hospitality & accommodation directory",
      "Dynamic destination guides",
      "Mobile-optimized travel discovery"
    ],
    customCta: {
      label: "Preview",
      href: "#"
    }
  }
];
