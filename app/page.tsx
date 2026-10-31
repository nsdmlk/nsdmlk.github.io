"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE, ARTIFACTS } from "@/lib/data";

export default function EditorialPage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Shanghai",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-[1180px] px-6 py-12 sm:px-12 sm:py-20 lg:py-24 selection:bg-[#C8AE7D]/20 selection:text-[#C8AE7D]">
      
      {/* HEADER / EXPOSITION */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-neutral-800">
        
        {/* Координаты и имя */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-neutral-500">
            <span className="w-1.5 h-1.5 bg-[#C8AE7D] rounded-full inline-block" />
            <span>BEIJING · {time || "12:00:00"} CST (UTC+8)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif tracking-tight text-neutral-100 font-normal">
            {PROFILE.name}
          </h1>

          <p className="font-mono text-xs text-neutral-400 tracking-wide">
            {PROFILE.status}
          </p>

          <div className="pt-2 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
            {PROFILE.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-neutral-400 hover:text-[#C8AE7D] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-[#C8AE7D] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Редакционное резюме и эстетическое заявление */}
        <div className="lg:col-span-7 flex flex-col justify-between pt-1 lg:pt-0 lg:pl-10 lg:border-l lg:border-neutral-800/80">
          <div className="space-y-4">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#C8AE7D] uppercase">
              // Thesis &amp; Scope
            </div>
            <p className="text-lg sm:text-xl font-serif italic text-neutral-200 leading-relaxed">
              &ldquo;{PROFILE.bioMain}&rdquo;
            </p>
            <p className="text-sm sm:text-[14.5px] leading-relaxed text-neutral-400 max-w-xl">
              {PROFILE.bioSub}
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-900 grid grid-cols-3 gap-4 font-mono text-[11px] text-neutral-500">
            <div>
              <span className="block text-neutral-400">DOMAIN</span>
              Reinforcement Learning &amp; Embodied AI &amp; Small Data
            </div>
            <div>
              <span className="block text-neutral-400">METHOD</span>
              First-Principles C / PyTorch
            </div>
            <div>
              <span className="block text-neutral-400">INDEX REF</span>
              ORCID Verified
            </div>
          </div>
        </div>
      </header>

      {/* ARTIFACTS / CATALOG SECTION */}
      <section className="mt-16">
        <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-neutral-800 font-mono text-xs text-neutral-500">
          <span className="tracking-[0.16em] uppercase text-neutral-400">
            [ CATALOGUE OF RECORD · 2025—2026 ]
          </span>
          <span className="hidden sm:inline">N = 04 ARTIFACTS</span>
        </div>

        <div className="divide-y divide-neutral-900 border-b border-neutral-900">
          {ARTIFACTS.map((item) => (
            <article
              key={item.index}
              className="group py-8 sm:py-10 transition-colors duration-200 hover:bg-neutral-950/60 -mx-4 px-4 sm:-mx-6 sm:px-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                
                {/* Номер и год */}
                <div className="lg:col-span-2 flex items-baseline justify-between lg:block font-mono text-xs text-neutral-500">
                  <span className="text-[#C8AE7D] font-medium mr-2">{item.index}</span>
                  <span className="text-neutral-600">/</span>
                  <span className="ml-2">{item.year}</span>
                  <div className="mt-1 text-[11px] text-neutral-400 hidden lg:block">
                    {item.field}
                  </div>
                </div>

                {/* Название и детали */}
                <div className="lg:col-span-6 space-y-2.5">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h2 className="text-xl sm:text-2xl font-serif tracking-tight text-neutral-100 group-hover:text-white">
                      {item.title}
                    </h2>
                    <span className="font-mono text-xs text-neutral-400">
                      — {item.summary}
                    </span>
                  </div>

                  <p className="text-[13.5px] leading-relaxed text-neutral-400 max-w-xl">
                    {item.details}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10.5px] px-2 py-0.5 border border-neutral-800 text-neutral-400 bg-neutral-900/40"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Метрика и Ссылки */}
                <div className="lg:col-span-4 flex flex-col justify-between sm:items-end gap-4 h-full pt-2 lg:pt-0">
                  {item.metric && (
                    <div className="inline-flex items-baseline gap-2 border border-neutral-800 bg-neutral-900/60 px-3 py-1 font-mono text-xs">
                      <span className="text-neutral-500">{item.metric.label}:</span>
                      <span className="text-[#C8AE7D] tabular-nums font-medium">
                        {item.metric.value}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 font-mono text-xs">
                    {item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-neutral-400 hover:text-[#C8AE7D] underline decoration-neutral-800 underline-offset-4 hover:decoration-[#C8AE7D] transition-colors"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-baseline justify-between gap-4 font-mono text-xs text-neutral-500">
        <div className="tracking-widest uppercase">
          BEIJING INSTITUTE OF TECHNOLOGY · 2026
        </div>
      </footer>

    </div>
  );
}