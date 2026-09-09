export const siteConfig = {
  name: "Mohammed Shabik",
  title: "Mohammed Shabik — Software Engineer",
  description:
    "Mohammed Shabik is a Software Engineer who builds modern web applications and digital products.",
  url: "https://mohammedshabik.in",
  ogImage: "https://mohammedshabik.in/og.png",
  email: "muhammadsabik.org@gmail.com",
  links: {
    github: "https://github.com/Sabikmuhammad",
    linkedin: "https://www.linkedin.com/in/mohammedshabik",
    X: "https://x.com/SabikDevelops",
    instagram: "https://www.instagram.com/muhammadsaabik"
  },
  creator: {
    name: "Mohammed Shabik",
    role: "Software Engineer",
    bio: "Mohammed Shabik is a Software Engineer who builds modern web applications and digital products.",
    location: "India",
  },
} as const;

export type SiteConfig = typeof siteConfig;
