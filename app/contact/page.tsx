"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { fadeInUp, fadeInRight, staggerContainer } from "@/lib/animations";

export default function ContactPage() {

  return (
    <div className="pb-24">
      <section className="border-b bg-gradient-to-b from-background to-muted/30 py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-4xl space-y-6 text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-fluid-5xl font-bold">
              Get in Touch
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-fluid-xl leading-relaxed text-muted-foreground"
            >
              Looking to collaborate on a project, need technical consultation, or just want to say
              hello? I'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-4 text-2xl font-bold">Connect With Me</h2>
                <p className="mb-6 text-muted-foreground">
                  Prefer a different way to reach out? Find me on these platforms:
                </p>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="space-y-4"
                >
                  {SOCIAL_LINKS.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target={link.name !== "Email" ? "_blank" : undefined}
                      rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                      variants={fadeInUp}
                      whileHover={{ x: 8, transition: { duration: 0.2 } }}
                      className="group flex items-center gap-4 rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-lg"
                    >
                      <motion.div
                        className="rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <link.icon className="h-5 w-5" />
                      </motion.div>
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-sm text-muted-foreground">{link.username}</div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Response Time</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <p>
                      <strong className="text-foreground">Email:</strong> Within 24 hours
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <p>
                      <strong className="text-foreground">LinkedIn:</strong> Within 48 hours
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                    <p>
                      <strong className="text-foreground">Urgent matters:</strong> Email is best
                    </p>
                  </div>
                </CardContent>
              </Card> */}

              {/* <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>What I'm Looking For</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-4 w-4" /> Interesting technical problems
                  </p>
                  <p className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-4 w-4" /> Product collaborations
                  </p>
                  <p className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-4 w-4" /> Speaking opportunities
                  </p>
                  <p className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-4 w-4" /> Open source contributions
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    ✗ Generic outreach or spam
                  </p>
                </CardContent>
              </Card> */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
