import React, { useEffect, useRef, useState } from "react";
import "./SpiceData.css";
import Data from "./Data";

const SpiceData = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [initialScrollHeight, setInitialScrollHeight] = useState(0);
  const [openCategory, setOpenCategory] = useState(null);

  const setActiveIndecie = (index) => {
    if (openCategory === null) {
      setInitialScrollHeight(window.scrollY);
    }
    setActiveIndex(index);
    setOpenCategory(index);
  };

  const toggleSpiceList = (e) => {
    setInitialScrollHeight(window.scrollY);
    if (!e.target.closest(".category")) {
      if (openCategory !== null) {
        window.scrollTo(0, initialScrollHeight);
      }
      setActiveIndex(null);
      setOpenCategory(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", toggleSpiceList);

    return () => {
      document.removeEventListener("mousedown", toggleSpiceList);
    };
  });

  return (
    <>
      {Data.map((item) => {
        return (
          <div
            className="category"
            key={item.id}
            onClick={() => setActiveIndecie(item.id)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p style={{ textAlign: "start" }}>{item.intro}</p>
            <Spices
              activeIndex={activeIndex}
              spiceList={item.spiceList}
              id={item.id}
            />
          </div>
        );
      })}
    </>
  );
};
export default SpiceData;

const Spices = ({ activeIndex, spiceList, id }) => {
  return (
    <>
      {activeIndex === id
        ? spiceList.map((spice, index) => (
            <div key={index} className="spice">
              <h4>{spice.name}</h4>
              <p>
                <b>Flavor Profile:</b> {spice.flavorProfile}
              </p>
              <p>
                <b>Best Used In:</b> {spice.bestUsedIn}
              </p>
              <p>
                <b>Health Benefits:</b> {spice.healthBenefits}
              </p>
              <div></div>
            </div>
          ))
        : spiceList.slice(0, 1).map((spice, index) => {
            const combinedContent = `${spice.flavorProfile} `;
            const slicedContent = `${combinedContent.slice(0, 20)}...`;
            return (
              <div key={index} className="spice">
                <h4>{spice.name}</h4>
                <>
                  <p>
                    <b>Flavor Profile:</b> {slicedContent}
                  </p>
                </>
                <div></div>
              </div>
            );
          })}
    </>
  );
};
