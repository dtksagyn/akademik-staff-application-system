import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNames } from "country-list";
import "./PersonalInfo.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function PersonalInfo() {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    nationality: "",
    nationalId: "",
    phoneNumber: "",
    email: "",
    homeAddress: "",
  });

  // Get a list of all country names
  const countries = getNames();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    try {
      // Send the form data to the backend
      const response = await fetch("http://localhost:5000/save", {
        method: "POST", // Use POST to send data
        headers: {
          "Content-Type": "application/json", // Tell the backend we're sending JSON
        },
        body: JSON.stringify(formData), // Convert the form data to JSON
      });

      // Check if the request was successful
      if (response.ok) {
        alert("Data saved successfully!"); // Show a success message
      } else {
        alert("Failed to save data."); // Show an error message
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors
      alert("An error occurred while saving data.");
    }
  };

  // Navigate to the previous page
  const handlePrevious = () => {
    navigate(-1); // Go back to the previous page
  };

  // Navigate to the next page
  const handleNext = () => {
    navigate("/AcademicInfo"); // Navigate to the AcademicInfo page
  };

  return (
    <div className="personal-info-container">
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
        <h2>Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="divs">
            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Place of Birth:</label>
              <select
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleChange}
                required
              >
                <option value="">Select your place of birth</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="divs">
            <div className="form-group">
              <label>Nationality:</label>
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              >
                <option value="">Select your nationality</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>National ID/Passport Number:</label>
              <input
                type="text"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleChange}
                placeholder="Enter your national ID or passport number"
                required
              />
            </div>
          </div>

          <div className="divs">
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Home Address:</label>
            <input
              type="text"
              name="homeAddress"
              value={formData.homeAddress}
              onChange={handleChange}
              placeholder="Enter your home address"
              required
            />
          </div>

          <div className="button-group">
            <button type="button" onClick={handlePrevious}>
              <FontAwesomeIcon className="custom-arrow" icon={faArrowLeft} />{" "}
              Previous
            </button>

            <button type="button" onClick={handleNext}>
              Save & Continue{" "}
              <FontAwesomeIcon className="custom-arrow" icon={faArrowRight} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
