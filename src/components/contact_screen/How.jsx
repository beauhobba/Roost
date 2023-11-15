import React, { Text, useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import birdbox from "../../images/birdbox.jpg";
import { FaTiktok } from "react-icons/fa";
import kingfisher from "../../images/kingfisher.jpeg";

import { Helmet } from "react-helmet";
import { colours, font_families} from "../styles";

function How() {
  const [logoSize, setLogoSize] = useState("40%");
  const [imgSize, setimgSize] = useState("50%");

  useEffect(() => {
    if (isMobile) {
      setLogoSize("100%");
      setimgSize("30%");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex_start",
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: font_families.roost,

      }}
    >
      <h1 class="font-weight-light">
        <b>How </b>
        <b style={{ color: colours.roost_pink }}>Roost</b> Started
      </h1>

      <p>
        This game was created during lunch breaks with some of my friends at a
        previous job. Over time, it underwent a remarkable transformation,
        evolving into the captivating game it is today.
        <br></br>
        <br></br>
        Blending classic concepts with cutting-edge experimental approaches,
        Roost is the epitome of an awesome card game. I'm thrilled that, despite
        its luck-based nature, skill shines through. Personally, I have no
        problem emerging victorious when I play with my friends!!!
        <br></br>
        <br></br>
        Roost serves as a meaningful platform for giving back and making a
        positive impact on the extraordinary world of birds. With my deep-rooted
        emphasis on conservation, Roost shines a light on the importance of
        preserving our natural environment.
        <br></br>
        <br></br>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <img src={kingfisher} style={{ width: imgSize}}></img>
        </div>
      </p>
      <p style={{ color: colours.roost_pink,  justifyContent: "center", display: "flex" }}>Beau Hobba</p>
    </div>
  );
}

export default How;
