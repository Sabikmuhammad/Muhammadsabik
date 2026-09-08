"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants/projects";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function WorkPage() {
  const p1 = PROJECTS[0];
  const p2 = PROJECTS[1];
  const p3 = PROJECTS[2];
  const p4 = PROJECTS[3];

  return (
    <div className="pb-24 overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-[1400px] mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-6 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
            <span className="w-12 h-[1px] bg-border" />
            <span>Work</span>
            <span className="w-12 h-[1px] bg-border" />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground">
            Selected Work
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground leading-relaxed max-w-[600px] pt-2 mx-auto"
          >
            A collection of products, systems, and experiments I&apos;ve designed and engineered.
          </motion.p>
        </motion.div>
      </section>

      {/* Projects Grid Container */}
      <section className="py-8 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Project 01 - FrameKart (Featured Full Width) */}
          {p1 && (
            <motion.div variants={fadeInUp} className="md:col-span-2">
              <div className="group block h-full bg-muted/5 border border-border/30 rounded-sm hover:border-border/60 hover:bg-muted/10 transition-all duration-300">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col h-full space-y-12">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-muted-foreground">
                      <span>01</span>
                      <span>/</span>
                      <span>{p1.category}</span>
                    </div>
                    <span className="text-xs font-mono tracking-widest text-primary uppercase border border-primary/20 bg-primary/5 px-3 py-1 rounded-sm">Featured</span>
                  </div>
                  
                  {/* Title & Description */}
                  <div>
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-1">
                      {p1.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground mt-6 leading-relaxed max-w-3xl">
                      {p1.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-border/20">
                    
                    {/* Left Column: Overview & Stack */}
                    <div className="space-y-12">
                      <div className="space-y-4">
                        <h3 className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Overview</h3>
                        <p className="text-foreground leading-relaxed text-lg max-w-lg">
                          {p1.overview}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Stack</h3>
                        <div className="text-foreground text-sm font-mono leading-relaxed max-w-lg">
                          {p1.tags.join(" · ")}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Features & CTA */}
                    <div className="space-y-12">
                      <div className="space-y-4">
                        <h3 className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Key Features</h3>
                        <ul className="space-y-3">
                          {p1.keyFeatures?.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-foreground">
                              <span className="text-muted-foreground mt-1">•</span>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        {p1.demo ? (
                          <Link href={p1.demo} target="_blank" className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1 hover:border-muted-foreground">
                            LIVE ↗ <span className="text-muted-foreground ml-2 lowercase">({p1.demo.replace('https://', '')})</span>
                          </Link>
                        ) : p1.customCta ? (
                          <Link href={p1.customCta.href} className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1 hover:border-muted-foreground">
                            {p1.customCta.label} ↗
                          </Link>
                        ) : null}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Render remaining projects as standard cards */}
          {[p2, p3, p4].map((project, index) => {
            if (!project) return null;
            const projectNumber = `0${index + 2}`;

            return (
              <motion.div key={project.title} variants={fadeInUp}>
                <div className="group flex flex-col h-full bg-muted/5 border border-border/30 rounded-sm hover:border-border/60 hover:bg-muted/10 transition-all duration-300">
                  <div className="p-8 md:p-10 flex flex-col h-full space-y-10">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-muted-foreground">
                        <span>{projectNumber}</span>
                        <span>/</span>
                        <span>{project.category}</span>
                      </div>
                      {project.statusLabel && (
                        <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase border border-border/30 bg-muted/10 px-3 py-1 rounded-sm">
                          {project.statusLabel}
                        </span>
                      )}
                    </div>
                    
                    {/* Title & Description */}
                    <div>
                      <h2 className="font-display text-4xl md:text-5xl tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-1">
                        {project.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Overview */}
                    {project.overview && (
                      <div className="space-y-4 pt-6 border-t border-border/20">
                        <h3 className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Overview</h3>
                        <p className="text-foreground leading-relaxed">
                          {project.overview}
                        </p>
                      </div>
                    )}

                    {/* Stack */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Stack</h3>
                      <div className="text-foreground text-sm font-mono leading-relaxed">
                        {project.tags.join(" · ")}
                      </div>
                    </div>

                    {/* Key Features */}
                    {project.keyFeatures && (
                      <div className="space-y-4">
                        <h3 className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Key Features</h3>
                        <ul className="space-y-2">
                          {project.keyFeatures.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-foreground text-sm">
                              <span className="text-muted-foreground mt-0.5">•</span>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="mt-auto pt-8 border-t border-border/20 flex items-center gap-6">
                      {project.demo ? (
                        <Link href={project.demo} target="_blank" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1 hover:border-muted-foreground">
                          VIEW ↗
                        </Link>
                      ) : project.customCta ? (
                        <Link href={project.customCta.href} className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1 hover:border-muted-foreground">
                          {project.customCta.label} ↗
                        </Link>
                      ) : (
                        <Link href={`#`} className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1 hover:border-muted-foreground">
                          VIEW PROJECT ↗
                        </Link>
                      )}
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}

        </motion.div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-24 px-4 md:px-8 text-center border-t border-border/50 mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto space-y-8 flex flex-col items-center"
        >
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl tracking-tight">
            Let&apos;s build something <br/> <span className="text-muted-foreground">worth shipping.</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="pt-8 flex justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase hover:text-muted-foreground transition-colors border-b border-foreground pb-1 hover:border-muted-foreground"
            >
              Start a Conversation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
