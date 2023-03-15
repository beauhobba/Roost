import React from "react";
import {
  AiTwotoneMail,
  AiFillLinkedin,
  AiFillPhone,
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiFillShopping,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  FaTiktok
} from "react-icons/fa";
import coverphoto from "../images/coverphoto.png";
import { AiFillContainer } from "react-icons/ai";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={coverphoto}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light"><b>Contact</b></h1>
            <p>
              <i>
                Contact our team using the following email. Follow our social media and
                support the kickstarter
              </i>
              <br></br>
              <br></br>
              <AiTwotoneMail /> roostgame@gmail.com
              <br></br>
              <AiFillInstagram />{" "}
              <a href="https://www.instagram.com/roostgame/">Instagram</a>
              <br></br>
              <AiFillYoutube />{" "}
              <a href="https://www.youtube.com/@Roostgame">Youtube</a>
              <br></br>
              <FaTiktok />{" "}
              <a href="https://www.youtube.com/@Roostgame">TikTok</a>
              <br></br>
              <AiFillTwitterCircle />{" "}
              <a href="https://twitter.com/RoostCardGame">Twitter</a>
              <br></br>
              <AiFillShopping />{" "}
              <a href="https://www.instagram.com/roostgame/">Kickstarter (coming soon)</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
