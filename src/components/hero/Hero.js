import React, { Component } from "react";
import "./Hero.css";
import SpiceData from "./SpiceData";

import image1 from "../../assets/home.jpg";
import image2 from "../../assets/milw2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="hero">
          <div className="container">
            <div className="welcome-cont">
              <h1>
                {" "}
                <FontAwesomeIcon icon={faAppleAlt} /> Spice Up Your Life!{" "}
              </h1>
              <p>
                So, are you ready to spice up your life? <br />
                Join us on this flavorful adventure and discover the joy of
                cooking with spices. Let's create delicious memories together at{" "}
                <b>Spice'n recipe</b>!
              </p>
              <span></span>
            </div>
            <h1>spice categories</h1>
            <div className="categories">
              <SpiceData />
            </div>
            <div className="spice-hero">
              <div className="images">
                <img src={image1} />
                <img src={image2} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
