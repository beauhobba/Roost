import React, { useState, useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiTwotoneMail,
  AiFillYoutube,
  AiFillShopping,
} from "react-icons/ai";
import { BsPatchQuestion } from "react-icons/bs";
import { BiCrown } from "react-icons/bi";
import { GiBirdCage } from "react-icons/gi";
import { colours, font_families } from "../styles";
import { FaTiktok } from "react-icons/fa";

const CustomIcon = ({ symbol, size, color }) => {
  let IconComponent;

  // Choose the icon based on the symbol prop
  switch (symbol) {
    case "roost":
      IconComponent = BsPatchQuestion;
      break;
    case "champion":
      IconComponent = BiCrown;
      break;
    case "else":
      IconComponent = GiBirdCage;
      break;
    case "email":
      IconComponent = AiTwotoneMail;
      break;
    case "facebook":
      IconComponent = AiFillFacebook;
      break;
    case "twitter":
      IconComponent = AiFillTwitterCircle;
      break;
    case "tiktok":
      IconComponent = FaTiktok;
      break;
    case "instagram":
      IconComponent = AiFillInstagram;
      break;
    case "youtube":
      IconComponent = AiFillYoutube;
      break;
    case "shopping":
      IconComponent = AiFillShopping;
      break;

    default:
      // Default to AiFillTwitterCircle if the symbol is not recognized
      IconComponent = BsPatchQuestion;
  }

  return <IconComponent size={size} color={color} />;
};

const CircleWithIcon = (props) => {
  const [showCircle, setShowCircle] = React.useState(false);
  useEffect(() => {
    if (props.active === true) {
      setShowCircle(true);
    } else {
      setShowCircle(false);
    }
  }, [props.active]);

  useEffect(() => {
    if (props.circleBorder === true) {
      setShowCircle(true);
    } else {
      setShowCircle(false);
    }
  }, [props.circleBorder]);

  const circleStyle = {
    width: props.circleSize, // Adjust the size of the circle as needed
    height: props.circleSize, // Adjust the size of the circle as needed
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Optional: Add a box shadow for a visual effect
  };
  const circleStyleNull = {
    width: props.circleSize, // Adjust the size of the circle as needed
    height: props.circleSize, // Adjust the size of the circle as needed
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {showCircle ? (
        <div style={circleStyle}>
          <CustomIcon
            symbol={props.symbol}
            size={props.iconSize}
            color={props.color}
          />
        </div>
      ) : (
        <div style={circleStyleNull}>
          <CustomIcon
            symbol={props.symbol}
            size={props.iconSize}
            color={props.color}
          />
        </div>
      )}
    </>
  );
};

const TextBox = (props) => {
  const [colourLarge, setColourLarge] = React.useState("#6B7280");
  const [colourIcon, setColourIcon] = React.useState("#6B7280");
  const [textColour, setTextColour] = React.useState("#6B7280");

  useEffect(() => {
    if (props.active === true) {
      setColourLarge(colours.roost_pink);
      setColourIcon(colours.roost_pink);
      setTextColour("#000000");
    } else {
      setColourLarge("#6B7280");
      setColourIcon("#6B7280");
      setTextColour("#6B7280");
    }
    console.log({ colourLarge });
  }, [props.active, colourLarge]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontFamily: font_families.roost,
        height: props.height,
        width: props.width,
      }}
    >
      <div style={{ paddingRight: 10 }}>
        <CircleWithIcon
          symbol={props.symbol}
          color={colourIcon}
          active={props.active}
          circleSize={props.circleSize}
          iconSize={props.iconSize}
          circleBorder={props.circleBorder}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Roboto",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 20,
              color: colourLarge,
              fontWeight: "bold",
              margin: 0,
            }}
          >
            {props.title}
          </p>
        </div>

        <div>
          <p style={{ color: { textColour } }}>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
