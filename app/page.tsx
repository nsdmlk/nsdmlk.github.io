import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:px-10 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Левая колонка (Sticky Sidebar) */}
        <div className="lg:col-span-4">
          <Sidebar />
        </div>

        {/* Правая колонка (Скроллящийся контент) */}
        <main className="lg:col-span-8 space-y-16">
          {/* Секция I: Проекты */}
          <Section
            id="works"
            romanIndex="I."
            title="Selected Artifacts & Code"
            subtitle="2025 — 2026"
          >
            <div className="space-y-4">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          </Section>

          {/* Секция II: Неформальные исследовательские заметки (создает ощущение глубины и "old money" академизма) */}
          <Section
            id="notes"
            romanIndex="II."
            title="Research Focus & Field Notes"
            subtitle="Monograph"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border border-neutral-800 p-5 sm:p-6 bg-neutral-950/30">
              <div>
                <div className="font-mono text-[11px] text-brass uppercase tracking-wider mb-1.5">
                  01 / Small Regimes
                </div>
                <p className="text-[13.5px] leading-relaxed text-parchment">
                  Most real-world scientific & clinical tables have{" "}
                  <span className="font-mono text-xs text-ivory">N &lt; 10³</span>.
                  Building models that respect inductive bias over brute-force scale.
                </p>
              </div>

              <div className="sm:border-l sm:border-neutral-800/80 sm:pl-5">
                <div className="font-mono text-[11px] text-brass uppercase tracking-wider mb-1.5">
                  02 / Uncertainty
                </div>
                <p className="text-[13.5px] leading-relaxed text-parchment">
                  Point predictions are rarely enough. Investigating conformal
                  calibration for rigorous, distribution-free coverage guarantees.
                </p>
              </div>

              <div className="sm:border-l sm:border-neutral-800/80 sm:pl-5">
                <div className="font-mono text-[11px] text-brass uppercase tracking-wider mb-1.5">
                  03 / Sequential Decision
                </div>
                <p className="text-[13.5px] leading-relaxed text-parchment">
                  Value-based reinforcement learning and physics-grounded
                  simulation from mathematical first principles.
                </p>
              </div>
            </div>
          </Section>

          {/* Footer */}
          <footer className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] tracking-[0.2em] text-stone uppercase">
            <span>BEIJING · CHINA · 2026</span>
            <span className="font-serif italic normal-case tracking-normal text-xs text-stone">
              Typeset in Newsreader, Inter & JetBrains Mono.
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}