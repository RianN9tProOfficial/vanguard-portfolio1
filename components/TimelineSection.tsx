'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = document.querySelector<HTMLElement>('.journey');
    const pinTarget = document.querySelector<HTMLElement>('.journey-story-pin');
    if (!section || !pinTarget) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top+=84',
        end: `+=${journeyItems.length * 360}`,
        pin: pinTarget,
        scrub: 0.7,
        anticipatePin: 1,
        onUpdate: (self) => {
          setProgress(self.progress);
          const index = Math.min(journeyItems.length - 1, Math.floor(self.progress * journeyItems.length));
          setActiveIndex(index);
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const activeYear = journeyItems[activeIndex]?.year ?? journeyItems[0].year;

  return (
    <section className="journey" aria-labelledby="journey-title">
      <div className="journey-shell">
        <span className="journey-label" aria-hidden="true">
          02 / JOURNEY
        </span>

        <h2 className="journey-title" id="journey-title">
          JOURNEY
        </h2>
        <div className="journey-divider" aria-hidden="true" />

        <div className="journey-story-pin">
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
            </div>

            <div className="journey-events">
              {journeyItems.map((item, index) => {
                const state = index === activeIndex ? 'is-active' : index < activeIndex ? 'is-past' : 'is-upcoming';

                return (
                  <article key={item.year} className={`journey-event ${state}`}>
                    <span className="journey-marker" aria-hidden="true" />
                    <h3>{item.year}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
