import React, { useState, useEffect } from "react";
import Card from "./modals/Card";
import roost_chook from "../images/-1.png";
import roost_vulture from "../images/-1_2.png";
import roost_penguin from "../images/0.png";
import roost_eagle from "../images/8.png";
import roost_peacock from "../images/9.png";
import roost_goose from "../images/10.png";
import roost_cassowary from "../images/10.png_3.png";
import roost_bustard from "../images/10_2.png";
import roost_turkey from "../images/10_3.png";
import roost_back from "../images/roost-111.png";
import roost_duck from "../images/2.png";
import { isMobile } from "react-device-detect";

function About() {
  const [renderType, setRenderType] = useState("row");

  useEffect(() => {
    if (isMobile) {
      setRenderType("column");
    }
  }, []);

  return (
    <div className="about" style={{paddingBottom: 100}}>
      <div class="container">
        <div
          style={{
            display: "flex",
            flexDirection: renderType,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div class="col-lg-5">
            <h1 class="font-weight-light">
              <b>Player Tutorial</b>
            </h1>
            <h5 class="font-weight-light">
              <b>
                <u>Turn Overview</u>
              </b>
            </h5>
            <p>
              <i></i>On your turn pick up a card from the
              <ul>
                <li>
                  <a style={{ backgroundColor: "#eb88b7" }}>
                    <b>Unknown pile</b>
                  </a>{" "}
                  and then place it on top of an opponent’s face-up card{" "}
                  <i>OR</i> place it directly onto the discard pile <i>OR</i>{" "}
                  replace it with one of your own cards
                </li>
              </ul>
              <b> OR </b>
              <ul>
                <li>
                  <a style={{ backgroundColor: "#eb88b7" }}>
                    <b>Discard pile</b>
                  </a>{" "}
                  and then replace it with one of your own cards
                  <i>(place this card face down)</i>.
                </li>
              </ul>
            </p>
            <i>
              <ul style={{ listStyleType: "circle" }}>
                <li>
                  You <b>must</b> put the replaced card onto the discard pile
                  (you cannot put it on top of another player's card){" "}
                </li>
                <li>The replacement card cannot be flipped upwards. </li>
                <li>
                  When you place an Eagle, Peacock, Goose, Cassowary, Turkey,
                  Pelican or Bustard onto the discard pile you perform the
                  ability listed on the card.
                </li>
              </ul>
            </i>
            <br />
            <h5 class="font-weight-light">
              <b>
                <u>Anytime</u>
              </b>
            </h5>
            <p>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  You can place <b>MATCHING</b> cards onto the top discard pile
                  card <i>OR</i> other players' face-up cards.{" "}
                </li>
                <li>
                  Only the player that played the original card gets the
                  associated ability.
                </li>
                <li>If you play an incorrect card draw 2 cards. </li>
                <li>
                  If you play an incorrect card, you must wait until the next
                  person's turn to be able to place any more cards on top of the
                  discard pile.{" "}
                </li>
                <li>
                  Call <b>Roost</b> when you think you have the lowest score. If
                  you win the Roost, you get <b>-1</b> off your score. If you
                  lose the Roost you get <b>double</b> the score.{" "}
                </li>
                <li>You automatically Roost if you have no cards.</li>
              </ul>
              <br />
              <h5 class="font-weight-light">
                <b>
                  <u>Rules</u>
                </b>
              </h5>
              <ul>
                <li>
                  <b>Order is important.</b> Never move your cards into new
                  positions. When switching cards, put each traded card in place
                  of the previous card.
                </li>
                <li>
                  The direction of play is determined by the <b>Direction</b>{" "}
                  card. <i>Flamingo</i> is able to flip this direction.
                </li>
                <li>
                  The game ends when a player score is greater than 100. The
                  player with the lowest score wins
                </li>
              </ul>
            </p>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">
              <b>Game Tutorial</b>
            </h1>
            <p style={{ fontSize: 13 }}>
              <ul style={{ listStyleType: "square" }}>
                <li>
                  This is an interactive rule guide. You can hover over cards
                  which the example player can see/has memorised.
                  <li>
                    If you are on a mobile device, you can click on these images
                    instead.
                  </li>
                </li>
                <li>
                  Memory infers a card that the example player remembers. In the
                  actual game you cannot re-check a card without a special
                  ability card.{" "}
                </li>
              </ul>
            </p>
            <h5 class="font-weight-light">
              <b>
                <u>Setup</u>
              </b>
            </h5>
            <p>
              <ol>
                <li>Shuffle the deck.</li>
                <li>
                  Place 1 card next to the deck. This is the{" "}
                  <a style={{ backgroundColor: "#eb88b7" }}>
                    <b>Discard Pile</b>
                  </a>
                </li>
                <li>
                  The deck is identified as the{" "}
                  <a style={{ backgroundColor: "#eb88b7" }}>
                    <b>Unknown Pile</b>
                  </a>
                </li>
                <li>
                  Give each player <b>4</b> cards<i>*</i> facedown
                </li>
                <li>
                  Each player looks at <b>2</b> of their cards and places them
                  back <b>facedown</b>
                </li>
              </ol>
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
              <h5 class="font-weight-light">
                <b>
                  <u>Game Turn</u>
                </b>
              </h5>
              <ol>
                <li>
                  The losing player <i>OR</i> the dealer, if it is the starting
                  round, goes first. This player can either pick up the top card
                  from the:
                </li>
                <ul>
                  <li>
                    <i>Unknown Pile</i> and then place it on top of an opponents
                    face-up card (more on that later) <i>OR</i> place it
                    directly onto the discard pile <i>OR</i> replace it with one
                    of their own cards
                  </li>
                  <li>
                    <i>Discard Pile</i> and then place it on top of an opponents
                    face-up card (more on that later) <i>OR</i> replace it with
                    one of their own cards
                  </li>
                </ul>
                <br />
                <i>
                  The replacement card must be placed at the top of the discard
                  pile. It cannot be placed onto an opponent's flipped card.
                </i>
                <br />
                <br />
                <i>For Example</i>
                <br></br>
                It is John's turn. The cassowary is the top card of the{" "}
                <i>Discard Pile</i>. The top card of the <i>Unknown Pile</i> is
                a mystery
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
                John picks up the top card from the <i>unknown pile</i>. It is a{" "}
                <i>bustard</i>. He replaces one of his currently unknown cards,
                placing that card on top of the discard pile. It was a{" "}
                <i>Goose</i>
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
                Now John has a <i>Goose, Cassowary, Bustard</i> and 1 unknown
                card
                <br></br>
                <li>
                  Any Player can place <b>MATCHING</b> cards onto the top of the
                  discard pile at any time. If a player plays an incorrect card
                  they must draw <b>2</b> cards. Players can also place{" "}
                  <b>MATCHING</b> cards onto the top of other player's face-up
                  cards.
                </li>
                <br />
                <i>For Example</i>
                <br></br>
                Since John has another <i>Goose</i>, he puts it on top of the
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
                <li>
                  Play continues clockwise with players following the previous
                  instructions
                </li>
                <br></br>
                <li>
                  When a player places an{" "}
                  <i>
                    Eagle, Peacock, Goose, Cassowary, Pelican, Turkey or Bustard
                  </i>{" "}
                  onto the <i>discard pile</i>, they can perform the ability
                  listed on the card
                </li>
              </ol>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Card front={roost_eagle} back={roost_peacock} />
                <Card front={roost_goose} back={roost_cassowary} />
                <Card front={roost_turkey} back={roost_bustard} />
              </div>
              <br></br>
              <i>For Example</i>
              <br></br>
              When it is John's turn again, he picks up from the{" "}
              <i>Unknown Pile</i> and replaces his <i>Bustard card</i>. The card
              he picks up is a <i>Penguin Card</i>
              <br></br>
              The <i>Bustard</i> ability lets him look at one of his cards. It
              is a <i>duck</i>
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
                  <Card front={roost_duck} />
                </div>
              </div>
              <br></br>
              There are three other cards (<i>Cool Chook, Vulture, Flamingo</i>)
              with abilities which do not apply when discarded. <b></b>
              <i>*The vulture changes the amount of cards a player picks up</i>
              <br></br>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "45%",
                  }}
                >
                  <Card front={roost_chook} back={roost_vulture} />
                </div>
              </div>
              <br></br>
              When a player calls <b>Roost</b>, all other players get 1 more
              turn. A <b>Roost</b> is only finalised when a player has flipped
              all of their cards face-up. If the next clockwise player is able
              to pick up a new card before they have revealed all their cards
              you get an additional turn. If a player has called <b>Roost</b>,
              no other player can <b>Roost</b>. The player's cards are now
              locked and immune to any abilities (
              <i>
                except an additional <b>-1</b> with <b>Vulture</b>
              </i>
              )<br></br>
              <br></br>
              The player with the lowest score for the round wins. If the player
              who called <b>Roost</b> wins, their final score is reduced by 1.
              If the player who called <b>Roost</b> loses or ties, their final
              score is doubled.
              <br></br>A player automatically <b>Roost</b>s if they have 0 cards
              (and are the first player to have 0 cards)
              <br></br>
              If the deck runs out and no player has <b>Roost</b> the round ends
              (with no player eligible for the 1 point reduction)
              <br></br>
              <br></br>
              The game continues, shuffling the deck with each new round. When a
              player reaches 100 points the game ends<i>**</i>. The player with
              the lowest score ends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
