import React from "react";
import "../util/cta.css";

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-watermark" aria-hidden="true">
        ACADEMIA
      </div>

      <div className="cta-inner">
        <div className="eyebrow-light">
          <span className="eyebrow-dash" />
          <span className="eyebrow-label">Ready to proceed?</span>
          <span className="eyebrow-dash" />
        </div>

        <h2>
          Begin your <em>application</em>
          <br />
          today
        </h2>

        <p>
          Join thousands of academics who have advanced their careers through
          our streamlined application system.
        </p>

        <div className="cta-actions">
          <a href="/register.html" className="btn-cta-primary">
            Start Application <ArrowIcon />
          </a>
          <a href="#contact" className="btn-cta-ghost">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
