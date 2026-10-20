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
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-[950px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-6 flex flex-col mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
            <span>Experience</span>
            <span className="flex-1 h-[1px] bg-border" />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl tracking-tight text-foreground">
            Work & Career <br />
            <span className="text-muted-foreground">Timeline.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl pt-2">
            A chronological timeline of engineering roles, production systems built, and academic background.
          </motion.p>
        </motion.div>

        {/* Continuous Timeline Stream */}
        <div className="relative pl-6 sm:pl-10 border-l border-border/40 space-y-12 md:space-y-16 ml-3 sm:ml-6">
          {TIMELINE.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Node icon perfectly centered on spine */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-2 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-border/60 bg-background text-muted-foreground group-hover:text-foreground group-hover:border-foreground/60 transition-colors shadow-[0_0_0_4px_hsl(var(--background))] z-10 shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Content Card */}
                <div className="p-6 md:p-8 bg-muted/5 border border-border/30 rounded-sm hover:border-border/60 hover:bg-muted/10 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground border border-border/30 px-3 py-1 rounded-sm w-fit bg-background">
                      {item.year}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm font-mono tracking-widest uppercase text-foreground/80 mb-4">
                    <span>{item.company}</span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground lowercase border-b border-muted-foreground/30 hover:border-foreground transition-colors"
                      >
                        live site <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {item.description}
                  </p>

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-border/20 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono tracking-wider text-foreground/80 bg-foreground/5 border border-foreground/10 px-2.5 py-1 rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-28 pt-16 border-t border-border/30 text-center space-y-8"
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
