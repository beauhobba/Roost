import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

import { Helmet } from "react-helmet";
import { Commitment, ContactScreen, How, AboutMe } from "./contact_screen";

function Contact() {
  const [direction, setDirection] = useState("column");

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
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 20,
          }}
        >

          <ContactScreen style={{width: "50%"}} />
          {/* <Commitment style={{width: "50%"}}/> */}

        </div>
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
