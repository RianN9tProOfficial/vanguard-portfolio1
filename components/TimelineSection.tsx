'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type JourneyItem = {
  year: string;
  title: string;
  description: string;
};

const journeyItems: JourneyItem[] = [
  { year: '2020', title: 'Beginning', description: 'Started coding during lockdown and discovered a passion for development.' },
  { year: '2021', title: 'Core Craft', description: 'Mastered HTML, CSS, and core JavaScript fundamentals.' },
  { year: '2022', title: 'Systems Thinking', description: 'Learned Python and strengthened problem-solving skills.' },
  { year: '2023', title: 'Backend Shift', description: 'Started backend development and API architecture understanding.' },
  { year: '2024', title: 'Production Work', description: 'Built real-world projects with strong focus on scalability and performance.' },
  { year: '2025', title: 'Frontend Mastery', description: 'Mastered Next.js, Astro.js, and Tailwind CSS for modern frontend systems.' },
  { year: '2026', title: 'Automation Era', description: 'Built advanced Discord bots and real-time automation systems.' },
];

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const scrollable = Math.max(1, section.offsetHeight - viewport);
      const traveled = Math.min(Math.max(-rect.top, 0), scrollable);
      const ratio = traveled / scrollable;

      setProgress(ratio);
      const snapped = Math.min(journeyItems.length - 1, Math.round(ratio * (journeyItems.length - 1)));
      setActiveIndex(snapped);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const active = useMemo(() => journeyItems[activeIndex] ?? journeyItems[0], [activeIndex]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="journey-title"
      className="relative bg-white text-black"
      style={{ height: `${Math.max(420, journeyItems.length * 95)}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-8 px-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
          <div className="text-left md:text-center">
            <p className="font-[family-name:var(--font-inter)] text-[0.72rem] tracking-[0.18em] text-black/55">02 / JOURNEY</p>
            <h2 id="journey-title" className="mt-2 font-[family-name:var(--font-stix)] text-[clamp(2.2rem,6vw,4.6rem)] leading-[0.95] tracking-[-0.03em]">
              JOURNEY
            </h2>
            <div className="mx-0 mt-4 h-px w-full max-w-[330px] bg-black/20 md:mx-auto" />
            <p key={active.year} className="mt-7 font-[family-name:var(--font-stix)] text-[clamp(4rem,12vw,9.2rem)] leading-[0.88] tracking-[-0.04em] transition-all duration-300">
              {active.year}
            </p>
            <p className="mt-2 max-w-[260px] font-[family-name:var(--font-inter)] text-sm leading-7 text-black/65 md:mx-auto">
              Years of craft, iteration, and focused growth.
            </p>
          </div>

          <div className="relative hidden h-[62vh] w-8 md:block" aria-hidden="true">
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/20" />
            <span
              className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-black transition-[height] duration-300"
              style={{ height: `${Math.max(2, progress * 100)}%` }}
            />
            {journeyItems.map((item, index) => (
              <span
                key={item.year}
                className={`absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-black transition-all duration-300 ${
                  index <= activeIndex ? 'bg-black' : 'bg-white'
                }`}
                style={{ top: `${(index / (journeyItems.length - 1)) * 100}%`, transform: 'translate(-50%, -50%)' }}
              />
            ))}
          </div>

          <article className="relative min-h-[180px] border-l border-black/15 pl-5 md:border-l-0 md:pl-0">
            <p className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.12em] text-black/55">{active.title}</p>
            <h3 className="mt-2 font-[family-name:var(--font-stix)] text-[clamp(1.7rem,3vw,2.5rem)] tracking-[-0.02em]">{active.year}</h3>
            <p className="mt-3 max-w-[36ch] font-[family-name:var(--font-inter)] text-[1.03rem] leading-8 text-black/75">{active.description}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
