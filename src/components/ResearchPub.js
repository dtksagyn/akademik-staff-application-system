import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTrash,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./ResearchPub.css";

function ResearchPub() {
  const navigate = useNavigate();

  const [researchData, setResearchData] = useState({
    researchProjects: [
      {
        projectTitle: "",
        projectType: "",
        fundingSource: "",
        role: "",
        duration: "",
        proof: null,
      },
    ],
    publishedArticles: [
      {
        articleTitle: "",
        journalName: "",
        index: "",
        year: "",
        doi: "",
        proof: null,
      },
    ],
  });

  const handleChange = (category, index, field, value) => {
    const updated = { ...researchData };
    updated[category][index][field] = value;
    setResearchData(updated);
  };

  const handleFileChange = (category, index, file) => {
    const updated = { ...researchData };
    updated[category][index].proof = file;
    setResearchData(updated);
  };

  const addResearchProject = () => {
    setResearchData({
      ...researchData,
      researchProjects: [
        ...researchData.researchProjects,
        {
          projectTitle: "",
          projectType: "",
          fundingSource: "",
          role: "",
          duration: "",
          proof: null,
        },
      ],
    });
  };

  const removeResearchProject = (index) => {
    const updated = researchData.researchProjects.filter((_, i) => i !== index);
    setResearchData({
      ...researchData,
      researchProjects: updated,
    });
  };

  const addPublishedArticle = () => {
    setResearchData({
      ...researchData,
      publishedArticles: [
        ...researchData.publishedArticles,
        {
          articleTitle: "",
          journalName: "",
          index: "",
          year: "",
          doi: "",
          proof: null,
        },
      ],
    });
  };

  const removePublishedArticle = (index) => {
    const updated = researchData.publishedArticles.filter(
      (_, i) => i !== index
    );
    setResearchData({
      ...researchData,
      publishedArticles: updated,
    });
  };

  const handleNext = () => {
    navigate("/TeachingExp");
  };

  const handlePrevious = () => {
    navigate("/PersonalExp");
  };

  return (
    <div className="research-pub-container">
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
          <h2>Research Projects</h2>
          <form>
            {researchData.researchProjects.map((project, index) => (
              <div key={index} className="research-project-block">
                <div className="form-row ">
                  <div className="form-group">
                    <label>Project Title:</label>
                    <input
                      type="text"
                      value={project.projectTitle}
                      onChange={(e) =>
                        handleChange(
                          "researchProjects",
                          index,
                          "projectTitle",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Type:</label>
                    <div>
                      <label>
                        <input
                          type="radio"
                          value="National"
                          checked={project.projectType === "National"}
                          onChange={(e) =>
                            handleChange(
                              "researchProjects",
                              index,
                              "projectType",
                              e.target.value
                            )
                          }
                        />
                        National
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="International"
                          checked={project.projectType === "International"}
                          onChange={(e) =>
                            handleChange(
                              "researchProjects",
                              index,
                              "projectType",
                              e.target.value
                            )
                          }
                        />
                        International
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Funding Source:</label>
                    <input
                      type="text"
                      value={project.fundingSource}
                      onChange={(e) =>
                        handleChange(
                          "researchProjects",
                          index,
                          "fundingSource",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Role:</label>
                    <div>
                      <label>
                        <input
                          type="radio"
                          value="PI"
                          checked={project.role === "PI"}
                          onChange={(e) =>
                            handleChange(
                              "researchProjects",
                              index,
                              "role",
                              e.target.value
                            )
                          }
                        />
                        PI
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="Co-PI"
                          checked={project.role === "Co-PI"}
                          onChange={(e) =>
                            handleChange(
                              "researchProjects",
                              index,
                              "role",
                              e.target.value
                            )
                          }
                        />
                        Co-PI
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="Researcher"
                          checked={project.role === "Researcher"}
                          onChange={(e) =>
                            handleChange(
                              "researchProjects",
                              index,
                              "role",
                              e.target.value
                            )
                          }
                        />
                        Researcher
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Duration:</label>
                  <input
                    type="text"
                    value={project.duration}
                    onChange={(e) =>
                      handleChange(
                        "researchProjects",
                        index,
                        "duration",
                        e.target.value
                      )
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Attach proof of project:</label>
                  <input
                    type="file"
                    onChange={(e) =>
                      handleFileChange(
                        "researchProjects",
                        index,
                        e.target.files[0]
                      )
                    }
                    accept=".pdf,.jpg,.png"
                  />
                </div>

                <div className="icon-group">
                  {index === researchData.researchProjects.length - 1 && (
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="icon-button add"
                      onClick={addResearchProject}
                    />
                  )}
                  {researchData.researchProjects.length > 1 && (
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="icon-button delete"
                      onClick={() => removeResearchProject(index)}
                    />
                  )}
                </div>
              </div>
            ))}

            <h2>Published Articles</h2>
            {researchData.publishedArticles.map((article, index) => (
              <div key={index} className="published-article-block">
                <div className="form-row">
                  <div className="form-group">
                    <label>Title:</label>
                    <input
                      type="text"
                      value={article.articleTitle}
                      onChange={(e) =>
                        handleChange(
                          "publishedArticles",
                          index,
                          "articleTitle",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Journal Name:</label>
                    <input
                      type="text"
                      value={article.journalName}
                      onChange={(e) =>
                        handleChange(
                          "publishedArticles",
                          index,
                          "journalName",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Index:</label>
                    <select
                      value={article.index}
                      onChange={(e) =>
                        handleChange(
                          "publishedArticles",
                          index,
                          "index",
                          e.target.value
                        )
                      }
                      required
                    >
                      <option value="SCI">SCI</option>
                      <option value="SSCI">SSCI</option>
                      <option value="AHCI">AHCI</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Year:</label>
                    <input
                      type="number"
                      value={article.year}
                      onChange={(e) =>
                        handleChange(
                          "publishedArticles",
                          index,
                          "year",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>DOI:</label>
                  <input
                    type="text"
                    value={article.doi}
                    onChange={(e) =>
                      handleChange(
                        "publishedArticles",
                        index,
                        "doi",
                        e.target.value
                      )
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Attach publication proof:</label>
                  <input
                    type="file"
                    onChange={(e) =>
                      handleFileChange(
                        "publishedArticles",
                        index,
                        e.target.files[0]
                      )
                    }
                    accept=".pdf,.jpg,.png"
                  />
                </div>

                <div className="icon-group">
                  {index === researchData.publishedArticles.length - 1 && (
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="icon-button add"
                      onClick={addPublishedArticle}
                    />
                  )}
                  {researchData.publishedArticles.length > 1 && (
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="icon-button delete"
                      onClick={() => removePublishedArticle(index)}
                    />
                  )}
                </div>
              </div>
            ))}
          </form>
          <div className="nav-buttons">
            <button className="prev-button" onClick={handlePrevious}>
              <FontAwesomeIcon icon={faArrowLeft} /> Previous
            </button>
            <button className="next-button" onClick={handleNext}>
              Next <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchPub;
