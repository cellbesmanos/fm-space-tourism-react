import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransiton } from "../transitions";

import "./Home.css";

export default function Home() {
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("body--home");

    return () => {
      body.classList.remove("body--home");
    };
  }, []);

  return (
    <motion.main
      initial={pageTransiton.initial}
      animate={pageTransiton.animate}
      transition={pageTransiton.transition}
      className="Home grid-container"
    >
      <div>
        <h1 className="uppercase letter-spacing-1 ff-sans-condensed">
          So, you want to travel to
          <div className="text-white fs-900 ff-serif">Space</div>
        </h1>
        <p className="ff-sans">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div>
        <Link
          to="/destination"
          className="Home__cta uppercase ff-serif text-black bg-white"
        >
          Explore
        </Link>
      </div>
    </motion.main>
  );
}
