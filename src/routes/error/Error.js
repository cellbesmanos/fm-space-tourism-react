import React from "react";
import { Link } from "react-router-dom";

import "./Error.css";

export default function Error() {
  return (
    <main className="Error grid-container">
      <div className="Error__content flow">
        <h1 className="ff-serif uppercase">
          <span
            className="fs-900 text-white  ff-sans-condensed letter-spacing-2"
            style={{ display: "block" }}
            aria-hidden="true"
          >
            404
          </span>
          Page not found.
        </h1>
        <Link to="/" className="Error__cta">
          Back to home
        </Link>
      </div>
    </main>
  );
}
