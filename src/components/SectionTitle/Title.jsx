import React from "react";
import "./Title.css";

export function Title({ text }) {
  return (
    <>
      <h3 className="title">{text}</h3>
    </>
  );
}
