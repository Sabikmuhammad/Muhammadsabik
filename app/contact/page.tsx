import { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Mohammed Shabik",
  description: "Get in touch with Mohammed Shabik to discuss product ideas, technical challenges, or ambitious projects.",
};

export default function ContactPage() {
  return <ContactClient />;
}
