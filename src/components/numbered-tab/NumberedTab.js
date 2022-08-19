import React, { useContext } from "react";
import SliderContext from "../slider/slider-context";

import "./NumberedTab.css";

const NumberedTab = React.forwardRef((props, ref) => {
  const { activeTabIndex, setActiveTabIndex } = useContext(SliderContext);

  return (
    <button
      className="NumberedTab uppercase ff-serif fs-300"
      onClick={() => setActiveTabIndex(props.index)}
      onKeyUp={props.setCurrentFocusedTab}
      aria-selected={props.index === activeTabIndex}
      aria-controls={`${props.name}-tab`}
      data-tab-index={props.index}
      tabIndex={props.focusedTabIndex === props.index ? "0" : "-1"}
      ref={ref}
      role="tab"
    >
      {props.index + 1}
    </button>
  );
});

export default NumberedTab;
