import React, { useState, useEffect } from "react";
import Card from "../modals/Card";
import roost_chook from "../../images/-1.png";
import roost_vulture from "../../images/-1_2.png";
import roost_penguin from "../../images/0.png";
import roost_eagle from "../../images/8.png";
import roost_peacock from "../../images/9.png";
import roost_goose from "../../images/10.png";
import roost_cassowary from "../../images/10.png_3.png";
import roost_bustard from "../../images/10_2.png";
import roost_turkey from "../../images/10_3.png";
import roost_back from "../../images/roost-111.png";
import roost_duck from "../../images/2.png";
import { isMobile } from "react-device-detect";

function TwoPlayer() {
  return (
    <>
      <h1 class="font-weight-light">
        <b>2 Player Variation</b>
      </h1>
      Remove the following cards from the decks
      <ul>
        <li>Flamingo (x1) </li>
        <li>Woodpecker (x4) </li>
        <li>Stork (x4) </li>
        <li>Goose (x4) </li>
        <li>Seagull (x4) </li>
      </ul>
      <h5 class="font-weight-light">
        <b>
          <u>Game Start</u>
        </b>
      </h5>
      Players start with 6 cards instead of 4.
      <h5 class="font-weight-light">
        <b>
          <u>Card Changes</u>
        </b>
      </h5>
      When Pelican’s ability is used, place the Pelican card and the discarded
      card at the BOTTOM of the discard pile.
      <h5 class="font-weight-light">
        <b>
          <u>Game End</u>
        </b>
      </h5>
      The game ends when any player reaches 40 or more points. The player with
      the lowest score wins.
    </>
  );
}

export default TwoPlayer;
