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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4 pt-20">
        {/* Ultra-premium animated grid background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        <motion.div 
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,0))]" 
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Sophisticated gradient orbs with staggered animation */}
        <motion.div 
          className="absolute -left-40 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -right-40 bottom-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-5xl space-y-8 text-center md:space-y-10"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <motion.div
                variants={fadeInUp}
                className="relative inline-block"
              >
                <motion.p
                  className="relative z-10 text-sm font-semibold uppercase tracking-[0.2em] text-primary/80 md:text-base"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Computer Science Engineer
                </motion.p>
                <motion.div 
                  className="absolute -inset-2 -z-10 rounded-lg bg-primary/5 blur-xl"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="relative bg-gradient-to-br from-foreground via-foreground to-foreground/50 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl lg:text-8xl"
                style={{ lineHeight: 1.1 }}
              >
                Muhammad Sabik
                <motion.span 
                  className="absolute -inset-4 -z-10 rounded-3xl bg-primary/5 blur-2xl"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
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
              className="mx-auto max-w-3xl text-xl font-light leading-[1.7] text-muted-foreground/90 md:text-2xl md:leading-[1.7]"
              style={{ letterSpacing: '0.01em' }}
            >
              Building scalable platforms, engineering excellence, and creating impactful products.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-5 pt-8 sm:flex-row sm:gap-6"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="lg"
                  className="group relative h-14 w-full overflow-hidden rounded-xl px-10 text-base font-semibold shadow-xl shadow-primary/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 sm:w-auto"
                >
                  <Link href="/work">
                    <motion.span 
                      className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0"
                      animate={{ x: [-200, 200] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-2" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 w-full rounded-xl border-2 px-10 text-base font-semibold backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-accent/50 hover:shadow-lg sm:w-auto"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Ultra-premium Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="group relative h-14 w-8 cursor-pointer rounded-full border-2 border-muted-foreground/20 p-2 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/10"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <motion.div
              className="h-4 w-2 rounded-full bg-gradient-to-b from-primary/60 to-primary/40"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Project Section - FrameKart */}
      <section className="relative py-24 md:py-40">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />
        
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={staggerContainer}
            className="mx-auto max-w-7xl"
          >
            <motion.div variants={fadeInUp} className="mb-16 text-center md:mb-20">
              <motion.div 
                className="group relative mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-primary backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-primary/40 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
                whileHover={{ y: -2 }}
              >
                <Star className="h-4 w-4" />
                Featured Project
                <motion.div 
                  className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </motion.div>
              <h2 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl" style={{ letterSpacing: '-0.02em' }}>FrameKart</h2>
              <p className="mt-5 text-lg font-light text-muted-foreground/80 md:text-xl">
                Revolutionary Custom Frame E-Commerce Platform
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="group relative overflow-hidden rounded-3xl border shadow-2xl shadow-black/5 transition-all duration-700 hover:-translate-y-3 hover:border-primary/30 hover:shadow-3xl dark:shadow-primary/5">
                {/* Multi-layered premium background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-700"
                  whileHover={{ opacity: 1 }}
                />
                <motion.div 
                  className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                <div className="relative p-10 md:p-12 lg:p-16">
                  <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left: Description */}
                    <div className="space-y-10">
                      <p className="text-lg font-light leading-relaxed text-muted-foreground/90 md:text-xl md:leading-relaxed" style={{ letterSpacing: '0.01em' }}>
                        A full-stack e-commerce platform that revolutionizes custom frame ordering.
                        Built from scratch with modern technologies, handling thousands of monthly
                        orders with exceptional performance.
                      </p>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {PROJECTS[0].tags.map((tag, index) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                              whileHover={{ scale: 1.15, y: -2 }}
                              className="group/tag relative cursor-default rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-bold text-primary shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:shadow-md hover:shadow-primary/20"
                            >
                              {tag}
                              <motion.div 
                                className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-md opacity-0 transition-opacity duration-300 group-hover/tag:opacity-100"
                              />
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild className="group/btn relative h-12 overflow-hidden rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/30">
                            <Link
                              href={PROJECTS[0].demo || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <motion.span 
                                className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                                animate={{ x: [-300, 300] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              />
                              View Live Site
                              <ExternalLink className="ml-2 h-4 w-4 transition-all duration-500 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                            </Link>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild variant="outline" className="h-12 rounded-xl border-2 px-8 text-base font-semibold backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-accent/50 hover:shadow-lg">
                            <Link href="/work">
                              View All Projects
                              <ArrowRight className="ml-2 h-4 w-4 transition-all duration-500 group-hover:translate-x-2" />
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </div>

                    {/* Right: Metrics */}
                    <div className="space-y-6">
                      <h4 className="mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                        Key Metrics
                      </h4>

                      {[
                        { icon: TrendingUp, value: PROJECTS[0].metrics?.users, label: "Monthly Orders", color: "primary", delay: 0 },
                        { icon: Zap, value: PROJECTS[0].metrics?.performance, label: "Performance Score", color: "primary", delay: 0.1 },
                        { icon: Star, value: PROJECTS[0].metrics?.uptime, label: "Uptime", color: "primary", delay: 0.2 }
                      ].map(({ icon: Icon, value, label, delay }) => (
                        <motion.div
                          key={label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay, duration: 0.5, type: "spring", stiffness: 100 }}
                          whileHover={{ scale: 1.05, x: 8 }}
                          className="group/metric relative overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-card/80 to-card/40 p-6 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
                        >
                          {/* Hover glow effect */}
                          <motion.div 
                            className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/metric:opacity-100"
                          />
                          <div className="relative flex items-center gap-5">
                            <motion.div 
                              className="flex-shrink-0 rounded-xl bg-primary/10 p-4 ring-2 ring-primary/10 transition-all duration-500 group-hover/metric:scale-110 group-hover/metric:bg-primary/20 group-hover/metric:ring-primary/30"
                              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover/metric:scale-110" />
                            </motion.div>
                            <div className="flex-1">
                              <motion.div 
                                className="text-4xl font-black tracking-tighter"
                                initial={{ scale: 1 }}
                                whileInView={{ scale: [1, 1.05, 1] }}
                                transition={{ delay: delay + 0.3, duration: 0.6 }}
                              >
                                {value}
                              </motion.div>
                              <div className="mt-1.5 text-sm font-semibold text-muted-foreground/80 transition-colors duration-300 group-hover/metric:text-muted-foreground">
                                {label}
                              </div>
                            </div>
                          </div>
                          {/* Bottom accent line */}
                          <motion.div 
                            className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 transition-opacity duration-500 group-hover/metric:opacity-100"
                            animate={{ x: [-200, 200] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                        </motion.div>
                      ))}
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
      <section className="relative py-24 md:py-40">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={staggerContainer}
            className="mx-auto mb-20 max-w-4xl space-y-8 text-center md:mb-28"
          >
            {/* Optional section header - keeping commented as per original */}
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
            className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-10"
          >
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -16, scale: 1.02, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
                className="group/highlight relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-card via-card to-card/50 p-10 shadow-xl shadow-black/5 backdrop-blur-xl transition-all duration-700 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 md:p-12"
              >
                {/* Multi-layer premium background effects */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-700"
                  whileHover={{ opacity: 1 }}
                />
                <motion.div 
                  className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative z-10 space-y-6">
                  {/* Enhanced icon with multiple animation layers */}
                  <motion.div
                    className="relative inline-flex"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <motion.div
                      className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 p-5 ring-2 ring-primary/10 backdrop-blur-sm transition-all duration-500 group-hover/highlight:scale-110 group-hover/highlight:ring-primary/30 group-hover/highlight:shadow-lg group-hover/highlight:shadow-primary/20"
                      whileHover={{ 
                        rotate: [0, -12, 12, -8, 8, 0],
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    >
                      <item.icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover/highlight:scale-110" />
                    </motion.div>
                    {/* Glow ring on hover */}
                    <motion.div 
                      className="absolute inset-0 -z-10 rounded-2xl bg-primary/20 blur-xl opacity-0 transition-opacity duration-500 group-hover/highlight:opacity-100"
                    />
                  </motion.div>

                  <div>
                    <h3 className="mb-4 text-2xl font-black tracking-tight transition-all duration-500 group-hover/highlight:text-primary md:text-3xl" style={{ letterSpacing: '-0.02em' }}>
                      {item.title}
                    </h3>
                    <p className="text-base font-light leading-relaxed text-muted-foreground/90 transition-colors duration-300 group-hover/highlight:text-muted-foreground md:text-lg" style={{ letterSpacing: '0.01em' }}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Premium bottom accent */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 transition-opacity duration-500 group-hover/highlight:opacity-100"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-28 md:py-44">
        {/* Premium background decorations */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:64px_64px]" />
        <motion.div 
          className="absolute left-1/4 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={staggerContainer}
            className="mx-auto max-w-5xl space-y-12 text-center md:space-y-16"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl" style={{ letterSpacing: '-0.03em' }}>
                <span className="inline-block bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  Let's Build
                </span>
                <br />
                <span className="relative inline-block bg-gradient-to-br from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  Something Great
                  {/* Animated underline */}
                  <motion.span 
                    className="absolute -bottom-3 left-0 h-1.5 w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 blur-sm md:-bottom-4 md:h-2"
                    animate={{ 
                      scaleX: [0.3, 1, 0.3],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </span>
              </h2>
              <motion.p 
                variants={fadeInUp} 
                className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-muted-foreground/90 md:text-xl md:leading-relaxed lg:text-2xl"
                style={{ letterSpacing: '0.01em' }}
              >
                Looking for a technical partner or want to discuss your next project? I'm always open
                to exploring new opportunities.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-5 pt-6 sm:flex-row sm:gap-6"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  size="lg"
                  className="group/cta relative h-14 w-full overflow-hidden rounded-xl px-10 text-base font-bold shadow-2xl shadow-primary/25 transition-all duration-500 hover:shadow-3xl hover:shadow-primary/40 sm:w-auto md:text-lg"
                >
                  <Link href="/contact">
                    {/* Shimmer effect */}
                    <motion.span 
                      className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
                      animate={{ x: [-300, 300] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    Start a Conversation
                    <ArrowRight className="ml-2.5 h-5 w-5 transition-all duration-500 group-hover/cta:-rotate-45 group-hover/cta:scale-110" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="h-14 w-full rounded-xl border-2 px-10 text-base font-bold backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:bg-accent/50 hover:shadow-xl sm:w-auto md:text-lg"
                >
                  <Link href="/about">Learn More About Me</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
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
