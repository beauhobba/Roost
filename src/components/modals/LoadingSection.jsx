import React, { useState, useEffect } from 'react';
import CardTile from "../cards/CardTile";
import "react-image-gallery/styles/css/image-gallery.css";
import { TextBox } from ".";

const LoadingSection = (props) => {
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
    {active==true ?
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          height: 350,
          margin: 100
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", padding: 20 }}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={props.image}
              alt=""
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "left",
              paddingTop: 20,
              paddingLeft: 20,
            }}
          >
            <TextBox
              active={active}
              text={props.text}
              title={props.title}
              symbol={props.symbol}
            />
          </div>
        </div>
      </div>
      :
      null
        }
    </>
  );
};

export default LoadingSection;
