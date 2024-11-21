import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../images/slide-img-1.png";
import Img2 from "../images/slide-img-2.png";
import Img3 from "../images/slide-img-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./learningSection.css";

// import required modules
import { Pagination } from "swiper/modules";
function LearningSlider() {
  return (
    <div className="learning-slider-wrapper">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="learning-slide">
            <div className="learning-slide-img">
              <img src={Img1} />
            </div>
            <p className="learning-slide-heading">Exercise 01</p>
            <p className="learning-slide-des">
              Watch guided videos to understand how to operate the brakes and
              perform the given actions.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="learning-slide">
            <div className="learning-slide-img">
              <img src={Img2} />
            </div>
            <p className="learning-slide-heading">Exercise 02</p>
            <p className="learning-slide-des">
              Play an interactive game to practice identifying and fixing faulty
              items using the brake system.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="learning-slide">
            <div className="learning-slide-img">
              <img src={Img3} />
            </div>
            <p className="learning-slide-heading">IQ Test</p>
            <p className="learning-slide-des">
              Engage in a fun and challenging game designed to test your
              problem-solving and critical-thinking skills.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="learning-slide">
            <div className="learning-slide-img">
              <img src={Img1} />
            </div>
            <p className="learning-slide-heading">Exercise 01</p>
            <p className="learning-slide-des">
              Watch guided videos to understand how to operate the brakes and
              perform the given actions.
            </p>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default LearningSlider;
