const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <p className="footer-brand">
          Rian<span className="brand-dot">.</span> © {currentYear}
        </p>
        <ul className="footer-links">
          <li>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:hello@rian.dev">Email</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <a href="#terms">Terms</a>
        <a href="#privacy">Privacy</a>
      </div>
    </footer>
  );
}
