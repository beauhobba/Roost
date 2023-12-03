import React, { useState, useEffect } from "react";
import coverphoto from "../images/coverphoto.png";
import promo_12 from "../images/promos/promo_12.jpg";

import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";

import "react-image-gallery/styles/css/image-gallery.css";

import { Link } from "react-router-dom";

import { CardDisplay } from "./display";
import { Loading } from "./modals";
import { colours, font_families } from "./styles";
import { FaFeather } from "react-icons/fa"; // Import a bird icon from a popular icon library
import {RoostButton} from "./modals"


function Home() {
  const [buttonFontSize, setButtonFontSize] = useState(20);
  const [textContSize, setTextContSize] = useState("100%");
  const [sideImgSize, setSideImgSize] = useState("50%");
  const [logoSize, setLogoSize] = useState("40%");
  const [screenSize, setScreenSize] = useState("4000px");


  useEffect(() => {
    if (isMobile) {
      setButtonFontSize(14);
      setTextContSize("100%");
      setLogoSize("80%");
      setSideImgSize("100%");
      setScreenSize("400px")
    }
  }, []);

  return (
    <div style={{
      position: "relative",
      height: {screenSize},
    }}>
      <Helmet>
        <title>Home - roostgame.com</title>
        <meta
          name="description"
          content="Roost is a 2 to 6 player card game about strategy, memorisation, alliances and most importantly birds. It has a 30 minutes to 1 hour playtime and features beautiful cards with some cool birds."
        />
      </Helmet>
      <div
        style={{
          paddingBottom: 100,
          flexDirection: "row",
          fontFamily: font_families.roost,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          {isMobile ? null : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: sideImgSize,
                alignItems: "center",
              }}
            >
              <div style={{ width: "100%" }}>
                <img
                  class="img-fluid rounded mb-4 mb-lg-0"
                  src={promo_12}
                  alt=""
                />
              </div>
            </div>
          )}

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
                paddingLeft: 20,
                paddingRight: 20,
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
                      Micro Expansion: Feathers in the Game included with
                      kickstarter version
                    </i>
                  </li>
                </ul>
              </p>
              <Link to="/purchase">
              <RoostButton text="Join the Waiting List"></RoostButton>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Link to="/purchase">
            <button
              style={{
                color: "white",
                backgroundColor: colours.roost_pink,

                fontSize: buttonFontSize,
                height: 80,
                width: "100%",
                paddingLeft: 20,
                paddingRight: 20,
                border: "none",
              }}
            >
              Meet the Birds
            </button>
          </Link>

          <BrowserView>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                paddingTop: 20,
              }}
            >
              <CardDisplay type={false} />
            </div>

            <div
          style={{
            backgroundColor: colours.roost_pink,
            height: "100px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>

          </BrowserView>
          <MobileView>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                paddingTop: 35,
              }}
            >
              <CardDisplay type={true} />
            </div>
          </MobileView>
        </div>


      </div>
        {isMobile ? null : (
          <>
            <div style={{ height: "50px" }}></div>
            <div
              style={{
                position: "sticky",
                top: "20%",
                transform: "translateY(-0%)",
                padding: "10px",
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Loading />
            </div>

            <div
              style={{
                backgroundColor: colours.roost_pink,
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            ></div>
          </>
        )}
      </div>
  );
}

export default Home;
