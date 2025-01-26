import React from "react";
import image1 from "/homeIMG1.jpg";
import image2 from "/homeIMG2.jpg";
import image3 from "/homeIMG3.jpg";
import Header from "./Header";
import Home from "./Home";

const BackgroundCarousel = ({ scrollInfo }) => {
  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative" }}
      id="home"
    >
      <Header scrollInfo={scrollInfo} />
      <div
        id="backgroundCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#backgroundCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#backgroundCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#backgroundCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        {/* Carousel Inner */}
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{
              backgroundImage: `url(${image1})`,
            }}
          >
            <Home classname="image1home" />
          </div>
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${image3})`,
              backgroundPosition: "50% 18%",
            }}
          >
            <Home classname="image2home" />
          </div>
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${image2})`,
              backgroundPosition: "50% 38%",
            }}
          >
            <Home classname="image3home" />
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev my-auto"
          style={{ height: "150px" }}
          type="button"
          data-bs-target="#backgroundCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next my-auto"
          style={{ height: "150px" }}
          type="button"
          data-bs-target="#backgroundCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BackgroundCarousel;
