import React from "react";
import {
  DotTab,
  NamedTab,
  NumberedTab,
  Slider,
  SliderControls,
} from "./components";

export default function App() {
  return (
    <div>
      <main>
        <h1>Hello World!</h1>

        <Slider>
          <SliderControls label={"destination list"}>
            <NamedTab name="Moon" />
            <NamedTab name="Mars" />
            <NamedTab name="Europa" />
          </SliderControls>
        </Slider>

        <Slider>
          <SliderControls label={"technology list"}>
            <NumberedTab name="for aria label" />
            <NumberedTab name="for aria label" />
            <NumberedTab name="for aria label" />
          </SliderControls>
        </Slider>

        <Slider>
          <SliderControls label={"crew list"}>
            <DotTab name="for aria label" numbered />
            <DotTab name="for aria label" />
            <DotTab name="for aria label" />
          </SliderControls>
        </Slider>
      </main>
    </div>
  );
}
