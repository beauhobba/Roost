import React from "react";
import {
  AiTwotoneMail,
  AiFillInstagram,
  AiFillYoutube,
  AiFillShopping,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { FaTiktok } from "react-icons/fa";
import { colours, font_families } from "./styles";

const iconLinkStyle = {
  paddingLeft: 5,
  paddingRight: 5,
  color: colours.button_filling,
};

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" style={iconLinkStyle}>
    {icon}
  </a>
);

function Footer() {
  return (
    <div className="footer">
      <footer
        class="py-3 fixed-bottom"
        style={{
          backgroundColor: "#EC2383",
        }}
      >
        <div
          class="container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p class="m-0 text-center text-white">
            Copyright &copy; roostgame.com 2024
          </p>
          <SocialLink
            href="https://www.instagram.com/roostgame/"
            icon={<AiFillInstagram />}
          />
          <SocialLink
            href="https://www.youtube.com/@Roostgame"
            icon={<AiFillYoutube />}
          />
          <SocialLink
            href="https://www.tiktok.com/@roostgame?_t=8e8xO22xcvQ&_r=1"
            icon={<FaTiktok />}
          />
          <SocialLink
            href="https://twitter.com/RoostCardGame"
            icon={<AiFillTwitterCircle />}
          />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
