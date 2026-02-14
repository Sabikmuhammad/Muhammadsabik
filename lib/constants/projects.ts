import { Project } from "@/lib/types";

export const PROJECT_CATEGORIES = ["All"];
// , "Web App", "SaaS", "E-Commerce", "Mobile", "Open Source"
export const PROJECTS: Project[] = [
  {
    title: "FrameKart",
    description:
      "Revolutionary e-commerce platform for custom frames. Built with Next.js, Node.js, and PostgreSQL. Handling 10K+ monthly orders.",
    category: "SaaS",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Cashfree", "AWS"],
    featured: true,
    demo: "https://framekart.co.in",
    github: "https://github.com/muhammadsabik/framekart",
    metrics: {
      users: "5K+",
      performance: "98 Lighthouse",
      uptime: "99.9%",
    },
  },
  // {
  //   title: "Real-Time Collaboration Tool",
  //   description:
  //     "WebSocket-based collaboration platform with operational transformation for conflict-free editing. Supports 1000+ concurrent users.",
  //   category: "Web App",
  //   tags: ["React", "WebSocket", "Redis", "MongoDB", "Docker"],
  //   github: "https://github.com/muhammadsabik/collab-tool",
  //   metrics: {
  //     latency: "<50ms",
  //     concurrent: "1000+",
  //     messages: "1M/day",
  //   },
  // },
  // {
  //   title: "E-Commerce Analytics Dashboard",
  //   description:
  //     "Real-time analytics platform processing millions of events. Built custom data pipeline with Kafka and TimescaleDB.",
  //   category: "E-Commerce",
  //   tags: ["Vue.js", "Python", "Kafka", "TimescaleDB", "Redis"],
  //   // demo: "https://demo.analytics.com",
  //   github: "https://github.com/muhammadsabik/analytics-dashboard",
  //   metrics: {
  //     events: "10M/day",
  //     queries: "<100ms",
  //     retention: "90 days",
  //   },
  // },
  // {
  //   title: "API Gateway & Rate Limiter",
  //   description:
  //     "High-performance API gateway with distributed rate limiting, caching, and observability. Open source project.",
  //   category: "Open Source",
  //   tags: ["Go", "Redis", "Prometheus", "Docker", "Kubernetes"],
  //   github: "https://github.com/muhammadsabik/api-gateway",
  //   metrics: {
  //     throughput: "100K RPS",
  //     latency: "<5ms",
  //     stars: "2.3K",
  //   },
  // },
  // {
  //   title: "Mobile Banking App",
  //   description:
  //     "Secure mobile banking application with biometric authentication, real-time transactions, and offline support.",
  //   category: "Mobile",
  //   tags: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
  //   metrics: {
  //     downloads: "50K+",
  //     rating: "4.8/5",
  //     transactions: "100K/month",
  //   },
  // },
  // {
  //   title: "Developer Portfolio Template",
  //   description:
  //     "Open source portfolio template built with Next.js 14. Fully customizable, SEO optimized, and performance focused.",
  //   category: "Open Source",
  //   tags: ["Next.js", "TypeScript", "Tailwind", "MDX", "Vercel"],
  //   github: "https://github.com/muhammadsabik/portfolio-template",
  //   demo: "https://portfolio-template-demo.com",
  //   metrics: {
  //     stars: "1.5K",
  //     forks: "300",
  //     lighthouse: "100",
  //   },
  // },
];
