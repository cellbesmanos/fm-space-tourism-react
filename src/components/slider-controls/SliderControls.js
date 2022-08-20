import React, { useState, useRef, useEffect, useContext } from "react";

import "./SliderControls.css";

export default function SliderControls(props) {
  const [focusedTabIndex, setFocusedTabIndex] = useState(null);
  const { activeTabIndex } = useContext(props.context);
  const tabsRef = useRef([]);
  const tabsLength = React.Children.toArray(props.children).length;

  useEffect(() => {
    // DO NOT REMOVE IF STATEMENT
    // PREVENTS CHECKING TAB REF IMMEDIATELY ON MOUNT

    if (focusedTabIndex !== null) {
      tabsRef.current[focusedTabIndex].focus();
    } else {
      // only allow the active element to be tabbable at first
      tabsRef.current[activeTabIndex].setAttribute("tabIndex", "0");
    }
  }, [focusedTabIndex, activeTabIndex]);

  function setCurrentFocusedTab(event) {
    const keyCode = event.keyCode;
    const currentTabIndex = parseInt(event.target.dataset.tabIndex);

    if (keyCode === 37 || keyCode === 39) {
      if (keyCode === 37) {
        setFocusedTabIndex(() => {
          // if the next index is out of bounds
          if (currentTabIndex - 1 < 0) {
            return tabsLength - 1;
          }
          return currentTabIndex - 1;
        });
      } else {
        setFocusedTabIndex(() => {
          // if the next index is out of bounds
          if (currentTabIndex + 1 >= tabsLength) {
            return 0;
          }
          return currentTabIndex + 1;
        });
      }
    }
  }

  return (
    <div
      className="SliderControls flex"
      role="tablist"
      aria-label={props.label}
    >
      {React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
          ref: (ref) => (tabsRef.current[index] = ref),
          focusedTabIndex,
          setCurrentFocusedTab,
          index,
          context: props.context,
        });
      })}
    </div>
  );
}
