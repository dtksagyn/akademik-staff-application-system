import React, { useState } from "react";
import "../util/cta.css";

const CONTACT_EMAIL = "info@example.com";

/** Copies `text` to clipboard. Returns true on success. */
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(CONTACT_EMAIL);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrap">
        <div className="contact-head">
          <div className="eyebrow" style={{ marginBottom: "12px" }}>
            <span className="eyebrow-dash" />
            <span className="eyebrow-label">Contact</span>
          </div>
          <h2>Get in touch</h2>
          <p>
            For queries about the application process, technical support, or
            institutional partnerships — our team responds within one business
            day.
          </p>
        </div>

        <div className="contact-card">
          <div>
            <div className="c-label">General Enquiries</div>
            <div className="c-email">{CONTACT_EMAIL}</div>
          </div>
          <button
            className={`copy-btn${copied ? " done" : ""}`}
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy Address"}
          </button>
        </div>
      </div>
    </section>
  );
}
