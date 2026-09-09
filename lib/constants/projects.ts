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
    statusLabel: "IN DEVELOPMENT",
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
  }
];
