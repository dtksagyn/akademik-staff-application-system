import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTrash,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./PersonalExp.css";

function PersonalExp() {
  const navigate = useNavigate();

  const [experiences, setExperiences] = useState([
    {
      position: "",
      institution: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
      proof: null,
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  const handleFileChange = (index, file) => {
    const updated = [...experiences];
    updated[index].proof = file;
    setExperiences(updated);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        position: "",
        institution: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
        proof: null,
      },
    ]);
  };

  const removeExperience = (index) => {
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
  };

  const handleNext = () => {
    navigate("/ResearchPub");
  };

  const handlePrevious = () => {
    navigate("/AcademicInfo");
  };

  return (
    <div className="personal-exp-container">
      <div className="header-div">
        <header>
          <h2>Kocaeli University</h2>

          <div className="header-middle">
            <div>
              <img src="/Kouyenilogo.png" alt="Kouyen Logo" />
            </div>
            <div className="kou-adres">
              <p>
                Kabaoğlu, Baki Komsuoğlu bulvarı <br />
                <span>No:515, Umuttepe, 41001</span>
                <span>İzmit/Kocaeli</span>
              </p>
            </div>
            <div>
              <img src="/Kouyenilogo.png" alt="Kouyen Logo" />
            </div>
          </div>
        </header>
      </div>

      <div className="menus">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Application Form</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div>
        <div className="main-div">
          <h2>Professional Experience</h2>
          <form>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-block">
                <div className="form-row">
                  <div className="form-group">
                    <label>Position:</label>
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) =>
                        handleChange(index, "position", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Institution:</label>
                    <input
                      type="text"
                      value={exp.institution}
                      onChange={(e) =>
                        handleChange(index, "institution", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Start Date:</label>
                    <input
                      type="date"
                      value={exp.startDate}
                      onChange={(e) =>
                        handleChange(index, "startDate", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>End Date:</label>
                    <input
                      type="date"
                      value={exp.endDate}
                      onChange={(e) =>
                        handleChange(index, "endDate", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Responsibilities:</label>
                  <textarea
                    rows="3"
                    value={exp.responsibilities}
                    onChange={(e) =>
                      handleChange(index, "responsibilities", e.target.value)
                    }
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Attach proof of employment:</label>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(index, e.target.files[0])}
                    accept=".pdf,.jpg,.png"
                  />
                </div>

                <div className="icon-group">
                  {index === experiences.length - 1 && (
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="icon-button add"
                      onClick={addExperience}
                    />
                  )}
                  {experiences.length > 1 && (
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="icon-button delete"
                      onClick={() => removeExperience(index)}
                    />
                  )}
                </div>
              </div>
            ))}

            <div className="button-group">
              <button type="button" onClick={handlePrevious}>
                <FontAwesomeIcon icon={faArrowLeft} /> Previous
              </button>
              <button type="button" onClick={handleNext}>
                Save & Continue <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PersonalExp;
