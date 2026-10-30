"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  romanIndex: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  romanIndex,
  title,
  subtitle,
  children,
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-16"
    >
      <div className="flex items-baseline justify-between border-b border-neutral-800 pb-3 mb-6">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-brass">{romanIndex}</span>
          <h2 className="font-serif italic text-xl text-ivory tracking-editorial">
            {title}
          </h2>
        </div>
        {subtitle && (
          <span className="font-mono text-[11px] text-stone uppercase tracking-wider">
            {subtitle}
          </span>
        )}
      </div>
      {children}
    </motion.section>
  );
};