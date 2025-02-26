import React from "react";
import "./Button.css";

export function Button({ text, onClick, backgroundColor, color }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: backgroundColor, color: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
