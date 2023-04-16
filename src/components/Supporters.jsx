import React, { Text, useState, useEffect } from "react";
import about_photo from "../images/coverphoto.png";
import box from "../images/box.gif";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import {Amplify, API } from 'aws-amplify'
import {
  FaTiktok
} from "react-icons/fa";
import coverphoto from "../images/card_flip.gif";

function Supporters() {
  const [posts, setPosts] = useState([]);
  const [logoSize, setLogoSize] = useState('50%');
  const [shapeSize, setShapeSize] = useState('50%');
  useEffect(() => {
    if (isMobile) {
      setLogoSize('60%');
      setShapeSize('100%')
    }
  }, []);


  return (
    <div className="contact"   style={{paddingBottom: 100}}>
      <div class="container">
        <div class="row align-items-center my-5">
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: shapeSize,
            alignItems: "center",
          }}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={coverphoto}
              alt=""
              style={{ alignSelf: 'center', width: logoSize }}
            />
          </div>



          <div class="col-lg-5">
            <h1 class="font-weight-light"><b>Patrons</b></h1>
            <p>
            <i>It would be impossible to fully design a game without some help. I am ever grateful for the people who have supported me along this journey. </i>
          </p>

            <h2 class="font-weight-light">
            Game Creator
          </h2>
          <ul>
            <li>
              Beau Hobba
            </li>

          </ul>

          <h2 class="font-weight-light">
            Early Helpers
          </h2>
          <p>
            These people helped design the game
          </p>
          <ul>
            <li>
              Julia Tan
            </li>
            <li>
              Tristen Hobba
            </li>
            <li>
              Stephen Lowe
            </li>
            <li>
              Daniel Wong
            </li>
            <li>
              Jack Spiggle
            </li>
            <li>
              Stephen Gonzalez
            </li>
            <li>
              Talin Roche
            </li>

          </ul>

            <h2 class="font-weight-light">
            Initial Playtesters
          </h2>
          <p>
            These people helped test the rules and crease out any broken game mechnics
          </p>
          
          <ul>
            <li>
              Jarrod Reynolds
            </li>
            <li>
              Alex Liang
            </li>
            <li>
              Zac Hobba
            </li>
            <li>
              Talin Roche
            </li>
          </ul>

          
          </div>
          
          <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            paddingTop: "30px",
          }}>
            <div>
<div style={{ flex: 1, backgroundColor: "black", height: "2px", opacity: "15%"}} />
<div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            paddingTop: "30px",
          }}>



          <h2 class="font-weight-light">
          Funders
          </h2>
          <p>
            These people helped make <b>Roost</b> a reality
          </p>
            <p>
              <i>
                Any person that supports the Kickstarter will be put here!
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Supporters;
