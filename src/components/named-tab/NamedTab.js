import React from "react";
import "./NamedTab.css";

export default function NamedTab(props) {
  return (
    <button
      className="NamedTab uppercase ff-sans-condensed text-primary fs-300 letter-spacing-2"
      aria-selected="false"
      aria-controls={`${props.name}-tab`}
      role="tab"
      tabIndex="-1"
    >
      {props.name}
    </button>
  );
}
