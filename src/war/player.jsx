import React from "react";
import _ from "lodash";

import Card from "./card";

const playerName = {
  [-1]: "1",
  1: "2"
};

const Player = ({ cards, side, win, numCardsToLose, cardPhysics }) => (
  <g>
    {cards.slice(0, numCardsToLose).map((card, i) => (
      <Card
        card={i % 2 == 0 ? card : null}
        transform={`translate(${300 * side}, ${i * 20})`}
        cardPhysics={cardPhysics}
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
);
export default Player;
