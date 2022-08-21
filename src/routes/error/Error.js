import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransiton } from "../transitions";

import "./Error.css";

export default function Error() {
  return (
    <motion.main
      initial={pageTransiton.initial}
      animate={pageTransiton.animate}
      transition={pageTransiton.transition}
      className="Error grid-container"
    >
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
    </motion.main>
  );
}
