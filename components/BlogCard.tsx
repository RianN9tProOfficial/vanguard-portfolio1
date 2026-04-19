import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export type BlogPost = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  href: string;
};

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={post.href}
      className="group block border-b border-black/10 py-6 transition-colors duration-200 hover:bg-black/[0.015] sm:py-7"
      aria-label={`Read article: ${post.title}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
        <div className="max-w-[680px]">
          <p className="text-sm text-black/45">{post.date}</p>

          <h2 className="mt-2 font-[family-name:var(--font-stix)] text-[clamp(1.5rem,3vw,2rem)] leading-tight tracking-[-0.01em] text-black/95">
            {post.title}
          </h2>

          <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-black/60">{post.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag} className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-black/55">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/6 text-black/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-12 sm:mt-1">
          <FiArrowUpRight aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
