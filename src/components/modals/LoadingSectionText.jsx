import React, { useState, useEffect } from 'react';
import CardTile from "../cards/CardTile";
import "react-image-gallery/styles/css/image-gallery.css";
import { TextBox } from ".";

const LoadingSectionText = (props) => {
    const [active, setActive] = React.useState(false);

    useEffect(() => {
        if (props.active == true) {
            setActive(true);
        }else{
            setActive(false);   
        }
    }, [props.active]);



  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: 50,
          paddingTop: 20,
          alignItems: "center",
        }}
      >
            <TextBox
              active={active}
              text={props.text}
              title={props.title}
              symbol={props.symbol}
              circleSize={"100px"}
              iconSize={50}

            />
      </div>
    </>
  );
};

export default LoadingSectionText;
