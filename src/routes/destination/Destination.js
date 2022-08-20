import React, { createContext, useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { SliderControls, SliderTab } from "../../components";
import data from "../../data.json";

import "./Destination.css";

const DestinationContext = createContext();

export default function Destination() {
  const destinations = data.destinations;
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeDestination = useRef(destinations[activeTabIndex]);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("body--destination");

    return () => {
      body.classList.remove("body--destination");
    };
  }, []);

  useEffect(() => {
    activeDestination.current = destinations[activeTabIndex];
    setSearchParams({
      tab: destinations[activeTabIndex].name,
      id: activeTabIndex,
    });
  }, [activeTabIndex, destinations, setSearchParams]);

  useEffect(() => {
    const id = parseInt(searchParams.get("id"));

    if (id) {
      setActiveTabIndex(parseInt(searchParams.get("id")));
    }
  }, [searchParams]);

  function setActiveTab(index) {
    setActiveTabIndex(index);
    setSearchParams({ tab: destinations[index].name, id: index });
  }

  return (
    <main className="Destination grid-container flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>Pick your destination
      </h1>

      <picture className="Destination__image">
        <source
          srcSet={activeDestination.current.images.webp}
          type="image/webp"
        />
        <img
          src={activeDestination.current.images.png}
          alt={`the ${activeDestination.current.name}}`}
        />
      </picture>

      <DestinationContext.Provider value={{ activeTabIndex, setActiveTab }}>
        <SliderControls context={DestinationContext}>
          {destinations.map(({ name }) => (
            <SliderTab name={name} key={name} named />
          ))}
        </SliderControls>
      </DestinationContext.Provider>

      <article
        className="Destination__info flow"
        id={`${activeDestination.current.name}-tab`}
        tabIndex="0"
        role="tabpanel"
      >
        <section className="Destination__info-text">
          <h2 className="uppercase fs-800 text-white ff-serif">
            {activeDestination.current.name}
          </h2>

          <p>{activeDestination.current.description}</p>
        </section>

        <section className="Destination__info-stats flex">
          <div className="uppercase">
            <h3 className="fs-200 letter-spacing-3 ff-sans-condensed">
              Avg. distance
            </h3>
            <p className="text-white ff-serif fs-500">
              {activeDestination.current.distance}
            </p>
          </div>
          <div className="uppercase">
            <h3 className="fs-200 letter-spacing-3 ff-sans-condensed">
              Est. travel time
            </h3>
            <p className="text-white ff-serif fs-500">
              {activeDestination.current.travel}
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
