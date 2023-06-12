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

function Contact() {
  const [logoSize, setLogoSize] = useState("40%");
  const [imgSize, setimgSize] = useState("15%");

  useEffect(() => {
    if (isMobile) {
      setLogoSize("100%");
      setimgSize("30%");
    }
  }, []);

  return (
    <div className="contact" style={{ paddingBottom: 100 }}>
      <div class="container">
        <div class="row align-items-center my-5">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: logoSize,
              alignItems: "center",
            }}
          >
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={environmentgif}
              alt=""
            />
          </div>
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
              <br></br>*
              <i>
                Our kickstarter goals will be aimed at increasing this
                contribution
              </i>
            </p>
            <br></br>

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
              <a href="https://www.instagram.com/roostgame/">Instagram</a>
              <br></br>
              <AiFillYoutube />{" "}
              <a href="https://www.youtube.com/@Roostgame">Youtube</a>
              <br></br>
              <FaTiktok />{" "}
              <a href="https://www.youtube.com/@Roostgame">TikTok</a>
              <br></br>
              <AiFillTwitterCircle />{" "}
              <a href="https://twitter.com/RoostCardGame">Twitter</a>
              <br></br>
              <AiFillShopping />{" "}
              <a href="https://www.instagram.com/roostgame/">
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
