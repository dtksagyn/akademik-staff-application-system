import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../util/login.css";

export default function Register() {
  // 1. Separate state variables for every single field
  const [tc, setTc] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. Validate all fields are filled
    if (
      !tc.trim() ||
      !name.trim() ||
      !surname.trim() ||
      !birthday ||
      !password ||
      !confirmPassword
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // 3. Validate passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage("");
    // Hand off to your authentication logic/API call here
    console.log("Submitting Registration:", {
      tc,
      name,
      surname,
      birthday,
      password,
    });
  };

  return (
    <div className="login-page-wrapper">
      <div className="page-wrap">
        {/* You might want to add 'style={{ maxWidth: "500px" }}' here if the 2-column layout feels too squished */}
        <div className="paper-card">
          <div className="card-header-area">
            <div className="brand-mark">
              <span className="brand-dot"></span>
              <span className="brand-name">Secure Portal</span>
            </div>
            <h1 className="card-title">
              Create an
              <br />
              account.
            </h1>
            <span className="title-underline"></span>
          </div>

          <form id="registerForm" onSubmit={handleSubmit} noValidate>
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
                value={tc}
                onChange={(e) => setTc(e.target.value)}
                required
              />
            </div>

            {/* BOOTSTRAP GRID: Wrap Name and Surname in a Row */}
            <div className="row gx-3">
              <div className="col-6 field-group">
                <label className="field-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="field-input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="First name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="col-6 field-group">
                <label className="field-label" htmlFor="surname">
                  Surname
                </label>
                <input
                  className="field-input"
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Last name"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* DATEPICKER FIELD */}
            <div className="field-group">
              <label className="field-label" htmlFor="birthday">
                Birthday
              </label>
              {/* Native HTML5 date input automatically brings up a calendar picker */}
              <input
                className="field-input"
                type="date"
                id="birthday"
                name="birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
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

            <div className="field-group">
              <label className="field-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="pass-wrap">
                <input
                  className="field-input"
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-login">
              <span>Register</span>
            </button>

            {/* Fixed navigation link to go back to login */}
            <Link
              style={{
                display: "block",
                marginTop: "20px",
                textAlign: "center",
              }}
              to="/login"
              className="forgot-link"
            >
              Already have an account? Sign in.
            </Link>

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
