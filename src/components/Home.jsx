import React, { useState, useEffect } from "react";
import coverphoto from "../images/coverphoto.png";
import promo_12 from "../images/promos/promo_12.jpg";
import kickstarter from "../images/kickstarter.png";
import box_gif from "../images/box.gif";

import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";

import "react-image-gallery/styles/css/image-gallery.css";

import { Link } from "react-router-dom";

import { CardDisplay } from "./display";
import { Loading } from "./modals";
import { colours, font_families } from "./styles";
import { FaFeather } from "react-icons/fa"; // Import a bird icon from a popular icon library
import { RoostButton } from "./modals";
import { PurchaseModule } from "./purchase_modules";
import "./NotificationAnimation.css"; // Import the CSS file with animations

const StickyNotificationBar = (props) => {
  const [showNotification, setShowNotification] = useState(true);


  useEffect(() => {
    // Retrieve showNotification value from localStorage or use true if not found
    const storedShowNotification = JSON.parse(localStorage.getItem("showNotificationBar"));
    setShowNotification(storedShowNotification !== null ? storedShowNotification : true);
  }, []);

  useEffect(() => {
    // Save showNotification value to localStorage whenever it changes
    localStorage.setItem("showNotificationBar", JSON.stringify(showNotification));
  }, [showNotification]);


  const notificationStyle = {
    display: showNotification ? "block" : "none",
    position: "fixed",
    top: "65%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: props.mobile ? "90%" : "30%",
    backgroundColor: "#fff",
    color: colours.roost_pink,
    justify: "center",
    zIndex: 999, // Ensure it's above other elements
    padding: 20,
    borderRadius: "10px", // Rounded corners
    border: "2px solid " + colours.roost_pink, // White outline
    animation: "jitter 1s ease infinite, bounce 1s ease infinite", // Apply the animations
  };

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <div style={notificationStyle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <img
          src={kickstarter}
          alt="Notification icon"
          style={{ width: "30px", marginRight: "30px" }}
        />
        <a
          className="e-widget no-button"
          href="https://www.kickstarter.com/projects/roostgame/roost-0"
          rel="nofollow"
          style={{ color: "#000", textDecoration: "none", margin: 0 }}
        >
          <div>
            <p style={{ margin: 0, fontWeight: "bold", fontSize: 20 }}>
              {" "}
              Kickstarter Pre-Launch{" "}
            </p>
            <p style={{ margin: 0 }}>
              Click here to sign up to the Roost Pre-Launch Kickstarter for
              early bird deals!{" "}
            </p>
          </div>
        </a>
        <button
          onClick={handleClose}
          style={{
            color: "#000",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            paddingLeft: 10,
          }}
        >
          &#x2715; {/* Close icon */}
        </button>
      </div>
    </div>
  );
};

const StickyNotificationGleam = (props) => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    // Retrieve showNotification value from localStorage or use true if not found
    const storedShowNotification = JSON.parse(localStorage.getItem("showNotification"));
    setShowNotification(storedShowNotification !== null ? storedShowNotification : true);
  }, []);

  useEffect(() => {
    // Save showNotification value to localStorage whenever it changes
    localStorage.setItem("showNotification", JSON.stringify(showNotification));
  }, [showNotification]);



  const notificationStyle = {
    display: showNotification ? "block" : "none",
    position: "fixed",
    top: "83%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: props.mobile ? "90%" : "30%",
    backgroundColor: "#fff",
    color: colours.roost_pink,
    justify: "center",
    zIndex: 999, // Ensure it's above other elements
    padding: 20,
    borderRadius: "10px", // Rounded corners
    border: "2px solid " + colours.roost_pink, // White outline
    animation: "swivel 1s ease-in-out infinite", // Apply the animations
  };

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <div style={notificationStyle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <img
          src={box_gif}
          alt="Notification icon"
          style={{ width: "30px", marginRight: "30px" }}
        />
        <a
          className="e-widget no-button"
          href="https://gleam.io/G4wK2/roost-card-game-giveaway"
          rel="nofollow"
          style={{ color: "#000", textDecoration: "none", margin: 0 }}
        >
          <div>
            <p style={{ margin: 0, fontWeight: "bold", fontSize: 20 }}>
              {" "}
              Game Giveaway{" "}
            </p>
            <p style={{ margin: 0 }}>
              Click here for your chance at winning Roost early{" "}
            </p>
          </div>
        </a>
        <button
          onClick={handleClose}
          style={{
            color: "#000",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            paddingLeft: 10,
          }}
        >
          &#x2715; {/* Close icon */}
        </button>
      </div>
    </div>
  );
};

const OpaqueImage = () => {
  const containerStyle = {
    width: "100%",
    position: "relative",
  };

  const overlayStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background:
      "linear-gradient(to right, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.3) 93%, rgba(255, 255, 255, 1))",
    pointerEvents: "none",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "10px", // Adjust as needed
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <img
        className="img-fluid rounded mb-4 mb-lg-0"
        src={promo_12}
        alt=""
        style={imageStyle}
      />
    </div>
  );
};

function Home() {
  const [mobileDevice, setMobileDevice] = useState(false);
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
      setScreenSize("400px");
      setMobileDevice(true);
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: { screenSize },
      }}
    >
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
        {mobileDevice ? (
          <>
            <StickyNotificationBar mobile={mobileDevice} />
            <StickyNotificationGleam mobile={mobileDevice} />
          </>
        ) : null}

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
              <OpaqueImage />
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
Subscribe to our mailing list to stay updated on all Roost-related news and receive an exclusive card upon launch.
                </button>
              </Link>
            </div>

            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                padding: 20
              }}
            >

              <PurchaseModule />
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
            {/* <Loading /> */}
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
