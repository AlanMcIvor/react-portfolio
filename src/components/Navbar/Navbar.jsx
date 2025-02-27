import React, { useState } from "react";
import "./Navbar.css";

export function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  const handleScroll = (e, target) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", target: "#home" },
    { name: "About", target: "#about" },
    { name: "Work", target: "#work" },
    { name: "Contact", target: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="logo" href="#">
          Alan McIvor
        </a>

        <ul className={`navbar-links ${showNav ? "active" : ""}`}>
          {navLinks.map((link, i) => (
            <li key={i} className="navbar-item">
              <a
                href={link.target}
                className="navbar-link"
                onClick={(e) => handleScroll(e, link.target)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <i
          className={`fa-solid ${
            showNav ? "fa-xmark" : "fa-bars-staggered"
          } fa-xl hamburger menu-icon`}
          onClick={handleShowNav}
        ></i>
      </div>
    </nav>
  );
}
