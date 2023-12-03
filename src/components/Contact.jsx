import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

import { Helmet } from "react-helmet";
import { Commitment, ContactScreen, How, AboutMe } from "./contact_screen";
import promo_13 from "../images/promos/promo_13.jpg";
import { API } from "aws-amplify";
import { font_families, colours } from "./styles";

import { RoostButton } from "./modals";
const myAPI = "Contact";
const otherAPI = "mailchimp";

function Contact() {
  const [direction, setDirection] = useState("row");
  const [buttonFontSize, setButtonFontSize] = useState(20);
  const [textContSize, setTextContSize] = useState("100%");
  const [sideImgSize, setSideImgSize] = useState("100%");
  const [logoSize, setLogoSize] = useState("40%");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [error, setError] = React.useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangeFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleChangeLastName(event) {
    setLastName(event.target.value);
  }
  function handleChangeSubject(event) {
    setSubject(event.target.value);
  }
  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  //Function to fetch from our backend and update customers array
  function addEmail(e) {
    if (email == "") {
      setError("Please enter an email address");
      return;
    }
    if (isChecked == true) {
      let data = { firstName: firstName, lastName: lastName, email: email };
      API.post(otherAPI, "/mailchimp", { body: data })
        .then((response) => {
          console.log(response);
          setError("Thankyou for joining the waitlist!");
        })
        .catch((error) => {
          setError("There was an error with joining the waitlist");
        });
    }

    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      description: description,
      subject: subject,
    };

    API.post(myAPI, "/Contact", { body: data })
      .then((response) => {
        console.log(response);
        setError("Message Sent");
      })
      .catch((error) => {
        console.log("Error");
        setError("There was an error with sending your message");
      });
  }

  useEffect(() => {
    if (isMobile) {
      setButtonFontSize(14);
      setTextContSize("100%");
      setLogoSize("80%");
      setSideImgSize("100%");
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      setDirection("column");
    }
  }, []);

  return (
    <div style={{ paddingBottom: 100 }}>
      <Helmet>
        <title>Contact - roostgame.com</title>
        <meta
          name="description"
          content="Contact our team using the following links"
        />
      </Helmet>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: direction,
            justifyContent: "center",

            fontFamily: font_families.roost,
          }}
        >

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: sideImgSize,
                alignItems: "center",

              }}
            >
              {/* <div style={{ width: "100%" }}>
                <img
                  class="img-fluid rounded mb-4 mb-lg-0"
                  src={promo_13}
                  alt=""
                />
              </div> */}
              <ContactScreen />
            </div>


          <div style={{ width: "100%" }}>
            <div
              style={{
                padding: 30,
              }}
            >
              <div
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  padding: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h1>Contact Us</h1>
                <p style={{ marginBottom: 0 }}>
                  If you need to get in touch, use the following form! If you are a retailer, please express your company name and phone number in the description. 
                </p>
                <label
                  style={{ marginBottom: 0, width: "60%", display: "block" }}
                >
                  First Name:
                  <br></br>
                  <input
                    type="text"
                    value={firstName}
                    onChange={handleChangeFirstName}
                    style={{ width: "100%", boxSizing: "border-box" }}
                  />
                </label>
                <label
                  style={{ marginBottom: 0, width: "60%", display: "block" }}
                >
                  Last Name:
                  <br></br>
                  <input
                    type="text"
                    value={lastName}
                    onChange={handleChangeLastName}
                    style={{ width: "100%", boxSizing: "border-box" }}
                  />
                </label>
                <label
                  style={{ marginBottom: 0, width: "60%", display: "block" }}
                >
                  <b>*</b>Email:
                  <br></br>
                  <input
                    type="text"
                    value={email}
                    onChange={handleChangeEmail}
                    style={{ width: "100%", boxSizing: "border-box" }}
                  />
                </label>
                <label
                  style={{ marginBottom: 0, width: "60%", display: "block" }}
                >
                  <b>*</b>Subject:
                  <br></br>
                  <input
                    type="text"
                    value={subject}
                    onChange={handleChangeSubject}
                    style={{ width: "100%", boxSizing: "border-box" }}
                  />
                </label>
                <label
                  style={{ marginBottom: 0, width: "60%", display: "block" }}
                >
                  <b>*</b>Description:
                  <br></br>
                  <textarea
                    type="text"
                    value={description}
                    onChange={handleChangeDescription}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      height: 100,
                    }}
                  />
                </label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <label class="checkbox" for="newsletter">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                  </label>

                  <p style={{ paddingLeft: 10 }}>
                    Do you want to sign up to the newsletter?
                  </p>
                </div>
                <br></br>
                <p>
                  <i>{error}</i>
                </p>
                <RoostButton
                  text="Send Message"
                  action={addEmail}
                ></RoostButton>
              </div>
            </div>

            {/* <Commitment style={{width: "50%"}}/> */}
          </div>
          <div
            style={{
              backgroundColor: colours.roost_pink,
              height: "100px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: direction,
              justifyContent: "center",
              paddingTop: 20,
            }}
          >
            {/* <AboutMe style={{width: "50%"}}/>
          <How style={{width: "50%"}} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
