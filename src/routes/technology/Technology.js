import React, { createContext, useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { SliderControls, SliderTab } from "../../components";
import data from "../../data.json";
import { motion } from "framer-motion";
import {
  pageTransiton,
  imageTransition,
  descriptionTransition,
} from "../transitions";

import "./Technology.css";

const TechnologyContext = createContext();

export default function Technology() {
  const technologies = data.technology;
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTechnology = useRef(technologies[activeTabIndex]);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("body--technology");

    return () => {
      body.classList.remove("body--technology");
    };
  }, []);

  useEffect(() => {
    activeTechnology.current = technologies[activeTabIndex];
    setSearchParams({
      tab: technologies[activeTabIndex].name,
      id: activeTabIndex,
    });
  }, [activeTabIndex, technologies, setSearchParams]);

  useEffect(() => {
    const id = parseInt(searchParams.get("id"));

    if (id) {
      setActiveTabIndex(parseInt(searchParams.get("id")));
    }
  }, [searchParams]);

  function setActiveTab(index) {
    setActiveTabIndex(index);
    setSearchParams({ tab: technologies[index].name, id: index });
  }

  return (
    <motion.main
      initial={pageTransiton.initial}
      animate={pageTransiton.animate}
      transition={pageTransiton.transition}
      className="Technology grid-container flow"
    >
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span>Space launch 101
      </h1>

      <TechnologyContext.Provider value={{ activeTabIndex, setActiveTab }}>
        <SliderControls label={"technology list"} context={TechnologyContext}>
          {technologies.map((technology) => (
            <SliderTab
              name={technology.name.split(" ").join("-")}
              key={technology.name}
              numbered
            />
          ))}
        </SliderControls>
      </TechnologyContext.Provider>

      <motion.picture
        initial={imageTransition.initial}
        animate={imageTransition.animate}
        transition={imageTransition.transition}
        key={`${activeTechnology.current.name.split(" ").join("-")}-image`}
        className="Technology__image"
      >
        <source
          media="(min-width: 53.75em)"
          srcSet={activeTechnology.current.images.portrait}
          type="image/jpg"
        />
        <img
          src={activeTechnology.current.images.landscape}
          alt="the launch vehicle"
        />
      </motion.picture>

      <motion.article
        initial={descriptionTransition.initial}
        animate={descriptionTransition.animate}
        transition={descriptionTransition.transition}
        className="Technology__info flow"
        id={`${activeTechnology.current.name.split(" ").join("-")}-tab`}
        key={`${activeTechnology.current.name.split(" ").join("-")}-tab`}
        tabIndex="0"
        role="tabpanel"
      >
        <header className="flow">
          <h2 className="uppercase fs-600 ff-serif">The terminology...</h2>
          <p className="uppercase fs-700 text-white ff-serif">
            {activeTechnology.current.name}
          </p>
        </header>

        <p>{activeTechnology.current.description}</p>
      </motion.article>
    </motion.main>
  );
}
