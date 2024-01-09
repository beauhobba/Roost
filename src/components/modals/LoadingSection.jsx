import React, { useState, useEffect } from "react";
import CardTile from "../cards/CardTile";
import "react-image-gallery/styles/css/image-gallery.css";
import { TextBox } from ".";

const LoadingSection = (props) => {
  const [active, setActive] = React.useState(false);

  useEffect(() => {
    console.log(props.active + props.title);
    if (props.active == true) {
      console.log("set Active");
      setActive(true);
    } else {
      console.log("not set Active");
      setActive(false);
    }
    console.log("Active ^");
  }, [props.active]);

  return (
    <>
      {active == true ? (
        <div style={{ width: "100%", padding: 20 }}>
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src={props.image}
            alt=""
            style={{ width: "30%" }}
          />
        </div>
      ) : null}
    </>
  );
};

export default LoadingSection;
