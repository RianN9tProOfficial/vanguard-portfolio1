'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'WORKS', href: '/work' },
  { label: 'BLOG', href: '/blog' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[80] w-full border-b border-black/10 bg-white/90 backdrop-blur-sm transition-all duration-200 ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[980px] items-center justify-center px-4" aria-label="Main navigation">
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-7">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative inline-block font-[family-name:var(--font-inter)] text-[0.78rem] tracking-[0.12em] text-black transition-opacity duration-200 after:absolute after:bottom-[-0.18rem] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-200 hover:opacity-70 hover:after:scale-x-100 ${
                    active ? 'after:scale-x-100' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
