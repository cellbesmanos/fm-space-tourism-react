import React, { useContext } from "react";
import SliderContext from "../slider/slider-context";

import "./NamedTab.css";

const NamedTab = React.forwardRef((props, ref) => {
  const { activeTabIndex, setActiveTabIndex } = useContext(SliderContext);

  return (
    <button
      className="NamedTab uppercase ff-sans-condensed text-primary fs-300 letter-spacing-2"
      onClick={() => setActiveTabIndex(props.index)}
      onKeyUp={props.setCurrentFocusedTab}
      aria-selected={props.index === activeTabIndex}
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
