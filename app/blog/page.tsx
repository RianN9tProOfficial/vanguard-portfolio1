import Link from 'next/link';
import Footer from '@/components/Footer';
import { blogEntries } from '@/app/blogs/content';

const orderedEntries = [...blogEntries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BlogIndexPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-[1120px] px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
        <header className="border-b border-black/15 pb-10">
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.18em] text-black/45">/01</p>
          <h1 className="mt-3 font-[family-name:var(--font-stix)] text-[clamp(2.7rem,8vw,5.4rem)] tracking-[-0.03em]">BLOG</h1>
        </header>

        <div className="mt-8 divide-y divide-black/12">
          {orderedEntries.map((entry, index) => (
            <Link
              key={entry.slug}
              href={`/blog/${entry.slug}`}
              className="group block py-7 transition duration-300 hover:translate-x-[4px] hover:opacity-95"
              style={{ animation: 'blog-row-fade 500ms ease both', animationDelay: `${index * 80}ms` }}
            >
              <h2 className="font-[family-name:var(--font-stix)] text-[clamp(1.5rem,4vw,2.5rem)] tracking-[-0.02em]">{entry.title}</h2>
              <p className="mt-2 max-w-[62ch] font-[family-name:var(--font-inter)] text-[1rem] leading-7 text-black/62">{entry.excerpt}</p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.12em] text-black/45 uppercase">
                  {entry.date} · {entry.readTime}
                </p>
                <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.12em] text-black/55 uppercase group-hover:text-black/80">
                  OPEN →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
