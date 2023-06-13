import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import birds_classification_1 from "../images/bird_classification_1.png";
import birds_classification_2 from "../images/bird_classification_2.png";

import { PlayerTutorial, TwoPlayer, GameTutorial } from "./rulemodals";
import { Helmet } from "react-helmet";

function Rules() {
  const [renderType, setRenderType] = useState("row");
  const [buttonSize, setButtonSize] = useState("30%");
  const [showImgs, setShowImgs] = useState(false);
  const [buttonColour, setButtonColour] = useState("#9e607e");

  const button_style = {
    color: "white",
    backgroundColor: buttonColour,
    fontSize: 16,
    height: 40,
    width: buttonSize,
    border: "none",
    padding: 10,
  };

  useEffect(() => {
    if (isMobile) {
      setRenderType("column");
      setButtonSize("100%");
    }
  }, []);

  const handleClick = () => {
    setShowImgs(!showImgs);
    if (showImgs) {
      setButtonColour("#9e607e");
    } else {
      setButtonColour("#EC2383");
    }
  };

  return (
    <div className="rules" style={{ paddingBottom: 100 }}>
      <Helmet>
        <title>Rules - roostgame.com</title>
        <meta name="description" content="How to player Roost" />
      </Helmet>

      <div
        style={{ padding: 10, display: "flex", justifyContent: "space-evenly" }}
      >
        <button style={button_style} onClick={handleClick}>
          Show Classification Cards
        </button>
      </div>

      <div class="container">
        <div
          style={{
            display: "flex",
            flexDirection: renderType,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "left",
              paddingTop: 20,
            }}
          >
            {showImgs ? (
              <img style={{ width: "100%" }} src={birds_classification_1}></img>
            ) : (
              <>
                <PlayerTutorial />
                <TwoPlayer />
              </>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "left",
              paddingTop: 20,
            }}
          >
            {showImgs ? (
              <img style={{ width: "100%" }} src={birds_classification_2}></img>
            ) : (
              <GameTutorial></GameTutorial>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
