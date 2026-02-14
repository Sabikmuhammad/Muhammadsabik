"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Clock, Calendar } from "lucide-react";
import { useState } from "react";

// Sample blog posts - in production, these would come from Contentlayer
const posts = [
  {
    title: "Building Scalable Next.js Applications: Architecture Patterns",
    description:
      "Deep dive into architectural patterns for building production-ready Next.js apps that scale to millions of users.",
    date: "2024-12-10",
    slug: "scalable-nextjs-architecture",
    tags: ["Next.js", "Architecture", "Performance"],
    readingTime: 12,
  },
  {
    title: "Zero to Production: Complete CI/CD Pipeline Setup",
    description:
      "Step-by-step guide to setting up a robust CI/CD pipeline with automated testing, deployment, and monitoring.",
    date: "2024-12-03",
    slug: "cicd-pipeline-setup",
    tags: ["DevOps", "CI/CD", "Automation"],
    readingTime: 15,
  },
  {
    title: "Database Design Principles for High-Traffic Applications",
    description:
      "Learn how to design database schemas that can handle millions of queries per second without breaking a sweat.",
    date: "2024-11-28",
    slug: "database-design-principles",
    tags: ["Database", "PostgreSQL", "Performance"],
    readingTime: 10,
  },
  {
    title: "The Founder's Technical Playbook: Engineering for Product-Market Fit",
    description:
      "Lessons learned building FrameKart — how to balance technical excellence with rapid iteration.",
    date: "2024-11-20",
    slug: "founders-technical-playbook",
    tags: ["Startup", "Product", "Engineering"],
    readingTime: 8,
  },
  {
    title: "Advanced React Patterns: Compound Components and Render Props",
    description:
      "Master advanced React patterns that make your components more flexible and reusable.",
    date: "2024-11-15",
    slug: "advanced-react-patterns",
    tags: ["React", "TypeScript", "Patterns"],
    readingTime: 14,
  },
  {
    title: "Optimizing Core Web Vitals: A Practical Guide",
    description:
      "Actionable strategies to achieve perfect Lighthouse scores and improve user experience.",
    date: "2024-11-08",
    slug: "optimizing-core-web-vitals",
    tags: ["Performance", "SEO", "Web Vitals"],
    readingTime: 11,
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
            <h1 className="text-fluid-5xl font-bold">Blog</h1>
            <p className="text-fluid-xl text-muted-foreground leading-relaxed">
              Thoughts on engineering, product development, and building meaningful software.
              No fluff, just practical insights from the trenches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 border-b bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found matching your search.</p>
              </div>
            ) : (
              filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="hover:border-primary transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(post.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readingTime} min read
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-2xl hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-base">{post.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-xs font-medium bg-secondary rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <h2 className="text-fluid-4xl font-bold">Stay Updated</h2>
            <p className="text-fluid-base text-muted-foreground">
              Get notified when I publish new articles. No spam, unsubscribe anytime.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="your@email.com" />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
