import React from "react";

const CurveArrow = () => {
  return (
    <div className="curve-arrow">
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 10 C 50 150, 100 150, 100 100 
        S 200 50, 200 100 
        S 370 120, 346 200"
          fill="none"
          stroke="orange"
          strokeWidth="3"
          strokeDasharray="10,10" // Makes the line dotted
        />
        <polygon points="350,200 342,194 342,216" fill="orange" />
      </svg>
    </div>
  );
};

export default CurveArrow;
