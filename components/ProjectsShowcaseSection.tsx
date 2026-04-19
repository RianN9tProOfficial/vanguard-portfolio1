const projects = [
  { year: '2026', name: 'Cypher V', description: 'Minimal experimental portfolio system focused on structured UI and performance design.' },
  { year: '2025', name: 'Vanguard Bot', description: 'Multi-feature Discord bot with modular architecture and scalable event-driven systems.' },
  { year: '2024', name: 'Architecture UI Lab', description: 'Pixel-precise interface studies built around rhythm, readability, and intentional motion.' },
];

export default function ProjectsShowcaseSection() {
  return (
    <section className="home-projects" id="projects" aria-labelledby="home-projects-title">
      <div className="home-projects-shell">
        <span className="home-section-label" aria-hidden="true">
          03 / PROJECTS
        </span>
        <h2 className="home-section-title" id="home-projects-title">
          PROJECTS
        </h2>
        <div className="home-section-divider" aria-hidden="true" />

        <div className="home-project-list">
          {projects.map((project) => (
            <article key={project.name} className="home-project-item">
              <p className="home-project-year">{project.year}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
