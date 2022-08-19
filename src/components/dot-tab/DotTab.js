import React, { useContext } from "react";
import SliderContext from "../slider/slider-context";

import "./DotTab.css";

const DotTab = React.forwardRef((props, ref) => {
  const { activeTabIndex, setActiveTabIndex } = useContext(SliderContext);

  return (
    <button
      className="DotTab"
      onClick={() => setActiveTabIndex(props.index)}
      onKeyUp={props.setCurrentFocusedTab}
      aria-selected={props.index === activeTabIndex}
      aria-controls={`${props.name}-tab`}
      data-tab-index={props.index}
      tabIndex={props.focusedTabIndex === props.index ? "0" : "-1"}
      ref={ref}
      role="tab"
    ></button>
  );
});

export default DotTab;
