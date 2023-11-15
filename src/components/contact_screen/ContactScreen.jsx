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
import { font_families } from "../styles";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: font_families.roost,
      }}
    >
      <h1 class="font-weight-light">
        <b>Contact</b>
      </h1>
      <p>
        <i>
          Contact our team using the following email. Follow our social media
          and support the kickstarter
        </i>
        <br></br>
        <br></br>
        <AiTwotoneMail /> roostgame@gmail.com
        <br></br>
        <AiFillInstagram />{" "}
        <a href="https://www.instagram.com/roostgame/" target="_blank">
          Instagram
        </a>
        <br></br>
        <AiFillYoutube />{" "}
        <a href="https://www.youtube.com/@Roostgame" target="_blank">
          Youtube
        </a>
        <br></br>
        <FaTiktok />{" "}
        <a
          href="https://www.tiktok.com/@roostgame?_t=8e8xO22xcvQ&_r=1"
          target="_blank"
        >
          TikTok
        </a>
        <br></br>
        <AiFillTwitterCircle />{" "}
        <a href="https://twitter.com/RoostCardGame" target="_blank">
          Twitter
        </a>
        <br></br>
        <AiFillShopping />{" "}
        <a href="https://www.instagram.com/roostgame/" target="_blank">
          Kickstarter (coming soon)
        </a>
      </p>
    </div>
  );
}

export default ContactScreen;
