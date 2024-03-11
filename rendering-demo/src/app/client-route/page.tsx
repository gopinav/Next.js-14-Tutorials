"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./ImageSlider.css";

export default function ClientRoutePage() {
  return (
    <>
      <h1>Server Route</h1>
      <div className="image-slider-container">
        <Slider>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
          <div>
            <img src="https://picsum.photos/400/300" />
          </div>
          <div>
            <img src="https://picsum.photos/400/250" />
          </div>
          <div>
            <img src="https://picsum.photos/400/350" />
          </div>
        </Slider>
      </div>
    </>
  );
}
