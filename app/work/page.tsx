import Link from 'next/link';

const projects = [
  { title: 'CypherV', description: 'React, TSX, Tailwind landing page' },
  { title: 'AW Clone', description: 'Astro.js portfolio' },
  { title: 'Brutalist Portfolio', description: 'TSX + Tailwind' },
  { title: 'Vanguard', description: 'Discord bot (moderation, music, anti-nuke)' },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto w-full max-w-[1120px] px-5 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32">
        <header className="border-b border-black/15 pb-10 sm:pb-12">
          <h1 className="font-[family-name:var(--font-stix)] text-[clamp(2.5rem,8vw,5.2rem)] tracking-[-0.03em]">WORK</h1>
          <p className="mt-3 font-[family-name:var(--font-inter)] text-sm tracking-[0.12em] text-black/55 uppercase">
            selected projects and systems
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href="https://github.com/RianN9tProo"
              target="_blank"
              rel="noreferrer noopener"
              className="group border border-black/15 p-6 transition duration-200 hover:-translate-y-[2px] hover:border-black/35"
            >
              <h2 className="font-[family-name:var(--font-stix)] text-[2rem] leading-tight tracking-[-0.02em]">{project.title}</h2>
              <p className="mt-3 font-[family-name:var(--font-inter)] text-[0.98rem] leading-7 text-black/62 transition-colors duration-200 group-hover:text-black/78">
                {project.description}
              </p>
              <p className="mt-8 font-[family-name:var(--font-inter)] text-xs tracking-[0.12em] text-black/45 uppercase transition-colors duration-200 group-hover:text-black/75">
                OPEN → GITHUB
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
