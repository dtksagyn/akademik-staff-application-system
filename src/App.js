import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import StepsCard from "./hook/StepsCard";
import AboutSection from "./hook/About";
import CtaSection from "./hook/Cta";
import ContactSection from "./hook/Contacs";
import Footer from "./components/Footer";

import "./util/Global.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StepsCard />
        <div className="ruled-divider" />
        <AboutSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
