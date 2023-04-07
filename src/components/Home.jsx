import React, { Text, useState, useEffect } from "react";
import coverphoto from "../images/coverphoto.png";

import { fadeOutLeft, fadeOutRight } from "react-animations";
import Radium, { StyleRoot } from "radium";

import roost_chook from "../images/-1.png";
import roost_vulture from "../images/vulture.png";
import roost_penguin from "../images/0.png";
import roost_duck from "../images/2.png";
import roost_crow from "../images/1.png";
import roost_galah from "../images/3.png";
import roost_pigeon from "../images/4.png";
import roost_woodpecker from "../images/5.png";
import roost_bluejay from "../images/blue-jay.png";
import roost_kingfisher from "../images/7.png";
import roost_eagle from "../images/8.png";
import roost_peacock from "../images/9.png";
import roost_goose from "../images/10.png";
import roost_cassowary from "../images/10.png_3.png";
import roost_bustard from "../images/10_2.png";
import roost_turkey from "../images/turkey.png";

import roost_stork from "../images/stork.png";
import roost_pelican from "../images/pelican.png";
import roost_flamingo from "../images/flamingo.png";
import roost_chicken from "../images/seagull.png";
import { BrowserView, MobileView, isMobile } from "react-device-detect";

import "react-image-gallery/styles/css/image-gallery.css";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { IconContext } from "react-icons";

import Card from "./modals/Card";
import { Link } from "react-router-dom";

export const card_datas = [
  roost_chook,
  roost_vulture,
  roost_flamingo,
  roost_penguin,
  roost_pelican,
  roost_crow,
  roost_duck,
  roost_galah,
  roost_pigeon,
  roost_woodpecker,
  roost_stork,
  roost_bluejay,
  roost_kingfisher,
  roost_eagle,
  roost_peacock,
  roost_turkey,
  roost_goose,
  roost_cassowary,
  roost_bustard,
  roost_chicken,
];

const styles = {
  regular: {},

  animation_left: {
    animation: "x .3s",
    animationName: Radium.keyframes(fadeOutLeft, "fadeOutLeft"),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    display: "flex",
  },
  animation_right: {
    animation: "x  .3s",
    animationName: Radium.keyframes(fadeOutRight, "fadeOutRight"),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    display: "flex",
  },
};

function Home() {
  const [index, setIndex] = useState(0);
  const [show_left, setShowLeft] = useState(styles.regular);
  const [show_right, setShowRight] = useState(styles.regular);
  const [showmobile, setShowMobile] = useState(styles.regular);
  const [buttonFontSize, setButtonFontSize] = useState(20);
  const [textContSize, setTextContSize] = useState('50%');
  const [logoSize, setLogoSize] = useState('40%');


  useEffect(() => {
    if (isMobile) {
      setButtonFontSize(14);
      setTextContSize('100%');
      setLogoSize('80%');
    }
  }, []);

  const slideLeft = () => {
    if (index - 1 < 0) {
      return;
    }
    setShowLeft(styles.animation_left);
    setShowMobile(styles.animation_left);
    setIndex(index - 1);

    setTimeout(() => {
      setShowLeft(styles.regular);
      setShowMobile(styles.regular);
    }, 100);
  };

  const slideRight = () => {
    if (isMobile) {
      if (index + 1 > card_datas.length - 1) {
        return;
      }
    } else {
      if (index + 4 > card_datas.length - 1) {
        return;
      }
    }
    setShowRight(styles.animation_right);
    setShowMobile(styles.animation_right);
    setIndex(index + 1);

    setTimeout(() => {
      setShowRight(styles.regular);
      setShowMobile(styles.regular);
    }, 100);
  };

  return (
    <div>
      <div
        class="container"
        style={{
          paddingBottom: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <div style={{
            display: "flex",
            flexDirection: "column",
            width: logoSize,
            alignItems: "center",
          }}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={coverphoto}
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: textContSize,
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <p>
              Roost is a card game about strategy, memorisation, alliances and
              most importantly birds. Avoid being bottom of the pecking order,
              stay aligned with the flock and fly away to overall victory.
              <ul>
                <li>2-5 players</li>
                <li>10-30 minutes playtime</li>
                <li>Ages 14+</li>
                <li>
                  Replayability <font color={"#cfb82d"}>★★★★★</font>
                </li>
                <li>
                  <i>
                    Expansion: <b>Parliament, Gangs and Murder</b> coming in the
                    future{" "}
                  </i>
                </li>
              </ul>
              <Link to="/purchase">
                <button
                  style={{
                    color: "white",
                    backgroundColor: "#EC2383",
                    fontSize: buttonFontSize,
                    height: 40,
                    width: "100%",
                    border: "none",
                  }}
                >
                  Join the Waiting List
                </button>
              </Link>
            </p>
          </div>
        </div>

        <BrowserView>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            <p>
              Here is a quick preview of the <b>Roost</b> cards
            </p>

            <div
              style={{
                width: "100%",
                alignItems: "center",
                flexDirection: "row",
                display: "flex",
              }}
            >
              <IconContext.Provider value={{ color: "#EC2383", size: "150px" }}>
                <BsFillArrowLeftSquareFill
                  onClick={slideLeft}
                  className="leftBtn"
                ></BsFillArrowLeftSquareFill>

                <StyleRoot
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    display: "flex",
                  }}
                >
                  <div style={show_right}>
                    <Card front={card_datas[index]} />
                  </div>

                  <div style={{ display: "flex" }}>
                    <Card front={card_datas[index + 1]} />
                    <Card front={card_datas[index + 2]} />
                  </div>

                  <div style={show_left}>
                    <Card front={card_datas[index + 3]} />
                  </div>
                </StyleRoot>

                <BsFillArrowRightSquareFill
                  onClick={slideRight}
                  className="rightBtn"
                />
              </IconContext.Provider>
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            <p>
              Here is a quick preview of the <b>Roost</b> cards
            </p>

            <div
              style={{
                width: "100%",
                alignItems: "center",
                flexDirection: "row",
                display: "flex",
              }}
            >
              <IconContext.Provider value={{ color: "#EC2383", size: "100px" }}>
                <BsFillArrowLeftSquareFill
                  onClick={slideLeft}
                  className="leftBtn"
                ></BsFillArrowLeftSquareFill>

                <StyleRoot
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    display: "flex",
                  }}
                >
                  <div style={showmobile}>
                    <Card front={card_datas[index]} />
                  </div>
                </StyleRoot>
                <BsFillArrowRightSquareFill
                  onClick={slideRight}
                  className="rightBtn"
                />
              </IconContext.Provider>
            </div>
          </div>
        </MobileView>
      </div>
    </div>
  );
}

export default Home;
