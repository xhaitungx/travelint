//https://www.npmjs.com/package/nuka-carousel

import React, { useImperativeHandle, useState, useEffect } from "react";
import NukaCarousel from "nuka-carousel";
import { Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Forward } from "@mui/icons-material";
import "./slider.scss";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  console.log("🚀 ~ file: Navbar.jsx ~ line 10 ~ Navbar ~ items", items);
  const numberItemsInSlide = 2;
  const numberOfSlide = Math.ceil(items.length / numberItemsInSlide);
  let slider = [];
  const createSlider = () => {
    while (items.length != 0) slider.push(items.splice(0, numberItemsInSlide));
  };

  console.log(
    "🚀 ~ file: Navbar.jsx ~ line 39 ~ Navbar ~ slideIndex",
    slideIndex
  );

  console.log(
    "🚀 ~ file: Navbar.jsx ~ line 46 ~ Navbar ~ numberOfSlide",
    numberOfSlide
  );

  createSlider();

  return (
    <NukaCarousel
      width="70%"
      height="20%"
      slidesToShow={1}
      dragging={false}
      slideIndex={slideIndex}
      afterSlide={(slideIndex) => setSlideIndex(slideIndex)}
      renderCenterLeftControls={({ previousSlide }) =>
        slideIndex ? (
          <Button onClick={previousSlide}>
            <ArrowBackIos />
          </Button>
        ) : (
          <Button onClick={previousSlide} disabled>
            <ArrowBackIos />
          </Button>
        )
      }
      renderCenterRightControls={({ nextSlide }) =>
        slideIndex == numberOfSlide - 1 ? (
          <Button onClick={nextSlide} disabled>
            <ArrowForwardIos />
          </Button>
        ) : (
          <Button onClick={nextSlide}>
            <ArrowForwardIos />
          </Button>
        )
      }
    >
      {slider.map((items) => (
        <div className="slide">
          {items.map((item) => (
            <h1>{item}</h1>
          ))}
        </div>
      ))}
    </NukaCarousel>
  );
};

export default Slider;
