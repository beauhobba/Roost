import React, { useState, useEffect } from "react";
import {
  AiTwotoneMail,
  AiFillInstagram,
  AiFillYoutube,
  AiFillShopping,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  FaTiktok
} from "react-icons/fa";
import coverphoto from "../images/coverphoto.png";

function Supporters() {
  const [posts, setPosts] = useState([]);




  return (
    <div className="contact"   style={{paddingBottom: 100}}>
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
            <h1 class="font-weight-light"><b>Supporters</b></h1>
            <p>
              <i>
                Our supporters will be listed here
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supporters;
