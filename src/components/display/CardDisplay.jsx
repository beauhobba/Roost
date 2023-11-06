import React, { useState, useEffect } from "react";
import Card from "../modals/Card";
import roost_chook from "../../images/-1.png";
import roost_vulture from "../../images/-1_2.png";
import roost_penguin from "../../images/0.png";
import roost_duck from "../../images/2.png";
import roost_crow from "../../images/1.png";
import roost_galah from "../../images/3.png";
import roost_pigeon from "../../images/4.png";
import roost_woodpecker from "../../images/5.png";
import roost_bluejay from "../../images/blue-jay.png";
import roost_kingfisher from "../../images/7.png";
import roost_eagle from "../../images/8.png";
import roost_peacock from "../../images/9.png";
import roost_goose from "../../images/10.png";
import roost_cassowary from "../../images/10_2.png";
import roost_bustard from "../../images/10_4.png";
import roost_turkey from "../../images/10_3.png";

import roost_stork from "../../images/stork.png";
import roost_pelican from "../../images/pelican.png";
import roost_flamingo from "../../images/flamingo.png";
import roost_chicken from "../../images/seagull.png";
import { isMobile } from "react-device-detect";
import { fadeOutLeft, fadeOutRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { IconContext } from "react-icons";

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

function CardNew({ front }) {
  return (
    <div>
      <img src={front} style={{height:"400px", padding:10}}/>
    </div>
  );
}

function CardDisplay(props) {
  const [index, setIndex] = useState(0);
  const [moveLeft, setMoveLeft] = useState(false);
  const [show_left, setShowLeft] = useState(styles.regular);
  const [show_right, setShowRight] = useState(styles.regular);
  const [showmobile, setShowMobile] = useState(styles.regular);
  const [currentCard, setCurrentCard] = useState(card_datas[index]);
  const [buttonFontSize, setButtonFontSize] = useState(20);
  const [textContSize, setTextContSize] = useState("100%");
  const [logoSize, setLogoSize] = useState("40%");

  const slideLeft = () => {
    console.log("yeeL")
    if (index - 1 < 0) {
      setMoveLeft(false);
    }else{
    setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (isMobile) {
      if (index + 1 > card_datas.length - 1) {
        console.log("yee")
        setMoveLeft(true)
      }else{
        setIndex(index + 1);
      }
    }else{
        if (index + 4 > card_datas.length - 1) {
          console.log("yee")
        setMoveLeft(true)
        }else{
          setIndex(index + 1);
        }
  }
  };

  useEffect(() => {
    console.log(moveLeft)
    if (moveLeft) {
      var interval = setInterval(slideLeft, 2000); // Change the interval as needed (2 seconds in this case)
    }else{
      var interval = setInterval(slideRight, 2000); // Change the interval as needed (2 seconds in this case)
    }

    setCurrentCard(card_datas[index])
    return () => clearInterval(interval);
  }, [index, moveLeft]);


  return (
    <>
      {props.type ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",  // Center content vertically
            justifyContent: "center",  // Center content horizontally
            flexDirection: "row",
          }}
        >

              <div style={showmobile}>
                <CardNew front={currentCard}/>
              </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            display: "flex",
          }}
        >

              <div style={show_right}>
                <CardNew front={currentCard}/>
              </div>

              <div style={{ display: "flex" }}>
                <CardNew front={card_datas[index + 1]} />
                <CardNew front={card_datas[index + 2]} />
              </div>

              <div style={show_left}>
                <CardNew front={card_datas[index + 3]} />
              </div>

        </div>
      )}
    </>
  );
}

export default CardDisplay;
