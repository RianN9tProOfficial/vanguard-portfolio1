import Link from 'next/link';

const projects = [
  { title: 'CypherV', description: 'React, TSX, Tailwind landing page' },
  { title: 'AW Clone', description: 'Astro.js portfolio' },
  { title: 'Brutalist Portfolio', description: 'TSX + Tailwind' },
  { title: 'Vanguard', description: 'Discord bot (moderation, music, anti-nuke)' },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto w-full max-w-[1120px] px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
        <header className="border-b border-white/20 pb-8">
          <h1 className="font-[family-name:var(--font-stix)] text-[clamp(2.5rem,8vw,5.2rem)] tracking-[-0.03em]">WORK</h1>
          <p className="mt-3 font-[family-name:var(--font-inter)] text-sm tracking-[0.12em] text-white/65 uppercase">
            selected projects and systems
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href="https://github.com/RianN9tProo"
              target="_blank"
              rel="noreferrer noopener"
              className="group border border-white/20 p-5 transition duration-200 hover:-translate-y-[2px] hover:border-white/45 hover:opacity-95"
            >
              <h2 className="font-[family-name:var(--font-stix)] text-[1.9rem] leading-tight tracking-[-0.02em]">{project.title}</h2>
              <p className="mt-3 font-[family-name:var(--font-inter)] text-[0.98rem] leading-7 text-white/70">{project.description}</p>
              <p className="mt-7 font-[family-name:var(--font-inter)] text-xs tracking-[0.12em] text-white/55 uppercase group-hover:text-white/85">
                OPEN → GITHUB
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
