'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function WhatIBuildSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.wib-heading-line',
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.16,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        },
      );

      gsap.fromTo(
        '.wib-body-line',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.09,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.wib-body',
            start: 'top 82%',
            once: true,
          },
        },
      );

      gsap.fromTo(
        '.wib-quote-block, .wib-signature',
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.13,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.wib-quote-block',
            start: 'top 90%',
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="what-build" ref={sectionRef} aria-labelledby="what-build-title">
      <div className="what-build-shell">
        <span className="wib-side-label" aria-hidden="true">
          03 / WHAT I BUILD
        </span>

        <div className="wib-headline-wrap">
          <h2 className="wib-title" id="what-build-title">
            <span className="wib-heading-mask">
              <span className="wib-heading-line">WHAT I</span>
            </span>
            <span className="wib-heading-mask">
              <span className="wib-heading-line">BUILD</span>
            </span>
          </h2>
        </div>

        <div className="wib-body" aria-label="What I build philosophy">
          <p className="wib-body-line">I believe the best digital experiences feel effortless.</p>
          <p className="wib-body-line">Good design is not about adding more—</p>
          <p className="wib-body-line">it is about removing what does not belong.</p>
          <p className="wib-body-line">I focus on building interfaces that feel clear,</p>
          <p className="wib-body-line">intentional, and quietly memorable.</p>
          <p className="wib-body-line">
            <span className="wib-key-phrase">Minimal design.</span>
          </p>
          <p className="wib-body-line">
            <span className="wib-key-phrase">Thoughtful interactions.</span>
          </p>
          <p className="wib-body-line">Performance that feels invisible.</p>
          <p className="wib-body-line">Because the strongest products are often the ones</p>
          <p className="wib-body-line">that feel the simplest to use.</p>
          <p className="wib-body-line">I do not build for trends.</p>
          <p className="wib-body-line">
            <span className="wib-key-phrase">I build for clarity.</span>
          </p>
        </div>

        <div className="wib-quote-block" aria-label="Section quote">
          <span className="wib-quote-divider" aria-hidden="true" />
          <p>
            “Simplicity is not less.
            <br />
            It is clarity.”
          </p>
        </div>

        <p className="wib-signature">— Built with curiosity since 2020</p>
      </div>
    </section>
  );
}
