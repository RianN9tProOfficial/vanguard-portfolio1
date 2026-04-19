'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Discord', href: 'https://discord.com' },
];

export default function ContactFooterSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.18,
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        },
      );

      gsap.fromTo(
        '.contact-footer-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-footer-wrap',
            start: 'top 88%',
            once: true,
          },
        },
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="contact-section" ref={sectionRef} aria-labelledby="contact-title">
      <div className="contact-shell">
        <header className="contact-header">
          <h2 className="contact-title contact-reveal" id="contact-title">
            Let&apos;s Build Something Meaningful
          </h2>
          <p className="contact-subtitle contact-reveal">
            Open to collaborations, projects, and interesting ideas.
          </p>
        </header>

        <div className="contact-details">
          <a className="contact-email contact-reveal" href="mailto:rian.contact.dev@gmail.com">
            rian.contact.dev@gmail.com
          </a>

          <nav className="contact-links contact-reveal" aria-label="Contact social links">
            {socialLinks.map((link, index) => (
              <span key={link.label} className="contact-link-wrap">
                {index > 0 && <span className="contact-separator" aria-hidden="true">|</span>}
                <a href={link.href} target="_blank" rel="noreferrer noopener">
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
        </div>

        <footer className="contact-footer-wrap contact-footer-reveal" aria-label="Site footer">
          <span className="contact-divider" aria-hidden="true" />
          <p>Built with curiosity and consistency.</p>
          <p>© 2026 Rian. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
