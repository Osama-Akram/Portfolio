"use client";

import { motion } from "framer-motion";
import {
  TestTube2,
  Brain,
  Database,
  Layout,
  GitBranch
} from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { skillsData } from "@/lib/data";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Automation & Testing": TestTube2,
  "AI & Agentic Systems": Brain,
  "Backend & Databases": Database,
  "Frontend": Layout,
  "DevOps & Collaboration": GitBranch,
};

export default function Skills() {
  const categories = Object.entries(skillsData);

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Tools"
          subtitle="Technologies I work with to build automation and AI solutions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(([category, skills], categoryIndex) => {
            const Icon = categoryIcons[category] || TestTube2;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700/50"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
