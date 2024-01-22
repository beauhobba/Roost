import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";

const myAPI = "mailchimp";

function PurchaseModule() {
  const [firstName, setFirstName] = React.useState("");
  const [refer, setRefer] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");

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
    <>
      <label style={{ marginBottom: 0 }}>
        *First Name:
        <br></br>
        <input type="text" value={firstName} onChange={handleChangeFirstName} />
      </label>
      <label style={{ marginBottom: 0 }}>
        Last Name:
        <br></br>
        <input type="text" value={lastName} onChange={handleChangeLastName} />
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
      <div style={{ padding: 10, width: "100%" }}>
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
    </>
  );
}

export default PurchaseModule;
