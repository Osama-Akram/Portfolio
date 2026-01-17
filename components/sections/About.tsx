"use client";

import { motion } from "framer-motion";
import { Code2, Bot, Workflow, Sparkles } from "lucide-react";
import { SectionHeading, Card } from "@/components/ui";
import { aboutContent } from "@/lib/data";

export default function About() {
  const highlights = [
    {
      icon: Workflow,
      title: "Automation First",
      description: "Building systems that eliminate repetitive tasks and scale operations",
    },
    {
      icon: Bot,
      title: "AI-Powered",
      description: "Leveraging LLMs and RAG systems for intelligent solutions",
    },
    {
      icon: Code2,
      title: "Production Ready",
      description: "Writing clean, tested, and maintainable code",
    },
    {
      icon: Sparkles,
      title: "Impact Driven",
      description: "Focused on delivering measurable business outcomes",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building intelligent systems that make a difference"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}

            {/* Quick facts */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Python", "Playwright", "n8n", "RAG", "FastAPI", "TypeScript"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="bordered" className="h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
