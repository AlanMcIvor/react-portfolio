import React from "react";
import "./Button.css";

export function Button({ text, onClick, backgroundColor }) {
  console.log("Button rendered");
  return (
    <button
      className="btn"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
