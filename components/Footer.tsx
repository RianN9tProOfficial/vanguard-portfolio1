'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: 'WORK', href: '/work' },
  { label: 'BLOG', href: '/blog' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Footer() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('in-view');
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="aw-footer" ref={ref}>
      <div className="aw-footer-shell">
        <div className="aw-footer-col aw-footer-meta">
          <p>© {currentYear} Portfolio</p>
          <p className="aw-footer-muted">Minimal systems. Intentional outcomes.</p>
        </div>

        <nav className="aw-footer-col" aria-label="Footer navigation">
          <ul className="aw-footer-links">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="aw-footer-col aw-footer-right">
          <a href="https://github.com/RianN9tProo" target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <p className="aw-footer-muted">AVAILABLE</p>
        </div>
      </div>
    </footer>
  );
}
