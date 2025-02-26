import React from "react";
import "./Card.css";
import { Button } from "../Button/Button";

export function Card({
  cardTech,
  cardTitle,
  cardImg,
  liveSiteLink,
  githubLink,
}) {
  return (
    <div className="card">
      <div className="card-tech">
        {cardTech.map((tech, index) => (
          <span key={index} className="tech-label">
            {tech}
          </span>
        ))}
      </div>
      <div className="card-title">{cardTitle}</div>
      <div className="card-img">
        <img src={cardImg} alt="Card image" />
      </div>
      <div className="card-buttons">
        <Button
          text="Live Site"
          backgroundColor={"#FF6978"}
          onClick={() => {
            window.open(liveSiteLink, "_blank");
          }}
        />
        <Button
          text="Github"
          backgroundColor={"#3F3D56"}
          color="#fff"
          onClick={() => {
            window.open(githubLink, "_blank");
          }}
        />
      </div>
    </div>
  );
}
