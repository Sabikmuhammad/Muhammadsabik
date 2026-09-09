"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

export default function HomePage() {
  const featuredProject = PROJECTS.find(p => p.featured) || PROJECTS[0];

  return (
    <div className="overflow-hidden bg-background selection:bg-foreground selection:text-background">
      
      {/* 1. Hero Section (Centered) */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 md:px-8 max-w-[1400px] mx-auto pt-20 text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-12 max-w-4xl flex flex-col items-center"
        >
          {/* Main Title */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-xs md:text-sm font-mono tracking-widest uppercase text-muted-foreground">
              Software Engineer 
            </h2>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight text-foreground">
              Mohammed Shabik
            </h1>
          </motion.div>

          {/* Supporting Copy & CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center space-y-10">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I build digital products, scalable systems, <br className="hidden md:block"/> and software businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
              <Link 
                href="/projects" 
                className="group flex items-center gap-2 text-lg font-medium border-b border-foreground pb-1 transition-colors hover:text-muted-foreground hover:border-muted-foreground"
              >
                View Selected Projects
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/contact" 
                className="group flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Let&apos;s Talk
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <a href="https://github.com/Sabikmuhammad" target="_blank" rel="noopener noreferrer" className="text-sm font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/mohammedshabik" target="_blank" rel="noopener noreferrer" className="text-sm font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://x.com/SabikDevelops" target="_blank" rel="noopener noreferrer" className="text-sm font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">X</a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Selected Work (Featured Only) */}
      <section className="py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto border-t border-border/50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-24"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center text-center space-y-6">
            <h2 className="font-display text-5xl md:text-7xl tracking-tight text-foreground">
              Selected Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              A selection of products and systems I&apos;ve designed, engineered, and brought to life.
            </p>
          </motion.div>

          {/* Featured Project */}
          {featuredProject && (
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto group bg-muted/5 border border-border/30 rounded-sm hover:border-border/60 hover:bg-muted/10 transition-colors p-8 md:p-12 lg:p-16">
              <div className="flex flex-col space-y-10">
                {/* Header */}
                <div className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-muted-foreground">
                  <span>01</span>
                  <span>—</span>
                  <span className="text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-sm">Featured</span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-6">
                    {featuredProject.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-4 pt-8 border-t border-border/20">
                  <div className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Technologies</div>
                  <div className="flex flex-wrap gap-x-3 gap-y-2 text-foreground font-mono text-sm leading-relaxed">
                    {featuredProject.tags.join(" · ")}
                  </div>
                </div>

                {/* Links */}
                <div className="pt-4">
                  {featuredProject.demo && (
                    <Link href={featuredProject.demo} target="_blank" className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1 hover:border-muted-foreground">
                      Live Site ↗
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* View More Projects CTA */}
          <motion.div variants={fadeInUp} className="flex justify-center pt-8">
            <Link 
              href="/projects" 
              className="group inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-foreground transition-colors border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground"
            >
              VIEW MORE PROJECTS <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>


      {/* 4. Pre-footer CTA (Centered) */}
      <section className="py-32 px-4 md:px-8 text-center border-t border-border/50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto space-y-8"
        >
          <motion.h2 variants={fadeInUp} className="font-display text-5xl md:text-7xl tracking-tight">
            Let&apos;s build something <br/> <span className="text-muted-foreground">worth shipping.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-md mx-auto">
            Have a product idea, technical challenge, or ambitious project? Let&apos;s talk.
          </motion.p>
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
