"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/constants/about";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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

export function ExperienceClient() {
  return (
    <div className="pb-24 overflow-hidden bg-background">
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-[1000px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-6 flex flex-col mb-24"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
            <span>Experience</span>
            <span className="flex-1 h-[1px] bg-border" />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl tracking-tight text-foreground">
            Mohammed Shabik — <br /> Software Engineer Experience
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl pt-4">
            A chronological timeline of my professional experience, engineering roles, and journey in software development.
          </motion.p>
        </motion.div>

        <div className="space-y-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border/50 before:to-transparent">
          {TIMELINE.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border/50 bg-background text-muted-foreground group-hover:text-foreground group-hover:border-foreground/50 transition-colors shadow-[0_0_0_4px_hsl(var(--background))] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 bg-muted/5 border border-border/30 rounded-sm hover:border-border/60 hover:bg-muted/10 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="font-display text-2xl tracking-tight text-foreground">{item.title}</h3>
                    <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground border border-border/30 px-3 py-1 rounded-sm w-fit bg-background">
                      {item.year}
                    </span>
                  </div>
                  
                  <div className="text-sm font-mono tracking-widest uppercase text-foreground mb-4 opacity-80">
                    {item.company}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-border/30 text-center space-y-8"
        >
          <h2 className="font-display text-4xl tracking-tight">Need more details?</h2>
          <div className="flex justify-center gap-6">
            <Link 
              href="/resume" 
              className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase hover:text-muted-foreground transition-colors border-b border-foreground pb-1 hover:border-muted-foreground"
            >
              View Full Resume <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase hover:text-muted-foreground transition-colors border-b border-foreground pb-1 hover:border-muted-foreground text-muted-foreground"
            >
              View Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
