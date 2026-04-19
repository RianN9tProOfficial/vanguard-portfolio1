import Link from 'next/link';

const featuredPost = {
  title: 'The Massive MrBeast Casino Scam Exposed',
  excerpt:
    'How fake platforms weaponize trust, celebrity influence, and stolen accounts at scale. Behind polished pages and viral claims is a coordinated funnel engineered to extract deposits before users can verify legitimacy.',
  meta: 'November 2025 • 8 min read',
};

export default function BlogShowcaseSection() {
  return (
    <section className="home-blog" id="blog" aria-labelledby="home-blog-title">
      <div className="home-blog-shell">
        <span className="home-section-label" aria-hidden="true">
          04 / BLOG
        </span>
        <h2 className="home-section-title" id="home-blog-title">
          BLOG
        </h2>
        <div className="home-section-divider" aria-hidden="true" />

        <article className="home-blog-feature" aria-label="Featured blog article">
          <h3>{featuredPost.title}</h3>
          <p>{featuredPost.excerpt}</p>
          <span className="home-blog-meta">{featuredPost.meta}</span>
          <div className="home-blog-fade" aria-hidden="true" />
        </article>

        <div className="home-blog-action">
          <Link href="/blog" className="btn btn-secondary">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
