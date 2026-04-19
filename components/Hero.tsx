'use client';

import { useCallback, useRef, type MouseEvent } from 'react';

const magneticStrength = 14;

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  const handleParallax = useCallback((event: MouseEvent<HTMLElement>) => {
    const element = heroRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    element.style.setProperty('--grid-shift-x', `${x * 24}px`);
    element.style.setProperty('--grid-shift-y', `${y * 24}px`);
  }, []);

  const resetParallax = useCallback(() => {
    const element = heroRef.current;
    if (!element) return;

    element.style.setProperty('--grid-shift-x', '0px');
    element.style.setProperty('--grid-shift-y', '0px');
  }, []);

  const handleMagneticMove = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    target.style.transform = `translate(${x * magneticStrength}px, ${y * magneticStrength}px)`;
  }, []);

  const resetMagneticMove = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.transform = 'translate(0px, 0px)';
  }, []);

  return (
    <section
      className="hero"
      id="work"
      ref={heroRef}
      onMouseMove={handleParallax}
      onMouseLeave={resetParallax}
      aria-labelledby="hero-title"
    >
      <span className="hero-label" aria-hidden="true">
        01 / PORTFOLIO
      </span>

      <div className="hero-inner">
        <h1 className="hero-title" id="hero-title">
          BUILDING DIGITAL
          <br />
          EXPERIENCES
        </h1>

        <p className="hero-subheading">Building digital experiences through code, design, and intentional simplicity.</p>

        <p className="hero-description">
          I create premium interfaces, thoughtful interactions, and systems that feel clear, minimal, and quietly
          powerful.
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-secondary"
            href="/#work"
            onMouseMove={handleMagneticMove}
            onMouseLeave={resetMagneticMove}
          >
            View Projects
          </a>
          <a
            className="btn btn-secondary"
            href="/blog"
            onMouseMove={handleMagneticMove}
            onMouseLeave={resetMagneticMove}
          >
            Read Articles
          </a>
        </div>
      </div>

      <div className="hero-divider" aria-hidden="true" />
    </section>
  );
}
