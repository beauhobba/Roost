import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import birds_classification_1 from "../images/bird_classification_1.png";
import birds_classification_2 from "../images/bird_classification_2.png";
import { colours, font_families } from "./styles";
import {
  PlayerTutorial,
  TwoPlayer,
  GameTutorial,
  RulesBooklet,
} from "./rulemodals";
import { Helmet } from "react-helmet";
import "./NotificationAnimation.css"; // Import the CSS file with animations
import kickstarter from "../images/kickstarter.png";

const myAPI = "mailchimp";

const NonStickyNotificationBar = (props) => {
  const [showNotification, setShowNotification] = useState(true);

  const notificationStyle = {
    justify: "flex",
    display: showNotification ? "block" : "none",

    width: props.mobile ? "90%" : "30%",
    backgroundColor: "#fff",
    color: colours.roost_pink,

    zIndex: 999, // Ensure it's above other elements
    padding: 20,
    borderRadius: "10px", // Rounded corners
    border: "2px solid " + colours.roost_pink, // White outline
  };

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <div style={notificationStyle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <a
          className="e-widget no-button"
          href="/scorecard"
          rel="nofollow"
          style={{ color: "#000", textDecoration: "none", margin: 0 }}
        >
          <div>
            <p style={{ margin: 0, fontWeight: "bold", fontSize: 20 }}>
              {" "}
              Online Scorecard{" "}
            </p>
            <p style={{ margin: 0 }}>
              Keep track of scores with our online tool
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

function Rules() {
  const [renderType, setRenderType] = useState("row");
  const [buttonSize, setButtonSize] = useState("30%");
  const [showImgs, setShowImgs] = useState(false);
  const [showRulesBooklet, setShowRulesBooklet] = useState(true);
  const [buttonColour, setButtonColour] = useState("#9e607e");
  const [buttonRulesColour, setRulesButtonColour] = useState("#EC2383");
  const [mobileDevice, setMobileDevice] = useState(false);

  const button_style = {
    color: "white",
    backgroundColor: buttonColour,
    fontSize: 16,
    height: 40,
    width: buttonSize,
    border: "none",
    padding: 10,
  };
  const button_style_rules = {
    color: "white",
    backgroundColor: buttonRulesColour,
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
      setMobileDevice(true);
    }
  }, []);

  const handleClick = () => {
    setShowImgs(!showImgs);
    setShowRulesBooklet(false);
    if (showImgs) {
      setButtonColour("#9e607e");
    } else {
      setButtonColour("#EC2383");
    }
  };

  const handleClickRules = () => {
    setShowImgs(false);
    setShowRulesBooklet(!showRulesBooklet);
    if (showRulesBooklet) {
      setRulesButtonColour("#9e607e");
    } else {
      setRulesButtonColour("#EC2383");
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
          The Birds
        </button>
        <button style={button_style_rules} onClick={handleClickRules}>
          Rules Booklet
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
          {showRulesBooklet ? (
            <RulesBooklet />
          ) : (
            <>
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
                  <img
                    style={{ width: "100%" }}
                    src={birds_classification_1}
                  ></img>
                ) : (
                  <>
                    {/* <PlayerTutorial />
                    <TwoPlayer /> */}
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
                  <img
                    style={{ width: "100%" }}
                    src={birds_classification_2}
                  ></img>
                ) : null
                // <GameTutorial></GameTutorial>
                }
              </div>
            </>
          )}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            paddingTop: 20,
          }}
        >
          <NonStickyNotificationBar mobile={mobileDevice} />
        </div>
      </div>
    </div>
  );
}

export default Rules;
