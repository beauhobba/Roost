import React, { Text } from "react";
import coverphoto from "../images/coverphoto.png";
import roost_back from "../images/roost-111.png";

import roost_chook from "../images/-1.png";
import roost_vulture from "../images/-1_2.png";
import roost_penguin from "../images/0.png";
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
            <h1 class="font-weight-light"><b>Roost</b></h1>
            <p>
              a card game about strategy, memorisiation, alliances and most importantly birds. Avoid being bottom of the pecking order, stay aligned with the flock and fly away to overall victory.
              <ul>
                <li>2-5 players</li>
                <li>10-30 minutes playtime</li>
                <li>Ages 14+</li>
                <li>Replayability 5 out of 5</li>
                <li><i>Expansions coming in the future </i></li>
              </ul>
              <button style={{ color: "white", backgroundColor: "#EC2383", fontSize: 20, height: 40, width: 450, border: "none"}}>Buy Now</button>
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
            
          <Card front={roost_turkey} />
            <Card front={roost_goose} />
            <Card front={roost_cassowary} />
            <Card front={roost_bustard} />
            <Card front={roost_back} />
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;
