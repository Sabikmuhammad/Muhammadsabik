"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      {
        name: "React / Next.js",
        level: "Expert",
        description:
          "5+ years building production applications. Deep understanding of RSC, streaming, suspense, and performance optimization.",
        experience: [
          "Built 20+ production apps serving millions of users",
          "Custom hooks, context patterns, and state management",
          "Server Components, streaming SSR, ISR strategies",
          "Core Web Vitals optimization (CLS, LCP, FID)",
        ],
      },
      {
        name: "TypeScript",
        level: "Expert",
        description:
          "Type-safe applications with advanced patterns. Zero any, full strict mode, generic patterns.",
        experience: [
          "100% type coverage in production codebases",
          "Advanced generics, conditional types, mapped types",
          "Type-safe API clients and state management",
          "Custom utility types and type guards",
        ],
      },
      {
        name: "Tailwind CSS / Styling",
        level: "Expert",
        description:
          "Custom design systems, component libraries, and pixel-perfect implementations.",
        experience: [
          "Built reusable design systems from scratch",
          "Custom Tailwind plugins and configurations",
          "CSS-in-JS, styled-components, emotion",
          "Responsive design and mobile-first approach",
        ],
      },
      {
        name: "State Management",
        level: "Advanced",
        description:
          "Zustand, Redux, Jotai, and context patterns for complex state orchestration.",
        experience: [
          "Normalized state patterns for large datasets",
          "Optimistic updates and offline-first strategies",
          "Real-time state sync across tabs/devices",
          "Performance profiling and optimization",
        ],
      },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      {
        name: "Node.js / Express",
        level: "Expert",
        description:
          "High-performance APIs handling millions of requests. Microservices, event-driven architecture.",
        experience: [
          "RESTful and GraphQL API design",
          "Microservices with event sourcing",
          "Rate limiting, caching strategies",
          "WebSocket and real-time communication",
        ],
      },
      {
        name: "Databases",
        level: "Advanced",
        description:
          "PostgreSQL, MongoDB, Redis. Schema design, optimization, and scaling strategies.",
        experience: [
          "Complex query optimization and indexing",
          "Database replication and sharding",
          "Migration strategies for zero-downtime",
          "Backup and disaster recovery planning",
        ],
      },
      {
        name: "Authentication & Security",
        level: "Advanced",
        description: "JWT, OAuth, RBAC. Security best practices and compliance.",
        experience: [
          "Multi-factor authentication implementation",
          "Role-based and attribute-based access control",
          "API security (rate limiting, CORS, CSP)",
          "OWASP Top 10 mitigation strategies",
        ],
      },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      {
        name: "AWS / Cloud Platforms",
        level: "Advanced",
        description:
          "EC2, S3, Lambda, RDS, CloudFront. Serverless and containerized deployments.",
        experience: [
          "Infrastructure as Code (Terraform, CDK)",
          "Auto-scaling and load balancing",
          "Cost optimization strategies",
          "Multi-region deployments",
        ],
      },
      {
        name: "Docker / Kubernetes",
        level: "Intermediate",
        description: "Containerization, orchestration, and microservices deployment.",
        experience: [
          "Multi-stage Docker builds",
          "Kubernetes deployments and services",
          "Helm charts for application packaging",
          "CI/CD pipeline integration",
        ],
      },
      {
        name: "CI/CD",
        level: "Advanced",
        description: "GitHub Actions, CircleCI. Automated testing and deployment pipelines.",
        experience: [
          "Zero-downtime deployment strategies",
          "Automated testing and quality gates",
          "Deployment rollbacks and monitoring",
          "Branch-based deployment workflows",
        ],
      },
    ],
  },
  {
    category: "Tools & Practices",
    skills: [
      {
        name: "Git & Version Control",
        level: "Expert",
        description: "Advanced Git workflows, branching strategies, and collaboration patterns.",
        experience: [
          "Git flow and trunk-based development",
          "Interactive rebase and cherry-picking",
          "Monorepo management with submodules",
          "Code review best practices",
        ],
      },
      // {
      //   name: "Testing",
      //   level: "Advanced",
      //   description: "Unit, integration, and E2E testing. TDD and BDD approaches.",
      //   experience: [
      //     "Jest, Vitest, React Testing Library",
      //     "Cypress and Playwright for E2E",
      //     "Test coverage and quality metrics",
      //     "Mocking and fixture management",
      //   ],
      // },
      {
        name: "Performance Optimization",
        level: "Expert",
        description: "Web performance, Core Web Vitals, and bundle optimization.",
        experience: [
          "Lighthouse score optimization (95-100)",
          "Code splitting and lazy loading",
          "Image optimization and CDN strategies",
          "Performance monitoring and profiling",
        ],
      },
    ],
  },
];

export default function SkillsPage() {
  const [expandedSkills, setExpandedSkills] = useState<Set<string>>(new Set());

  const toggleSkill = (skillName: string) => {
    const newExpanded = new Set(expandedSkills);
    if (newExpanded.has(skillName)) {
      newExpanded.delete(skillName);
    } else {
      newExpanded.add(skillName);
    }
    setExpandedSkills(newExpanded);
  };

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="py-24 border-b">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-fluid-5xl font-bold">Technical Capabilities</h1>
            <p className="text-fluid-xl text-muted-foreground leading-relaxed">
              Deep expertise across the full stack. Not just familiarity — real, production-tested
              proficiency built over years of solving complex problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <h2 className="text-fluid-3xl font-bold mb-8">{category.category}</h2>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const isExpanded = expandedSkills.has(skill.name);

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                      >
                        <Card>
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-3">
                                  <CardTitle>{skill.name}</CardTitle>
                                  <span
                                    className={`px-2.5 py-1 text-xs font-medium rounded-md ${
                                      skill.level === "Expert"
                                        ? "bg-green-500/10 text-green-500"
                                        : skill.level === "Advanced"
                                          ? "bg-blue-500/10 text-blue-500"
                                          : "bg-yellow-500/10 text-yellow-500"
                                    }`}
                                  >
                                    {skill.level}
                                  </span>
                                </div>
                                <CardDescription>{skill.description}</CardDescription>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => toggleSkill(skill.name)}
                                aria-label={isExpanded ? "Collapse" : "Expand"}
                              >
                                {isExpanded ? (
                                  <ChevronUp className="h-4 w-4" />
                                ) : (
                                  <ChevronDown className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </CardHeader>

                          {isExpanded && (
                            <CardContent>
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-2"
                              >
                                <h4 className="font-semibold text-sm mb-3">Real Experience:</h4>
                                <ul className="space-y-2">
                                  {skill.experience.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm">
                                      <span className="text-primary mt-1">•</span>
                                      <span className="text-muted-foreground">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            </CardContent>
                          )}
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h2 className="text-fluid-4xl font-bold">Context Matters</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-left">
              <p>
                These aren't just tools I've used once or twice. Each represents hundreds of hours
                solving real problems in production environments. I've debugged memory leaks at 3
                AM. Optimized queries serving millions of rows. Designed systems that scale.
              </p>
              <p>
                Skills are meaningless without context. What matters is knowing when to use what,
                understanding trade-offs, and making pragmatic decisions that serve business goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
