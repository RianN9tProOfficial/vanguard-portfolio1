'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type WorkProject = {
  title: string;
  type: string;
  description: string;
  highlights: string[];
};

const projects: WorkProject[] = [
  {
    title: 'CypherV',
    type: 'Advanced Discord Moderation Bot',
    description:
      'CypherV is a powerful Discord moderation system built for high-control server environments, focused on automation, security, and structured governance.',
    highlights: ['anti-nuke + raid detection', 'permission hierarchy control', 'audit logging + automated enforcement'],
  },
  {
    title: 'Vanguard',
    type: 'All-in-One Discord Utility & Entertainment Bot',
    description:
      'Vanguard is a multi-purpose Discord bot designed for full server management, community engagement, and entertainment operations.',
    highlights: ['moderation + invite tracking', 'music + mini-games + vanity roles', 'analytics dashboard + anti-spam'],
  },
  {
    title: 'AW Clone',
    type: 'Portfolio / UI Clone Project',
    description:
      'A structured replication of an Astro.js-based portfolio system focused on layout experimentation and minimal UI systems.',
    highlights: ['layout replication workflow', 'spacing + hierarchy calibration', 'editorial interaction tuning'],
  },
  {
    title: 'Brutalist Portfolio',
    type: 'Experimental UI Design System',
    description:
      'A brutalist-inspired portfolio layout exploring typography-heavy, grid-based UI with strict visual hierarchy using TSX + Tailwind.',
    highlights: ['strict grid rhythm', 'typography-first composition', 'modular TSX + Tailwind system'],
  },
];

export default function WorkPage() {
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);

  useEffect(() => {
    const nodes = cardRefs.current.filter((node): node is HTMLAnchorElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = nodes.findIndex((node) => node === entry.target);
          if (index < 0) return;

          if (entry.isIntersecting) {
            setVisibleIndices((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });

        const focused = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!focused) return;
        const nextIndex = nodes.findIndex((node) => node === focused.target);
        if (nextIndex >= 0) setActiveIndex(nextIndex);
      },
      { threshold: [0.32, 0.5, 0.7], rootMargin: '-15% 0px -20% 0px' },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto w-full max-w-[1120px] px-5 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32">
        <header className="border-b border-black/15 pb-10 sm:pb-12">
          <h1 className="font-[family-name:var(--font-stix)] text-[clamp(2.5rem,8vw,5.2rem)] tracking-[-0.03em]">WORK</h1>
          <p className="mt-3 font-[family-name:var(--font-inter)] text-sm tracking-[0.12em] text-black/55 uppercase">
            selected projects and systems
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            const isVisible = visibleIndices.includes(index);

            return (
              <Link
                key={project.title}
                href="https://github.com/RianN9tProo"
                target="_blank"
                rel="noreferrer noopener"
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className={`group border p-6 transition duration-300 ${
                  isActive ? 'border-black/35 opacity-100' : 'border-black/12 opacity-65'
                } hover:-translate-y-[2px] hover:border-black/35 hover:opacity-95`}
                style={{
                  transform: isVisible ? 'translateY(0px)' : 'translateY(28px)',
                  transitionDelay: `${index * 70}ms`,
                }}
              >
                <p className="font-[family-name:var(--font-inter)] text-[0.7rem] uppercase tracking-[0.13em] text-black/48">{project.type}</p>
                <h2 className="mt-2 font-[family-name:var(--font-stix)] text-[2rem] leading-tight tracking-[-0.02em]">{project.title}</h2>
                <p className="mt-3 font-[family-name:var(--font-inter)] text-[0.98rem] leading-7 text-black/62 transition-colors duration-200 group-hover:text-black/78">
                  {project.description}
                </p>
                <p className="mt-4 font-[family-name:var(--font-inter)] text-[0.86rem] leading-7 text-black/52">
                  {project.highlights.join(' • ')}
                </p>
                <p className="mt-8 font-[family-name:var(--font-inter)] text-xs tracking-[0.12em] text-black/45 uppercase transition-colors duration-200 group-hover:text-black/75">
                  OPEN → GITHUB
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
