import React, { useEffect, useState } from "react";
import "../util/header.css";

const GraduationIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#apply", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      let cur = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) cur = s.id;
      });
      setActiveSection(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header">
      <a className="logo" href="#home">
        <div className="logo-mark">
          <GraduationIcon />
        </div>
        <div className="logo-text-wrap">
          <span className="logo-name">Academic Portal</span>
          <span className="logo-sub">Staff Application System</span>
        </div>
      </a>

      <nav className="nav">
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`nav-link${activeSection === href.slice(1) ? " nav-link--active" : ""}`}
          >
            {label}
          </a>
        ))}
        <div className="nav-sep" />
        <a href="/register.html" className="nav-link btn-nav">
          Apply Now
        </a>
      </nav>
    </header>
  );
}
