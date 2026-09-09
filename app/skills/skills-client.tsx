"use client";

import { motion } from "framer-motion";

import { SKILLS } from "@/lib/constants/about";

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

export function SkillsClient() {
  return (
    <div className="overflow-hidden bg-background">
      
      {/* Hero Section (Centered) */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 md:px-8 max-w-[1400px] mx-auto border-b border-border/50 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-8 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">
            <span className="w-12 h-[1px] bg-border" />
            <span>Capabilities</span>
            <span className="w-12 h-[1px] bg-border" />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
            Engineering <br />
            <span className="text-muted-foreground">Expertise.</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[700px] pt-4 mx-auto"
          >
            Building across product, frontend, backend, infrastructure, and AI.
          </motion.p>
        </motion.div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {SKILLS.map((section) => (
            <motion.div
              key={section.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight text-foreground mb-3">
                  {section.category}
                </h2>
                <p className="text-muted-foreground">
                  {section.description}
                </p>
              </motion.div>
              
              <motion.ul variants={staggerContainer} className="space-y-4">
                {section.skills.map((skill) => (
                  <motion.li 
                    key={skill}
                    variants={fadeInUp}
                    className="flex items-start gap-4 text-foreground/90 group"
                  >
                    <span className="text-muted-foreground/30 mt-1.5 transition-colors group-hover:text-foreground/50">
                      —
                    </span>
                    <span className="font-medium tracking-wide">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </section>

      

    </div>
  );
}
