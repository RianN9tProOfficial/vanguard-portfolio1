'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const introLines = [
  'I started coding in early 2020 during lockdown, and what began as a way to stay engaged quickly turned into a real passion.',
  'Since then, I have built a wide range of projects, sharpened my front-end skills, and developed a strong eye for clean, user-focused interfaces.',
  'I am always learning, experimenting, and pushing to build better digital experiences with every project.',
];

const philosophyLines = [
  'I believe the best digital experiences feel effortless.',
  'Good design is not about adding more—it is about removing what does not belong.',
  'I build for clarity, intention, and systems that feel quietly powerful.',
];

export default function AboutBridgeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-bridge-reveal',
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-bridge" id="about" ref={sectionRef} aria-labelledby="about-bridge-title">
      <div className="about-bridge-shell">
        <span className="about-bridge-label about-bridge-reveal" aria-hidden="true">
          01 / ABOUT
        </span>

        <svg className="about-bridge-decoration about-bridge-reveal" viewBox="0 0 240 32" aria-hidden="true">
          <path d="M1 16 H239" />
          <circle cx="120" cy="16" r="3" />
        </svg>

        <h2 className="about-bridge-title about-bridge-reveal" id="about-bridge-title">
          ABOUT
        </h2>

        <div className="about-bridge-divider about-bridge-reveal" aria-hidden="true" />

        <div className="about-bridge-copy" aria-label="About introduction">
          {introLines.map((line) => (
            <p className="about-bridge-paragraph about-bridge-reveal" key={line}>
              {line}
            </p>
          ))}
        </div>

        <div className="about-bridge-philosophy" aria-label="Design philosophy">
          {philosophyLines.map((line) => (
            <p className="about-bridge-philosophy-line about-bridge-reveal" key={line}>
              {line}
            </p>
          ))}
        </div>

        <div className="about-bridge-quote about-bridge-reveal" aria-label="Section quote">
          <span className="about-bridge-quote-line" aria-hidden="true" />
          <p>
            “Simplicity is not less.
            <br />
            It is clarity.”
          </p>
        </div>
      </div>
    </section>
  );
}
