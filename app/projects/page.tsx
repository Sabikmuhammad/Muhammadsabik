import { Metadata } from "next";
import { ProjectsClient } from "./projects-client";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of products, systems, and experiments I've designed and engineered.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
