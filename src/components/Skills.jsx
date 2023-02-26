import React from "react";
import about_photo from "../images/coverphoto.png";
import SkillBar from "react-skillbars";

function Skills() {
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
