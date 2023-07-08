import React, { useState, useEffect } from "react";
import box from "../images/box.gif";
import { isMobile } from "react-device-detect";
import { API } from "aws-amplify";
import roost_chicken from "../images/expansion/chicken.png";
import roost_booby from "../images/expansion/booby.png";
import roost_stork from "../images/expansion/stork.png";

import roost_crow from "../images/expansion/Asset 1crow.png";
import roost_stork_ability from "../images/expansion/Asset 2stork.png";
import roost_exp from "../images/expansion/Asset 3exp_back.png";
import roost_budgie from "../images/expansion/Asset 4budgie.png";

import roost_resource from "../images/expansion/Asset 1resource_back.png";
import roost_caterpillar from "../images/expansion/Asset 2caterpillar.png";
import roost_grapes from "../images/expansion/Asset 3grapes.png";
import roost_sticks from "../images/expansion/Asset 5sticks.png";
import { Helmet } from "react-helmet";

import Card from "./modals/Card";

function Expansion() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [logoSize, setLogoSize] = useState("50%");
  const [shapeSize, setShapeSize] = useState("50%");
  useEffect(() => {
    if (isMobile) {
      setLogoSize("100%");
      setShapeSize("100%");
    }
  }, []);

  return (
    <div
      className="about"
      style={{
        paddingBottom: 100,
      }}
    >
      <Helmet>
        <title>Expansion - roostgame.com</title>
        <meta
          name="description"
          content="All details on the upcoming Roost expansion: Parliament, Gangs and Murder"
        />
      </Helmet>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">
              <b>Expansion</b>
              <i style={{ fontSize: 10 }}> (Coming Late 2023/Early 2024)</i>
            </h1>

            <p>
              While the base game is designed to be fast-paced and accessible,
              the expansion takes the gameplay to a new level by introducing
              additional cards and mechanics that enhance the strategic and
              teamwork depth of the game.
              <br />
            </p>

            <p>The expansion includes</p>
            <p>
              <b>12 New Unique Cards and Abilities</b>
            </p>

            <div
              style={{
                alignItems: "center",
                flexDirection: "row",
                display: "flex",
                width: "100%",
              }}
            >
              <Card front={roost_chicken} />
              <Card front={roost_booby} />
              <Card front={roost_stork} />
            </div>
            <p>
              <b>50 Epic Battle Cards</b>
            </p>
            <div
              style={{
                alignItems: "center",
                flexDirection: "row",
                display: "flex",
                width: "100%",
              }}
            >
              <Card front={roost_crow} back={roost_exp} />
              <Card front={roost_stork_ability} back={roost_exp} />
              <Card front={roost_budgie} back={roost_exp} />
            </div>

            <p>
              <b>Resource Cards</b>
            </p>
            <div
              style={{
                alignItems: "center",
                flexDirection: "row",
                display: "flex",
                width: "100%",
              }}
            >
              <Card front={roost_sticks} back={roost_resource} />
              <Card front={roost_caterpillar} back={roost_resource} />
              <Card front={roost_grapes} back={roost_resource} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expansion;
