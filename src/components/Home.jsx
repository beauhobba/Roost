import React, { Text } from "react";
import coverphoto from "../images/coverphoto.png";
import heinkein_arm from "../images/robot_arms_heinkein.png";
import weed_farm from "../images/weed_farm.png";
import cooking_robot from "../images/cooking_robot.png";
import roost_back from "../images/roost-74.png";

import roost_chook from "../images/roost-02.png";
import roost_vulture from "../images/-1_2.png";
import roost_penguin from "../images/roost-04.png";
import roost_galah from "../images/roost-28.png";
import roost_pigeon from "../images/roost-38.png";
import roost_woodpecker from "../images/roost-50.png";
import roost_bluejay from "../images/roost-52.png";
import roost_kingfisher from "../images/7.png";
import roost_eagle from "../images/roost-74.png";
import roost_peacock from "../images/roost-76.png";
import roost_goose from "../images/roost-86.png";
import roost_cassowary from "../images/roost-98.png";
import roost_bustard from "../images/roost-110.png";
import roost_turkey from "../images/10_3.png";


import CardTile from "./cards/CardTile";
import "react-image-gallery/styles/css/image-gallery.css";

import CardDisplay from "../images/mockup.png";

import Heineken from "./modals/Heineken";
import Card from "./modals/Card";
import HerbicideMapping from "./modals/HerbicideMapping";
import Robotatouille from "./modals/Robotatouille";

function Home() {
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
            <h1 class="font-weight-light">This is Roost</h1>
            <p>
              a 2-5 player game about strategy, memory, alliances and birds...
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div class="row">
            <Card front={roost_chook} />
            <Card front={roost_vulture} />
            <Card front={roost_penguin} />
            <Card front={roost_galah} />
            <Card front={roost_pigeon} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <div class="row">
            <Card front={roost_woodpecker} />
            <Card front={roost_bluejay} />
            <Card front={roost_kingfisher} />
            <Card front={roost_eagle} />
            <Card front={roost_peacock} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <div class="row">
            
          <Card front={roost_goose} />
            <Card front={roost_goose} />
            <Card front={roost_cassowary} />
            <Card front={roost_bustard} />
            <Card front={roost_turkey} />
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;
