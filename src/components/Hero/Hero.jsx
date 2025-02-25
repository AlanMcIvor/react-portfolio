import React from "react";
import "./Hero.css";
import "../Button/Button";
import heroIllustration from "./HeroIllustration.png";
import { Button } from "../Button/Button";

export function Hero() {
  return (
    <section className="hero-section">
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
              onClick={() => {
                console.log("View Projects");
              }}
            />
            <Button
              text="Contact Me"
              backgroundColor={"#F5F5F5"}
              onClick={() => {
                console.log("Contact me");
              }}
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
