"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TIMELINE, VALUES } from "@/lib/constants";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "@/lib/animations";

export default function AboutPage() {
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
              About Me
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-fluid-xl leading-relaxed text-muted-foreground"
            >
              I'm Muhammad Sabik, a Computer Science Engineer who builds products that matter.
              Currently founding FrameKart while helping companies scale their engineering teams.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <motion.h2 variants={fadeInUp} className="mb-6 text-fluid-3xl font-bold">
                The Journey
              </motion.h2>

              <motion.p variants={fadeInUp}>
                My engineering journey started with a simple curiosity: how do applications scale to
                serve millions of users? This question drove me to dive deep into distributed
                systems, clean architecture, and performance optimization.
              </motion.p>

              <motion.p variants={fadeInUp}>
                Over the past 5+ years, I've had the privilege of building products used by
                thousands of people daily. From e-commerce platforms processing millions in
                transactions to real-time collaboration tools enabling remote teams — each project
                taught me something invaluable about building software that scales.
              </motion.p>

              <motion.p variants={fadeInUp}>
                Today, as the founder of FrameKart, I'm channeling everything I've learned into
                building a platform that revolutionizes the custom frame industry. It's not just
                about writing code; it's about understanding user needs, architecting resilient
                systems, and creating experiences that delight.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="mb-12 text-center text-fluid-3xl font-bold">
              Experience
            </motion.h2>

            <div className="mx-auto max-w-4xl space-y-8">
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className="relative"
                >
                  <Card className="group overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start">
                        {/* Icon */}
                        <motion.div
                          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <item.icon className="h-6 w-6" />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                              {item.title}
                            </h3>
                            <span className="w-fit rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                              {item.year}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {item.company}
                          </p>
                          <p className="leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="mb-12 text-center text-fluid-3xl font-bold">
              What Drives Me
            </motion.h2>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
              {VALUES.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group space-y-4 rounded-xl border bg-card p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
                >
                  <motion.div
                    className="inline-flex rounded-full bg-primary/10 p-4 text-primary"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <value.icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold transition-colors group-hover:text-primary">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-4xl space-y-6 text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-fluid-3xl font-bold">
              Technical Expertise
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-fluid-lg text-muted-foreground">
              Full-stack development, cloud architecture, DevOps, and more. I build with modern
              tools and best practices to deliver production-grade solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
