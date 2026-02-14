import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SOCIAL_LINKS, NAVIGATION_ITEMS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const mainNavItems = NAVIGATION_ITEMS.filter((item) => item.href !== "/");

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight transition-colors hover:text-primary"
            >
              Muhammad Sabik
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Building scalable platforms and engineering excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Connect</h3>
            <ul className="space-y-2 text-sm">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <link.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="group inline-flex items-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="group inline-flex items-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    Terms of Service
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            © {currentYear} {siteConfig.name}. Crafted with precision and purpose.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
