import React from "react";
import about_photo from "../images/coverphoto.png";
import {Amplify, API } from 'aws-amplify'

const myAPI = "mailchimp"


function Skills() {
  const [firstName, setFirstName] = React.useState("Bozo");
  const [lastName, setLastName] = React.useState("Carrot");
  const [email, setEmail] = React.useState("BozoCarrot@gmail.com");


  //Function to fetch from our backend and update customers array
  function addEmail(e) {
    let data = {firstName: firstName,
    lastName: lastName,
    email: email}
    API.post(myAPI, "/mailchimp", {body: data})
       .then(response => {
         console.log(response)

       })
       .catch(error => {
         console.log(error)
       })
  }


  return (
    <div
      className="about"
      style={{
        paddingBottom: "80px",
      }}
    >
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={about_photo}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light"><b>Purchase</b></h1>
            <p>
              Currently the kickstarter is the only way to obtain <i>Roost</i>
              <br></br>
              To get notified to the lauch of the kickstarter, subscribe below:

            </p>
            <button
            onClick={addEmail}
                  style={{
                    color: "white",
                    backgroundColor: "#EC2383",
                    fontSize: 20,
                    height: 40,
                    width: 200,
                    border: "none",
                  }}
                >
                  Clicker
                </button>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
