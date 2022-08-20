import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const backgroundImageURL = useRef("/assets/shared/icon-hamburger.svg");

  useEffect(() => {
    if (isMobileNavOpen) {
      backgroundImageURL.current = "/assets/shared/icon-hamburger.svg";
    } else {
      backgroundImageURL.current = "/assets/shared/icon-close.svg";
    }
  }, [isMobileNavOpen]);

  return (
    <header className="Header flex">
      <div>
        <img
          className="Header__logo"
          src="/assets/shared/logo.svg"
          alt="space tourism logo"
        />
      </div>

      <button
        className="Header__burger-btn"
        onClick={() => setIsMobileNavOpen((prev) => !prev)}
        aria-expanded={isMobileNavOpen}
        aria-controls="primary-navigation"
        style={{ backgroundImage: `url(${backgroundImageURL.current})` }}
      >
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          className={`Header__navigation ${
            isMobileNavOpen ? "Header__navigation--active" : ""
          } flex ff-sans-condensed`}
        >
          <li>
            <NavLink className="text-white uppercase letter-spacing-2" to="/">
              <span className="fw-500" aria-hidden="true">
                00
              </span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white uppercase letter-spacing-2"
              to="/destination"
            >
              <span className="fw-500" aria-hidden="true">
                01
              </span>
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white uppercase letter-spacing-2"
              to="/crew"
            >
              <span className="fw-500" aria-hidden="true">
                02
              </span>
              Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white uppercase letter-spacing-2"
              to="/technology"
            >
              <span className="fw-500" aria-hidden="true">
                03
              </span>
              Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
