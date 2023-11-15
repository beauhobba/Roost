import React, { Text, useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import birdbox from "../../images/birdbox.jpg";

function Commitment() {
  const [imgSize, setimgSize] = useState("25%");

  useEffect(() => {
    if (isMobile) {
      setimgSize("30%");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <h1 class="font-weight-light">
        <b>Our Commitment</b>
      </h1>
      <p>
        The Roost team will be using a percentage from every game purchase to
        support bird conservation. Being an Australia based company this money
        will be used to aid local wildlife by building bird boxes. <br></br>
        We hope that we can spread awareness of factors impacting our avian
        friends and help ensure we continue to see winged species in the wild.
        <br></br>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 10,
          }}
        >
          <img src={birdbox} style={{ width: imgSize }}></img>
        </div>
      </p>
      <br></br>
      <p>
        As Roost is paper based, we are aware that our game directly impacts
        bird's primary environment (trees). It is estimated that one tree
        produces around <i>11500</i> standard playing card decks. Using this
        value 1 tree roughly produces <b>6000</b> games of Roost. <br />
        As Roost games strives to be a net positive company, we will plant a
        tree with every <b>2000</b> games of Roost sold. The coordinates of each
        tree will be featured here.
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 10,
          }}
        >
          <p style={{ fontStyle: "italic" }}>Come back soon for coordinates</p>
        </div>
      </p>
    </div>
  );
}

export default Commitment;
