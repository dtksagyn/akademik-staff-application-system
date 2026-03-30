import React, { useEffect, useRef } from "react";
import "../util/about.css";

const LockIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ChartIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
);

const TeamIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BellIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const FEATURES = [
  { icon: <LockIcon />, label: "End-to-end document encryption" },
  { icon: <ChartIcon />, label: "Live application status tracking" },
  { icon: <TeamIcon />, label: "Independent multi-member jury panels" },
  { icon: <BellIcon />, label: "Automated milestone notifications" },
];

function FeatItem({ icon, label }) {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="feat-item" ref={ref}>
      <div className="feat-icon">{icon}</div>
      {label}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-text">
          <div className="eyebrow" style={{ marginBottom: "14px" }}>
            <span className="eyebrow-dash" />
            <span className="eyebrow-label">About the Platform</span>
          </div>
          <h2>
            Built for institutional <em>rigour</em>
          </h2>
          <p>
            Our platform centralises the entire academic recruitment lifecycle —
            from open position announcements to final appointment confirmation —
            within a single, auditable, and transparent environment.
          </p>
          <p>
            Developed in close collaboration with faculty committees,
            institutional HR departments, and candidates across leading
            universities.
          </p>
          <a href="#apply" className="about-link">
            View the application process <ArrowIcon />
          </a>
        </div>

        <div className="feat-list">
          {FEATURES.map((f) => (
            <FeatItem key={f.label} icon={f.icon} label={f.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
