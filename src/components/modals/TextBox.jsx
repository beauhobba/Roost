import React, { useState, useEffect } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import { AiFillTwitterCircle, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BsPatchQuestion} from "react-icons/bs";
import {BiCrown} from "react-icons/bi";
import {GiBirdCage} from "react-icons/gi";


const CustomIcon = ({ symbol, size }) => {
    let IconComponent;
  
    // Choose the icon based on the symbol prop
    switch (symbol) {
      case 'roost':
        IconComponent = BsPatchQuestion;
        break;
      case 'champion':
        IconComponent = BiCrown;
        break;
      case 'else':
        IconComponent = GiBirdCage;
        break;
      default:
        // Default to AiFillTwitterCircle if the symbol is not recognized
        IconComponent = BsPatchQuestion;
    }
  
    return <IconComponent size={size} />;
  };

  


const CircleWithIcon = (props) => {
  const circleStyle = {
    width: "60px", // Adjust the size of the circle as needed
    height: "60px", // Adjust the size of the circle as needed
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Optional: Add a box shadow for a visual effect
  };

  const iconStyle = {
    color: "#333", // Set the color of the icon as needed
  };

  return (
    <div style={circleStyle}>
        <CustomIcon symbol={props.symbol} size={50} />
    </div>
  );
};

const TextBox = (props) => {
  const [colourLarge, setColourLarge] = React.useState("#000000");


    useEffect(() => {
        console.log(' in here')
        if (props.active === true) {
            setColourLarge("#EC2383");
        }else{
            setColourLarge("#000000");  
        }
        console.log({colourLarge})
    }, [props.active, colourLarge]);




  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ paddingRight: 10 }}>
          <CircleWithIcon symbol={props.symbol}/>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
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
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
