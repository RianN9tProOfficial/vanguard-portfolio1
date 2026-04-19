'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type MouseEvent } from 'react';

const buildPrinciples = ['Minimal design.', 'Thoughtful interactions.', 'Performance that feels invisible.'];

const focusItems = [
  'Frontend Development',
  'UI/UX Thinking',
  'Visual Design',
  'Performance',
  'Motion & Interaction',
  'Minimal Interfaces',
];

const sectionMarkers = [
  '01 / ABOUT',
  '02 / JOURNEY',
  '03 / PHILOSOPHY',
  '04 / FOCUS',
  '05 / BUILDING',
];

export default function AboutSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealItems = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal="true"]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-revealed');
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -12% 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const onMagnetMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.2;
    setMagnet({ x, y });
  };

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-[#0f0f0f] pb-24 pt-28 text-white sm:pb-28 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22) 1px, transparent 1.4px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.18) 1px, transparent 1.6px)',
          backgroundSize: '3px 3px, 4px 4px',
        }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 border-b border-white/10" aria-hidden="true" />

      <aside className="pointer-events-none fixed right-6 top-1/2 hidden -translate-y-1/2 lg:block" aria-hidden="true">
        <ul className="space-y-3 text-right text-[11px] uppercase tracking-[0.16em] text-white/35">
          {sectionMarkers.map((marker) => (
            <li key={marker}>{marker}</li>
          ))}
        </ul>
      </aside>

      <div className="mx-auto w-full max-w-[980px] px-6">
        <header data-reveal="true" className="about-reveal-item">
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-white/45">Profile</p>
          <h1 className="font-[family-name:var(--font-stix)] text-[clamp(2.8rem,10vw,6.6rem)] leading-[0.95] tracking-[-0.03em]">ABOUT ME</h1>
          <p className="mt-8 max-w-[640px] text-base leading-relaxed text-white/72 sm:text-lg">
            Building digital experiences through code, design, and constant curiosity.
          </p>
          <div className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/45">
            <span className="inline-block h-[1px] w-12 bg-white/30" />
            scroll
            <span className="inline-block h-3 w-3 animate-bounce rounded-full border border-white/40" />
          </div>
          <div className="mt-8 h-px w-full bg-white/12" />
        </header>

        <section data-reveal="true" className="about-reveal-item mx-auto mt-20 max-w-[680px] text-white/78">
          <p className="mb-8 text-[11px] uppercase tracking-[0.2em] text-white/45">My Journey</p>
          <div className="space-y-7 text-[1.03rem] leading-8 sm:text-[1.08rem]">
            <p>
              I started coding in early 2020 during the lockdown, initially as a way to stay productive and explore something new while the
              world had slowed down. What began as simple curiosity quickly turned into something much deeper—a genuine passion for building
              and creating through code.
            </p>
            <p>
              At first, I spent hours experimenting with small projects, learning how websites worked, and understanding the logic behind
              interfaces that people use every day. The more I built, the more I realized that coding was not just about functionality—it was
              also about experience, clarity, and design.
            </p>
            <p>
              Over the years, I have worked on a wide range of projects that helped shape both my technical skills and my creative thinking.
              I developed a strong focus on front-end development, where design meets functionality. I enjoy creating clean, minimal, and
              user-focused digital experiences that feel intentional and effortless.
            </p>
            <p>
              I pay close attention to layout, typography, spacing, and interaction because I believe the smallest details often create the
              strongest impressions.
            </p>
          </div>
        </section>

        <section data-reveal="true" className="about-reveal-item mt-24">
          <p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-white/45">Philosophy</p>
          <h2 className="font-[family-name:var(--font-stix)] text-[clamp(2rem,5vw,3.2rem)] tracking-[-0.02em]">WHAT I BUILD</h2>

          <div className="mt-10 max-w-[700px] space-y-6 text-[1.03rem] leading-8 text-white/78 sm:text-[1.08rem]">
            <p>I believe the best digital experiences feel effortless.</p>
            <p>
              Good design is not about adding more—it is about removing what does not belong.
            </p>
            <p>I focus on building interfaces that feel clear, intentional, and quietly memorable.</p>
          </div>

          <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {buildPrinciples.map((item) => (
              <li key={item} className="group flex items-center justify-between py-5">
                <span className="text-xl text-white/75 transition duration-300 group-hover:translate-x-1 group-hover:text-white sm:text-2xl">
                  {item}
                </span>
                <span className="h-px w-0 bg-white/50 transition-all duration-300 group-hover:w-14" />
              </li>
            ))}
          </ul>

          <div className="mt-10 max-w-[700px] space-y-6 text-[1.03rem] leading-8 text-white/78 sm:text-[1.08rem]">
            <p>Because the strongest products are often the ones that feel the simplest to use.</p>
            <p>I do not build for trends.</p>
            <p className="font-[family-name:var(--font-stix)] text-2xl leading-tight tracking-[-0.01em] text-white sm:text-[2rem]">
              I build for clarity.
            </p>
          </div>
        </section>

        <div className="about-marquee-strip mt-20 border-y border-white/10 py-4 text-xs uppercase tracking-[0.24em] text-white/50">
          <div className="about-marquee-track">
            <span>DESIGN — CODE — INTERFACES — MINIMALISM — </span>
            <span>DESIGN — CODE — INTERFACES — MINIMALISM — </span>
          </div>
        </div>

        <section data-reveal="true" className="about-reveal-item mt-20">
          <p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-white/45">Focus</p>
          <h2 className="font-[family-name:var(--font-stix)] text-[clamp(2rem,5vw,3.2rem)] tracking-[-0.02em]">FOCUS</h2>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {focusItems.map((item) => (
              <article
                key={item}
                className="group border border-white/12 px-5 py-6 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.02]"
              >
                <p className="text-base text-white/72 transition duration-300 group-hover:text-white">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <blockquote data-reveal="true" className="about-reveal-item mx-auto mt-20 max-w-[680px] border-y border-white/10 py-9 text-center">
          <p className="font-[family-name:var(--font-stix)] text-2xl tracking-[-0.01em] text-white/88 sm:text-3xl">
            “Simplicity is not less. It is clarity.”
          </p>
        </blockquote>

        <section data-reveal="true" className="about-reveal-item mt-20">
          <p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-white/45">Building</p>
          <h2 className="font-[family-name:var(--font-stix)] text-[clamp(2rem,5vw,3.4rem)] tracking-[-0.02em]">STILL BUILDING</h2>
          <p className="mt-7 max-w-[560px] text-lg leading-relaxed text-white/72">
            Every project teaches something new. I’m still learning, still refining, and still building better experiences.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 border border-white/25 px-5 py-3 text-sm uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
              style={{ transform: `translate3d(${magnet.x}px, ${magnet.y}px, 0)` }}
              onMouseMove={onMagnetMove}
              onMouseLeave={() => setMagnet({ x: 0, y: 0 })}
            >
              View Projects
              <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
            </Link>
          </div>

          <p className="mt-14 text-sm text-white/45 transition-colors duration-300 hover:text-white/80">See you in the next project</p>
        </section>
      </div>
    </section>
  );
}
