'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Footer from '@/components/Footer';

const focusItems = [
  'Frontend Development',
  'UI/UX Thinking',
  'Visual Design',
  'Performance',
  'Motion & Interaction',
  'Minimal Interfaces',
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const revealNodes = Array.from(root.querySelectorAll<HTMLElement>('.about-reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    );

    revealNodes.forEach((node) => observer.observe(node));

    const magneticButtons = Array.from(root.querySelectorAll<HTMLElement>('.magnetic-btn'));
    const moveHandlers = new Map<HTMLElement, (event: MouseEvent) => void>();
    const leaveHandlers = new Map<HTMLElement, () => void>();

    magneticButtons.forEach((button) => {
      const move = (event: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
      };

      const leave = () => {
        button.style.transform = 'translate(0, 0)';
      };

      button.addEventListener('mousemove', move);
      button.addEventListener('mouseleave', leave);
      moveHandlers.set(button, move);
      leaveHandlers.set(button, leave);
    });

    return () => {
      observer.disconnect();
      magneticButtons.forEach((button) => {
        const move = moveHandlers.get(button);
        const leave = leaveHandlers.get(button);
        if (move) button.removeEventListener('mousemove', move);
        if (leave) button.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <>
      <main className="about-editorial-page" ref={pageRef}>
        <div className="about-editorial-shell">
          <section className="about-hero about-reveal">
            <span className="about-section-no">01 / ABOUT</span>
            <h1>ABOUT ME</h1>
            <p>Building digital experiences through code, design, and constant curiosity.</p>
            <div className="about-scroll-indicator" aria-hidden="true">
              <span />
            </div>
            <span className="about-divider" aria-hidden="true" />
          </section>

          <section className="about-journey about-reveal">
            <span className="about-section-no">02 / JOURNEY</span>
            <h2>My Journey</h2>
            <div className="about-prose">
              <p>
                I started coding in early 2020 during the lockdown, initially as a way to stay productive and explore
                something new while the world had slowed down. What began as simple curiosity quickly turned into
                something much deeper—a genuine passion for building and creating through code.
              </p>
              <p>
                At first, I spent hours experimenting with small projects, learning how websites worked, and
                understanding the logic behind interfaces that people use every day. The more I built, the more I
                realized that coding was not just about functionality—it was also about experience, clarity, and
                design.
              </p>
              <p>
                Over the years, I have worked on a wide range of projects that helped shape both my technical skills
                and my creative thinking. I developed a strong focus on front-end development, where design meets
                functionality. I enjoy creating clean, minimal, and user-focused digital experiences that feel
                intentional and effortless.
              </p>
              <p>
                I pay close attention to layout, typography, spacing, and interaction because I believe the smallest
                details often create the strongest impressions.
              </p>
            </div>
          </section>

          <section className="about-philosophy about-reveal">
            <span className="about-section-no">03 / PHILOSOPHY</span>
            <h2>WHAT I BELIEVE</h2>
            <ul>
              <li>Clean design.</li>
              <li>Thoughtful interactions.</li>
              <li>Purpose over noise.</li>
              <li>Simplicity that feels powerful.</li>
            </ul>
          </section>

          <div className="about-marquee-strip about-reveal" aria-hidden="true">
            <div className="about-marquee-track">
              <span>DESIGN — CODE — INTERFACES — MINIMALISM —</span>
              <span>DESIGN — CODE — INTERFACES — MINIMALISM —</span>
            </div>
          </div>

          <section className="about-focus about-reveal">
            <span className="about-section-no">04 / FOCUS</span>
            <h2>FOCUS</h2>
            <div className="about-focus-grid">
              {focusItems.map((item) => (
                <article key={item} className="about-focus-card">
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about-quote about-reveal">
            <span className="about-divider" aria-hidden="true" />
            <p>“Simplicity is not less. It is clarity.”</p>
          </section>

          <section className="about-closing about-reveal">
            <span className="about-section-no">05 / BUILDING</span>
            <h2>STILL BUILDING</h2>
            <p>
              Every project teaches something new.
              <br />I&apos;m still learning, still refining,
              <br />
              and still building better experiences.
            </p>
            <Link href="/projects" className="about-cta magnetic-btn">
              <span>View Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </Link>
          </section>

          <p className="about-footer-micro">
            <span className="from">Thanks for visiting</span>
            <span className="to">See you in the next project</span>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
