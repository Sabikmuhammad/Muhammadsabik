import { Metadata } from "next";
import { ArrowLeft, Download, ExternalLink, Mail, MapPin, Phone, Globe, Briefcase, GraduationCap, Award, Code2 } from "lucide-react";
import Link from "next/link";
import { SKILLS } from "@/lib/constants/about";

export const metadata: Metadata = {
  title: "Resume — Mohammed Shabik",
  description: "Official resume of Mohammed Shabik — Computer Science Engineer, Software Engineer & Full-Stack Developer.",
};

export default function ResumePage() {
  return (
    <div className="pb-32 overflow-hidden bg-background">
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-[950px] mx-auto">
        
        {/* Top Navigation & Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-12 border-b border-border/40 mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          
          <div className="flex items-center gap-3">
            <a 
              href="/Mohammed_Shabik_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors border border-border/60 px-4 py-2.5 rounded-sm hover:bg-muted/10"
            >
              <ExternalLink className="w-3.5 h-3.5" /> View PDF
            </a>
            
            <a 
              href="/Mohammed_Shabik_Resume.pdf" 
              download="Mohammed_Shabik_Resume.pdf"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase bg-foreground text-background hover:bg-foreground/90 transition-colors px-5 py-2.5 rounded-sm font-medium shadow-sm group"
            >
              <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" /> Download PDF
            </a>
          </div>
        </div>

        {/* Header Block */}
        <div className="space-y-6 mb-16">
          <div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground">
              Mohammed Shabik
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mt-3 font-display">
              Computer Science Engineer <span className="text-foreground/40 font-mono text-base px-2">|</span> Software Engineer <span className="text-foreground/40 font-mono text-base px-2">|</span> AI & Full-Stack Developer
            </p>
          </div>

          {/* Quick Contact & Links Strip */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-mono text-muted-foreground pt-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-foreground/60" /> Mangaluru, Karnataka, India
            </span>
            <a href="mailto:contact@mohammedshabik.in" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="w-3.5 h-3.5 text-foreground/60" /> contact@mohammedshabik.in
            </a>
            <a href="tel:+917259788138" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Phone className="w-3.5 h-3.5 text-foreground/60" /> +91 72597 88138
            </a>
            <a href="https://mohammedshabik.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Globe className="w-3.5 h-3.5 text-foreground/60" /> mohammedshabik.in
            </a>
            <a href="https://github.com/Sabikmuhammad" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors border-b border-border/60 pb-0.5">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/mohammedshabik" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors border-b border-border/60 pb-0.5">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="space-y-16">
          
          {/* Summary */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground border-b border-border/40 pb-3">
              Professional Summary
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
              Computer Science Engineer and Full-Stack Developer with deep experience in Next.js, TypeScript, Node.js, MongoDB, and AI-driven automation workflows. Proven track record architecting and deploying production grade systems such as FrameKart(e-commerce platform with custom photo framing configuration engine and payment integrations) and AgentOS (AI-powered workflow automation and conversational commerce).
            </p>
          </section>

          {/* Work Experience */}
          <section className="space-y-8">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground border-b border-border/40 pb-3 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" /> Experience
            </h2>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-2xl font-display text-foreground">Software Engineer / Full-Stack Developer</h3>
                    <p className="text-sm font-mono tracking-widest uppercase text-foreground/80 mt-1">
                      FrameKart — E-Commerce Platform · India
                    </p>
                  </div>
                  <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground bg-muted/10 border border-border/30 px-3 py-1 rounded-sm w-fit">
                    2026 — Present
                  </span>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Designed, developed, and deployed a production-oriented e-commerce platform for custom and bulk photo frame ordering using <strong>Next.js, TypeScript, Node.js, MongoDB, and Tailwind CSS</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Architected customer and administrative workflows covering product discovery, custom frame configuration, cart management, checkout, order processing, and administrative dashboards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Developed reusable frontend components and backend APIs utilizing Next.js App Router, React, RESTful APIs, Mongoose, and MongoDB.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Integrated <strong>Cashfree</strong> payment processing and <strong>Cloudinary</strong> for automated image uploads, media optimization, and customer-generated frame asset delivery.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Implemented authentication, role-based access control (RBAC), inventory management, and operational fulfillment tracking.</span>
                  </li>
                </ul>

                <div className="pt-2 flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Node.js", "MongoDB", "Cashfree", "Cloudinary", "Tailwind CSS"].map((tag) => (
                    <span key={tag} className="text-xs font-mono text-foreground/80 bg-foreground/5 border border-foreground/10 px-2.5 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Projects */}
          <section className="space-y-8">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground border-b border-border/40 pb-3 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5" /> Featured Projects
            </h2>

            <div className="space-y-10">
              {/* FrameKart */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-display text-foreground">FrameKart</h3>
                    <span className="text-xs font-mono text-emerald-500 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded-sm uppercase tracking-wider">Live</span>
                  </div>
                  <a href="https://framekart.co.in" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors">
                    framekart.co.in ↗
                  </a>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Full-stack e-commerce platform specializing in premium photo frames and personalized framing solutions. Features an interactive Custom Frame Studio enabling customers to upload photos, customize dimensions, choose finishes, and preview dynamically calculated pricing.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Cashfree", "Cloudinary"].map(t => (
                    <span key={t} className="text-xs font-mono text-muted-foreground bg-muted/10 border border-border/30 px-2 py-0.5 rounded-sm">{t}</span>
                  ))}
                </div>
              </div>

              {/* AgentOS */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-display text-foreground">AgentOS</h3>
                    <span className="text-xs font-mono text-emerald-500 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded-sm uppercase tracking-wider">Live</span>
                  </div>
                  <a href="https://agentaios.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors">
                    agentaios.vercel.app ↗
                  </a>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  AI-powered marketing and automation platform integrated with the Meta WhatsApp Cloud API. Features a modular AI orchestration system with provider abstraction, tool registries, multi-tenant business dashboards, and conversational commerce directly via WhatsApp.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Python", "FastAPI", "React", "WhatsApp Cloud API", "AI Agents", "Automation"].map(t => (
                    <span key={t} className="text-xs font-mono text-muted-foreground bg-muted/10 border border-border/30 px-2 py-0.5 rounded-sm">{t}</span>
                  ))}
                </div>
              </div>

              {/* Triploom */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-display text-foreground">Triploom</h3>
                    <span className="text-xs font-mono text-amber-500 border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 rounded-sm uppercase tracking-wider">In Development</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  AI-powered travel discovery platform that generates personalized day-wise itineraries, destination recommendations, and accommodation listings based on user budget and duration.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "AI Recommendations"].map(t => (
                    <span key={t} className="text-xs font-mono text-muted-foreground bg-muted/10 border border-border/30 px-2 py-0.5 rounded-sm">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-8">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground border-b border-border/40 pb-3">
              Technical Skills
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {SKILLS.map((item) => (
                <div key={item.category} className="space-y-2">
                  <h3 className="font-mono text-xs tracking-widest uppercase text-foreground">{item.category}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.skills.join(", ")}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground border-b border-border/40 pb-3 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" /> Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="text-xl font-display text-foreground">Sahyadri College of Engineering and Management</h3>
                <p className="text-muted-foreground text-sm mt-1">Bachelor of Engineering (B.E.) in Computer Science & Engineering</p>
                <p className="text-xs font-mono text-muted-foreground/80 mt-1">Mangaluru, Karnataka, India</p>
              </div>
              <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground bg-muted/10 border border-border/30 px-3 py-1 rounded-sm w-fit shrink-0">
                2023 — 2027
              </span>
            </div>
          </section>

          {/* Leadership & Involvement */}
          <section className="space-y-6">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground border-b border-border/40 pb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" /> Leadership & Involvement
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="text-xl font-display text-foreground">Academic Representative</h3>
                <p className="text-muted-foreground text-sm mt-1">Sahyadri College of Engineering and Management · Mangaluru, India</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Coordinating academic and departmental communication between students, faculty, and student associations; organizing class-level activities and student coordination.
                </p>
              </div>
              <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground bg-muted/10 border border-border/30 px-3 py-1 rounded-sm w-fit shrink-0">
                2026 — Present
              </span>
            </div>
          </section>

          

        </div>
      </section>
    </div>
  );
}
