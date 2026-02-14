"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Star, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ROLES, HIGHLIGHTS } from "@/lib/constants";
import { PROJECTS } from "@/lib/constants/projects";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4">
        {/* Animated grid background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Enhanced gradient orbs with animation */}
        <div className="absolute -left-40 top-1/4 -z-10 h-96 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 -z-10 h-96 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl animation-delay-2000" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary/5 blur-3xl animation-delay-4000" />

        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-5xl space-y-8 text-center md:space-y-10"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <motion.p
                variants={fadeInUp}
                className="text-lg font-medium tracking-wide text-muted-foreground md:text-xl"
              >
                Computer Science Engineer
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl"
              >
                Muhammad Sabik
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center justify-center gap-3 text-2xl sm:flex-row md:text-3xl"
              >
                <span className="text-muted-foreground">Software Engineer</span>
                <RoleRotator roles={ROLES} />
              </motion.div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl md:leading-relaxed"
            >
              Building scalable platforms, engineering excellence, and creating impactful products.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6"
            >
              <Button
                asChild
                size="lg"
                className="group h-12 w-full rounded-xl px-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:w-auto"
              >
                <Link href="/work">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 w-full rounded-xl px-8 transition-all duration-300 hover:scale-105 hover:bg-accent hover:shadow-lg sm:w-auto"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-12 w-7 cursor-pointer rounded-full border-2 border-muted-foreground/40 p-1.5 transition-all duration-300 hover:border-muted-foreground/70 hover:shadow-lg"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <motion.div
              className="h-3 w-2 rounded-full bg-muted-foreground/60"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Project Section - FrameKart */}
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto max-w-7xl"
          >
            <motion.div variants={fadeInUp} className="mb-12 text-center md:mb-16">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary backdrop-blur-sm">
                <Star className="h-4 w-4" />
                Featured Project
              </div>
              <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">FrameKart</h2>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Revolutionary Custom Frame E-Commerce Platform
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="group relative overflow-hidden rounded-2xl border-2 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl">
                {/* Enhanced background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-50" />

                <div className="relative p-8 md:p-10 lg:p-12">
                  <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Left: Description */}
                    <div className="space-y-8">
                      <p className="text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
                        A full-stack e-commerce platform that revolutionizes custom frame ordering.
                        Built from scratch with modern technologies, handling thousands of monthly
                        orders with exceptional performance.
                      </p>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2.5">
                          {PROJECTS[0].tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:shadow-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-4 pt-2">
                        <Button asChild className="group/btn h-11 rounded-xl px-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
                          <Link
                            href={PROJECTS[0].demo || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Live Site
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="h-11 rounded-xl px-6 transition-all duration-300 hover:scale-105 hover:bg-accent hover:shadow-md">
                          <Link href="/work">
                            View All Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Right: Metrics */}
                    <div className="space-y-5">
                      <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Key Metrics
                      </h4>

                      <motion.div
                        whileHover={{ scale: 1.03, x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="rounded-xl border bg-card/50 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="rounded-xl bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
                            <TrendingUp className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold tracking-tight">{PROJECTS[0].metrics?.users}</div>
                            <div className="text-sm font-medium text-muted-foreground">Monthly Orders</div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.03, x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="rounded-xl border bg-card/50 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="rounded-xl bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
                            <Zap className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold tracking-tight">
                              {PROJECTS[0].metrics?.performance}
                            </div>
                            <div className="text-sm font-medium text-muted-foreground">Performance Score</div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.03, x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="rounded-xl border bg-card/50 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="rounded-xl bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
                            <Star className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold tracking-tight">{PROJECTS[0].metrics?.uptime}</div>
                            <div className="text-sm font-medium text-muted-foreground">Uptime</div>
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
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto mb-16 max-w-4xl space-y-6 text-center md:mb-20"
          >
            {/* <motion.h2 variants={fadeInUp} className="text-4xl font-bold tracking-tight md:text-5xl">
              Building the Future
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground md:text-xl">
              Combining technical excellence with product thinking to deliver exceptional results.
            </motion.p> */}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3"
          >
            {HIGHLIGHTS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -12, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group relative overflow-hidden rounded-2xl border bg-card p-8 shadow-lg transition-all duration-500 hover:border-primary/50 hover:shadow-2xl md:p-10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-50" />

                <div className="relative z-10">
                  <motion.div
                    className="mb-6 inline-flex rounded-xl bg-primary/10 p-4 text-primary shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-md"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="h-7 w-7" />
                  </motion.div>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 backdrop-blur-sm md:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-4xl space-y-8 text-center md:space-y-10"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Let's Build Something Great
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
              Looking for a technical partner or want to discuss your next project? I'm always open
              to exploring new opportunities.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6"
            >
              <Button
                asChild
                size="lg"
                className="group h-12 w-full rounded-xl px-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:w-auto"
              >
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="h-12 w-full rounded-xl px-8 transition-all duration-300 hover:scale-105 hover:bg-accent hover:shadow-lg sm:w-auto"
              >
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
