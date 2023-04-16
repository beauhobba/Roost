import React, { Text, useState, useEffect } from "react";
import about_photo from "../images/coverphoto.png";
import box from "../images/box.gif";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import {Amplify, API } from 'aws-amplify'

const myAPI = "mailchimp"



function Skills() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [logoSize, setLogoSize] = useState('40%');
  useEffect(() => {
    if (isMobile) {
      setLogoSize('100%');
    }
  }, []);


  //Function to fetch from our backend and update customers array
  function addEmail(e) {
    if(email == ""){
      setError("Please enter an email address")
      return
    }
    let data = {firstName: firstName,
    lastName: lastName,
    email: email}
    API.post(myAPI, "/mailchimp", {body: data})
       .then(response => {
         console.log(response)
         setError("Thankyou for joining the waitlist!")

       })
       .catch(error => {
        setError("There was an error with joining the waitlist")
       })
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
      }}
    >
      <div class="container">
        <div class="row align-items-center my-5">
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: logoSize,
            alignItems: "center",
          }}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={box}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light"><b>Pre-launch</b></h1>
            <p>
              Subscribe below to be notified of the kickstarter launch:

            </p>

            <label>
            First Name:
            <br></br>
            <input type="text" value={firstName} onChange={handleChangeFirstName}/>
            </label>
            <br></br>
            <label>
            Last Name:
            <br></br>
            <input type="text" value={lastName} onChange={handleChangeLastName}/>
            </label>
            <br></br>
            <label>
            <b>*</b>Email:
            <br></br>
            <input type="text" value={email} onChange={handleChangeEmail}                   style={{
                    width: "100%",
                  }}/>
            </label>

            <br>
            </br>
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

export default Skills;
