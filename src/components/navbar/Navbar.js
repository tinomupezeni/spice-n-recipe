import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo Files/For Web/png/Color logo - no background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faClose,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import Ai from "../hero/Ai";

const Navbar = () => {
  const [openAi, setOpenAi] = useState(false);
  const btnText = () => {
    setOpenAi(true);
  };

  const closeBtn = () => {
    setOpenAi(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="log" />
        </div>
        <div className="icon">
          <button onClick={btnText}>
            <FontAwesomeIcon icon={faComments} /> chef
          </button>
        </div>
      </div>
      {openAi && <AiChat closeBtn={closeBtn} />}
    </>
  );
};

const AiChat = ({ closeBtn }) => {
  // const [height, setHeight] = useState("90%");
  // useEffect(() => {
  //   const updateHeight = () => {
  //     if (window.innerWidth <= 400) {
  //       // If the keyboard is shown, window.innerHeight will be smaller
  //       // Adjust the height of .ai-chat accordingly
  //       setHeight(window.innerHeight - 60); // 60px is the height of your navbar
  //     } else {
  //       setHeight("90%");
  //     }
  //   };

  //   window.addEventListener("resize", updateHeight);

  //   // Cleanup function to remove the event listener
  //   return () => window.removeEventListener("resize", updateHeight);
  // }, []);
  return (
    <div className="ai-chat" >
      <div
        style={{
          backgroundColor: "#123446",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "10px",
        }}
      >
        <p>
          <FontAwesomeIcon icon={faBasketShopping} /> Max the chef
        </p>
        <FontAwesomeIcon
          icon={faClose}
          style={{ color: "red", fontSize: "1.5rem", cursor: "pointer" }}
          onClick={closeBtn}
        />
      </div>
      <Ai />
    </div>
  );
};

export default Navbar;
