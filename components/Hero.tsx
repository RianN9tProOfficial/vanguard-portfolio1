export default function Hero() {
  return (
    <section className="hero" id="work" aria-labelledby="hero-title">
      <span className="hero-label" aria-hidden="true">
        01 / PORTFOLIO
      </span>

      <div className="hero-inner">
        <h1 className="hero-title" id="hero-title">
          BUILDING DIGITAL
          <br />
          EXPERIENCES
        </h1>

        <p className="hero-subheading">Building digital experiences through code, design, and intentional simplicity.</p>

        <p className="hero-description">
          I create premium interfaces, thoughtful interactions, and systems that feel clear, minimal, and quietly
          powerful.
        </p>

        <div className="hero-actions">
          <a className="btn btn-secondary" href="/#work">
            View Projects
          </a>
          <a className="btn btn-secondary" href="/blog">
            Read Articles
          </a>
        </div>
      </div>

      <div className="hero-divider" aria-hidden="true" />
    </section>
  );
}
