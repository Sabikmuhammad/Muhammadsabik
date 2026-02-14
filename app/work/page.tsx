"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Github, Filter, Star, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECT_CATEGORIES, PROJECTS } from "@/lib/constants";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/30 py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-4xl space-y-6 text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-fluid-5xl font-bold">
              Featured Projects
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-fluid-xl leading-relaxed text-muted-foreground"
            >
              A collection of projects showcasing expertise in full-stack development, system
              design, and product engineering. Each built with scalability and user experience in
              mind.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 border-b bg-background/50 py-12 backdrop-blur-sm">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {PROJECT_CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "shadow-md" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-xl">
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute right-4 top-4 z-10">
                        <div className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-lg">
                          <Star className="h-3 w-3 fill-current" />
                          Featured
                        </div>
                      </div>
                    )}

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <CardHeader className="relative z-10">
                      <CardTitle className="text-2xl transition-colors group-hover:text-primary">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 space-y-4">
                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div
                            key={key}
                            className="rounded-lg bg-muted/50 p-3 text-center transition-colors group-hover:bg-muted"
                          >
                            <div className="text-sm font-bold text-primary">{value}</div>
                            <div className="mt-1 text-xs capitalize text-muted-foreground">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-2 pt-2">
                        {project.demo && (
                          <Button asChild className="group/btn flex-1" size="sm">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <Zap className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.github && (
                          <Button asChild variant="outline" className="group/btn flex-1" size="sm">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                              Source Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center"
            >
              <p className="text-lg text-muted-foreground">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl space-y-6 text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-fluid-3xl font-bold">
              Interested in Collaborating?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-fluid-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button asChild size="lg" className="shadow-lg transition-all hover:shadow-xl">
                <Link href="/contact">
                  Get in Touch
                  <TrendingUp className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
