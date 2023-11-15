import React, { Text, useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

function AboutMe() {
  const [logoSize, setLogoSize] = useState("40%");
  const [imgSize, setimgSize] = useState("25%");

  useEffect(() => {
    if (isMobile) {
      setLogoSize("100%");
      setimgSize("30%");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,

      }}
    >
      <h1 class="font-weight-light">
        <b>About Me</b>
      </h1>
      <p>
        Hi, I am Beau Hobba, and I am a mechatronics engineer (and so to be card
        game designer). Roost games was birthed through a shared enjoyment of
        board games with my friends,
        <br></br>
        <br></br>
        One casual afternoon, I had the idea to try and photograph and observe
        every creature endemic to Australia. Before I knew it, I found myself
        dedicating a load of time to bird-watching. Birds always took the lead
        on my checklist of animals, and this fondness for our feathered friends
        naturally spilled over into my second love—board games.
      </p>
    </div>
  );
}

export default AboutMe;
