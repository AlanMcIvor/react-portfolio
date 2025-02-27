import React from "react";
import "./Hero.css";
import "../Button/Button";
import heroIllustration from "./HeroIllustration.png";
import { Button } from "../Button/Button";

export function Hero() {
  // Function to handle scrolling to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-txt">
          <h2>
            Hi, I’m <span>Alan McIvor</span>, a web developer
          </h2>
          <p>I build seamless, interactive, and accessible web experiences</p>
          <div className="button-container">
            <Button
              text="View My Work"
              backgroundColor={"#FF6978"}
              onClick={() => scrollToSection("work")}
            />
            <Button
              text="Contact Me"
              backgroundColor={"#F5F5F5"}
              onClick={() => scrollToSection("contact")}
            />
          </div>
        </div>
        <img
          src={heroIllustration}
          alt="Hero Illustration"
          className="hero-image"
        />
      </div>
    </section>
  );
}
