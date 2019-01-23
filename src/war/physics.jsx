import { useEffect, useState } from 'react';

export const usePhysics = ({
  start,
  max,
  startVelocity = 0,
  acceleration = 0,
  damper = 0
}) => {
  const [renderX, setX] = useState(start);
  useEffect(() => {
    let interval,
      velocity = startVelocity,
      x = start;

    const tick = () => {
      x = Math.max(0, Math.min(max, x + velocity));
      velocity += acceleration;
      if (x === max || x === 0) {
        velocity = Math.min(0, damper - velocity);
        if (velocity == 0) clearInterval(interval);
      }
      setX(x);
    };

    interval = setInterval(tick, 100);
    return () => clearInterval(interval);
  }, []);
  return renderX;
};
