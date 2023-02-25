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
import coverphoto from "../images/coverphoto.png";

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
            <h1 class="font-weight-light">Contact</h1>
            <p>
              <i>Contact Roost using the following email. Follow our medias and support the kickstarter</i>
              <br></br>
              <br></br>
              <AiTwotoneMail /> roostgame@gmail.com
              <br></br>
              <AiFillInstagram />{" "}
              <a href="https://www.linkedin.com/in/beau-hobba/">Instagram</a>
              <br></br>
              <AiFillYoutube />{" "}
              <a href="https://github.com/beauhobba">Youtube</a>
              <br></br>
              <AiFillTwitterCircle />{" "}
              <a href="https://github.com/beauhobba">Twitter</a>
              <br></br>
              <AiFillShopping />{" "}
              <a href="https://github.com/beauhobba">Kickstarter</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
