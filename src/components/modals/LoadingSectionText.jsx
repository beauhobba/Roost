import React, { useState, useEffect } from 'react';
import CardTile from "../cards/CardTile";
import "react-image-gallery/styles/css/image-gallery.css";
import { TextBox } from ".";

const LoadingSectionText = (props) => {
    const [active, setActive] = React.useState(false);

    useEffect(() => {
        console.log(props.active + props.title)
        if (props.active == true) {
            console.log("set Active")
            setActive(true);
        }else{
            console.log("not set Active")
            setActive(false);   
        }
        console.log("Active ^")
    }, [props.active]);



  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: 50,
          alignItems: "center",
        }}
      >
            <TextBox
              active={active}
              text={props.text}
              title={props.title}
              symbol={props.symbol}
            />
      </div>
    </>
  );
};

export default LoadingSectionText;
