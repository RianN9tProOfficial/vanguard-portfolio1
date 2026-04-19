'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'WORK', href: '/work' },
  { label: 'BLOG', href: '/blog' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar">
        <nav aria-label="Main navigation" className="navbar-nav">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link href={item.href} className={`nav-link ${isActive ? 'is-active' : ''}`}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
