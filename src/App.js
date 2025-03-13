import React from "react";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import AcademicInfo from "./components/AcademicInfo";
import PersonalExp from "./components/PersonalExp";
import ResearchPub from "./components/ResearchPub";
import TeachingExp from "./components/TeachingExp";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PersonalInfo />} />
      <Route path="/AcademicInfo" element={<AcademicInfo />} />
      <Route path="/PersonalExp" element={<PersonalExp />} />
      <Route path="/ResearchPub" element={<ResearchPub />} />
      <Route path="/TeachingExp" element={<TeachingExp />} />
    </Routes>
  );
}

export default App;
