import React, { useState, useEffect } from "react";
import coverphoto from "../images/coverphoto.png";
import promo_1 from "../images/promos/promo_1.jpg";
import promo_2 from "../images/promos/promo_2.jpg";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";

import "react-image-gallery/styles/css/image-gallery.css";

import { Link } from "react-router-dom";

import { CardDisplay } from "./display";
import { FaBorderNone } from "react-icons/fa";

function Home() {
  const [buttonFontSize, setButtonFontSize] = useState(20);
  const [textContSize, setTextContSize] = useState("100%");
  const [sideImgSize, setSideImgSize] = useState("50%");
  const [logoSize, setLogoSize] = useState("40%");

  useEffect(() => {
    if (isMobile) {
      setButtonFontSize(14);
      setTextContSize("100%");
      setLogoSize("80%");
      setSideImgSize("100%");
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home - roostgame.com</title>
        <meta
          name="description"
          content="Roost is a 2 to 6 player card game about strategy, memorisation, alliances and most importantly birds. It has a 30 minutes to 1 hour playtime and features beautiful cards with some cool birds."
        />
      </Helmet>
      <div
        class="container"
        style={{
          paddingBottom: 100,
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",

            paddingBottom: 100,
          }}
        >
          {~isMobile ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: sideImgSize,
                alignItems: "center",
                padding: 20,
              }}
            >
              <div style={{ width: "75%" }}>
                <img
                  class="img-fluid rounded mb-4 mb-lg-0"
                  src={promo_2}
                  alt=""
                />
              </div>
            </div>
          ) : null}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: sideImgSize,
              alignItems: "center",
              paddingTop: 20,
            }}
          >
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
                  <li>2-6 players</li>
                  <li>10-30 minutes playtime</li>
                  <li>Ages 14+</li>
                  <li>
                    Replayability <font color={"#cfb82d"}>★★★★★</font>
                  </li>
                  <li>
                    <i>
                      Micro Expansion: <b>Feathers in the Game</b> kickstarter
                      exclusive{" "}
                    </i>
                  </li>
                  <li>
                    <i>
                      Expansion: <b>Parliament, Gangs and Murder</b> coming in
                      the future{" "}
                    </i>
                  </li>
                </ul>
                <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to="/purchase">
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "#EC2383",

                      fontSize: buttonFontSize,
                      height: 40,
                      width: "100%",
                      paddingLeft: 20,
                      paddingRight: 20,
                      border: "none",
                    }}
                  >
                    Join the Waiting List
                  </button>
                </Link>
                </div>
              </p>
            </div>
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

            <CardDisplay type={false} />
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

            <CardDisplay type={true} />
          </div>
        </MobileView>
      </div>
    </div>
  );
}

export default Home;
