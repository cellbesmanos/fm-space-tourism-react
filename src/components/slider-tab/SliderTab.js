import React, { useContext } from "react";
import SliderContext from "../slider/slider-context";

import "./SliderTab.css";

const SliderTab = React.forwardRef((props, ref) => {
  const { activeTabIndex, setActiveTabIndex } = useContext(SliderContext);
  let content;
  let classes;

  if (props.named) {
    content = props.name;
    classes =
      "uppercase ff-sans-condensed text-primary fs-300 letter-spacing-2";
  } else if (props.numbered) {
    content = props.index + 1;
    classes = "uppercase ff-serif fs-300";
  } else {
    content = null;
  }

  return (
    <button
      className={`SliderTab ${classes}`}
      onClick={() => setActiveTabIndex(props.index)}
      onKeyUp={props.setCurrentFocusedTab}
      aria-selected={props.index === activeTabIndex}
      aria-controls={`${props.name}-tab`}
      data-tab-index={props.index}
      data-tab-type={
        props.named ? "named" : props.numbered ? "numbered" : "dot"
      }
      tabIndex={props.focusedTabIndex === props.index ? "0" : "-1"}
      ref={ref}
      role="tab"
    >
      {content}
    </button>
  );
});

export default SliderTab;
