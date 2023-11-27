import React, { useState, useEffect } from "react";
import box from "../images/box.gif";
import rich_rooster from "../images/newbird.png";
import { isMobile } from "react-device-detect";
import { API } from "aws-amplify";
import { Helmet } from "react-helmet";
import { font_families } from "./styles";
const myAPI = "mailchimp";

function Purchase() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [logoSize, setLogoSize] = useState("40%");
  const [shapeSize, setShapeSize] = useState("50%");
  const [direction, setDirection] = useState("row");
  useEffect(() => {
    if (isMobile) {
      setLogoSize("70%");
      setShapeSize("100%");
      setDirection("column");
    }
  }, []);

  //Function to fetch from our backend and update customers array
  function addEmail(e) {
    if (email == "") {
      setError("Please enter an email address");
      return;
    }
    let data = { firstName: firstName, lastName: lastName, email: email };
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

  return (
    <div
      className="about"
      style={{
        paddingBottom: 100,
        fontFamily: font_families.roost
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
            padding: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: shapeSize,
              alignItems: "center",
            }}
          >
            <p style={{paddingTop: 20}}>
          Sign up pre-Kickstarter for an extra card in your physical package!
            </p>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={rich_rooster}
              alt=""
              style={{ alignSelf: "center", width: logoSize}}
            />

          </div>
          <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <h1 class="font-weight-light">
              <b>Pre-launch</b>
            </h1>
            <p>Subscribe below to be notified of the kickstarter launch:</p>

            <label style={{marginBottom: 0}}>
              First Name:
              <br></br>
              <input
                type="text"
                value={firstName}
                onChange={handleChangeFirstName}
              />
            </label>
            <label style={{marginBottom: 0}}>
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

            <br></br>
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
              }}
            >
              Join Waiting List
            </button>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
