import React from "react";
import "../util/footer.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#apply", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer-brand">Academic Staff Application System</span>
      <span className="footer-copy">© {year} — All rights reserved</span>
      <nav className="footer-links">
        {LINKS.map(({ href, label }) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
