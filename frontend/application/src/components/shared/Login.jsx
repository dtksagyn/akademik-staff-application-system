import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../util/login.css";

export default function Login() {
  const [tc, setTc] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tc.trim() || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setErrorMessage("");
    // Hand off to your authentication logic/API call here
    console.log("Submitting Form Data:", { tc, password });
  };

  return (
    // Replaced body styling with a wrapper div class for React routing compatibility
    <div className="login-page-wrapper">
      <div className="page-wrap">
        <div className="paper-card">
          <div className="card-header-area">
            <div className="brand-mark">
              <span className="brand-dot"></span>
              <span className="brand-name">Secure Portal</span>
            </div>
            <h1 className="card-title">
              Welcome
              <br />
              back.
            </h1>
            <span className="title-underline"></span>
          </div>

          <form id="loginForm" onSubmit={handleSubmit} noValidate>
            <div className="field-group">
              <label className="field-label" htmlFor="TC">
                TC Number
              </label>
              <input
                className="field-input"
                type="text"
                id="TC"
                name="TC"
                placeholder="Enter your TC number"
                autoComplete="username"
                value={tc}
                onChange={(e) => setTc(e.target.value)}
                required
              />
            </div>

            <div className="field-group">
              <label className="field-label" htmlFor="password">
                Password
              </label>
              <div className="pass-wrap">
                <input
                  className="field-input"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-pass"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? "hide" : "show"}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-login">
              <span>Sign In</span>
            </button>
            <Link to="/register" className="forgot-link">
              Create an account
            </Link>

            <a href="#forgot" className="forgot-link">
              Forgot your password?
            </a>

            <div id="errorMessage">{errorMessage}</div>
          </form>

          <div className="stamp">
            <div className="stamp-badge">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2d6a4f"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <span className="stamp-text">
              Your data is encrypted
              <br />
              and handled with care.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
