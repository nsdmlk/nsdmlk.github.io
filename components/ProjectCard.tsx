"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative border border-neutral-800 bg-neutral-950/40 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-900/30"
    >
      {/* Еле заметный теплый блик верхнего бордера при hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Верхний ряд: индекс + название слева, метрика в моноширинном плашке справа */}
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] text-stone tabular-nums">
            {project.index}
          </span>
          <h3 className="text-base font-medium tracking-tight text-ivory group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <span className="hidden sm:inline text-neutral-800">—</span>
          <span className="font-serif italic text-[15px] text-parchment">
            {project.subtitle}
          </span>
        </div>

        {project.metric && (
          <div className="flex items-center gap-1.5 border border-neutral-800/90 bg-obsidian px-2.5 py-0.5 font-mono text-[11px] tabular-nums">
            <span className="text-stone">{project.metric.label}:</span>
            <span className="text-brass font-medium">
              {project.metric.value}
            </span>
          </div>
        )}
      </div>

      {/* Основное описание */}
      <p className="mt-3 text-[14px] leading-[1.65] text-parchment max-w-2xl">
        {project.description}
      </p>

      {/* Неформальная рукописная/журнальная сноска, если есть */}
      {project.note && (
        <p className="mt-2.5 font-serif italic text-[13.5px] text-stone">
          ↳ Note: {project.note}
        </p>
      )}

      {/* Нижний ряд: теги стека и прямые ссылки (GitHub / PyPI) */}
      <div className="mt-5 pt-4 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] text-stone border border-neutral-800/80 px-2 py-0.5 bg-obsidian/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-parchment hover:text-brass transition-colors"
            >
              <span className="underline decoration-neutral-800 underline-offset-4 hover:decoration-brass">
                {link.label}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
};