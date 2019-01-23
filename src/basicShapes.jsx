import React from 'react';

const BasicShapes = () => (
  <svg width="400px" height="600px" viewBox="-50 -75 100 150" style={{border: "solid thin red"}}>

    <g id="basic-shapes" style={{fill: "#006791"}}>
      <polygon points="0,15 -10,0 10,0"></polygon>
      <rect x="15" y="0" width="15" height="15"></rect>
      <circle r="7.5" cx="-15" cy="7.5"></circle>
      <ellipse cx="-30" cy="7.5" rx="7.5" ry="5" />
    </g>

    <g id="basic-lines" style={{stroke: "#006791", fill: "transparent"}}>
      <line x1="-40" y1="-20" x2="40" y2="-25"/>
      <path d="M -40 20
                H 40
                V 30
                L -40 40
                A 15 5 0 0 0 40 40" />
    </g>

    <image href="meh.svg" height="10" width="10" x="-5"/>
    <text y="-40" textAnchor="middle">Sup?</text>
  </svg>
)

export default BasicShapes;
