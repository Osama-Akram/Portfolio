"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "elevated" | "bordered";
  hover?: boolean;
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const baseStyles = "rounded-xl p-6 transition-all duration-300";

    const variants = {
      default:
        "bg-white dark:bg-gray-800/50 backdrop-blur-sm",
      elevated:
        "bg-white dark:bg-gray-800/50 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 backdrop-blur-sm",
      bordered:
        "bg-white/50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 backdrop-blur-sm",
    };

    const hoverStyles = hover
      ? "hover:shadow-xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/5 hover:-translate-y-1"
      : "";

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;
