import React, { useEffect, useRef, useState } from "react";
import "../util/hero.css";

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

/** Animates a number from 0 to `target` over `duration` ms. */
function useCountUp(target, duration = 1600, triggered = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setValue(Math.round(target * ease));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [triggered, target, duration]);

  return value;
}

function StatCard({ target, label }) {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const count = useCountUp(target, 1600, triggered);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="mini-card" ref={ref}>
      <div className="mini-num">{count}+</div>
      <div className="mini-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="ruled-lines" aria-hidden="true" />

      {/* ── Left column ── */}
      <div className="hero-left">
        <div className="eyebrow">
          <span className="eyebrow-dash" />
          <span className="eyebrow-label">Applications Open · 2025</span>
        </div>

        <h1 className="hero-h1">
          The Gateway to
          <br />
          <em>Academic</em>
          <br />
          Excellence
        </h1>

        <p className="hero-desc">
          A unified platform for submitting, tracking, and managing academic
          staff applications — built for clarity, precision, and institutional
          integrity.
        </p>

        <div className="hero-actions">
          <a href="/register.html" className="btn-primary">
            Begin Application
            <ArrowIcon />
          </a>
          <a href="#apply" className="btn-outline">
            View Process
          </a>
        </div>
      </div>

      {/* ── Right column ── */}
      <div className="hero-right">
        <div className="paper-card">
          <div className="card-tag">Current Cycle</div>
          <div className="card-val">
            Spring <span>2025</span>
          </div>
          <div className="card-sub">Application window is currently open</div>
          <div className="status-tag">
            <span className="status-dot" />
            Accepting Submissions
          </div>
        </div>

        <div className="mini-cards">
          <StatCard target={2400} label="Applications processed" />
          <StatCard target={340} label="Positions filled" />
        </div>

        <div className="paper-card">
          <div className="card-tag">Avg. Review Time</div>
          <div className="card-val">
            <span>14</span> Days
          </div>
          <div className="card-sub">From submission to jury decision</div>
        </div>
      </div>
    </section>
  );
}
