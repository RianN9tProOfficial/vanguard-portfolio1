import Link from 'next/link';

const navItems = [
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blogs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact-title' },
];

export default function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="navbar">
        <Link href="/" className="brand" aria-label="Rian homepage">
          Rian<span className="brand-dot">.</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
