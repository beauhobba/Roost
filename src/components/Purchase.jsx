import React, { useState, useEffect } from "react";
import kickstarter from "../images/kickstarter.png";
import rich_rooster from "../images/newbird.png";
import post from "../images/post.gif";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { API } from "aws-amplify";
import { Helmet } from "react-helmet";
import { colours, font_families } from "./styles";
import "./NotificationAnimation.css"; // Import the CSS file with animations

const myAPI = "mailchimp";

const NonStickyNotificationBar = (props) => {
  const [showNotification, setShowNotification] = useState(true);

  const notificationStyle = {
    justify: "flex",
    display: showNotification ? "block" : "none",

    width: props.mobile ? "90%" : "100%",
    backgroundColor: "#fff",
    color: colours.roost_pink,

    zIndex: 999, // Ensure it's above other elements
    padding: 20,
    borderRadius: "10px", // Rounded corners
    border: "2px solid " + colours.roost_pink, // White outline
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
          width: "100%",
        }}
      >
        <img
          src={kickstarter}
          alt="Notification icon"
          style={{ width: "70px", marginRight: "30px" }}
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
              Kickstarter Link{" "}
            </p>
            <p style={{ margin: 0 }}>
              Click here to sign up to the Roost Pre-Launch Kickstarter.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

const NonStickyNotificationBarCool = (props) => {
  const [showNotification, setShowNotification] = useState(true);

  const notificationStyle = {
    justify: "flex",
    display: showNotification ? "block" : "none",

    width: props.mobile ? "90%" : "100%",
    backgroundColor: "#fff",
    color: colours.roost_pink,

    zIndex: 999, // Ensure it's above other elements
    padding: 20,
    borderRadius: "10px", // Rounded corners
    border: "2px solid " + colours.roost_pink, // White outline
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
          width: "100%",
        }}
      >
        <img
          src={rich_rooster}
          alt="Notification icon"
          style={{ width: "70px", marginRight: "30px" }}
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
              Rich Rooster{" "}
            </p>
            <p style={{ margin: 0 }}>
              Sign up to the kickstarter pre-launch list and our mailing list
              below for a free Rich Rooster card*{" "}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

const StickyNotificationBar = (props) => {
  const [showNotification, setShowNotification] = useState(true);

  const notificationStyle = {
    display: showNotification ? "block" : "none",
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: props.mobile ? "90%" : "100%",
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
          src={rich_rooster}
          alt="Notification icon"
          style={{ width: "100px", marginRight: "30px" }}
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
              Rich Rooster{" "}
            </p>
            <p style={{ margin: 0 }}>
              Sign up to the kickstarter pre-launch list and our mailing list
              below for a free Rich Rooster card*{" "}
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

function Purchase() {
  const [firstName, setFirstName] = React.useState("");
  const [refer, setRefer] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [logoSize, setLogoSize] = useState("40%");
  const [shapeSize, setShapeSize] = useState("52%");
  const [direction, setDirection] = useState("row");
  const [mobileDevice, setMobileDevice] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setLogoSize("70%");
      setShapeSize("100%");
      setDirection("column");
      setMobileDevice(true);
    }
  }, []);

  //Function to fetch from our backend and update customers array
  function addEmail(e) {
    if (email == "") {
      setError("Please enter an email address");
      return;
    }
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      refer: refer,
    };
    API.post(myAPI, "/mailchimp", { body: data })
      .then((response) => {
        console.log(response);
        setError("Thankyou for joining the waitlist!");
      })
      .catch((error) => {
        setError("There was an error with joining the waitlist");
      });
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangeFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleChangeLastName(event) {
    setLastName(event.target.value);
  }
  function handleChangeRefer(event) {
    setRefer(event.target.value);
  }
  return (
    <div
      className="about"
      style={{
        paddingBottom: 100,
        fontFamily: font_families.roost,
      }}
    >
      <Helmet>
        <title>Purchase - roostgame.com</title>
        <meta
          name="description"
          content="Subscribe to the Kickstarter launch"
        />
      </Helmet>

      <div class="container">
        <div
          style={{
            display: "flex",
            flexDirection: direction,
          }}
        >
          {mobileDevice ? null : (
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
                src={post}
                alt=""
                style={{ alignSelf: "center", width: "100%" }}
              />
            </div>
          )}

          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              paddingTop: 20
            }}
          >
            <h1 class="font-weight-light">
              <b>Pre-launch</b>
            </h1>
            <p>
              Join the mailing list below to be notified of any Roost related
              news
            </p>

            <label style={{ marginBottom: 0 }}>
              *First Name:
              <br></br>
              <input
                type="text"
                value={firstName}
                onChange={handleChangeFirstName}
              />
            </label>
            <label style={{ marginBottom: 0 }}>
              Last Name:
              <br></br>
              <input
                type="text"
                value={lastName}
                onChange={handleChangeLastName}
              />
            </label>
            <label>
              <b>*</b>Email:
              <br></br>
              <input
                type="text"
                value={email}
                onChange={handleChangeEmail}
                style={{
                  width: "100%",
                }}
              />
            </label>
            <label>
              Referral Email:
              <br></br>
              <input
                type="text"
                value={refer}
                onChange={handleChangeRefer}
                style={{
                  width: "100%",
                  margin: 0,
                }}
              />
            </label>
            <div style={{padding: 10, width: '100%'}}>
            <p>
              <i>{error}</i>
            </p>
            <button
              onClick={addEmail}
              style={{
                color: "white",
                backgroundColor: "#EC2383",
                fontSize: 20,
                height: 40,
                width: "100%",
                border: "none",
                marginBottom: 30,

              }}
            >
              Join Waiting List
            </button>
            </div>


            <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 10,
          width: "100%",
          padding: 10
        }}
      >
        <NonStickyNotificationBarCool mobile={mobileDevice} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          paddingLeft: 10,
          paddingRight: 10
        }}
      >
        <NonStickyNotificationBar mobile={mobileDevice} />
      </div>
            
          </div>

          
        </div>


        
      </div>



      <div style={{ padding: 20, marginTop: 30 }}>
        <p style={{ fontSize: 10 }}>
          * You must purchase a copy of Roost to obtain the Rich Rooster card.
          If the Kickstarter is not successful, applicants will not receive a
          Rich Rooster card
        </p>
      </div>
    </div>
  );
}

export default Purchase;
