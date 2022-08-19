import React from "react";
import { Slider, SliderControls, SliderTab } from "./components";

export default function App() {
  return (
    <div>
      <main>
        <h1>Hello World!</h1>

        <Slider>
          <SliderControls label={"destination list"}>
            <SliderTab name="Moon" named />
            <SliderTab name="Mars" named />
            <SliderTab name="Europa" named />
          </SliderControls>
        </Slider>

        <Slider>
          <SliderControls label={"technology list"}>
            <SliderTab name="for aria label" numbered />
            <SliderTab name="for aria label" numbered />
            <SliderTab name="for aria label" numbered />
          </SliderControls>
        </Slider>

        <Slider>
          <SliderControls label={"crew list"}>
            <SliderTab name="for aria label" dot />
            <SliderTab name="for aria label" dot />
            <SliderTab name="for aria label" dot />
          </SliderControls>
        </Slider>
      </main>
    </div>
  );
}
