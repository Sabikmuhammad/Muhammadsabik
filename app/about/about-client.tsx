"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SocialHub } from "@/components/social-hub";

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

export function AboutClient() {
  return (
    <div className="overflow-hidden bg-background">
      
      {/* Hero Section (Centered) */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 md:px-8 max-w-[1400px] mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-8 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">
            <span className="w-12 h-[1px] bg-border" />
            <span>About</span>
            <span className="w-12 h-[1px] bg-border" />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
            I build systems <br />
            <span className="text-muted-foreground">that scale.</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[700px] pt-4 mx-auto"
          >
            Mohammed Shabik is a Software Engineer who builds modern web applications and digital products.
          </motion.p>
        </motion.div>
      </section>

      {/* Story / Principles Section */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto border-t border-border/50">
        <div className="grid md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-sm font-mono tracking-widest uppercase text-muted-foreground sticky top-32">
              The Journey
            </h2>
          </div>
          <div className="md:col-span-8 lg:col-span-9 max-w-3xl space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p className="text-foreground font-medium text-xl md:text-2xl">
              My engineering journey started with a simple curiosity: how do applications scale to serve millions of users? This question drove me to dive deep into distributed systems, clean architecture, and performance optimization.
            </p>
            <p>
              Over the past Student Days, I&apos;ve had the privilege of building products used by thousands of people daily. From e-commerce platforms processing millions in transactions to real-time tools enabling remote teams each project taught me something invaluable about building software that scales.
            </p>
            <div className="pt-12">
              <SocialHub />
            </div>
          </div>
        </div>
      </section>
      {/* Connect CTA */}
      <section className="py-32 px-4 md:px-8 text-center border-t border-border/50">
        <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-8">
          Ready to build?
        </h2>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase hover:text-muted-foreground transition-colors border-b border-foreground pb-1 hover:border-muted-foreground"
        >
          Let&apos;s Talk <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
