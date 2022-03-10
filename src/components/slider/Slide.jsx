import React from "react";

const Slide = ({ items = [] }) => {
  return (
    <div className="Slider">
      {items.map(() => {
        <h1>{items}</h1>;
      })}
    </div>
  );
};

export default Slide;
