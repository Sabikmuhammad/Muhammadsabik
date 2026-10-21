import { Metadata } from "next";
import { ArrowLeft, Download, ExternalLink, Mail, MapPin, Phone, Globe, Briefcase, GraduationCap, Award, Code2, Wrench } from "lucide-react";
import Link from "next/link";
import { SKILLS } from "@/lib/constants/about";

export const metadata: Metadata = {
  title: "Resume — Mohammed Shabik",
  description: "Official resume of Mohammed Shabik — Computer Science Engineer, Software Engineer & AI / Full-Stack Developer.",
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
        <div className="space-y-6 mb-16 text-center sm:text-left">
          <div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground">
              Mohammed Shabik
            </h1>
            <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mt-2 flex items-center justify-center sm:justify-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-foreground/60" /> Mangaluru, Karnataka, India
            </p>
            <p className="text-xl sm:text-2xl text-muted-foreground mt-3 font-display">
              Computer Science Engineer <span className="text-foreground/40 font-mono text-base px-2">|</span> Software Engineer <span className="text-foreground/40 font-mono text-base px-2">|</span> AI & Full-Stack Developer
            </p>
          </div>

          {/* Quick Contact & Links Strip */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-3 gap-x-6 text-xs font-mono text-muted-foreground pt-2">
            <a href="tel:+917259788138" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Phone className="w-3.5 h-3.5 text-foreground/60" /> +91 72597 88138
            </a>
            <a href="https://mohammedshabik.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Globe className="w-3.5 h-3.5 text-foreground/60" /> mohammedshabik.in
            </a>
            <a href="mailto:contact@mohammedshabik.in" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="w-3.5 h-3.5 text-foreground/60" /> contact@mohammedshabik.in
            </a>
            <a href="https://linkedin.com/in/mohammedshabik" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors border-b border-border/60 pb-0.5">
              LinkedIn ↗
            </a>
            <a href="https://github.com/Sabikmuhammad" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors border-b border-border/60 pb-0.5">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="space-y-16">
          
          {/* Experience */}
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
                      FrameKart – E-Commerce Platform · India
                    </p>
                  </div>
                  <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground bg-muted/10 border border-border/30 px-3 py-1 rounded-sm w-fit">
                    2026
                  </span>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Designed, developed, and deployed a production-oriented e-commerce platform for custom and bulk photo frame ordering using <strong>Next.js, TypeScript, Node.js, MongoDB, and Tailwind CSS</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Architected customer and administrative workflows covering product discovery, custom frame configuration, cart management, checkout, order processing, and product administration.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Developed reusable frontend components and backend APIs using the <strong>Next.js App Router, React, REST APIs, Mongoose, and MongoDB</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Integrated <strong>Cashfree</strong> payment processing and <strong>Cloudinary-based</strong> image upload and media management for customer-generated frame content.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Implemented authentication, role-based access control, admin dashboards, product management, order workflows, and operational interfaces.</span>
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

          {/* Projects */}
          <section className="space-y-10">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground border-b border-border/40 pb-3 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5" /> Projects
            </h2>

            <div className="space-y-12">
              
              {/* FrameKart */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-display text-foreground">FrameKart – Full-Stack E-Commerce Platform</h3>
                    <span className="text-xs font-mono text-emerald-500 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded-sm uppercase tracking-wider">Live</span>
                  </div>
                  <a href="https://framekart.co.in" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors">
                    framekart.co.in ↗
                  </a>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Architected, developed, and deployed a full-stack e-commerce platform specializing in premium photo frames, personalized framing solutions, and bulk-order fulfillment through a customer-centric digital storefront.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Engineered a modular application architecture using Next.js App Router, TypeScript, reusable React components, RESTful APIs, and MongoDB to support maintainable code, efficient data management, and scalable commerce workflows.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Developed an interactive Custom Frame Studio enabling customers to upload personal photographs, configure frame dimensions, select frame styles, finishes, and profiles, and view dynamically calculated pricing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Implemented comprehensive e-commerce functionality, including product discovery, category-based navigation, product detail pages, shopping cart management, checkout workflows, and order lifecycle management.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Integrated Cashfree for online payment processing and Cloudinary for image uploads, cloud-based media management, and optimized delivery of product photographs and customer-uploaded images.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Designed and optimized responsive, mobile-first user interfaces with a premium visual experience, intuitive product customization, streamlined purchasing workflows, and consistent usability across desktop and mobile.</span>
                  </li>
                </ul>
              </div>

              {/* WhatsApp Commerce Platform */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-display text-foreground">WhatsApp Commerce Platform</h3>
                    <span className="text-xs font-mono text-emerald-500 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded-sm uppercase tracking-wider">Live Demo</span>
                  </div>
                  <a href="https://wa.me/919480632085" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors">
                    Live Demo ↗
                  </a>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Developed a conversational commerce platform enabling customers to browse product catalogs, explore categories, and discover products directly through WhatsApp.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Implemented interactive product carousels to display product images, pricing, and product details for a seamless shopping experience.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Built interactive messaging flows and category-based navigation to help customers explore available products and shopping options.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Designed customer journeys for product discovery, custom frame inquiries, and personalized shopping requirements.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Integrated cart-based shopping interactions to help customers select products and proceed toward checkout.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Streamlined the customer purchase journey by connecting product discovery, shopping interactions, and order support within a unified conversational interface.</span>
                  </li>
                </ul>
              </div>

              {/* AgentOS */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-display text-foreground">AgentOS – AI Marketing & Automation Platform</h3>
                    <span className="text-xs font-mono text-emerald-500 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded-sm uppercase tracking-wider">Live</span>
                  </div>
                  <a href="https://agentaios.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors">
                    agentaios.vercel.app ↗
                  </a>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Developed an AI-powered WhatsApp marketing and automation SaaS platform enabling businesses to manage customer engagement, marketing campaigns, lead generation, conversational commerce, and automated business workflows.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Architected a modular AI orchestration system with provider abstraction and a centralized tool registry, enabling AI agents to process customer queries, discover products, and execute business-specific actions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Designed WhatsApp marketing automation workflows for business messaging, customer engagement, promotional campaigns, and automated communication through integration with the WhatsApp Cloud API.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Developed conversational commerce capabilities supporting product discovery, interactive catalogs, product cards, cart operations, and customer purchasing journeys directly through WhatsApp.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Engineered a multi-tenant SaaS architecture with business-specific configurations, WhatsApp integrations, AI agent settings, and product catalogs to support independent business operations and automation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Built centralized business dashboards for WhatsApp onboarding, connection management, AI workforce configuration, product management, and marketing and operational workflow management.</span>
                  </li>
                </ul>
              </div>

              {/* Triploom */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-display text-foreground">Triploom – AI-Powered Travel Planning Platform</h3>
                    <span className="text-xs font-mono text-amber-500 border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 rounded-sm uppercase tracking-wider">In Development</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Developing an AI-powered travel planning platform that generates personalized travel itineraries based on user preferences, budget, destinations, and trip duration.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Designing a conversational AI travel planner to provide personalized destination recommendations, day-wise itineraries, and activity suggestions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Building a travel discovery platform featuring destinations, hotels, resorts, homestays, restaurants, and activities.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Developing a business listing model that enables hospitality providers to promote their properties and services through paid listings while keeping core travel planning features free.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Implementing a responsive user interface using Next.js, TypeScript, and Tailwind CSS, with reusable components and a premium design optimized for desktop and mobile devices.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <span>Designing a scalable MongoDB database architecture to manage destinations, accommodation listings, user preferences, business profiles, and personalized travel itineraries.</span>
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-8">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground border-b border-border/40 pb-3 flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5" /> Technical Skills
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {SKILLS.map((item) => (
                <div key={item.category} className="space-y-1.5">
                  <h3 className="font-mono text-xs tracking-widest uppercase text-foreground font-semibold">{item.category}</h3>
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
                <p className="text-muted-foreground text-sm mt-1">B.E. in Computer Science and Engineering</p>
                <p className="text-xs font-mono text-muted-foreground/80 mt-1">Mangaluru, India</p>
              </div>
              <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground bg-muted/10 border border-border/30 px-3 py-1 rounded-sm w-fit shrink-0">
                2023 – 2027
              </span>
            </div>
          </section>

          {/* Leadership & Involvement */}
          <section className="space-y-6">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground border-b border-border/40 pb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" /> Leadership & Involvement
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-display text-foreground">Academic Representative</h3>
                  <p className="text-sm font-mono tracking-widest uppercase text-foreground/80 mt-1">
                    Sahyadri College of Engineering and Management · Mangaluru, India
                  </p>
                </div>
                <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground bg-muted/10 border border-border/30 px-3 py-1 rounded-sm w-fit shrink-0">
                  2026 – Present
                </span>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-foreground/40 mt-1.5">•</span>
                  <span>Coordinate academic and departmental communication between students, faculty, and student associations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-foreground/40 mt-1.5">•</span>
                  <span>Organize and communicate class-level activities, announcements, participation requirements, and student coordination.</span>
                </li>
              </ul>
            </div>
          </section>

        </div>
      </section>
    </div>
  );
}
