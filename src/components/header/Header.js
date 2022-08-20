import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <header className="Header flex">
      <div>
        <img
          className="Header__logo"
          src="/assets/shared/logo.svg"
          alt="space tourism logo"
        />
      </div>

      <nav>
        <ul className="Header__navigation flex ff-sans-condensed">
          <li>
            <a
              className="active text-white uppercase letter-spacing-2"
              href="/"
            >
              <span className="fw-500" aria-hidden="true">
                00
              </span>
              Home
            </a>
          </li>
          <li>
            <a className="text-white uppercase letter-spacing-2" href="/">
              <span className="fw-500" aria-hidden="true">
                01
              </span>
              Destination
            </a>
          </li>
          <li>
            <a className="text-white uppercase letter-spacing-2" href="/">
              <span className="fw-500" aria-hidden="true">
                02
              </span>
              Crew
            </a>
          </li>
          <li>
            <a className="text-white uppercase letter-spacing-2" href="/">
              <span className="fw-500" aria-hidden="true">
                03
              </span>
              Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
