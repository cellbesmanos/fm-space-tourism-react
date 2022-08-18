import React from "react";

import "./NamedTab.css";

const NamedTab = React.forwardRef((props, ref) => {
  return (
    <button
      className="NamedTab uppercase ff-sans-condensed text-primary fs-300 letter-spacing-2"
      onKeyUp={props.setCurrentFocusedTab}
      aria-selected="false"
      aria-controls={`${props.name}-tab`}
      data-tab-index={props.index}
      tabIndex={props.focusedTabIndex === props.index ? "0" : "-1"}
      ref={ref}
      role="tab"
    >
      {props.name}
    </button>
  );
});

export default NamedTab;
