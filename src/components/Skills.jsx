import React from "react";
import about_photo from "../images/coverphoto.png";
import SkillBar from "react-skillbars";
import MailchimpSubscribe from "react-mailchimp-subscribe";


const url = "//roostgame.us14.list-manage.com/about?u=f132f025453279d8e2ece61ae&id=fc4e154587"
// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>


function Skills() {
  const [emailValue, setEmailValue] = React.useState("");
  const [fNamevalue, setfNamevalue] = React.useState("");
  const [lNameValue, setlNameValue] = React.useState("");
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
            <h1 class="font-weight-light">Purchase Roost</h1>
            <p>
              Currently the kickstarter is the only way to obtain <i>Roost</i>
              <br></br>
              To get notified to the lauch of the kickstarter, subscribe below:

            </p>
            <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />


          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
