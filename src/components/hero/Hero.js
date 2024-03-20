import React from "react";
import "./Hero.css";
import SpiceData from "./SpiceData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="welcome-cont">
            <img
              src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwaWNlcyUyMG9uJTIwYSUyMHNwb29ufGVufDB8fDB8fHww"
              alt="home-image"
              style={{ width: "100%", height: "70vh", objectFit: "cover" }}
            />
            <div className="home-text">
              <h1 style={{ color: "#fff" }}>
                {" "}
                <FontAwesomeIcon icon={faAppleAlt} /> Spice Up Your Life!{" "}
              </h1>
              <p>
                So, are you ready to spice up your life? <br />
                Join us on this flavorful adventure and discover the joy of
                cooking with spices. Let's create delicious memories together at{" "}
                <b>Spice'n recipe</b>!
              </p>
            </div>
          </div>
          <div className="category-intro">
            <h1>spice categories</h1>
            <p>
              From the heart of the earth to the symphony of your cuisine, savor
              the journey. Bon appétit!
            </p>
          </div>
          <div className="categories">
            <SpiceData />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
