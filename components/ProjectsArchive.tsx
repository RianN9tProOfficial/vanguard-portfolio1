'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    date: "April 2026",
    name: "Cypher V",
    desc: "Minimal experimental portfolio system focused on structured UI and performance design.",
    tech: "Node.js",
  },
  {
    date: "August 2025",
    name: "Brutalist Portfolio",
    desc: "Brutalist-inspired portfolio system focusing on typography hierarchy and layout experimentation.",
    tech: "TSX + Tailwind",
  },
  {
    date: "November 2024",
    name: "Adrian Wodniack Website Clone",
    desc: "Pixel-perfect UI clone built to study layout systems and design flow.",
    tech: "Astro.js",
  },
  {
    date: "March 2025",
    name: "Vanguard Bot",
    desc: "Multi-feature Discord bot with modular architecture and scalable event-driven system.",
    tech: "Python",
  },
  {
    date: "June 2023",
    name: "Vector Bot (Falcon Clone)",
    desc: "Discord bot inspired by Falcon bot with moderation and utility features.",
    tech: "Node.js",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-item", {
        opacity: 0,
        y: 30,
        scale: 0.98,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-3xl mx-auto px-6 py-24" ref={containerRef}>
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            Projects
          </h1>
          <p className="text-sm text-black/60 mt-3">
            A collection of builds, bots, and experiments.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="project-item border border-black/10 rounded-xl p-6 hover:border-black/30 transition"
            >
              <div className="flex justify-between items-start">
                
                {/* Left */}
                <div className="space-y-2">
                  <span className="text-xs text-black/50">
                    {p.date}
                  </span>

                  <h2 className="text-xl font-medium tracking-tight">
                    {p.name}
                  </h2>

                  <p className="text-sm text-black/70 leading-relaxed max-w-xl">
                    {p.desc}
                  </p>

                  <span className="inline-block text-xs border border-black/20 px-3 py-1 rounded-full mt-2">
                    {p.tech}
                  </span>
                </div>

                {/* GitHub Icon */}
                <a
                  href="#"
                  target="_blank"
                  className="opacity-60 hover:opacity-100 transition"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="black"
                  >
                    <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.2 9.3 7.6 10.8.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 1.9 2.7 2.6.1-.7.4-1.2.8-1.5-2.5-.3-5.1-1.2-5.1-5.3 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 1.1.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.1-1.4 3-1.1 3-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4.1-2.6 5-5.1 5.3.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.4-1.5 7.6-5.8 7.6-10.8C23.2 5.4 18.3.5 12 .5z"/>
                  </svg>
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 text-sm text-black/50">
          More projects coming soon...
        </div>

      </div>
    </div>
  );
}