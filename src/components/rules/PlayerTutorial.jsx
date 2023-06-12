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

function PlayerTutorial() {
  return (
    <>
      <h1 class="font-weight-light">
        <b>Player Tutorial</b>
      </h1>
      <h5 class="font-weight-light">
        <b>
          <u>Turn Overview</u>
        </b>
      </h5>
      <i></i>On your turn pick up a card from the
      <ul>
        <li>
          <a style={{ backgroundColor: "#eb88b7" }}>
            <b>Unknown pile</b>
          </a>{" "}
          and then place it on top of an opponent’s face-up card <i>OR</i> place
          it directly onto the discard pile <i>OR</i> replace it with one of
          your own cards
        </li>

        <b> OR </b>

        <li>
          <a style={{ backgroundColor: "#eb88b7" }}>
            <b>Discard pile</b>
          </a>{" "}
          and then replace it with one of your own cards
          <i>(place this card face down)</i>.
        </li>
      </ul>
      <i>
        <ul style={{ listStyleType: "circle" }}>
          <li>
            You <b>must</b> put the replaced card onto the discard pile (you
            cannot put it on top of another player's card){" "}
          </li>
          <li>The replacement card cannot be flipped upwards. </li>
          <li>
            When you place an Eagle, Peacock, Goose, Cassowary, Turkey, Pelican
            or Bustard onto the discard pile you perform the ability listed on
            the card.
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
            You can place <b>MATCHING</b> cards onto the top discard pile card{" "}
            <i>OR</i> other players' face-up cards.{" "}
          </li>
          <li>
            Only the player that played the original card gets the associated
            ability.
          </li>
          <li>If you play an incorrect card draw 2 cards. </li>
          <li>
            If you play an incorrect card, you must wait until the next person's
            turn to be able to place any more cards on top of the discard pile.{" "}
          </li>
          <li>
            Call <b>Roost</b> when you think you have the lowest score. If you
            win the Roost, you get <b>-1</b> off your score. If you lose the
            Roost you get <b>double</b> the score.{" "}
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
            <b>Order is important.</b> Never move your cards into new positions.
            When switching cards, put each traded card in place of the previous
            card.
          </li>
          <li>
            The direction of play is determined by the <b>Direction</b> card.{" "}
            <i>Flamingo</i> is able to flip this direction.
          </li>
          <li>
            The game ends when a player score is greater than 100. The player
            with the lowest score wins
          </li>
        </ul>
      </p>
    </>
  );
}

export default PlayerTutorial;
