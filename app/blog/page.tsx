import Link from 'next/link';
import Footer from '@/components/Footer';

const articles = [
  {
    href: '/blog/discord-nitro-generator-scam',
    title: 'The Truth About Discord Nitro Generators',
    subtitle: 'Why free Nitro promises are usually malware in disguise.',
    meta: 'August 2025 · 12 min read',
    timestamp: 'Published Aug 14, 2025 · 09:40 UTC',
  },
  {
    href: '/blog/mrbeast-casino-scam',
    title: 'The Massive MrBeast Casino Scam Exposed',
    subtitle: 'How fake platforms weaponize trust, celebrity influence, and stolen accounts at scale.',
    meta: 'November 2025 · 8 min read',
    timestamp: 'Published Nov 08, 2025 · 16:20 UTC',
  },
  {
    href: '/blog/minecraft-verification-scam',
    title: 'The Minecraft Verification Scam',
    subtitle: 'How fake Discord servers are stealing player accounts.',
    meta: 'January 2026 · 10 min read',
    timestamp: 'Published Jan 12, 2026 · 11:05 UTC',
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <main className="editorial-index">
        <div className="editorial-index-shell">
          <p className="editorial-kicker">Cybersecurity Journal</p>
          <h1>Investigations</h1>
          <p className="editorial-index-intro">
            Long-form investigative reports on modern social-engineering campaigns, malware delivery pipelines, and
            account-takeover operations.
          </p>

          <div className="editorial-index-list">
            {articles.map((article) => (
              <article key={article.href} className="editorial-index-item">
                <p>{article.meta}</p>
                <h2>{article.title}</h2>
                <p>{article.subtitle}</p>
                <p className="editorial-timestamp">{article.timestamp}</p>
                <Link href={article.href} className="editorial-read-btn">
                  <span>Read</span>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
