import React from "react";

import { usePhysics } from "./physics";
import Card from "./card";

const CardWithPhysics = ({ xStart, yStart, ...props }) => {
  const tableBounds = { x: 0, y: 0, width: 649, height: 450 };
  const cardBounds = { x: xStart, y: yStart, width: 120, height: 180 };
  const x = usePhysics({
    start: cardBounds.x,
    max: tableBounds.width - cardBounds.width,
    startVelocity: 0.1
  });
  const y = usePhysics({
    start: cardBounds.y,
    max: tableBounds.height - cardBounds.height,
    acceleration: .1,
    damper: 25
  });

  const cardPhysics = { ...cardBounds, x, y };
  return <Card cardPhysics={cardBounds} {...props} transform={`translate(${x}, ${y})`} />;
};

export default CardWithPhysics;
