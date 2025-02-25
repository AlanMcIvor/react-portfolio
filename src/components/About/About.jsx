import React from "react";
import "./About.css";
import { Title } from "../SectionTitle/Title";
import avatar from "./assets/avatar.png"; // Correct import

export function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="user-image">
          <img src={avatar} alt="avatar" className="avatar-image" />
        </div>
        <div className="about-text">
          <Title text="About Me" />
          <p className="subtitle">Alan McIvor - Developer</p>
          <p className="details">
            With a passion for clean code and user-centric design, I develop
            pixel-perfect, responsive websites and applications that prioritize
            usability and performance. From concept to deployment, I’m dedicated
            to crafting digital solutions that are both beautiful and effective
          </p>
          <div className="social">
            <a href="">
              <i class="fa-brands fa-square-facebook fa-2xl"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-square-github fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
