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
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = itemRefs.current.filter((item): item is HTMLElement => Boolean(item));
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const nextIndex = items.findIndex((node) => node === visible[0].target);
        if (nextIndex >= 0) setActiveIndex(nextIndex);
      },
      { threshold: [0.35, 0.5, 0.7], rootMargin: '-10% 0px -35% 0px' },
    );

    items.forEach((item) => observer.observe(item));

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const distance = rect.height + viewport;
      const covered = viewport - rect.top;
      const ratio = covered / distance;
      setProgress(Math.max(0, Math.min(1, ratio)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const activeYear = useMemo(() => journeyItems[activeIndex]?.year ?? journeyItems[0].year, [activeIndex]);

  return (
    <section className="journey" ref={sectionRef} aria-labelledby="journey-title">
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
            <p className="journey-active-year">{activeYear}</p>
            <p className="journey-panel-note">Years of craft, iteration, and focused growth.</p>
          </aside>

          <div className="journey-track" aria-hidden="true">
            <span className="journey-line" />
            <span className="journey-line-progress" style={{ transform: `scaleY(${progress})` }} />
          </div>

          <div className="journey-events">
            {journeyItems.map((item, index) => {
              const state = index === activeIndex ? 'is-active' : index < activeIndex ? 'is-past' : 'is-upcoming';

              return (
                <article
                  key={item.year}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`journey-event ${state}`}
                >
                  <span className="journey-marker" aria-hidden="true" />
                  <h3>{item.year}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
