import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

import { Helmet } from "react-helmet";
import { Commitment, ContactScreen, How, AboutMe } from "./contact_screen";
import promo_13 from "../images/promos/promo_13.jpg";
import { API } from "aws-amplify";
import { font_families, colours } from "./styles";
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
      console.log('here')
      if (email == "") {
        setError("Please enter an email address");
        return;
      }
      if (isChecked == true){
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
      


      let data = { firstName: firstName, lastName: lastName, email: email, description: description, subject: subject };
      API.post(myAPI, "/Contact", { body: data })
        .then((response) => {
          console.log(response);
          setError("Message Sent");
        })
        .catch((error) => {
          console.log('Error')
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
                  src={promo_13}
                  alt=""
                />
              </div>
              
            </div>
          )}


<div  style={{width: "100%"}} >
          <ContactScreen/>
          <div style={{alignItems: 'flex-start', display: 'flex', flexDirection: 'column', paddingLeft: 10}}>
            <p>
              Need to get in touch, use the form below! 
            </p>
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
            <label>
              <b>*</b>Subject:
              <br></br>
              <input
                type="text"
                value={subject}
                onChange={handleChangeSubject}
                style={{
                  width: "100%",
                  height: 100
                }}
              />
            </label>
            <label>
              <b>*</b>Description:
              <br></br>
              <input
                type="text"
                value={description}
                onChange={handleChangeDescription}
                style={{
                  width: "100%",
                  height: 100
                }}
              />
            </label>
            <label class="checkbox" for="newsletter">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Do you want to sign up to the newsletter?
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
                marginBottom: 20
              }}
            >
              Send Email
            </button>

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
  );
}

export default Contact;
