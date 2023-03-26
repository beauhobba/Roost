import React, { Text, useState } from "react";
import coverphoto from "../images/coverphoto.png";

import roost_chook from "../images/-1.png";
import roost_vulture from "../images/-1_2.png";
import roost_penguin from "../images/0.png";
import roost_duck from "../images/2.png";
import roost_crow from "../images/1.png";
import roost_galah from "../images/3.png";
import roost_pigeon from "../images/4.png";
import roost_woodpecker from "../images/5.png";
import roost_bluejay from "../images/6.png";
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
import roost_chicken from "../images/12.png";

import "react-image-gallery/styles/css/image-gallery.css";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import {IconContext} from "react-icons"

import Card from "./modals/Card";
import { Link } from "react-router-dom";


export const card_datas = [
  roost_chook, roost_vulture,roost_penguin, roost_crow, roost_duck, roost_galah, roost_pigeon, roost_woodpecker, roost_bluejay, roost_kingfisher, roost_eagle, roost_peacock, roost_turkey, roost_goose, roost_cassowary, roost_bustard, roost_stork, roost_pelican, roost_flamingo, roost_chicken
]

function Home() {

  const [index, setIndex] = useState(0)

  const slideLeft = () => {
    if(index-1 < 0){
      return
    }
    setIndex(index - 1);
  };
  
  const slideRight = () => {
    if(index+1 > card_datas.length-1){
      return
    }
    setIndex(index + 1);
  };

  return (
    <div>
      <div
        class="container"
        style={{
          paddingBottom: "80px",
        }}
      >
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={coverphoto}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">
              <b>Roost</b>
            </h1>
            <p>
              a card game about strategy, memorisation, alliances and most
              importantly birds. Avoid being bottom of the pecking order, stay
              aligned with the flock and fly away to overall victory.
              <ul>
                <li>2-5 players</li>
                <li>10-30 minutes playtime</li>
                <li>Ages 14+</li>
                <li>Replayability 5 out of 5</li>
                <li>
                  <i>Expansions coming in the future </i>
                </li>
              </ul>
              <Link to="/purchase">
                <button
                  style={{
                    color: "white",
                    backgroundColor: "#EC2383",
                    fontSize: 20,
                    height: 40,
                    width: "100%",
                    border: "none",
                  }}
                >
                  Buy Now
                </button>
              </Link>
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center"
          }}
        >
          <div class="row" style={{width: "35%", alignItems: 'center'}}>
          <IconContext.Provider
      value={{ color: '#EC2383', size: '50px' }}
    >
          <BsFillArrowLeftSquareFill 
    onClick={slideLeft}
    className="leftBtn"></BsFillArrowLeftSquareFill>

            <Card front={card_datas[index]} />
            <BsFillArrowRightSquareFill 
     onClick={slideRight}
     className="rightBtn"
        />
              </IconContext.Provider>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
