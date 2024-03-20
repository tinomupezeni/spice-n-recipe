import React, { useEffect, useState } from "react";
import "./SpiceData.css";
import Data from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SpiceData = () => {
  const [activeIndex, setActiveIndex] = useState(true);

  const handleClick = (id) => {
    setActiveIndex(id);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".category")) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      {Data.map((item) => {
        return (
          <div
            className="category"
            id={`category-${item.id}`}
            key={item.id}
            onClick={() => {
              handleClick(item.id);
            }}
          >
            <img
              src={item.image}
              alt=""
              style={{
                height: activeIndex === item.id ? "100px" : "250px",
                transition: "height 0.5s ease",
              }}
            />
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

const Spices = ({ spiceList }) => {
  const [activeSpiceIndex, setActiveSpiceIndex] = useState(0);

  const handleSpiceClick = (direction) => {
    if (direction === "next" && activeSpiceIndex < spiceList.length - 1) {
      setActiveSpiceIndex(activeSpiceIndex + 1);
    } else if (direction === "prev" && activeSpiceIndex > 0) {
      setActiveSpiceIndex(activeSpiceIndex - 1);
    }
  };

  return (
    <div
      style={{
        height: "45vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        className="spice"
        style={{
          flex: "1 1 auto",
          overflow: "auto",
          justifyContent: "center",
          // border: "1px solid #123446",
        }}
      >
        <h4>{spiceList[activeSpiceIndex].name}</h4>
        <p>
          <b>Flavor Profile:</b> {spiceList[activeSpiceIndex].flavorProfile}
        </p>
        <p>
          <b>Best Used In:</b> {spiceList[activeSpiceIndex].bestUsedIn}
        </p>
        <p>
          <b>Health Benefits:</b> {spiceList[activeSpiceIndex].healthBenefits}
        </p>
        <h4>{spiceList[activeSpiceIndex + 1]?.name}...</h4>
      </div>
      <div className="btns" style={{ flexShrink: "0" }}>
        <button
          onClick={() => handleSpiceClick("prev")}
          disabled={activeSpiceIndex === 0}
          style={{ opacity: activeSpiceIndex === 0 ? 0.5 : 1 }}
        >
          <FontAwesomeIcon icon={faChevronLeft} /> Previous
        </button>
        <button
          onClick={() => handleSpiceClick("next")}
          disabled={activeSpiceIndex === spiceList.length - 1}
          style={{
            opacity: activeSpiceIndex === spiceList.length - 1 ? 0.5 : 1,
          }}
        >
          {" "}
          Next <FontAwesomeIcon icon={faChevronRight} />{" "}
        </button>
      </div>
    </div>
  );
};
