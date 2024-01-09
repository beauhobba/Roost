import React, { useState, useEffect } from "react";

import "react-image-gallery/styles/css/image-gallery.css";

import { colours } from "../styles";
import { FaFeather } from "react-icons/fa"; // Import a bird icon from a popular icon library

function RoostButton(props) {
  const [buttonFontSize, setButtonFontSize] = useState(20);
  const [textContSize, setTextContSize] = useState("100%");
  const [sideImgSize, setSideImgSize] = useState("50%");
  const [logoSize, setLogoSize] = useState("40%");
  const [screenSize, setScreenSize] = useState("4000px");

  // useEffect(() => {
  //   if (isMobile) {
  //     setButtonFontSize(14);
  //     setTextContSize("100%");
  //     setLogoSize("80%");
  //     setSideImgSize("100%");
  //     setScreenSize("400px");
  //   }
  // }, []);

  return (
    <button
      onClick={props.action}
      style={{
        color: "#ffffff", // White text for visibility
        backgroundColor: colours.roost_pink, // Blue background
        fontSize: buttonFontSize,
        height: 80,
        width: "100%",
        paddingLeft: 20,
        paddingRight: 60,
        marginBottom: 20,
        border: "none",
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s", // Smooth transition for the background
        cursor: "pointer", // Change cursor on hover
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(45deg, #F87DB2 10%, #5AC5C9 80%)";
        e.currentTarget.querySelector(".bird-icon").style.transform =
          "translateX(230px)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = colours.roost_pink;
        e.currentTarget.querySelector(".bird-icon").style.transform =
          "translateX(0)";
      }}
    >
      <FaFeather
        className="bird-icon"
        style={{
          marginRight: 10,
          fontSize: "1.5em",
          transition: "transform 0.3s",
        }}
      />{" "}
      {props.text}
    </button>
  );
}

export default RoostButton;
