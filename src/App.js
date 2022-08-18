import React from "react";
import { NamedTab, SliderControls } from "./components";

export default function App() {
  return (
    <div>
      <main>
        <h1>Hello World!</h1>

        <SliderControls label={"destination list"}>
          <NamedTab name="Moon" />
          <NamedTab name="Mars" />
          <NamedTab name="Europa" />
        </SliderControls>
      </main>
    </div>
  );
}
