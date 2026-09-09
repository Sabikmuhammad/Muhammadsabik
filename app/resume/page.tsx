import { Metadata } from "next";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { TIMELINE } from "@/lib/constants/about";
import { SKILLS } from "@/lib/constants/about";

export const metadata: Metadata = {
  title: "Mohammed Shabik — Software Engineer Resume",
  description: "Professional resume of Mohammed Shabik, Software Engineer building scalable digital products.",
};

export default function ResumePage() {
  return (
    <div className="pb-24 overflow-hidden bg-background">
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-[900px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
            <h1 className="font-display text-5xl md:text-7xl tracking-tight text-foreground">
              Mohammed Shabik
            </h1>
            <p className="text-xl text-muted-foreground">
              Software Engineer
            </p>
          </div>
          
          <button className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors border border-border/50 px-6 py-3 rounded-sm hover:bg-muted/5">
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>

        <div className="space-y-24">
          {/* Summary */}
          <section className="space-y-6">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground border-b border-border/30 pb-4">
              Professional Summary
            </h2>
            <p className="text-lg leading-relaxed text-foreground">
              Mohammed Shabik is a Software Engineer who builds modern web applications and digital products. 
              Focused on scalable architecture, clean code, and premium user experiences. Proficient in full-stack 
              development spanning React, Next.js, TypeScript, Node.js, and complex backend systems.
            </p>
          </section>

          {/* Experience */}
          <section className="space-y-8">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground border-b border-border/30 pb-4">
              Experience
            </h2>
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <div key={i} className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                  <div className="text-sm font-mono text-muted-foreground pt-1">
                    {item.year}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.company}</p>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-8">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground border-b border-border/30 pb-4">
              Technical Skills
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {SKILLS.map((category, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="font-medium text-foreground">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, j) => (
                      <span key={j} className="text-sm text-muted-foreground bg-muted/10 border border-border/30 px-3 py-1 rounded-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education / Alumni */}
          <section className="space-y-8">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground border-b border-border/30 pb-4">
              Education
            </h2>
            <div className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
              <div className="text-sm font-mono text-muted-foreground pt-1">
                2021 — 2025
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-medium text-foreground">Computer Science Engineering</h3>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
