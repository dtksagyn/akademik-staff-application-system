import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowLeft,
  faArrowRight,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./AcademicBackground.css";

function AcademicBackground() {
  const [degrees, setDegrees] = useState([
    { degree: "", institution: "", graduationYear: "", file: null },
  ]);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleDegreeChange = (index, field, value) => {
    const updatedDegrees = [...degrees];
    updatedDegrees[index][field] = value;
    setDegrees(updatedDegrees);
  };

  const handleFileChange = (index, e) => {
    const updatedDegrees = [...degrees];
    updatedDegrees[index].file = e.target.files[0]; // Save the selected file
    setDegrees(updatedDegrees);
  };

  const addDegree = () => {
    setDegrees([
      ...degrees,
      { degree: "", institution: "", graduationYear: "", file: null },
    ]);
  };

  const removeDegree = () => {
    if (degrees.length > 1) {
      const updatedDegrees = degrees.slice(0, degrees.length - 1);
      setDegrees(updatedDegrees);
    }
  };

  const handleNext = () => {
    navigate("/personalexp"); // Navigate to the PersonalExp page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(degrees); // This can be sent to a server or processed further
    alert("Data saved successfully!");
    handleNext(); // Navigate after saving
  };

  return (
    <div className="academic-background-container">
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

      <div className="main-div">
        <h2>Academic Background</h2>
        <form onSubmit={handleSubmit}>
          {degrees.map((degree, index) => (
            <div className="degree-container" key={index}>
              <div className="form-group">
                <label>Degree:</label>
                <select
                  value={degree.degree}
                  onChange={(e) =>
                    handleDegreeChange(index, "degree", e.target.value)
                  }
                  required
                >
                  <option value="">Select a degree</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <div className="form-group">
                <label>Institution:</label>
                <input
                  type="text"
                  value={degree.institution}
                  onChange={(e) =>
                    handleDegreeChange(index, "institution", e.target.value)
                  }
                  placeholder="Enter institution name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Graduation Year:</label>
                <input
                  type="number"
                  value={degree.graduationYear}
                  onChange={(e) =>
                    handleDegreeChange(index, "graduationYear", e.target.value)
                  }
                  placeholder="Enter graduation year"
                  required
                />
              </div>

              {/* File input field for attaching diplomas & transcripts */}
              <div className="form-group">
                <label>Upload Your Diplomas & Transcripts:</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(index, e)} // Handle file input change
                />
              </div>

              {/* Add a plus icon to add another degree */}
              {index === degrees.length - 1 && (
                <div className="add-degree-buttons">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="plus-icon"
                    onClick={addDegree}
                  />
                  {degrees.length > 1 && (
                    <FontAwesomeIcon
                      icon={faMinus} // Minus icon to remove degree
                      className="minus-icon"
                      onClick={removeDegree}
                    />
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="button-group">
            <button type="button">
              <FontAwesomeIcon icon={faArrowLeft} /> Previous
            </button>
            <button type="submit">
              Save & Continue <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AcademicBackground;
