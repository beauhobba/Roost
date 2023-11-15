import React, { Text, useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { FaGamepad } from "react-icons/fa";
import { GiDirectorChair, GiCardRandom } from "react-icons/gi";
import { BiTestTube, BiFirstPage } from "react-icons/bi";
import { Helmet } from "react-helmet";
import { font_families } from "./styles";

import coverphoto from "../images/card_flip.gif";

function Supporters() {
  const [posts, setPosts] = useState([]);
  const [logoSize, setLogoSize] = useState("50%");
  const [shapeSize, setShapeSize] = useState("50%");
  useEffect(() => {
    if (isMobile) {
      setLogoSize("60%");
      setShapeSize("100%");
    }
  }, []);

  return (
    <div className="contact" style={{ paddingBottom: 100 }}>
      <Helmet>
        <title>Supporters - roostgame.com</title>
        <meta
          name="description"
          content="All supporters of the Roost Kickstarter Launch"
        />
      </Helmet>

      <div style = {{fontFamily: font_families.roost,}}>
        <div class="row align-items-center my-5">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: shapeSize,
              alignItems: "center",
            }}
          >
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={coverphoto}
              alt=""
              style={{ alignSelf: "center", width: logoSize }}
            />
          </div>

          <div class="col-lg-5" style={{padding: 20}}>
            <h1 class="font-weight-light">
              <b>Patrons</b>
            </h1>
            <p>
              <i>
                It would be impossible to fully design a game without some help.
                I am forever grateful for the people who have supported me along
                this journey.{" "}
              </i>
            </p>

            <h2 class="font-weight-light">Game Creator</h2>
            <ul>
              <li>Beau Hobba</li>
            </ul>

            <h2 class="font-weight-light">Early Helpers</h2>
            <p>These people helped design the game</p>
            <ul>
              <li>
                <FaGamepad />
                {"\t"}Julia Tan
              </li>
              <li>
                <FaGamepad />
                {"\t"}Tristen Hobba
              </li>
              <li>
                <GiDirectorChair />
                {"\t"}Talin Roche
              </li>
              <li>
                <BiFirstPage />
                <FaGamepad />
                {"\t"}Stephen Lowe
              </li>
              <li>
                <FaGamepad />
                {"\t"}Daniel Wong
              </li>
              <li>
                <FaGamepad />
                <GiCardRandom />
                {"\t"}Jack Spiggle
              </li>
            </ul>

            <h2 class="font-weight-light">Initial Playtesters</h2>
            <p>
              These people helped test the rules and crease out any broken game
              mechanics <BiTestTube />
            </p>

            <ul>
              <li>Steven Gonzalez</li>
              <li>Jarod Reynolds</li>
              <li>Alex Liang</li>
              <li>Zac Hobba</li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              paddingTop: "30px",
            }}
          >
            <div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "black",
                  height: "2px",
                  opacity: "15%",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center",
                  paddingTop: "30px",
                }}
              >
                <h2 class="font-weight-light">Funders</h2>
                <p>
                  These people helped make <b>Roost</b> a reality
                </p>
                <p>
                  <i>
                    Any person that supports the Kickstarter will be put here!
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supporters;
