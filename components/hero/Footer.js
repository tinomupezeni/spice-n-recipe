import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Logo Files/For Web/png/White logo - no background.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top-row">
          <div className="image">
            <img src={logo} />
          </div>
          <div className="contact">
            <h2>
              {" "}
              <FontAwesomeIcon icon={faWhatsapp} /> /{" "}
              <FontAwesomeIcon icon={faPhone} /> contacts
            </h2>
            <p>
              t mupezeni <span>+263 77 683 1026</span>
            </p>
            <p>
              o chekai <span>+263 78 768 1222</span>
            </p>
          </div>
        </div>
        <div className="bottom">
          <p>for website designing please use the above contact information</p>
          <p>
            our goal as spice'n recipe is to give clients a better understanding
            of spices, their health benefits and also recipes to try out
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
