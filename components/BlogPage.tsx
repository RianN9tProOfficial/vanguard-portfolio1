import BlogCard, { type BlogPost } from '@/components/BlogCard';

const posts: BlogPost[] = [
  {
    title: 'The Massive MrBeast Casino Scam Exposed',
    description:
      'A deep dive into how fake platforms exploit trust at scale, how accounts get compromised, and what practical steps actually protect users.',
    date: 'November 2, 2025',
    tags: ['Cybersecurity', 'Scam Analysis', 'Awareness'],
    href: '/blogs/massive-mr-beast-casino-scam-exposed',
  },
];

export default function BlogPage() {
  return (
    <section className="mx-auto w-full max-w-[880px] px-4 pb-16 pt-24 sm:pt-28">
      <header className="mb-10 text-center">
        <h1 className="font-[family-name:var(--font-stix)] text-[clamp(2.6rem,6vw,4.1rem)] font-normal tracking-[-0.02em] text-black">Blog</h1>
      </header>

      <div className="space-y-5">
        {posts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </section>
  );
}
