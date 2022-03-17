import { FlareSharp, ImageSearch } from "@mui/icons-material";
import React, { useState } from "react";

import { Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import "./lightBox.scss";

const LightBox = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);

  const previousClick = (e) => {
    e.stopPropagation();
    if (currentSlide == 0) setCurrentSlide(images.length - 1);
    else setCurrentSlide(currentSlide - 1);
  };

  const nextClick = (e) => {
    e.stopPropagation();
    if (currentSlide == images.length - 1) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  const buttonStyle = {
    color: "black",
    background: "rgb(235,235,235,0.5)",
    "&:hover": {
      color: "#fff",
      background: "black",
    },
  };

  return (
    <div className="lightBox--container">
      <div className="images--container">
        {images.map((image, index) => (
          <img
            className={`image-${index}`}
            src={`${image}`}
            data-index={index}
            onClick={(e) => {
              setCurrentSlide(parseInt(e.target.dataset.index));
              setIsOpen(true);
            }}
          />
        ))}
      </div>

      {isOpen && (
        <div className="lightBox" onClick={() => setIsOpen(false)}>
          <div className="lightBox--content">
            <img
              src={images[currentSlide]}
              style={{ width: "100%" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </div>
          <Button
            sx={buttonStyle}
            className="btn-close"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </Button>
          <Button sx={buttonStyle} className="btn-prev" onClick={previousClick}>
            <ArrowBackIos />
          </Button>
          <Button sx={buttonStyle} className="btn-next" onClick={nextClick}>
            <ArrowForwardIos />
          </Button>
        </div>
      )}
      {/* {isOpen && (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Lightbox
            animationDisabled={true}
            mainSrc={images[currentSlide]}
            nextSrc={images[(currentSlide + 1) % images.length]}
            prevSrc={images[(currentSlide + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => {
              setCurrentSlide(
                (currentSlide + images.length - 1) % images.length
              );
            }}
            onMoveNextRequest={() => {
              setCurrentSlide((currentSlide + 1) % images.length);
            }}
          ></Lightbox>
        </div>
      )} */}
    </div>
  );
};

export default LightBox;
