import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <span className="icon-square" aria-hidden="true" />, title: 'Square', href: '#' },
  { node: <SiVercel />, title: 'Vercel', href: 'https://vercel.com' },
];

export default function Hero() {
  return (
    <>
      <section className="hero" id="work">
        <div className="hero-inner">
          <p className="hero-kicker">Frontend Developer</p>
          <h1 className="hero-title">Web development, done right.</h1>
          <p className="hero-description">
            I craft fast, clear, and thoughtfully designed digital experiences with an emphasis on clean code,
            usability, and lasting visual simplicity.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              Work
            </a>
            <a className="btn btn-secondary" href="#about">
              About
            </a>
          </div>

          <div className="icon-loop" aria-label="Technology partners">
            <div className="icon-loop-track">
              {Array.from({ length: 4 }).flatMap((_, copyIndex) =>
                techLogos.map(({ node, title, href }, index) => (
                  <a
                    key={`${title}-${copyIndex}-${index}`}
                    className="icon-loop-item"
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                    aria-label={title}
                    title={title}
                  >
                    {node}
                    <span>{title}</span>
                  </a>
                )),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <h2 className="about-title" id="about-title">
          About
        </h2>
        <p className="about-text">
          I started coding in early 2020 during lockdown, and what began as a way to stay engaged quickly turned into
          a real passion. Since then, I have built a wide range of projects, sharpened my front-end skills, and
          developed a strong eye for clean, user-focused interfaces. I am always learning, experimenting, and pushing
          to build better digital experiences with every project.
        </p>
      </section>
    </>
  );
}
