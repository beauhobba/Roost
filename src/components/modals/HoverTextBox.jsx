import React, { useState, useEffect } from "react";
import CardTile from "../cards/CardTile";
import "react-image-gallery/styles/css/image-gallery.css";
import { TextBox } from ".";

const HoverTextBox = (props) => {
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  return (
    <>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <TextBox
          title={props.text}
          active={false}
          symbol={props.symbol}
          width={10}
          height={10}
          circleSize={"50px"}
          iconSize={25}
          height="55px"
          circleBorder={true}
          active={active}
          width="100%"
        />
      </div>
    </>
  );
};

export default HoverTextBox;
