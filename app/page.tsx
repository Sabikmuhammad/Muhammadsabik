"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Star, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ROLES, STATS, HIGHLIGHTS } from "@/lib/constants";
import { PROJECTS } from "@/lib/constants/projects";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center px-4">
        {/* Animated grid background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Gradient orbs */}
        <div className="absolute -left-40 top-1/4 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl space-y-6 text-center md:space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.p
                variants={fadeInUp}
                className="text-fluid-lg font-medium text-muted-foreground"
              >
                Computer Science Engineer
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-fluid-6xl font-bold tracking-tighter"
              >
                Muhammad Sabik
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center justify-center gap-2 text-fluid-2xl sm:flex-row"
              >
                <span className="text-muted-foreground">Software Engineer</span>
                <RoleRotator roles={ROLES} />
              </motion.div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-2xl text-fluid-xl leading-relaxed text-muted-foreground"
            >
              Building scalable platforms, engineering excellence, and creating impactful products.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            >
              <Button
                asChild
                size="lg"
                className="group w-full shadow-lg transition-all hover:shadow-xl sm:w-auto"
              >
                <Link href="/work">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full transition-all hover:bg-accent sm:w-auto"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-6 cursor-pointer rounded-full border-2 border-muted-foreground/30 p-1 transition-colors hover:border-muted-foreground/50"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <motion.div
              className="h-3 w-1.5 rounded-full bg-muted-foreground/50"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Project Section - FrameKart */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto max-w-6xl"
          >
            <motion.div variants={fadeInUp} className="mb-8 text-center md:mb-12">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Star className="h-4 w-4" />
                Featured Project
              </div>
              <h2 className="mt-4 text-fluid-3xl font-bold">FrameKart</h2>
              <p className="mt-2 text-muted-foreground">Revolutionary Custom Frame E-Commerce Platform</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative p-6 md:p-8 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left: Description */}
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        A full-stack e-commerce platform that revolutionizes custom frame ordering. 
                        Built from scratch with modern technologies, handling thousands of monthly 
                        orders with exceptional performance.
                      </p>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {PROJECTS[0].tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3">
                        <Button asChild className="group/btn">
                          <Link href={PROJECTS[0].demo || "#"} target="_blank" rel="noopener noreferrer">
                            View Live Site
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href="/work">
                            View All Projects
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Right: Metrics */}
                    <div className="space-y-4">
                      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Key Metrics
                      </h4>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-card"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-lg bg-primary/10 p-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold">{PROJECTS[0].metrics?.users}</div>
                            <div className="text-sm text-muted-foreground">Monthly Orders</div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-card"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-lg bg-primary/10 p-2">
                            <Zap className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold">{PROJECTS[0].metrics?.performance}</div>
                            <div className="text-sm text-muted-foreground">Performance Score</div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-card"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-lg bg-primary/10 p-2">
                            <Star className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold">{PROJECTS[0].metrics?.uptime}</div>
                            <div className="text-sm text-muted-foreground">Uptime</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="border-y bg-muted/30 py-12 backdrop-blur-sm md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="container px-4"
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="group space-y-2 text-center"
              >
                <motion.div
                  className="bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-fluid-4xl font-bold text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section> */}

      {/* Highlights Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto mb-12 max-w-3xl space-y-4 text-center md:mb-16"
          >
            {/* <motion.h2 variants={fadeInUp} className="text-fluid-4xl font-bold">
              Building the Future
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-fluid-lg text-muted-foreground">
              Combining technical excellence with product thinking to deliver exceptional results.
            </motion.p> */}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          >
            {HIGHLIGHTS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative rounded-xl border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl md:p-8"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <motion.div
                    className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 backdrop-blur-sm md:py-24">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl space-y-6 text-center md:space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-fluid-4xl font-bold">
              Let's Build Something Great
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-fluid-lg text-muted-foreground">
              Looking for a technical partner or want to discuss your next project? I'm always open
              to exploring new opportunities.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            >
              <Button
                asChild
                size="lg"
                className="group w-full shadow-lg transition-all hover:shadow-xl sm:w-auto"
              >
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function RoleRotator({ roles }: { roles: string[] }) {
  return (
    <div className="relative inline-block h-[1.2em] w-36 overflow-hidden sm:w-40">
      {roles.map((role, index) => (
        <motion.span
          key={role}
          initial={{ y: "100%" }}
          animate={{ y: "-400%" }}
          transition={{
            duration: roles.length * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2,
          }}
          className="absolute inset-0 font-bold text-primary"
        >
          {role}
        </motion.span>
      ))}
    </div>
  );
}
