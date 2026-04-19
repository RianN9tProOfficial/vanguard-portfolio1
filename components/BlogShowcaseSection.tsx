const blogPosts = [
  {
    date: 'March 2026',
    title: 'Designing For Clarity In Complex Systems',
    excerpt: 'How restraint, hierarchy, and pacing turn complex interfaces into effortless experiences.',
  },
  {
    date: 'December 2025',
    title: 'From Interface To System Thinking',
    excerpt: 'Why great digital products are not screens first, but coherent systems first.',
  },
];

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

        <div className="home-blog-list">
          {blogPosts.map((post) => (
            <article key={post.title} className="home-blog-item">
              <p className="home-blog-date">{post.date}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
