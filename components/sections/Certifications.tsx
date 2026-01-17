"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Clock, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { certificationsData } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 md:py-32 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and ongoing learning"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4">
                {cert.status === "in-progress" ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium rounded-full">
                    <Clock className="w-3 h-3" />
                    In Progress
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    Completed
                  </span>
                )}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-5">
                <Award className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 pr-20">
                {cert.title}
              </h3>

              <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">
                {cert.issuer}
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {cert.date}
                </span>

                {cert.credentialUrl && (
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline"
                  >
                    View Credential
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                )}
              </div>

              {/* Decorative gradient border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-500/20 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
