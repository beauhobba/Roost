import React from "react";
import {AiTwotoneMail, AiFillLinkedin, AiFillPhone, AiFillGithub} from 'react-icons/ai';
import coverphoto from '../images/coverphoto.png'

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
              <AiTwotoneMail/> hobbabeau@gmail.com
              <br>
              </br>
              <AiFillLinkedin/> <a href="https://www.linkedin.com/in/beau-hobba/">LinkedIn</a>
              <br>
              </br>
              <AiFillGithub/> <a href="https://github.com/beauhobba">Github</a>
              <br>
              </br>
              <AiFillPhone/> 0438018245
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
