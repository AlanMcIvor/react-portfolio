import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="logo">&copy; Alan McIvor 2025</div>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/alan.mcivor.7355?locale=en_GB"
              target="_blank"
            >
              <i class="fa-brands fa-square-facebook fa-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/alan-mcivor1988/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a href="https://github.com/AlanMcIvor" target="_blank">
              <i class="fa-brands fa-square-github fa-2xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
