"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SKILLS } from "@/lib/constants/about";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export function SkillsClient() {
  return (
    <div className="overflow-hidden bg-background pb-24">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20 px-4 md:px-8 max-w-[1400px] mx-auto border-b border-border/50 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-6 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
            <span className="w-12 h-[1px] bg-border" />
            <span>Capabilities & Stack</span>
            <span className="w-12 h-[1px] bg-border" />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
            Engineering <br />
            <span className="text-muted-foreground">Expertise.</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[700px] pt-2 mx-auto"
          >
            A comprehensive overview of languages, client frameworks, backend architectures, databases, and AI automation systems.
          </motion.p>
        </motion.div>
      </section>

      {/* Expertise Grid - 3x3 layout for 9 categories */}
      <section className="py-20 md:py-28 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SKILLS.map((section, idx) => (
            <motion.div
              key={section.category}
              variants={fadeInUp}
              className="group flex flex-col h-full bg-muted/5 border border-border/30 rounded-sm hover:border-border/60 hover:bg-muted/10 transition-all duration-300 p-7 md:p-8"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-mono tracking-widest uppercase text-muted-foreground mb-3">
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                  <span>/ 09</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl tracking-tight text-foreground mb-2 group-hover:translate-x-0.5 transition-transform">
                  {section.category}
                </h2>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {section.description}
                </p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-border/20 flex flex-wrap gap-2">
                {section.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-xs font-mono tracking-wider text-foreground/80 bg-foreground/5 border border-foreground/10 px-2.5 py-1 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bottom Resume CTA */}
      <section className="py-20 px-4 md:px-8 text-center border-t border-border/40">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight">
            Looking for the full technical record?
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Review detailed production roles, project implementations, and academic qualifications in the official resume.
          </p>
          <div className="pt-2 flex justify-center gap-6">
            <Link 
              href="/resume" 
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1 hover:border-muted-foreground"
            >
              View Full Resume <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-border/60 pb-1 hover:border-foreground"
            >
              Selected Projects <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
