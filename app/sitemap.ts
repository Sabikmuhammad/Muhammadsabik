import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/work", "/skills", "/blog", "/contact"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Add blog posts (in production, fetch from Contentlayer)
  const blogPosts = [
    "scalable-nextjs-architecture",
    "cicd-pipeline-setup",
    "database-design-principles",
  ].map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogPosts];
}
