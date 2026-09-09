import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PROJECTS } from "@/lib/constants/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return { title: "Not Found" };
  }

  return {
    title: `${project.title} — Mohammed Shabik`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Mohammed Shabik`,
      description: project.description,
      type: "article",
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: [{ url: siteConfig.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Mohammed Shabik`,
      description: project.description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    author: {
      "@type": "Person",
      name: "Mohammed Shabik",
      url: siteConfig.url
    },
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    url: `${siteConfig.url}/projects/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="pb-24 overflow-hidden bg-background">
        <section className="pt-32 pb-16 px-4 md:px-8 max-w-[1000px] mx-auto">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-muted-foreground">
              <span>{project.category}</span>
              {project.statusLabel && (
                <>
                  <span>/</span>
                  <span className="text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-sm">{project.statusLabel}</span>
                </>
              )}
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground">
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-16 pt-12 border-t border-border/30">
            <div className="md:col-span-2 space-y-12">
              {project.overview && (
                <div className="space-y-6">
                  <h2 className="text-sm font-mono tracking-widest uppercase text-foreground">Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.overview}
                  </p>
                </div>
              )}

              {project.keyFeatures && (
                <div className="space-y-6">
                  <h2 className="text-sm font-mono tracking-widest uppercase text-foreground">Key Features</h2>
                  <ul className="space-y-4">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="text-muted-foreground mt-1.5 font-mono text-sm">0{i + 1}</span>
                        <span className="text-muted-foreground text-lg leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-sm font-mono tracking-widest uppercase text-foreground">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono tracking-widest text-muted-foreground border border-border/50 px-3 py-1.5 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-sm font-mono tracking-widest uppercase text-foreground">Links</h2>
                <div className="flex flex-col gap-3">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors group">
                      Live Project <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors group">
                      GitHub Repository <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                  )}
                  {project.customCta && !project.demo && (
                    <a href={project.customCta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors group">
                      {project.customCta.label} <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="space-y-4 pt-6">
                <h2 className="text-sm font-mono tracking-widest uppercase text-foreground">Author</h2>
                <Link href="/about" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors group">
                  Mohammed Shabik
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
