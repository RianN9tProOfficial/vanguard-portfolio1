'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Footer from '@/components/Footer';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'X / Twitter', href: 'https://x.com' },
];

export default function ContactPage() {
  const pageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const revealNodes = Array.from(root.querySelectorAll<HTMLElement>('.contact-page-reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -12% 0px' },
    );

    revealNodes.forEach((node) => observer.observe(node));

    const magneticButtons = Array.from(root.querySelectorAll<HTMLElement>('.contact-magnetic'));
    const moveHandlers = new Map<HTMLElement, (event: MouseEvent) => void>();
    const leaveHandlers = new Map<HTMLElement, () => void>();

    magneticButtons.forEach((button) => {
      const move = (event: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
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
      <main className="contact-page" ref={pageRef}>
        <div className="contact-page-shell">
          <section className="contact-page-hero contact-page-reveal">
            <span className="contact-page-no">01 / CONTACT</span>
            <h1>
              <span>CON</span>
              <span>TACT</span>
            </h1>
            <p className="contact-page-subtitle">Let&apos;s build something meaningful.</p>
            <p className="contact-page-support">
              Whether it is design, development, ideas, or collaboration—I am always open to conversations that create
              something valuable.
            </p>
            <div className="contact-page-scroll" aria-hidden="true">
              <span />
            </div>
            <span className="contact-page-divider" aria-hidden="true" />
          </section>

          <section className="contact-page-details contact-page-reveal">
            <span className="contact-page-no">02 / DETAILS</span>
            <div className="contact-page-detail-grid">
              <div>
                <h2>Email</h2>
                <a href="mailto:rian.contact.dev@gmail.com">rian.contact.dev@gmail.com</a>
              </div>
              <div>
                <h2>Location</h2>
                <p>Available Worldwide</p>
              </div>
              <div>
                <h2>Response Time</h2>
                <p>Usually within 24–48 hours</p>
              </div>
              <div>
                <h2>Elsewhere</h2>
                <p className="contact-page-socials">
                  {socialLinks.map((item, index) => (
                    <span key={item.label}>
                      {index > 0 ? ' / ' : ''}
                      <a href={item.href} target="_blank" rel="noreferrer noopener">
                        {item.label}
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </section>

          <section className="contact-page-form-wrap contact-page-reveal">
            <span className="contact-page-no">03 / FORM</span>
            <h2>START A CONVERSATION</h2>
            <p>Good projects begin with good conversations.</p>

            <form className="contact-page-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="Your email" />
              </label>
              <label>
                Project Type
                <input type="text" name="projectType" placeholder="Website, product, redesign..." />
              </label>
              <label>
                Budget (optional)
                <input type="text" name="budget" placeholder="Approximate range" />
              </label>
              <label>
                Message
                <textarea name="message" rows={6} placeholder="Tell me about your project or idea." />
              </label>
              <button type="submit" className="contact-page-btn contact-magnetic">
                <span>Send Message</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </form>
          </section>

          <section className="contact-page-quote contact-page-reveal">
            <svg viewBox="0 0 600 90" aria-hidden="true">
              <path d="M10 45h250M340 45h250M300 15v60" />
            </svg>
            <p>“Good work begins with clarity.”</p>
          </section>

          <section className="contact-page-closing contact-page-reveal">
            <span className="contact-page-no">04 / CLOSING</span>
            <h2>LET&apos;S CREATE SOMETHING THAT LASTS</h2>
            <p>The best work begins with a simple conversation.</p>
            <Link href="/contact" className="contact-page-btn contact-magnetic">
              <span>Start the Conversation</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </Link>
          </section>

          <p className="contact-page-micro">
            <span className="from">Thanks for visiting.</span>
            <span className="to">See you in the next project.</span>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
