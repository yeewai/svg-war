import React, { useState, useEffect }  from "react";
import _ from "lodash";

import Card from "./card";
import Player from "./player";

import "./style.css";

import {usePhysics} from './physics'

const shuffledDeck = _.shuffle(
  _.flatten(_.times(4, suit => _.times(13, value => ({ suit, value }))))
);

const War = () => {
  const [p1Cards, setP1Cards] = useState(shuffledDeck.slice(0, 26));
  const [p2Cards, setP2Cards] = useState(shuffledDeck.slice(26));
  const [numCardsToLose, setNumCardsToLose] = useState(1);

  const currentP1CardValue = p1Cards[numCardsToLose - 1].value;
  const currentP2CardValue = p2Cards[numCardsToLose - 1].value;
  const currentCardHidden = numCardsToLose % 2 == 0;

  const isDraw = currentP1CardValue === currentP2CardValue;

  const endTurn = () => {
    if (currentCardHidden || isDraw) {
      setNumCardsToLose(numCardsToLose + 1);
    } else if (currentP1CardValue > currentP2CardValue) {
      setP1Cards(_.shuffle([...p1Cards, ...p2Cards.slice(0, numCardsToLose)]));
      setP2Cards(p2Cards.slice(numCardsToLose));
      setNumCardsToLose(1);
    } else {
      setP2Cards(_.shuffle([...p2Cards, ...p1Cards.slice(0, numCardsToLose)]));
      setP1Cards(p1Cards.slice(numCardsToLose));
      setNumCardsToLose(1);
    }
  };

  const tableBounds = { x: -640, y: -450, width: 1280, height: 900 };
  const cardBounds = { x: 0, y: 1, width: 120, height: 180 };
  const x = usePhysics({
    start: cardBounds.x,
    max: tableBounds.width - cardBounds.width,
    startVelocity: 8
  });
  const y = usePhysics({
    start: cardBounds.y,
    max: tableBounds.height - cardBounds.height,
    acceleration: 10,
    damper: 25
  });

  const cardPhysics = {...cardBounds, x, y}

  return (
    <svg
      width="1280px"
      height="900px"
      viewBox="-640 -450 1280 900"
      style={{ border: "solid thin red" }}
    >
      <defs>
        <linearGradient id="my-cool-gradient" x2="1" y2="1">
          <stop offset="0%" stop-color="#447799" />
          <stop offset="50%" stop-color="#224488" />
          <stop offset="100%" stop-color="#112266" />
        </linearGradient>
      </defs>

      <Player
        cards={p1Cards}
        numCardsToLose={numCardsToLose}
        side={-1}
        win={currentP1CardValue > currentP2CardValue && !currentCardHidden}
        cardPhysics={cardPhysics}
      />
      <Player
        cards={p2Cards}
        numCardsToLose={numCardsToLose}
        side={1}
        win={currentP1CardValue < currentP2CardValue && !currentCardHidden}
        cardPhysics={cardPhysics}
      />

      <rect
        className="button"
        x="-100"
        y="-25"
        width="200"
        height="50"
        fill="green"
        onClick={endTurn}
      />
      <text
        x="0"
        y="10"
        textAnchor="middle"
        fontSize="35"
        fill="white"
        style={{ pointerEvents: "none" }}
      >
        {isDraw || currentCardHidden ? "War!" : "Draw"}
      </text>
    </svg>
  );
};

export default War;
