import React from "react";
import about_photo from '../images/about_photo.png'
import aboutmephoto from '../images/aboutme.png'


function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={aboutmephoto}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Hi I am Beau Hobba, and I am a mechatronics engineer. I moved to Sydney from rural Young, NSW in 2016. I currently still reside in Sydney, Australia and have recently finished with First Class Honours in Mechatronic Engineering. 

              <br></br>
              <br></br>
              I have a talent for leading teams and creating complex systems to match the project. My passions lie in automation, everday assistive robotics, AI, earth/space exploration, argiculture and in general ethical robotics.
              I am a firm believer that robotics are a central part of our futures and are fascinated by their ability to assist our everday lives. I wish to use my programming expertise to help develop technology which is yet to be discovered. 
              <br></br>
              <br></br>
              My hobbiess include flying my drone (yes that is me trying to fish), making video edits, playing/buying board games, making music (it isn't that good), catching and researching crayfish and mountain biking. 
              <br></br>
              <br></br>
              Stemming from a enjoyment of catching and researching yabbies when I was younger on the farm dam, I now keep some of my own crayfish in a aquaponics setup. One thing led to another, and I found myself walking up remote waterfalls looking for a spiny crayfish. In my spare time I have furthured this joy, into trying to photograph and observe nearly every creature endemic to Australia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
