import { Github, Linkedin, Mail, X, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SocialLink } from "@/lib/types";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
    username: "Sabikmuhammad",
  },
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    username: "mohammedshabik",
  },
  {
    name: "X",
    href: siteConfig.links.X,
    icon: X,
    username: "SabikDevelops",
  },
  {
    name: "Instagram",
    href: siteConfig.links.instagram,
    icon: Instagram,
    username: "muhammadsaabik",
  },
  {
    name: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    username: siteConfig.email,
  },
];
