import React, { useEffect, useRef } from "react";
import "../util/steps.css";

const UserIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const DocIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const STEPS = [
  {
    num: "01",
    icon: <UserIcon />,
    title: "Create Your Account",
    body: "Register with your institutional credentials and complete a secure academic profile. Your data is encrypted and handled in full compliance with data protection law.",
  },
  {
    num: "02",
    icon: <DocIcon />,
    title: "Submit Application",
    body: "Complete your application form, upload required academic documents, and submit your package. Real-time validation ensures completeness before submission.",
  },
  {
    num: "03",
    icon: <CheckIcon />,
    title: "Review & Decision",
    body: "An independent jury evaluates all submissions. Track your status in real time and receive official results directly to your registered contact details.",
  },
];

function StepCard({ num, icon, title, body }) {
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
    <div className="step-card" ref={ref}>
      <div className="step-num">{num}</div>
      <div className="step-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default function StepsCard() {
  return (
    <section className="steps-section" id="apply">
      <div className="section-head">
        <div>
          <div className="eyebrow" style={{ marginBottom: "12px" }}>
            <span className="eyebrow-dash" />
            <span className="eyebrow-label">Application Process</span>
          </div>
          <h2 className="section-title">
            Three stages to
            <br />
            <em>your appointment</em>
          </h2>
        </div>
        <p className="section-note">
          A transparent, fully digital process — from registration to official
          appointment.
        </p>
      </div>

      <div className="steps-grid">
        {STEPS.map((step) => (
          <StepCard key={step.num} {...step} />
        ))}
      </div>
    </section>
  );
}
