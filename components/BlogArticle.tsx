'use client';

import Lenis from '@studio-freight/lenis';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type TocItem = {
  id: string;
  label: string;
  timestamp: string;
};

const tocItems: TocItem[] = [
  { id: 'introduction', label: 'Introduction', timestamp: '00:00' },
  { id: 'how-the-scam-works', label: 'How the Scam Works', timestamp: '02:10' },
  { id: 'deposit-trap', label: 'The Deposit Trap', timestamp: '03:55' },
  { id: 'accounts-compromised', label: 'How Accounts Get Compromised', timestamp: '05:32' },
  { id: 'final-thoughts', label: 'Final Thoughts', timestamp: '08:05' },
];

export default function BlogArticle() {
  const [activeId, setActiveId] = useState<string>(tocItems[0].id);
  const sectionIds = useMemo(() => tocItems.map((item) => item.id), []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.2, 0.45, 0.7] },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (!href?.startsWith('#')) return;

      const section = document.querySelector<HTMLElement>(href);
      if (!section) return;

      event.preventDefault();
      lenis.scrollTo(section, { offset: -96, duration: 1.05 });
      setActiveId(section.id);
    };

    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-blog-toc-link="true"]'));
    anchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick));
      observer.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [sectionIds]);

  return (
    <article className="pb-14 pt-20 sm:pb-16 sm:pt-24 lg:pt-28">
      <div className="w-full">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 rounded-lg border border-black/15 px-3.5 py-2 text-sm font-medium text-black/75 transition-colors hover:bg-black/[0.03]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          go back
        </Link>

        <div className="mt-7 flex w-full gap-6 lg:mt-8 lg:gap-10">
          <div className="min-w-0 max-w-[700px] flex-1">
            <header className="mb-10 border-b border-black/10 pb-8 sm:mb-14 sm:pb-10">
              <h1 className="font-[family-name:var(--font-stix)] text-[clamp(2rem,4.8vw,3.6rem)] font-normal leading-[1.08] tracking-[-0.02em] text-black/95">
                The Massive MrBeast Casino Scam Exposed
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
                A deep dive into how fake platforms exploit trust and scale.
              </p>
              <p className="mt-4 text-sm text-black/45">November 2, 2025 • 8 min read</p>
            </header>

            <div className="space-y-10 text-black/75 sm:space-y-14">
              <section id="introduction" className="scroll-mt-28">
                <h2 className="font-[family-name:var(--font-stix)] text-[1.85rem] font-normal tracking-[-0.01em] text-black/95 sm:text-3xl">Introduction</h2>
                <p className="mt-5 max-w-[680px] text-base leading-8">
                  The internet is rife with scams that leverage popular culture and well-known personalities to lure victims. One of the
                  most alarming examples uses fake casino websites impersonating MrBeast and similar creators with promises of instant bonuses.
                  These campaigns spread fast through Discord, YouTube, Instagram, and TikTok, often through already compromised accounts.
                </p>
              </section>

              <div className="flex h-44 items-center justify-center rounded-2xl bg-black/[0.04] text-sm tracking-wide text-black/35 sm:h-52">Image Placeholder</div>

              <section id="how-the-scam-works" className="scroll-mt-28">
                <h2 className="font-[family-name:var(--font-stix)] text-[1.85rem] font-normal tracking-[-0.01em] text-black/95 sm:text-3xl">How the Scam Works</h2>
                <p className="mt-5 max-w-[680px] text-base leading-8">
                  At face value, the scam appears as a legitimate casino offer with a fake $2,500 sign-up bonus and celebrity endorsement.
                  Victims receive DMs with links and are told they can withdraw funds after a small verification payment. In reality, this
                  is the beginning of a loop where each step introduces another fabricated payment requirement.
                </p>
              </section>

              <div className="flex h-48 items-center justify-center rounded-2xl bg-black/[0.04] text-sm tracking-wide text-black/35 sm:h-64">Image Placeholder</div>

              <section id="deposit-trap" className="scroll-mt-28">
                <h2 className="font-[family-name:var(--font-stix)] text-[1.85rem] font-normal tracking-[-0.01em] text-black/95 sm:text-3xl">The Deposit Trap</h2>
                <p className="mt-5 max-w-[680px] text-base leading-8">
                  Deposits typically start small, then escalate: verification fees, VIP upgrades, withdrawal taxes, and compliance checks.
                  Withdrawal attempts trigger fake errors around AML rules or untrusted IP claims, then push users toward “live support” bots
                  designed to persuade additional deposits. Victims can lose hundreds or thousands before realizing the fraud.
                </p>
              </section>

              <div className="flex h-44 items-center justify-center rounded-2xl bg-black/[0.04] text-sm tracking-wide text-black/35">Image Placeholder</div>

              <section id="accounts-compromised" className="scroll-mt-28">
                <h2 className="font-[family-name:var(--font-stix)] text-[1.85rem] font-normal tracking-[-0.01em] text-black/95 sm:text-3xl">
                  How Accounts Get Compromised
                </h2>
                <p className="mt-5 max-w-[680px] text-base leading-8">
                  Scammers rely on malware and info stealers distributed through cheats, pirated apps, and suspicious downloads. These tools
                  can steal passwords, cookies, and active sessions. Even with 2FA enabled, stolen session tokens may allow unauthorized
                  access, which explains why compromised accounts can continue spreading scam links at scale.
                </p>
              </section>

              <div className="flex h-56 items-center justify-center rounded-2xl bg-black/[0.04] text-sm tracking-wide text-black/35">Image Placeholder</div>

              <section id="final-thoughts" className="scroll-mt-28">
                <h2 className="font-[family-name:var(--font-stix)] text-[1.85rem] font-normal tracking-[-0.01em] text-black/95 sm:text-3xl">Final Thoughts</h2>
                <p className="mt-5 max-w-[680px] text-base leading-8">
                  This scam highlights how cybercrime now operates as a scalable system: stolen accounts drive distribution, fake interfaces
                  build trust, and social pressure converts victims. The best defense is disciplined caution: verify links, avoid suspicious
                  downloads, reset compromised systems quickly, change credentials from a clean device, and report fake domains immediately.
                </p>
              </section>

              <div className="flex h-48 items-center justify-center rounded-2xl bg-black/[0.04] text-sm tracking-wide text-black/35">Image Placeholder</div>
            </div>
          </div>

          <aside className="hidden xl:block w-[180px] shrink-0">
            <div className="sticky top-24 ml-4 pl-2">
              <p className="text-xs uppercase tracking-[0.12em] text-black/45">Timestamps</p>
              <nav className="mt-4" aria-label="Blog table of contents">
                <ul className="space-y-2">
                  {tocItems.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          data-blog-toc-link="true"
                          href={`#${item.id}`}
                          className={`flex items-center justify-between gap-3 rounded-md px-2 py-1.5 text-sm transition-colors ${
                            isActive ? 'bg-black/5 text-black' : 'text-black/55 hover:text-black/75'
                          }`}
                        >
                          <span>{item.label}</span>
                          <span className="text-[11px] tabular-nums text-black/45">{item.timestamp}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
