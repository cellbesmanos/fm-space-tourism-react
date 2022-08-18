import React, { useState } from "react";

import SliderContext from "./slider-context";

export default function Slider(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <SliderContext.Provider value={{ activeTabIndex, setActiveTabIndex }}>
      <div>{props.children}</div>
    </SliderContext.Provider>
  );
}
