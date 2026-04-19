'use client';

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

type TimelineItem = {
  year: string;
  description: string;
  side: 'left' | 'right';
};

const timelineItems: TimelineItem[] = [
  { year: '2020', description: 'Started coding during lockdown and discovered a passion for development.', side: 'left' },
  { year: '2021', description: 'Mastered HTML, CSS, and core JavaScript fundamentals.', side: 'right' },
  { year: '2022', description: 'Learned Python and strengthened problem-solving skills.', side: 'left' },
  { year: '2023', description: 'Started backend development and API architecture understanding.', side: 'right' },
  {
    year: '2024',
    description: 'Built real-world projects with strong focus on scalability and performance.',
    side: 'left',
  },
  { year: '2025', description: 'Mastered Next.js, Astro.js, and Tailwind CSS for modern frontend systems.', side: 'right' },
  { year: '2026', description: 'Built advanced Discord bots and real-time automation systems.', side: 'left' },
];

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const fillRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const fillLine = fillRef.current;
    if (!section || !fillLine) return;

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    const lenisUpdate = () => ScrollTrigger.update();
    lenis.on('scroll', lenisUpdate);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fillLine,
        { scaleY: 0, transformOrigin: 'top top' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: true,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item) => {
        const dot = item.querySelector('.timeline-dot');

        gsap.fromTo(
          item,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'top 45%',
              toggleActions: 'play none none reverse',
            },
          },
        );

        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.7,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
              },
            },
          );
        }
      });
    }, section);

    return () => {
      ctx.revert();
      gsap.ticker.remove(onTick);
      lenis.off('scroll', lenisUpdate);
      lenis.destroy();
    };
  }, []);

  return (
    <section className="timeline" ref={sectionRef} aria-labelledby="timeline-title">
      <div className="timeline-shell">
        <h2 className="timeline-title" id="timeline-title">
          Journey
        </h2>
        <div className="timeline-track" aria-hidden="true">
          <span className="timeline-track-fill" ref={fillRef} />
        </div>

        <div className="timeline-list">
          {timelineItems.map((item) => (
            <article
              className={`timeline-item timeline-item-${item.side}`}
              key={item.year}
              aria-label={`${item.year} milestone`}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <h3>{item.year}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
