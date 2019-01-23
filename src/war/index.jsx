import React, { useState } from "react";
import _ from "lodash";

import Card from "./card";
import Player from './player';

import "./style.css"

const shuffledDeck = _.shuffle(
  _.flatten(_.times(4, suit => _.times(13, value => ({ suit, value }))))
);

const War = () => {
  const [p1Cards, setP1Cards] = useState(shuffledDeck.slice(0, 26));
  const [p2Cards, setP2Cards] = useState(shuffledDeck.slice(26));
  const drawCards = () => {
    if (p1Cards[0].value > p2Cards[0].value) {
      setP1Cards(_.shuffle([...p1Cards, p2Cards[0]]))
      setP2Cards(p2Cards.slice(1))
    } else {
      setP2Cards(_.shuffle([...p2Cards, p1Cards[0]]))
      setP1Cards(p1Cards.slice(1))
    }
  }
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

      <Player cards={p1Cards} side={-1} win={p1Cards[0].value > p2Cards[0].value}/>
      <Player cards={p2Cards} side={1} win={!(p1Cards[0].value > p2Cards[0].value)}/>

      <rect className="button" x="-100" y="-25" width="200" height="50" fill="green" onClick={drawCards}>
      </rect>
      <text x="0" y="10" textAnchor="middle" fontSize="35" fill="white" style={{pointerEvents: "none"}}>Draw</text>
    </svg>
  );
};

export default War;
