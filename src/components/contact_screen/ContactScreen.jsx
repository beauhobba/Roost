import React, { Text, useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import {
  AiTwotoneMail,
  AiFillInstagram,
  AiFillYoutube,
  AiFillShopping,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { font_families, colours } from "../styles";
import {
  LoadingSection,
  LoadingSectionText,
  TextBox,
  HoverTextBox,
} from "../modals";

function ContactScreen() {
  const [logoSize, setLogoSize] = useState("40%");
  const [imgSize, setimgSize] = useState("25%");

  useEffect(() => {
    if (isMobile) {
      setLogoSize("100%");
      setimgSize("30%");
    }
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",

        paddingTop: 20,
        fontFamily: font_families.roost,
      }}
    >
      <h1 class="font-weight-light">
        <b>Stay Connected</b>
      </h1>
      <p>
        <i>Links to our social media and the Kickstarter</i>
      </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: 'flex-start', justifyContent: 'flex-start', width: "100%" }}>
        <HoverTextBox text={"roostgame@gmail.com"} symbol={"email"} />

        <a href="https://www.instagram.com/roostgame/" target="_blank">
          <HoverTextBox text={"Instagram"} symbol={"instagram"} />
        </a>
        <a href="https://www.youtube.com/@Roostgame" target="_blank">
          <HoverTextBox text={"Youtube"} symbol={"youtube"} />
        </a>
        <a
          href="https://www.tiktok.com/@roostgame?_t=8e8xO22xcvQ&_r=1"
          target="_blank"
        >
          <HoverTextBox text={"Tiktok"} symbol={"tiktok"} />
        </a>
        <a href="https://twitter.com/RoostCardGame" target="_blank">
          <HoverTextBox text={"Twitter"} symbol={"twitter"} />
        </a>
        <a href="https://www.kickstarter.com/projects/roostgame/roost-0?ref=banner" target="_blank">
          <HoverTextBox
            text={"Kickstarter Pre-Launch"}
            symbol={"shopping"}
          />
        </a>
      </div>
      </div>
  );
}

export default ContactScreen;
