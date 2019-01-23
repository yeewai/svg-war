import React from "react";

const suitName = {
  0: "diamond",
  1: "club",
  2: "heart",
  3: "spade"
};

const cardRankName = {
  1: "Ace",
  11: "Jack",
  12: "Queen",
  13: "King"
};

const Card = ({ card, ...props }) =>
  !card ? (
    <rect {...props}
      x="-60"
      y="-90"
      width="120"
      height="180"
      stroke="black"
      fill="url(#my-cool-gradient) #447799"
    />
  ) : (
    <g {...props}>
      <rect
        className="cardOutline"
        x="-60"
        y="-90"
        width="120"
        height="180"
        stroke="#006791"
        fill="white"
      />
      <use
        href={`card_suits.svg#${suitName[card.suit]}`}
        transform="scale(0.25) translate(-180, -50)"
        fill={card.suit % 2 == 0 ? "red" : "black"}
      />
      <text y="-20" textAnchor="middle" fontSize="24px">
        {cardRankName[card.value + 1] || card.value + 1}
      </text>
    </g>
  );

export default Card;
