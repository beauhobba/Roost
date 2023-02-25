import React from "react";
import about_photo from "../images/about_photo.png";
import aboutmephoto from "../images/aboutme.png";
import Card from "./modals/Card";
import roost_chook from "../images/-1.png";
import roost_vulture from "../images/-1_2.png";
import roost_penguin from "../images/0.png";
import roost_galah from "../images/3.png";
import roost_pigeon from "../images/4.png";
import roost_woodpecker from "../images/5.png";
import roost_bluejay from "../images/6.png";
import roost_kingfisher from "../images/7.png";
import roost_eagle from "../images/8.png";
import roost_peacock from "../images/9.png";
import roost_goose from "../images/10.png";
import roost_cassowary from "../images/10.png_3.png";
import roost_bustard from "../images/10_2.png";
import roost_turkey from "../images/10_3.png";
import roost_back from "../images/roost-111.png";
import roost_duck from "../images/2.png";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">How to Play</h1>
            <p>
              Shuffle the deck.
              <br></br>
              Place 1 card next to the deck. This is the <b>Discard Pile</b>
              <br></br>
              The deck is identified as the <b>Unknown Pile</b>
              <br></br>
              <br></br>
              Give each player 4 cards<i>*</i>
              <br></br>
              Each player looks at 2 cards and places them <b>facedown</b>
              <br></br>
              <br></br>
              <i>For Example</i>
              <br></br>
              John looks at 2 of his cards. He has a <i>Goose</i> and a{" "}
              <i>Cassowary</i>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div class="row">
                  <Card front={roost_goose} />
                  <Card front={roost_cassowary} />
                  <Card front={roost_back} />
                  <Card front={roost_back} />
                </div>
              </div>
              <br></br>
              The losing player <i>OR</i> if its the first round the dealer goes
              first This player can either pick up the top card from the
              <ul>
                <li>
                  <i>Unknown Pile</i> and then place it on top of an opponents
                  face-up card (more on that later) <b>OR</b> place it directly
                  onto the discard pile <b>OR</b> replace it with one of their
                  own cards
                </li>
                <li>
                  <i>Discard Pile</i> and then place it on top of an opponents
                  face-up card (more on that later) <b>OR</b> replace it with
                  one of their own cards
                </li>
              </ul>
              <b>
                The replacement card must be placed at the top of the discard
                pile and cannot play a replacement card onto an opponent's
                flipped card
              </b>
              <br></br>
              <br></br>
              <i>For Example</i>
              <br></br>
              It is John's turn. The cassowary is the top card of the{" "}
              <i>Discard Pile</i>. The top card of the <i>Unknown Pile</i> is
              unknown to him
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div class="row">
                  <Card
                    front={roost_cassowary}
                    back={roost_cassowary}
                    text={"Discard Pile"}
                  />
                  <Card front={roost_back} text={"Unknown Pile"} />
                </div>
              </div>
              <br></br>
              John decides to pick up the top card from the <i>unknown pile</i>.
              It is a <i>bustard</i>. He chooses to replace one of his cards
              which he currently does not know. He places that card ontop of the
              discard pile. It was another <i>Goose</i>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div class="row">
                  <Card
                    front={roost_goose}
                    text={"Memory"}
                    font_heavy={false}
                  />
                  <Card
                    front={roost_cassowary}
                    text={"Memory"}
                    font_heavy={false}
                  />
                  <Card front={roost_bustard} />
                  <Card front={roost_back} />
                </div>
              </div>
              <br></br>
              Now John has a <i>Goose, Cassoward, Bustard</i> and 1 unknown card
              <br></br>
              <br></br>
              <b>
                Any Players can place MATCHING cards onto the top of the discard
                pile at any time. If a player plays an incorrect card they must
                draw 2 cards
              </b>
              <br></br>
              <br></br>
              Since John has a another <i>Goose</i>, he puts it on top of the
              other goose card (the <i>discard pile</i>)<br></br>
              Mary also has a <i>Gooose</i> and places it on top of the goose
              card (the <i>discard pile</i>)<br></br>
              This is John's new hand
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div class="row">
                  <Card
                    front={roost_cassowary}
                    text={"Memory"}
                    font_heavy={false}
                  />
                  <Card
                    front={roost_bustard}
                    text={"Memory"}
                    font_heavy={false}
                  />
                  <Card front={roost_back} />
                </div>
              </div>
              <br></br>
              Play continues clockwise with players following the previous
              instructions
              <br></br>
              When a player places an{" "}
              <i>Eagle, Peacock, Goose, Cassowary, Turkey or Bustard</i> onto
              the <i>discard pile</i>, they can perform the ability listed on
              the card
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div class="row">
                  <Card front={roost_eagle} back={roost_peacock} />
                </div>
                <div class="row">
                  <Card front={roost_goose} back={roost_cassowary} />
                </div>
                <div class="row">
                  <Card front={roost_turkey} back={roost_bustard} />
                </div>
              </div>
              <br></br>
              If it is John's turn again, he picks up from the <i>unknown pile</i> and replaces his <i>Bustard card</i>.
              The card he picks up is a <i>Penguin Card</i>
              <br></br>
              The <i>Bustard</i> ability lets him look at one of his cards. It is a <i>duck</i>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div class="row">
                  <Card
                    front={roost_cassowary}
                    text={"Memory"}
                    font_heavy={false}
                  />
                  <Card
                    front={roost_penguin}
                    text={"Memory"}
                    font_heavy={false}
                  />
                  <Card
                    front={roost_duck}
                    text={"Memory"}
                    font_heavy={false}
                  />
                </div>
              </div>
              <br></br>


            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
