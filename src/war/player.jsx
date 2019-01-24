import React from "react";
import _ from "lodash";

import CardWithPhysics from "./cardWithPhysics";

import {usePhysics} from './physics'

const playerName = {
  [-1]: "1",
  1: "2"
};

const Player = ({ cards, side, win, numCardsToLose }) => {

return (
  <g>
    {cards.slice(0, numCardsToLose).map((card, i) => (
      <CardWithPhysics
        card={i % 2 == 0 ? card : null}
        xStart={300*side}
        yStart={1+ i*20}
      />
    ))}
    {win && (
      <text textAnchor="middle" y="-180" x={300 * side} fontSize="64">
        <animate
          attributeType="CSS"
          attributeName="opacity"
          from="0"
          to="1"
          dur="2s"
          fill="freeze"
        />
        Win
      </text>
    )}

    {_.times(cards.length - numCardsToLose, i => (
      <rect
        width="120"
        height="180"
        x={side * 600 - (side + 1) * 60}
        y={-420 + i * 10}
        stroke="black"
        fill="url(#my-cool-gradient) #447799"
      />
    ))}
    <text textAnchor="middle" y="-120" x={300 * side}>
      Player {playerName[side]} Cards in deck: {cards.length}
    </text>
  </g>
);}
export default Player;
