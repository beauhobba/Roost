import React, { Text, useState, useEffect } from "react";
import {
  AiTwotoneMail,
  AiFillInstagram,
  AiFillYoutube,
  AiFillShopping,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import environmentgif from "../images/Comp-2.gif";
import { isMobile } from "react-device-detect";
import birdbox from "../images/birdbox.png";
import easset from "../images/environment_asset1.png";
import easset2 from "../images/environment_asset2.png";
import { Helmet } from "react-helmet";

function Contact() {
  const [logoSize, setLogoSize] = useState("40%");
  const [imgSize, setimgSize] = useState("25%");

  useEffect(() => {
    if (isMobile) {
      setLogoSize("100%");
      setimgSize("30%");
    }
  }, []);

  return (
    <div className="contact" style={{ paddingBottom: 100 }}>
      <Helmet>
        <title>Contact - roostgame.com</title>
        <meta
          name="description"
          content="Contact our team using the following links"
        />
      </Helmet>

      <div class="container">
        <div class="row align-items-top my-5">

          

        <div class="col-lg-5">
            <h1 class="font-weight-light">
              <b>Our Commitment</b>
            </h1>
            <p>
              The Roost team will be using a percentage from every game purchase
              to support bird conservation. Being an Australia based company
              this money will be used to aid local wildlife by building bird
              boxes. <br></br>
              We hope that we can spread awareness of factors impacting our
              avian friends and help ensure we continue to see winged species in
              the wild.
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
              Being a paper based game, we are aware that our game directly impacts a primary environment of birds (trees). <br/>
              It is estimated that one tree produces around <i>11500</i> standard playing card decks. Roost being larger than a
              features a game box and a rule book;  estimate that one tree roughly produces <b>6000</b> games of Roost. <br/><br/>
              Promoting being net positive, we will plant a tree with every <b>2000</b> games of Roost sold. The coordinates of each tree will be featured here.
              <br/>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <img src={easset} style={{ width: imgSize*1.2 }}></img>
              </div>
            </p>
          </div>



          <div class="col-lg-5">
            <h1 class="font-weight-light">
              <b>About</b>
            </h1>
            <p>
              <i>
                Contact our team using the following email. Follow our social
                media and support the kickstarter
              </i>
              <br></br>
              <br></br>
              <AiTwotoneMail /> roostgame@gmail.com
              <br></br>
              <AiFillInstagram />{" "}
              <a href="https://www.instagram.com/roostgame/"  target="_blank">Instagram</a>
              <br></br>
              <AiFillYoutube />{" "}
              <a href="https://www.youtube.com/@Roostgame" target="_blank">Youtube</a>
              <br></br>
              <FaTiktok />{" "}
              <a href="https://www.tiktok.com/@roostgame?_t=8e8xO22xcvQ&_r=1" target="_blank">TikTok</a>
              <br></br>
              <AiFillTwitterCircle />{" "}
              <a href="https://twitter.com/RoostCardGame" target="_blank">Twitter</a>
              <br></br>
              <AiFillShopping />{" "}
              <a href="https://www.instagram.com/roostgame/" target="_blank">
                Kickstarter (coming soon)
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
