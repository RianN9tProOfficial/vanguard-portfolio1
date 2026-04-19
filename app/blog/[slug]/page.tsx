import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogEntries } from '@/app/blogs/content';

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = blogEntries.find((item) => item.slug === slug);

  if (!entry) notFound();

  return (
    <main className="min-h-screen bg-white text-black">
      <article className="mx-auto w-full max-w-[920px] px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
        <Link href="/blog" className="font-[family-name:var(--font-inter)] text-xs tracking-[0.12em] text-black/46 uppercase hover:text-black/78">
          ← Back to Blog
        </Link>

        <header className="mt-8 border-b border-black/14 pb-9">
          <h1 className="font-[family-name:var(--font-stix)] text-[clamp(2.3rem,6vw,4.5rem)] leading-[1.03] tracking-[-0.03em]">
            {entry.title}
          </h1>
          <p className="mt-4 max-w-[62ch] font-[family-name:var(--font-inter)] text-[1.02rem] leading-8 text-black/66">{entry.subtitle}</p>
          <p className="mt-6 font-[family-name:var(--font-inter)] text-xs tracking-[0.12em] text-black/48 uppercase">
            {entry.date} · {entry.readTime}
          </p>
        </header>

        <div className="mt-12 space-y-12">
          {entry.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-[family-name:var(--font-stix)] text-[clamp(1.45rem,3vw,2.2rem)] leading-tight tracking-[-0.02em]">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-6">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="font-[family-name:var(--font-inter)] text-[1.07rem] leading-8 text-black/82">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
