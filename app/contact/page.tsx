"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

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

export default function ContactPage() {
  return (
    <div className="overflow-hidden bg-background min-h-screen flex flex-col justify-center">
      
      <section className="pt-32 pb-32 px-4 md:px-8 max-w-[1400px] mx-auto w-full text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-16 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 text-xs font-mono tracking-widest uppercase text-muted-foreground">
            <span className="w-12 h-[1px] bg-border" />
            <span>Contact</span>
            <span className="w-12 h-[1px] bg-border" />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
              Let&apos;s build something <br />
              <span className="text-muted-foreground">worth shipping.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Have a product idea, technical challenge, or ambitious project? Let&apos;s talk.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-8 flex justify-center">
            <a 
              href="mailto:muhammadsabik.org@gmail.com"
              className="inline-flex items-center gap-4 text-2xl md:text-4xl font-medium tracking-tight text-foreground hover:text-muted-foreground transition-colors group"
            >
              Start a Conversation 
              <ArrowUpRight className="w-8 h-8 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border/50 w-full max-w-3xl">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="font-mono text-sm tracking-widest uppercase">{link.name}</span>
                <span className="flex items-center justify-center gap-1 font-medium">
                  {link.username}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
