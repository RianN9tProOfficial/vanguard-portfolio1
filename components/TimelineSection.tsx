'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type JourneyItem = {
  year: string;
  description: string;
};

const journeyItems: JourneyItem[] = [
  { year: '2020', description: 'Started coding during lockdown and discovered a passion for development.' },
  { year: '2021', description: 'Mastered HTML, CSS, and core JavaScript fundamentals.' },
  { year: '2022', description: 'Learned Python and strengthened problem-solving skills.' },
  { year: '2023', description: 'Started backend development and API architecture understanding.' },
  { year: '2024', description: 'Built real-world projects with strong focus on scalability and performance.' },
  { year: '2025', description: 'Mastered Next.js, Astro.js, and Tailwind CSS for modern frontend systems.' },
  { year: '2026', description: 'Built advanced Discord bots and real-time automation systems.' },
];

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateTimeline = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = Math.max(1, rect.height - viewport * 0.65);
      const covered = viewport * 0.48 - rect.top;
      const ratio = Math.max(0, Math.min(1, covered / total));

      const nextIndex = Math.min(journeyItems.length - 1, Math.floor(ratio * journeyItems.length));
      setActiveIndex(nextIndex);
      setProgress(ratio);
    };

    updateTimeline();
    window.addEventListener('scroll', updateTimeline, { passive: true });
    window.addEventListener('resize', updateTimeline);

    return () => {
      window.removeEventListener('scroll', updateTimeline);
      window.removeEventListener('resize', updateTimeline);
    };
  }, []);

  const activeYear = useMemo(() => journeyItems[activeIndex]?.year ?? journeyItems[0].year, [activeIndex]);
  const activeItem = journeyItems[activeIndex] ?? journeyItems[0];

  return (
    <section
      className="journey"
      ref={sectionRef}
      aria-labelledby="journey-title"
      style={{ ['--journey-steps' as string]: journeyItems.length }}
    >
      <div className="journey-shell">
        <span className="journey-label" aria-hidden="true">
          02 / JOURNEY
        </span>

        <h2 className="journey-title" id="journey-title">
          JOURNEY
        </h2>
        <div className="journey-divider" aria-hidden="true" />

        <div className="journey-story">
          <aside className="journey-year-panel" aria-live="polite">
            <p key={activeYear} className="journey-active-year journey-year-swap">
              {activeYear}
            </p>
            <p className="journey-panel-note">Years of craft, iteration, and focused growth.</p>
          </aside>

          <div className="journey-track" aria-hidden="true">
            <span className="journey-line" />
            <span className="journey-line-progress" style={{ transform: `scaleY(${progress})` }} />
            {journeyItems.map((item, index) => (
              <span key={item.year} className={`journey-marker journey-marker-rail ${index <= activeIndex ? 'is-hit' : ''}`} />
            ))}
          </div>

          <div className="journey-events journey-events-locked">
            <article className="journey-event is-active" key={activeItem.year}>
              <h3>{activeItem.year}</h3>
              <p>{activeItem.description}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
