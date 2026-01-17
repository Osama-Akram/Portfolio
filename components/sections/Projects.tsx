"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Lightbulb,
  Wrench,
  Zap,
  ChevronRight,
} from "lucide-react";
import { SectionHeading, Button } from "@/components/ui";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world solutions I've built to solve complex problems"
        />

        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-medium rounded-full mb-3">
                        <Zap className="w-3 h-3" />
                        Featured Project
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 flex-shrink-0">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Problem */}
                  <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border border-red-100 dark:border-red-900/20">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-red-600 dark:text-red-400" />
                      </div>
                      <h4 className="font-semibold text-red-900 dark:text-red-300">
                        The Problem
                      </h4>
                    </div>
                    <p className="text-red-800 dark:text-red-200 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-5 border border-green-100 dark:border-green-900/20">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Wrench className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="font-semibold text-green-900 dark:text-green-300">
                        The Solution
                      </h4>
                    </div>
                    <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack & Impact */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="md:text-right">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Key Impact
                    </h4>
                    <ul className="space-y-1">
                      {project.impact.map((item, impactIndex) => (
                        <li
                          key={impactIndex}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 md:justify-end"
                        >
                          <ChevronRight className="w-4 h-4 text-primary-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Osama-Akram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
