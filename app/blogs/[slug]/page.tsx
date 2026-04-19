import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogEntries } from '@/app/blogs/content';

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = blogEntries.find((item) => item.slug === slug);

  if (!entry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <article className="mx-auto w-full max-w-[900px] px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
        <Link href="/blog" className="font-[family-name:var(--font-inter)] text-xs tracking-[0.12em] text-white/50 uppercase hover:text-white/80">
          ← Back to Blog
        </Link>

        <h1 className="mt-8 font-[family-name:var(--font-stix)] text-[clamp(2.2rem,6vw,4.2rem)] leading-[1.02] tracking-[-0.03em]">
          {entry.title}
        </h1>
        <p className="mt-4 font-[family-name:var(--font-inter)] text-xs tracking-[0.12em] text-white/52 uppercase">
          {entry.date} · {entry.readTime}
        </p>

        <div className="mt-10 space-y-7 border-t border-white/15 pt-10">
          {entry.content.map((paragraph) => (
            <p key={paragraph} className="font-[family-name:var(--font-inter)] text-[1.06rem] leading-8 text-white/82">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
