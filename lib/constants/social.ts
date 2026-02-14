import { Github, Linkedin, Twitter, Mail, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SocialLink } from "@/lib/types";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
    username: "muhammadsabik",
  },
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    username: "muhammadsabik",
  },
  {
    name: "X",
    href: siteConfig.links.X,
    icon: X,
    username: "@muhammadsabik",
  },
  {
    name: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    username: siteConfig.email,
  },
];
