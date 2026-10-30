"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/lib/data";

export const Sidebar: React.FC = () => {
  const [beijingTime, setBeijingTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Shanghai",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setBeijingTime(formatter.format(new Date()));
    };
    updateClock();
    const interval = setInterval(updateClock, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="lg:sticky lg:top-16 lg:h-[calc(100vh-8rem)] flex flex-col justify-between">
      <div>
        {/* Верхняя архивная мета-строка */}
        <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-stone mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-brass/80" />
          <span>Index · {PROFILE.alias}</span>
          {beijingTime && (
            <>
              <span className="text-neutral-800">/</span>
              <span className="tabular-nums">{beijingTime} CST</span>
            </>
          )}
        </div>

        {/* Имя и роль: сочетание строгого гротеска и редакционной антиквы */}
        <h1 className="text-2xl sm:text-[26px] font-medium tracking-tightest text-ivory leading-snug">
          {PROFILE.name}
        </h1>
        <p className="mt-1 font-mono text-xs text-parchment tracking-wide">
          {PROFILE.role}
        </p>

        {/* Неформальное био с акцентом курсивной антиквой */}
        <div className="mt-7 pt-6 border-t border-neutral-800/80 max-w-sm">
          <p className="text-[15px] leading-[1.65] text-parchment">
            {PROFILE.bioPrefix}{" "}
            <span className="font-serif italic text-[17px] text-ivory font-normal">
              {PROFILE.bioHighlight}
            </span>{" "}
            {PROFILE.bioBody}
          </p>
        </div>

        {/* Навигационные якоря (только для десктопа) */}
        <nav
          aria-label="Page sections"
          className="hidden lg:flex flex-col gap-2.5 mt-10 font-mono text-xs text-stone"
        >
          <a
            href="#works"
            className="group flex items-center gap-3 hover:text-ivory transition-colors w-fit"
          >
            <span className="text-[10px] text-brass/80">I.</span>
            <span className="group-hover:translate-x-0.5 transition-transform">
              Selected Artifacts
            </span>
          </a>
          <a
            href="#notes"
            className="group flex items-center gap-3 hover:text-ivory transition-colors w-fit"
          >
            <span className="text-[10px] text-brass/80">II.</span>
            <span className="group-hover:translate-x-0.5 transition-transform">
              Research Focus & Ethos
            </span>
          </a>
        </nav>
      </div>

      {/* Ссылки внизу сайдбара в виде индексной таблицы */}
      <div className="mt-10 lg:mt-0 pt-6 border-t border-neutral-800/80">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone mb-3">
          Correspondence
        </div>
        <ul className="space-y-2">
          {PROFILE.socials.map((item) => (
            <li key={item.label}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-0.5 text-xs text-parchment hover:text-ivory transition-colors"
              >
                <span className="font-sans">{item.label}</span>
                <span className="flex items-center gap-1 font-mono text-[11px] text-stone group-hover:text-brass transition-colors">
                  {item.handle}
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};