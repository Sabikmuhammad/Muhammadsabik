import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/30">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-24">
          
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="text-3xl font-display tracking-tight text-foreground"
            >
              Mohammed Shabik
            </Link>
            <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground">
              Software Engineer 
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-6 text-xs font-mono tracking-widest uppercase text-muted-foreground">Connect</h3>
            <ul className="space-y-4">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-foreground"
                  >
                    <span className="font-medium tracking-wide">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav */}
          <div>
            <h3 className="mb-6 text-xs font-mono tracking-widest uppercase text-muted-foreground">Directory</h3>
            <ul className="space-y-4">
              {["Projects", "Experience", "About", "Resume"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="group inline-flex items-center text-foreground/80 transition-colors hover:text-foreground"
                  >
                    <span className="font-medium tracking-wide">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/30 pt-8">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            © {currentYear} {siteConfig.name}
          </p>
          <div className="flex gap-4">
            <span className="text-xs font-mono text-muted-foreground tracking-widest">
            
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
