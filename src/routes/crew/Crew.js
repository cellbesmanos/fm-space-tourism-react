import React, { createContext, useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { SliderControls, SliderTab } from "../../components";
import data from "../../data.json";

import "./Crew.css";

const CrewContext = createContext();

export default function Crew() {
  const crews = data.crew;
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeCrew = useRef(crews[activeTabIndex]);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("body--crew");

    return () => {
      body.classList.remove("body--crew");
    };
  }, []);

  useEffect(() => {
    activeCrew.current = crews[activeTabIndex];
    setSearchParams({
      tab: crews[activeTabIndex].role,
      id: activeTabIndex,
    });
  }, [activeTabIndex, crews, setSearchParams]);

  useEffect(() => {
    const id = parseInt(searchParams.get("id"));

    if (id) {
      setActiveTabIndex(parseInt(searchParams.get("id")));
    }
  }, [searchParams]);

  function setActiveTab(index) {
    setActiveTabIndex(index);
    setSearchParams({ tab: crews[index].role, id: index });
  }

  return (
    <main className="Crew grid-container flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span>Meet your crew
      </h1>

      <picture className="Crew__image">
        <source srcSet={activeCrew.current.images.webp} type="image/webp" />
        <img src={activeCrew.current.images.png} alt="douglas hurley" />
      </picture>

      <article
        className="Crew__info flow"
        id={`${activeCrew.current.role.split(" ").join("-")}-tab`}
        tabIndex="0"
        role="tabpanel"
      >
        <header className="flow">
          <h2 className="uppercase fs-600 ff-serif">
            {activeCrew.current.role}
          </h2>
          <p className="uppercase fs-700 text-white ff-serif">
            {activeCrew.current.name}
          </p>
        </header>

        <p>{activeCrew.current.bio}</p>
      </article>

      <CrewContext.Provider value={{ activeTabIndex, setActiveTab }}>
        <SliderControls label={"crew list"} context={CrewContext}>
          {crews.map((crew) => (
            <SliderTab
              name={crew.role.split(" ").join("-")}
              key={crew.role}
              dot
            />
          ))}
        </SliderControls>
      </CrewContext.Provider>
    </main>
  );
}
