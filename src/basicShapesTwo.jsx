import React from 'react';

const BasicShapesTwo = () => (
  <svg width="400px" height="600px" viewBox="-50 -75 100 150" style={{border: "solid thin red"}}>
    <defs>
      <pattern id="pattern" x="0" y="0" height="10" width="10"  patternUnits="userSpaceOnUse">
        <image href="meh.svg" height="10" width="10"/>
      </pattern>
      <linearGradient id="gradient" x2="1" y1="0.5" y2="0.5">
        <stop offset="0%" stop-color="rgb(0,255,0)" />
        <stop offset="50%" stop-color="rgb(255,0,0)" />
        <stop offset="100%" stop-color="rgb(255,255,0)" />
      </linearGradient>
      <filter id="blurMe">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
       </filter>
    </defs>

    <circle r="30" cy="-40" fill="black"/>
    <circle r="25" cy="-40" fill="url('#pattern')"/>

    <g transform="translate(-50,0)">
      <mask id="knockout-text">
        <rect width="100%" fill="#fff" x="0" y="0" />
        <text x="50%" y="60" fill="#999" font-family="impact" text-anchor="middle">Woooooooof</text>
      </mask>
      <rect width="100" height="60" fill="url('#gradient')" x="0" y="0" />
      <image  width="100%" href="soren.png" fill-opacity="1" mask="url(#knockout-text)" filter="url(#blurMe)" />
    </g>

    <g transform="translate(-50,50)">
      <mask id="mask2">
        <rect width="100%" fill="#000" x="0" y="0" />
        <text x="50%" y="25" fill="#fff" font-family="impact" text-anchor="middle">Woooooooof</text>
      </mask>
      <image  width="100%" href="soren.png" fill-opacity="1" mask="url(#mask2)" />
    </g>
  </svg>
)

export default BasicShapesTwo;
